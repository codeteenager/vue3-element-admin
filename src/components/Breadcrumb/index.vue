<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { compile } from 'path-to-regexp'
import { ref, watch } from 'vue'
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router'

const levelList = ref<RouteLocationMatched[]>([])
const router = useRouter()
const route = useRoute()

watch(() => route.path, (path) => {
  if (path.startsWith('/redirect/')) {
    return
  }
  getBreadcrumb()
})

function getBreadcrumb () {
  // only show routes with meta.title
  let matched: any[] = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]

  if (!isDashboard(first)) {
    matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
  }

  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}

function handleLink (item:RouteLocationMatched) {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect as string)
    return
  }
  router.push(pathCompile(path))
}

function isDashboard (route: RouteLocationMatched) {
  const name = route && route.name
  if (!name) {
    return false
  }
  return name.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

function pathCompile (path:string) {
  const { params } = route
  const toPath = compile(path)
  return toPath(params)
}

</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
