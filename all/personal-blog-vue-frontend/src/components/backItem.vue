<template>
    <div>
        <el-button @click="goback">返回上一层</el-button>
    </div>
</template>

<script setup>
import router from "@/router"
const goback = () => {
    router.go(-1);
}


</script>