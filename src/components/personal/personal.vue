<style>
.borderme{border:1px solid red;}
</style>
<template>
    <div>
        <h4 v-text="text"></h4>      
        <vue-core-image-upload v-bind:class="['weui-uploader__input-box','pure-button-primary','js-btn-crop']" text="" v-bind:crop="false" url="http://127.0.0.1:3000/upload" extensions="png,gif,jpeg,jpg" v-on:click="imageuploaded"></vue-core-image-upload>
    </div>
</template>

<script>
import 'weui'
import Vue from 'vue'
import VueCoreImageUpload  from 'vue-core-image-upload';
    export default{
        data(){
            
            return{
                text:'个人首页-上传图片',
                isNotice:false,
                submitdata:{
                    username:'',
                    password:''
                }
            }
        },
        components: {
            'vue-core-image-upload': VueCoreImageUpload
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
            imageuploaded:function(res) {
                if (res.errcode == 0) {

                }
            },
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