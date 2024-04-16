<template>
    <a-card class="com">
        <a-carousel>
            <div v-for="(datas, index) in data" :key="index" class="detile">
                <a-descriptions title="展示角色信息">
                    <a-descriptions-item label="名称">{{ datas.name }}</a-descriptions-item>
                    <a-descriptions-item label="武器">{{ datas.equipment.name }}</a-descriptions-item>
                    <a-descriptions-item label="属性">{{ datas.damage_type }}</a-descriptions-item>
                    <a-descriptions-item label="简介">{{ datas.desc }}</a-descriptions-item>
                    <a-descriptions-item label="等级">
                        {{ datas.level }}
                    </a-descriptions-item>
                </a-descriptions>
            </div>
        </a-carousel>
    </a-card>
</template>

<script lang="ts" setup>
const store = useStore();
const data = computed(() => {
    if (store.state.response && Array.isArray(store.state.response.displayAvatars)) {
        return store.state.response.displayAvatars;
    } else {
        return [{
            name: "例子用户",
            equipment: {
                name: "exampleEquipment"
            },
            damage_type: "雷电",
            desc: "自称「巡海游侠」的旅人",
            level: "70",
        }];
    }
});
</script>

<style scoped>
.com{
    background-color: rgba(0, 0, 0, 0.5);
}

.detile {
    margin: 1% 1%;
}
</style>