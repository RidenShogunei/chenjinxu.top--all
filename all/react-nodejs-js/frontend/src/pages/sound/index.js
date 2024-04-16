import React, { useRef, useState } from 'react';
import { Button, Card, message } from 'antd';
import { AudioOutlined, UploadOutlined } from '@ant-design/icons';
import style from './index.module.css'
import AudioAnalyser from 'react-audio-analyser';
import api from '../../api/sound'; //你的音频文件API模块

const Sound = () => {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const fileName = `${year}${month}${day}_${hours}${minutes}${seconds}.wav`;
    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorderRef.current = new MediaRecorder(stream);
                audioChunksRef.current = [];

                mediaRecorderRef.current.addEventListener("dataavailable", event => {
                    console.log("dataavailable event has been triggered");
                    audioChunksRef.current.push(event.data);
                });
                mediaRecorderRef.current.start(10);
                setRecording(true);
            }).catch(err => {
                message.error('获取音频流失败');
                console.log(err);
            });
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setRecording(false);
        const audioBlob = new Blob(audioChunksRef.current);
        console.log("audio data", audioChunksRef.current, audioBlob)
        const audioURL = URL.createObjectURL(audioBlob);
        console.log("audio url", audioURL)
        setAudioURL(audioURL);
    };
    // 上传文件
    const uploadAudio = async () => {
        const uid = localStorage.getItem('uid'); // 请替换为实际的uid
        const file = new File(audioChunksRef.current, fileName, { type: 'audio/wav' });
        const response = await api.sendAudio(uid, file);
        if (response.error) {
            message.error('上传失败');
        } else {
            message.success('上传成功');
        }
    };



    const handleButtonClick = () => {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    };
    return (
        <>
            <div className={style.main}>
                <Card>
                    <AudioAnalyser
                        audioSrc={audioURL}
                        visualSetting="sinewave" // 使用正弦波形状
                        width={500}
                        height={200}
                        className={style.show}  // 在此处添加你的 className
                    />
                    <div className={style.bot}>
                        <Button
                            type="primary"
                            icon={<AudioOutlined />}
                            onClick={handleButtonClick}
                        >
                            {recording ? "停止录音" : "开始录音"}
                        </Button>
                        <Button
                            icon={<UploadOutlined />}
                            onClick={uploadAudio}
                        >
                            上传音频
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Sound;