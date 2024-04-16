<template>
    <div class="end" @click="navigate">
      YOU LOSE
      <br>
      PTESS ANYWHERE
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
        this.$router.push('/enter')
      }
    },
    created() {
     
    }
  };
  </script>
  
  <style scoped>
  .end {
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
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 102px;
    color:rgb(244, 240, 240);
  }
  
  </style>