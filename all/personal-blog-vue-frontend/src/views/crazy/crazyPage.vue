<template>
  <div class="crazy">
    <div class="yuanshen" :class="{ 'scale-up': isScaled }" @click="togglePlay">
      <video ref="myVideoRef" width="320" height="240">
        <source src="../../../public/yuanshen.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let playState = ref(false);
let myVideoRef = ref(null); // 定义一个ref
let isScaled = ref(false);
const togglePlay = () => {
  isScaled.value = !isScaled.value;  
  const myVideo = myVideoRef.value; // 使用.value获取ref关联的元素
  if (myVideo) { // 检查元素是否存在
    if (playState.value) {
      myVideo.pause();
    } else {
      myVideo.play();
    }
    playState.value = !playState.value;
  }
};
</script>

<style scoped>
.crazy {
  /* 之前的样式不变 */
  background-image: url('../../assets/kafuka.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* 使用 flexbox 将内容居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction 为 column 可以使 h1 和 h2 垂直排列 */
  flex-direction: column;
}

.yuanshen {
  /* 定义开始时的状态 */
  transform: scale(1); 
}

.yuanshen.scale-up {
  animation: scaleUp 16s forwards;
}
/* 使用关键帧定义动画 */
@keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.5) rotate(30deg) translateX(50px) translateY(30px);
  }
  20% {
    transform: scale(2) rotate(60deg) translateX(-100px) translateY(-60px);
  }
  30% {
    transform: scale(2.5) rotate(90deg) translateX(150px) translateY(90px);
  }
  40% {
    transform: scale(3) rotate(120deg) translateX(-200px) translateY(-120px);
  }
  50% {
    transform: scale(3.5) rotate(150deg) translateX(250px) translateY(150px);
  }
  60% {
    transform: scale(4) rotate(180deg) translateX(-300px) translateY(-180px);
  }
  70% {
    transform: scale(4.5) rotate(210deg) translateX(350px) translateY(210px);
  }
  80% {
    transform: scale(5) rotate(240deg) translateX(-400px) translateY(-240px);
  }
  90% {
    transform: scale(5.5) rotate(270deg) translateX(450px) translateY(270px);
  }
  100% {
    transform: scale(4) rotate(360deg) translateX(0px) translateY(0px);
  }
}
</style>