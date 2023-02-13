import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.join(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        // additionalData:'@import "@/styles/"'
      }
    }
  },
  server:{
    proxy:{
      '/api':{
        //代理的目标地址
        target:'http://www.baidu.com',
        //代理服务会把origin修改为目标地址
        changeOrigin: true,
        rewrite: (path)=>path.replace(/^\/api/,' ')
      }
    }
  }
})
