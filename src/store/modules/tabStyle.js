import {tagColor,tagText} from '../type'
export default {
    namespaced: true,
    state:{
        tabName: {
            all: '全部',
            good: '精华',
            ask: '问答',
            share: '分享',
            job: '招聘',
            dev: '测试'
          }
    },
    getters:{
        [tagColor](){
            return (item)=>item.top ? 'success' : ( item.good ? 'danger' : 'warning' )
        },
        [tagText](state){
            return (item,id)=>item.top ? '置顶' : (item.good ? '精华' : state.tabName[item.tab]?state.tabName[item.tab]:'分享')
        }
    }
}