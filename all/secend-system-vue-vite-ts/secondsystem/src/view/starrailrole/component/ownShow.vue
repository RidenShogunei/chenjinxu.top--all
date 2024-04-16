<template>
    <a-card class="com">
        <a-descriptions title="助战角色信息">
            <a-descriptions-item label="名称">{{ data.name }}</a-descriptions-item>
            <a-descriptions-item label="武器">{{ data.equipment.name }}</a-descriptions-item>
            <a-descriptions-item label="属性">{{ data.damage_type }}</a-descriptions-item>
            <a-descriptions-item label="简介">{{ data.desc }}</a-descriptions-item>
            <a-descriptions-item label="等级">
                {{ data.level }}
            </a-descriptions-item>
        </a-descriptions>
    </a-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const data = computed(() => {
    if (store.state.response && typeof store.state.response === 'object' &&
        store.state.response.assistAvatar && typeof store.state.response.assistAvatar === 'object') {
        return store.state.response.assistAvatar;
    } else {
        return {
            name: "exampleUser",
            equipment: {
                name: "exampleUser"
            },
            damage_type: "Thunder",
            desc: "自称「巡海游侠」的旅人",
            level: "70",
        };
    }
});
</script>

<style scoped>
.com {
    background-color: rgba(69, 62, 26, 0.5);
}

</style>