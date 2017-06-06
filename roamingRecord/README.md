### 漫游记录页面 
> 兼容ie8+，dist为生产环境资源，本来是兼容ie9+所以使用了webpack，后要求ie8+，放弃webpack向下兼容使用gulp+browser-sync环境
> 依赖：
> 库：jquery.js  
> 插件：nicescroll.js、select2.js、datepicker.js、sweet-alert.js、jquery.placeholder.js
> 模板引擎：handlebars.js  
#### 命令
> gulp 启动服务  
> gulp build 合并压缩代码   
> gulp promode 切换到生产环境入口  
> gulp devmode 切换到开发环境环境入口  
#### todo：
> 静态资源添加版本号并自动更新html  