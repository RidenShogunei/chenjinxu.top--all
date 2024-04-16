<template>
<div class="show">
    
</div>
</template>

<script lang="ts" setuup>
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
