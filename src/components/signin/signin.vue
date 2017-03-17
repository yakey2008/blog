<template>
    <div>
        <h4 v-text="text"></h4>
        <div><label for="">账户：</label><input type="text" v-model="submitdata.username" placeholder="请输入你的登入账户"><span v-show="isNotice">请输入登入名</span></div>
        <div><label for="">密钥：</label><input type="password"v-model="submitdata.password" placeholder="请输入你的登入密钥"></div>
        <button v-on:click="submitObj()">登入</button>
    </div>
</template>

<script>
    export default{
        data(){
            
            return{
                text:'请登入',
                isNotice:false,
                submitdata:{
                    username:'',
                    password:''
                }
            }
        },
        mounted:function(){
            // GET /image.jpg
            // this.$http.get('/json/data.json').then(response => {

            //     // resolve to Blob
            //     return response.blob();

            // }).then(blob => {
            //     // use image Blob
            // });
            
        },
        methods:{
            submitObj:function(){
                let data = this.submitdata;
                let isNotice = this.isNotice;
                if(this.submitdata.username === ''){
                    isNotice = true;
                }else{
                    isNotice = false;
                    // POST 数据
                    // this.$http.post('/signinuser', data).then(response => {

                    //     // get status
                    //     response.status;

                    //     // get status text
                    //     response.statusText;

                    //     // get 'Expires' header
                    //     response.headers.get('Expires');

                    //     // get body data
                    //     this.someData = response.body;

                    // }, response => {
                    //     // error callback
                    // });
                }
            }
        }
    }
</script>