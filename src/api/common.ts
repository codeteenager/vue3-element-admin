/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { type LoginInfo } from './types/common'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/promise-function-async
export const getLoginInfo = () => {
  return request<LoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}
