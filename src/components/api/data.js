const api = [
    {
        title:'主题',
        apiContent:[
            {
                small_title: 'get /topics 主题首页',
                content:`
                    <p>接收 get 参数</p>
                    <ul style="line-height:2em;">  
                        <li>page <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">Number</span> 页数</li>
                        <li>tab <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">String</span> 主题分类。目前有 <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">good</span> <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">ask</span> <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">share</span> <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">job</span></li>
                        <li>limit <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">Number</span> 每一页的主题数量</li>
                        <li>mdrender <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">String</span> 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p>示例：<a style="color:#ffd04b;" href="https://cnodejs.org/api/v1/topics">/api/v1/topics</a></p>
                `
            },
            {
                small_title: 'get /topic/:id 主题详情',
                content:`
                    <p>接收 get 参数</p>
                    <ul style="line-height:2em;">
                        <li>mdrender <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">String</span> 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                        <li style="line-height:30px;">accesstoken <span style="font-size:12px;background-color:#eee;padding:3px 5px;border-radius:5px;">String</span> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
                    </ul>
                    <p>示例：<a style="color:#ffd04b;" href="https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
                `
            }
        ]
        
    },
    {
        title:'主题收藏',
        apiContent:[
            {
                small_title: 'post /topic_collect/collect 收藏主题',
                content: `
                    <p>接收 post 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题的id</li>
                    </ul>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre style="background-color:#eee;padding:5px 10px;"><code>{"success": true}</code></pre>
                `
            },
            {
                small_title: 'post /topic_collect/de_collect 取消主题',
                content: `
                    <p>接收 post 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题的id</li>
                    </ul>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre style="background-color:#eee;padding:5px 10px;"><code>{"success": true}</code></pre>
                `
            },
            {
                small_title: 'get /topic_collect/:loginname 用户所收藏的主题',
                content:`
                    <p>示例：<a style="color:#ffd04b;" href="https://cnodejs.org/api/v1/topic_collect/alsotang">/api/v1/topic_collect/alsotang</a></p>
                `
            }
        ]
    },
    {
        title:'用户',
        apiContent:[
            {
                small_title: 'get /user/:loginname 用户详情',
                content:`
                    <p>示例：<a style="color:#ffd04b;" href="https://cnodejs.org/api/v1/user/alsotang">/api/v1/user/alsotang</a></p>
                `
            },
            {
                small_title: 'post /accesstoken 验证 accessToken 的正确性',
                content:`
                    <p>接收 post 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String 用户的 accessToken</li>
                    </ul>
                    <p style="margin-bottom:20px;">如果成功匹配上用户，返回成功信息。否则 403。</p>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre style="background-color:#eee;padding:5px 10px;"><code>{
                        success: true, 

                        loginname: req.user.loginname, 
                        
                        id: req.user.id, 
                        
                        avatar_url: req.user.avatar_url
}</code></pre>
                `
            }
        ]
    },
    {
        title:'消息通知',
        apiContent:[
            {
                small_title: 'get /message/count 获取未读消息数',
                content:`
                    <p>接收 get 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String</li>
                    </ul>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre class="prettyprint language-js" style="background-color:#eee;padding:5px 10px;"><code>{ data: 3 }</code></pre>
                `
            },
            {
                small_title: 'get /messages 获取已读和未读消息',
                content:`
                    <p>接收 get 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String</li>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre class="prettyprint language-js" style="background-color:#eee;tab-size:4;font-size:14px;padding:5px 10px;"><code>{

                data: {

                          has_read_messages: [],

                          hasnot_read_messages: [

                            {

                              id: &quot;543fb7abae523bbc80412b26&quot;,

                              type: &quot;at&quot;,

                              has_read: false,

                              author: {

                                loginname: &quot;alsotang&quot;,

                                avatar_url: &quot;https:&#x2F;&#x2F;
                                avatars.githubusercontent.com&#x2F;u&#x2F;1147375?v=2&quot;

                              },

                              topic: {

                                id: &quot;542d6ecb9ecb3db94b2b3d0f&quot;,

                                title: &quot;adfadfadfasdf&quot;,

                                last_reply_at: &quot;2014-10-18T07:47:22.563Z&quot;

                              },

                              reply: {

                                id: &quot;543fb7abae523bbc80412b24&quot;,

                                content: &quot;[@alsotang](&#x2F;user&#x2F;alsotang) 哈哈&quot;,

                                ups: [ ],

                                create_at: &quot;2014-10-16T12:18:51.566Z&quot;

                                }

                            },

                        ...
                        ]

                    }

                }

                      </code></pre>
                `
            },
            {
                small_title: 'post /message/mark_all 标记全部已读',
                content:`
                    <p>接收 post 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String</li>
                    </ul>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre class="prettyprint language-js" style="background-color:#eee;padding:5px 10px;"><code>{ success: true,

                        marked_msgs: [ { id: &#x27;544ce385aeaeb5931556c6f9&#x27; } ] }
                      </code></pre>
                `
            },
            {
                small_title: 'post /message/mark_one/:msg_id 标记单个消息为已读',
                content:`
                    <p style="margin-bottom:20px;">请求示例：<a style="color:#ffd04b;" href="/message/mark_one/58ec7d39da8344a81eee0c14">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
                    <p>接收 post 参数</p>
                    <ul style="line-height:2em;">
                        <li>accesstoken String 用户的 accessToken</li>
                    </ul>
                    <p style="margin-bottom:20px;">返回值示例</p>
                    <pre class="prettyprint language-js" style="background-color:#eee;padding:5px 10px;"><code>{
                        success: true,

                        marked_msg_id: &quot;58ec7d39da8344a81eee0c14&quot;
}</code></pre>
                `
            }
        ]
    },
    {
        title:'知识点',
        apiContent:[
            {
                small_title: '',
                content:`
                    <ol style="line-height:2em;">
                        <li>
                        如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。
                        </li>
                    </ol>
                `
            }
        ]
    }
]

export default api