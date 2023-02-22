# Vue 3 + TypeScript + Vite + Pinia

## 初始化Git仓库
```shell
git init
git add .
git commit -m "init"
git remote add origin 远程仓库地址
git push -u origin master
```

## 目录结构
```js
├─public                   #不需要打包的静态资源
│     favicon.ico
├─src
│     ├─api                #后台API接口封装
│     ├─assets             #需要打包的静态资源
│     ├─components         #公共组件
│     ├─composables        #通用的组合式API
│     ├─layout             #页面布局模板
│     ├─plugins            #插件
│     ├─router             #路由
│     ├─store              #pinia存储
│     ├─styles             #样式
│     │  └─spec            #全局通用样式
│     ├─utils              #工具模块
│     ├─views              #路由页面
│     ├─App.vue            #根组件
│     ├─main.ts            #入口模块
│     └─vite-env.d.ts           
├─.gitignore
├─README.md
├─index.html
├─package-lock.json

```

