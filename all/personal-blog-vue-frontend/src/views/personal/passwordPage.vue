<template>
    <div class="password">
        <el-input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="请输入密码" class="password-input">
          <template #prepend>
            <el-icon>lock</el-icon>
          </template>
          <template #append>
            <el-button icon="el-icon-view" @click="showPassword = !showPassword">{{ showPassword ? '隐藏密码' : '显示密码' }}</el-button>
          </template>
        </el-input>
        <el-button type="primary" class="submit-btn" @click="submitPassword">提交</el-button>
    </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

let password = ref("");
let showPassword = ref(false);

// 提交密码的方法
function submitPassword() {
  // 这里你可以添加其他的逻辑，比如发送请求验证密码 
  if(password.value === 'chenjinxu2003'){
    console.log("密码正确");
    // 你可以在这里跳转到 'person' Page
    router.push('person')
  } else {
    console.log("密码错误");
  }
}
</script>

<style scoped>
.password {
    /* 之前的样式不变 */
    background-image: url('../../assets/password.png');
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.password-input {
  width: 300px;
  margin-bottom: 20px;
}
.submit-btn {
  width: 300px;
}
</style>