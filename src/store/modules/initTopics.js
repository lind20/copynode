import ajax from '../../components/ajax/index'

import {init,asyncInit,handleSizeChange,handleCurrentChange,date} from '../type'

export default {
    namespaced: true,
    state:{
        //页面初始化数据
        initTopics:[],
        //数据是否加载完成
        success:true,
        //请求文章的类型
        tab:'all',
        //请求每页条数
        limit:10,
        //请求页数
        page:1

    },
    getters:{
        [date](){
            return (item)=> item.split('T')[0]+' '+item.split('T')[1].split('.')[0]
        }
    },
    mutations:{
        [init](state,data){
            state.initTopics = data.data;
            state.success = !data.success
            if(!state.initTopics.length){
                state.success =true
            }
        },
        //每页多少条
        [handleSizeChange](state, val, tab){
            console.log(val,tab)
            state.limit = val
            state.tab = tab
        },
        //当前页数
        [handleCurrentChange](state , val, tab){
            state.page = val
            state.tab = tab
            console.log(state.page,state.tab)
        }
    },
    actions:{
        async [asyncInit]({commit,state},tab){
            // const result = await ajax(`https://cnodejs.org/api/v1/topics?tab=${tab || state.tab}&page=${state.page}&limit=${state.limit}`)
            const result = await ajax(`https://cnodejs.org/api/v1/topics?tab=${tab || state.tab}&page=${state.page}&limit=${state.limit}`)
            // const result = await ajax(`https://cnodejs.org/api/v1/topics?tab=${state.tab || tab}&limit=${state.limit}&page=${state.page}`)
            commit(init,result)
        }
    }
}