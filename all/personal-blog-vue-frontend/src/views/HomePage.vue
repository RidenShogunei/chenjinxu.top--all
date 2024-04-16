<template>
  <div class="home" @click="navigate">
    <h1>{{ message }}</h1>
    <div v-if="loading">Loading...</div> <!-- 加载指示器 -->
    <h2>Press anywhere to enter</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      loading: true, // 添加这一行
    };
  },
  methods: {
    navigate() {
      // 跳转
      this.$router.push('/mainpage');
    }
  },
  created() {
    // 在组件创建时执行的逻辑
    this.$axios.get('https://api.uomg.com/api/rand.qinghua')
      .then(response => {
        // 处理返回的数据
        console.log(response.data);
        this.message = response.data.content;
        this.loading = false;  // 
      })
      .catch(error => {
        // 处理错误
        this.loading = false;  // 
        console.error(error);
      });

 

  }
};
</script>

<style scoped>
.home {
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

.home h1 {
  font-size: 3em;
  color: aliceblue;
  /* 为 h1 添加底部边距 */
  margin-bottom: 20px;
}

.home h2 {
  /* 为 h2 添加样式 */
  font-size: 3em;
  color: rgb(230, 52, 21);
}
</style>