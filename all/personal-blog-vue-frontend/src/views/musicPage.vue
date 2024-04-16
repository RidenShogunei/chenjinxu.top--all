<template>
    <div class="detile">
        <div class="music">
            <div class="title">This is a random music player</div>
            <div class="name">{{ name }}</div>
            <br>
            <div class="album">
                <img :src="pictureurl" alt="专辑封面">
            </div>
            <br>
            <audio class="player" :key="musicurl" controls>
                <source :src="musicurl" type="audio/mpeg">
            </audio>
            <br>
            <div class="again" @click="rechange">
                再来十首
            </div>
        </div>
        <div class="list">
            <div v-for="(song, index) in musiclist" :key="index" class="musicname" @click="changesong(index)">
                <p>{{ song.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import interact from 'interactjs';
export default {
    data() {
        return {
            musiclist: [{
                musicurl: '',
                pictureurl: '',
                name: '',
            }],
            name: '',
            pictureurl: '',
            musicurl: '',
            takesongThrottled: null,
        }
    },
    methods: {
        throttle(func, delay) {
            let lastTime = 0;
            return function () {
                let now = new Date();
                if (now - lastTime > delay) {
                    func.apply(this, arguments);
                    lastTime = now;
                }
            }
        },
        rechange() {
            this.takesongThrottled();
        },
        changesong(index) {
            this.name = this.musiclist[index].name;
            this.pictureurl = this.musiclist[index].pictureurl;
            this.musicurl = this.musiclist[index].musicurl;
        },
        fresh(music) {
            this.$store.commit('changemusiclist', music);
            if (music.length > 0) {
                this.name = music[0].name;
                this.pictureurl = music[0].pictureurl;
                this.musicurl = music[0].musicurl;
            }
            console.log(this.$store.state.musiclist);
        },
        takesong() {
            this.musiclist = [];
            let requests = []; // 存放所有请求的数组

            for (let i = 0; i < 10; i++) {
                let request = axios.get('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json')
                    .then(response => {
                        let song = {
                            musicurl: response.data.data.url,
                            pictureurl: response.data.data.picurl,
                            name: response.data.data.name,
                        };
                        this.musiclist.push(song);// 将音乐信息加入到 musiclist 中
                    })
                    .catch(err => {
                        console.log(err);
                    });
                requests.push(request); // 将请求添加到请求列表中
            }

            Promise.all(requests) // 当所有请求都完成时
                .then(() => this.fresh(this.musiclist)); // 执行更新操作
        },
        setDraggable() {
            interact('.music').draggable({
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                autoScroll: true,
                // 提供拖动完成后的反弹效果。
                onmove: this.dragMoveListener,
            });
        },
        dragMoveListener(event) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
                target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        },
    },
    mounted() {
        this.takesong();
        this.setDraggable();
    },
    created() {
        this.takesongThrottled = this.throttle(this.takesong, 1000);
    },
}
</script>

<style lang="less">
.detile {
    /* 之前的样式不变 */
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.music {
    height: 50%;
    width: 30%;
    background-color: brown;
    opacity: 0.8;
    padding-bottom: 10px;
    margin: 10px;
    display: flex;
    /* 添加flex属性 */
    align-items: center;
    /* 添加align-items属性 */
    flex-direction: column;
}

.title {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    font-size: 37px;
    text-align: center;
    color: #000000;
    justify-content: center;
    display: flex;
}

.name {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    font-size: 30px;
    text-align: center;
    color: #e1dede;
}

.album {
    display: flex;
    justify-content: center;
    width: 35%;
    height: 35%;
    margin: 0 auto;
    /* 添加自动外边距 */
}

.player {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    /* 添加自动外边距 */
}

.list {
    height: 50%;
    width: 20%;
    background-color: brown;
    opacity: 0.8;
    padding-bottom: 10px;
    overflow-y: scroll;
}

.musicname {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    font-size: 25px;
    color: #000000;
    margin: 10px 20px;
    text-align: center;
    transition: background-color 0.5s ease, font-size 0.5s ease, margin 0.5s ease;
    /* 添加了逗号 */
}

.musicname:hover {
    /* 修改为正确的hover选择器 */
    font-size: 30px;
    color: #b0a6a6;
    margin: 0 10px;
    text-align: center;
    background-color: red;
}

.again {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    font-size: 25px;
    color: #ffffff;
    margin: 20px 20px;
    text-align: center;
    border: #ffffff solid 1px;
    width: 60%;
    justify-content: center;
}
</style>