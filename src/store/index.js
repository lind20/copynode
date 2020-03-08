import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import initTopics from './modules/initTopics'
import tabStyle from './modules/tabStyle'
//标签样式

export default new Vuex.Store({
    modules:{
        initTopics,
        tabStyle,
    }
})