import {userInfo,asyncUserInfo} from '../type'
import ajax from '../../components/ajax';

const state = {
    userinfo: [],
}
const mutations = {
    [userInfo](state,data){
        state.userinfo = data.data
    }
}
const actions = {
    async [asyncUserInfo]({commit},loginname){
        const result = await ajax('https://cnodejs.org/api/v1/user/'+loginname)
        // console.log(result)
        document.title = `@${result.data.loginname}的个人主页`
        commit(userInfo,result)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}