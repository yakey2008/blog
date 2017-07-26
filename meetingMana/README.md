### 会议管理轻应用
> 环境：webpack2,webpack-dev-server2,babel,sass
> 依赖：vue2   
> 路由：vue-router,异步：vue-resource
> ui库：weui
#### 命令
> npm run dev 启动开发服务  
> npm run build 合并压缩代码   

修改了vue-calendar-upload 插件源码     
vue-datepicker.vue          
···
line 380-383  --
<div class="datepickbox" @click="showCheck">
    {{date.time}}
    <!-- <input type="text" title="input date" class="cov-datepicker" readonly="readonly" :placeholder="option.placeholder" v-model="date.time" :required="required" @click="showCheck" @foucus="showCheck" :style="option.inputStyle ? option.inputStyle : {}" /> -->
</div>
···


> mtLocationSelect 选择会议室     
 选择地点根据上个页面选择后默认地点

> 
