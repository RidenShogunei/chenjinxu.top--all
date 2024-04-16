<template>
    <div class="main">
        <div class="box-card">
            <div class="word"><br>欢迎,朋友!既然你访问了这个网站,那代表着,你收到了我的邀请.总之,这个网站是个我空闲时间写着玩的项目,可能会有些bug,不过我在慢慢的完善它.所以,敬请期待!<br> <span class="wordchange" @click="start">NOW WE CAN
                    START=====></span></div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        start() {
            this.$router.push('/navigate');
        }
    }
}
</script>

<style scoped>
.main {
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
    /* 使用 flexbox 将内容居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction 为 column 可以使 h1 和 h2 垂直排列 */
    flex-direction: column;
}

.box-card {
    height: 50%;
    width: 50%;
    background-color: rgba(139, 41, 41, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    /* 添加垂直居中 */
    padding: 20px 20px;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    /* 添加背景色过渡效果 */
}

.word {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    color: rgb(255, 255, 255);
    font-size: 40px;
}

.wordchange {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    color: rgb(15, 13, 13);
    font-size: 40px;
    opacity: 0;
    /* 设置初始透明度为 0 */
    transition: opacity 0.5s ease-in-out;
    /* 添加透明度的过渡效果 */
}

:hover.box-card {
    height: 50%;
    width: 50%;
    background-color: rgba(139, 41, 41, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    /* 添加垂直居中 */
    padding: 20px 20px;
}

:hover.wordchange {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    color: rgb(255, 0, 0);
    font-size: 40px;
    opacity: 1;
    /* 设置初始透明度为 0 */
    transition: opacity 0.5s ease-in-out;
    /* 添加透明度的过渡效果 */
}

@media only screen and (max-width: 768px) {
   /* 手机端样式 */
   .wordchange {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    color: rgb(255, 0, 0);
    font-size: 40px;
    opacity: 1;
    /* 设置初始透明度为 0 */
    transition: opacity 0.5s ease-in-out;
    /* 添加透明度的过渡效果 */
}
   /* 更多样式规则 */
}
</style>