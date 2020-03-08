import ajax from '../../components/ajax/index'

import {init,asyncInit} from '../type'

export default {
    namespaced: true,
    state:{
        //页面初始化数据
        initTopics:[],
        //数据是否加载完成
        success:true,
        //请求文章的类型
        tab:'all',
        limit:10,
        page:1

    },
    getters:{

    },
    mutations:{
        [init](state,data){
            state.initTopics = data.data;
            state.success = !data.success
            if(!state.initTopics.length){
                state.success =true
            }
        }
    },
    actions:{
        async [asyncInit]({commit,state},tab){
            const result = await ajax(`https://cnodejs.org/api/v1/topics?tab=${tab || state.tab}&page=${state.page}&limit=${state.limit}`)
            // const result = await ajax(`https://cnodejs.org/api/v1/topics?tab=${state.tab || tab}&limit =${state.limit}&paeg=${state.paeg}`)
            console.log(result)
            commit(init,result)
        }
    }
}