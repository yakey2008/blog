### 发布准备
> 修改webcofing.js文件添加网站目录 修改dist.js文件 'dist/' 为webUrl+'dist/'  basePath:"/" 为basePath:为webUrl
### 会议管理轻应用
> 环境：webpack2,webpack-dev-server2,babel,sass
> 依赖：vue2   
> 路由：vue-router,异步：vue-resource
> ui库：weui
#### 命令 
> npm run dev 启动开发服务  
> npm run build 合并压缩代码   

#### 包的修改   
修改了vue-calendar 插件源码     
vue-datepicker.vue          
···
line 380-383  --
<div class="datepickbox" @click="showCheck">
    {{date.time}}
    <!-- <input type="text" title="input date" class="cov-datepicker" readonly="readonly" :placeholder="option.placeholder" v-model="date.time" :required="required" @click="showCheck" @foucus="showCheck" :style="option.inputStyle ? option.inputStyle : {}" /> -->
</div>
···

修改了vue2-timepicker 插件 package.json  
···
dist目录添加build.js
package.json整体修改 弃用
···

> 所修改的包在modified_modules目录有备份
#### todo
> mtLocationSelect 选择会议室     done
 选择地点根据上个页面选择后默认地点  done
> 删除人员 详情页删除人员 修改时间，添加地点  消息跳转详情    dene
> 自定义会议室 进入选择时间默认判断 done
> 详情页 地点->选择区域，区域id   时间 -> 会议室id done
> 详情页 提交修改  done
> 详情页删除人员  全部人员查看删除人员 done

> 详情页 时间带换行符
#### 临时内容
> home -- this.initData(this.datetoday, 'eric.hu@vipshop.com');//临时
> 选择会议室页面时间写死，done
    startTime: {
        time: '2017-07-31'
    },
> mtTimeSelect.vue   let selectedDate = moment().format('YYYY-MM-DD');//临时 done

> mtTimeSelect  this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus+'?date=2017-08-09&roomListAddress=' + localdata.getdata('curRegionId')); 日期写死 done
> 通过邮箱添加 暂时注释验证 done

