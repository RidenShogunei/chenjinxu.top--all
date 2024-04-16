<template>
    <div class="enter">
            <span class="word">欢迎来到扫雷游戏,请输入您需要的游戏标准</span>
            <div class="input-line">
                <span class="word">行数:</span>
                <input v-model="rows" type="number" placeholder="行数">
            </div>
            <div class="input-line">
                <span class="word">列数:</span>
                <input v-model="columns" type="number" placeholder="列数">
            </div>
            <div class="input-line">
                <span class="word">雷数:</span>
                <input v-model="mines" type="number" placeholder="雷的数量">
            </div>

            <button class="button" @click="startGame">开始游戏</button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            rows: null,
            columns: null,
            mines: null
        };
    },
    methods: {
        startGame(){
            if(this.rows>13||this.columns>13||this.rows*this.columns<this.mines){
                alert("您输入的数据有问题,请输出正确的数据(行和列均小于13,雷的数量不得大于格子的数量!!)");
                this.rows=null;
                this.columns=null;
                this.mines=null;
            }
            else{
                this.navigate();
            }
        },
        navigate() {
            // 跳转
            this.$router.push({ path: '/game', query: { rows: this.rows, columns: this.columns, mines: this.mines } });
        }
    },
    created() {
    }
};
</script>

<style scoped>
.enter {
    /* 之前的样式不变 */
    background-image: url('../../assets/starhunter.png');
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
    flex-direction: column;
}



.word {
    font-size: 3em;
    color: aliceblue;
    /* 为 h1 添加底部边距 */
    margin-bottom: 20px;
}

.enter input {
    display: block;
    margin: 10px auto;
    padding: 10px;
    font-size: 18px;
    border: 2px solid lightblue;
    border-radius: 5px;
    outline: none;
}

.enter input:focus {
    box-shadow: 0 0 5px lightblue;
}

.input-line {
    display: flex;
    /* 这将使得 .word 和 input 在同一行 */

}

.button{
    padding: 20px;
    text-align: center;
    background-color: bisque;
    color: #ad2e2e;
    font-size: 20px;
}
</style>