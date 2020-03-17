# copynode

    CNode：Node.js专业中文社区 提供的数据接口  https://cnodejs.org/api

## 案列分析

### 项目的使用

    npm install

### 本案例使用到的插件

1. Vue路由

    安装时选择路由就好

2. element-ui饿了么开发的组件库

    安装指令：npm install element-ui --save

3. NProgress是页面跳转是出现在浏览器顶部的进度条

    安装指令：$ npm install --save nprogress 或者 $ yarn add nprogress

    //用法：NProgress.start();
            NProgress.done();

4. vuex状态管理库，存储数据和方法

     安装指令：npm i vuex --save

5. axios请求数据

    安装指令：npm install axios --save

### 项目的整体结构

build文件存储关于webpack配置文件的内容，根据需求进行更改内部的配置文件

config文件夹用于定义开发环境和生产环境所需要的一些设置

node_modules文件夹存放项目的依赖包

src文件夹存放一些我们项目中使用到的组件和静态资源（css样式、图片）

    assets文件夹存放静态资源
    
        image存放静态图片
    
        style存放css样式文件夹
    
            reset.css初始化样式文件
            responsive.css响应式项目文件
    
    components文件夹存放组件
    
        about关于组件
    
        ajax文件夹请求数据(高度封装axios请求的文件)
    
        api接口组件
    
        common存放公共组件
    
        details详情组件
    
        home首页组件
    
        new新手入门组件
    
        users用户详情组件
    
        main-footer.vue项目脚部组件
    
        main-header.vue项目头部组件
    
    router定义路由相关的配置
    
    store存放数据和方法
    
    App.vue应用主组件
    
    main.js入口文件

package.json项目配置依赖包文件

README.md 项目介绍


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
