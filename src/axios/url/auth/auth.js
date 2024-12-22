import { base1 } from '@/axios/url/prefix'

// 登入
export const userUrl = {
  login: base1 + '/login',
  reset_password: base1 + '/reset_password',
}

// example const { data } = await api.post(userUrl.login, form);
