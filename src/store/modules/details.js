import {detailsTopic,asyncDetails} from '../type'
import ajax from '../../components/ajax';

const state = {

    //详情数据
    detailsTopicInit:[],
    success:true
}
const  mutations = {
    [detailsTopic](state,datas){
        state.detailsTopicInit = datas.data
        state.success = datas.success
        if(!state.detailsTopicInit.length){
            state.success = true
        }
    }
}
const actions = {
    async [asyncDetails]({commit},id){
        const result = await ajax('https://cnodejs.org/api/v1/topic/'+id)
        commit(detailsTopic,result)
        document.title = result.data.title
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}