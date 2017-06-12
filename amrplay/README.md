### amr音频播放  
> 依赖：amrnb.js([压缩版的amr.js](https://github.com/jpemartins/amr.js "amr.js") )  
> amr.js 依赖的libamr-nb.js太大了6.4m多，大部分功能用不到，所以仅仅使用播放功能   
#### 命令
> gulp
##### v0.2.0
> babel实时编译  
#### 处理过程  
> 点击播放的时候，异步获取amr音频资源，返回一个blob文件对象，传递到下一步，执行filereader对象，读取blob对象，filereader  onload之后执行回调callback播放音频，播放音频函数执行audioAPI接口new AudioContext()，调用相应方法处理文件流并播放   
#### todo：
> 多次点击play多次播放问题