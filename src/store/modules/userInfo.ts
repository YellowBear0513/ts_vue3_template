import { ActionContext } from '@/store/utils'
import { UserInfo, SystemInfo } from '@/store/interface/userInfo'

const createState = () => {
  const store = {
    token: '',
    userInfo: {} as UserInfo,
    systemInfo: {} as SystemInfo
  }
  return store
}
export type userInfoState = ReturnType<typeof createState>

const getters = {
  getToken: (state: userInfoState): string => {
    return `${state.token}`
  },
  getUserInfo: (state: userInfoState): UserInfo => {
    return state.userInfo
  },
  getSystemInfo: (state: userInfoState): SystemInfo => {
    return state.systemInfo
  }
}

const mutations = {
  updateToken: (state: userInfoState, payload: string): void => {
    state.token = payload
  },
  updateUserInfo(state: userInfoState, payload: UserInfo) {
    state.userInfo = { ...state.userInfo, ...payload }
  },
  updateSystemInfo(state: userInfoState, payload: SystemInfo) {
    state.systemInfo = { ...state.systemInfo, ...payload }
  }
}

const actions = {
  updateToken: (
    { commit }: ActionContext<userInfoState, typeof mutations>,
    payload: string
  ): void => {
    commit('updateToken', payload)
  },
  updateUserInfo: (
    { commit }: ActionContext<userInfoState, typeof mutations>,
    payload: UserInfo
  ): void => {
    commit('updateUserInfo', payload)
  },
  updateSystemInfo: (
    { commit }: ActionContext<userInfoState, typeof mutations>,
    payload: SystemInfo
  ): void => {
    commit('updateSystemInfo', payload)
  }
}

export default {
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
}
