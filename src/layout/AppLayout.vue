<template>
    <el-container>
        <el-aside>
            <AppMenu />
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>
<style scoped>
.el-container {
    height: 100vh;
}

.el-aside{
    width: auto;
}
</style>
