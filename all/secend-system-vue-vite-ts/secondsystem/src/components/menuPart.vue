<template>
    <div class="menu">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
        <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
            :inline-collapsed="state.collapsed" :items="items" @select="handleSelect" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons-vue";

// 在 setup 函数中使用 Vuex 的 store
const store = useStore();

const handleSelect = ({ key }: { key: string }) => {
    store.commit('updatePage', key);
};
const state = reactive({
    collapsed: false,
    selectedKeys: ["1"],
    openKeys: ["sub1"],
    preOpenKeys: ["sub1"],
});
const items = reactive([
    {
        key: "1",
        label: "原神文本搜索",
        title: "原神文本搜索",
    },

    {
        key: "sub1",
        label: "铁道区",
        title: "铁道区",
        children: [
            {
                key: "2",
                label: "星铁文本搜索",
                title: "星铁文本搜索",
            },
            {
                key: "3",
                label: "星穹铁道账号查询",
                title: "星穹铁道账号查询",
            },
        ],
    },
    {
        key: "4",
        label: "股票展示",
        title: "股票展示",
    },
]);
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    }
);
const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
    state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>

<style scoped></style>
