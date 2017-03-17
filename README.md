|-- config                           // 项目开发环境配置
|   |-- index.js                     // 项目打包部署配置
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- header.vue               // 页面头部公共组件
|       |-- index.js                 // 加载各种公共组件
|   |-- config                       // 路由配置和程序的基本信息配置
|       |-- routes.js                // 配置页面路由
|   |-- css                          // 各种 css 文件
|       |-- common.css               // 全局通用 css 文件
|   |-- iconfont                     // 各种字体图标
|   |-- images                       // 公共图片
|   |-- less                         // 各种 less 文件
|       |-- common.less              // 全局通用 less 文件
|   |-- pages                        // 页面组件
|       |-- home                     // 个人中心
|       |-- index                    // 网站首页
|       |-- login                    // 登录
|       |-- signout                  // 退出
|   |-- store                        // vuex 的状态管理
|       |-- index.js                 // 加载各种 store 模块
|       |-- user.js                  // 用户 store
|   |-- template                     // 各种 html 文件
|       |-- index.html               // 程序入口 html 文件
|   |-- util                         // 公共的 js 方法， vue 的 mixin 混合
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6 语法编译配置
|-- gulpfile.js                      // 启动，打包，部署，自动化构建
|-- webpack.config.js                // 程序打包配置
|-- server.js                        // 代理服务器配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建