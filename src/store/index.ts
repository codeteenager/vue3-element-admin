import { createStore, type Store, useStore as baseUseStore } from 'vuex'
import { type InjectionKey } from 'vue'

export interface State {
  count: number
  foo: string
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 定义自己的useStore组合式函数
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useStore () {
  return baseUseStore(key)
}
