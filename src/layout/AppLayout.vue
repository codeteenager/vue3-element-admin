<template>
    <el-container>
        <el-aside>
            <AppMenu />
        </el-aside>
        <el-container>
            <el-header><Navbar/></el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
import { Navbar } from './components'
</script>
<style scoped>
.el-container {
    height: 100vh;
}
.el-header{
    padding: 0;
}

.el-aside{
    width: auto;
}

</style>
