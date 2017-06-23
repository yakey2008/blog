<style lang="scss">
.css-feedbackmain {
    background-color: #f6f7f9;
    .weui-cell {
        background-color: #fff;
        padding: 20px 25px;
        margin-bottom: 10px;
        .weui-textarea {
            height: 95px;
        }
    }
    .weui-cell:before {
        border: none;
    }
    .weui-cell.css-textinfo {
        padding-bottom: 5px;
    }
    .css-submitbtn {
        position: absolute;
        bottom: 50px;
        width: 100%;
        border-radius: 0;
        background-color: #ec4280;
    }
    .css-submitbtn:active {
        background-color: #ec4280;
    }
}
</style>

<template>
    <div class="weui-tab">
        <div class="weui-tab__panel css-feedbackmain">
            <div class="weui-cell css-textinfo">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入反馈的信息，我们将尽快跟进您的问题" rows="3" v-model="sendData.Content" maxlength="200"></textarea>
                    <div class="weui-textarea-counter">
                        <span>{{sendData.Content.length}}</span>/200</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__hd">
                            <p class="weui-uploader__title">图片上传
                                <span class="weui-uploader__info">图片大小不大于10M</span>
                            </p>
    
                        </div>
                        <div class="weui-uploader__bd">
                            <vciu v-bind:class="['weui-uploader__input-box','pure-button-primary','js-btn-crop']" text="" v-bind:crop="false" url="/picUpload" extensions="png,gif,jpeg,jpg" v-on:imageuploaded="picUploaded" v-on:errorhandle="picError"></vciu>
                            <img v-bind:src="imgsrc" v-if="imgsrc">
                        </div>
                    </div>
                </div>
            </div>
            <a href="javascript:;" class="weui-btn weui-btn_primary css-submitbtn" v-on:click="submitevt()">确认提交</a>
        </div>
        <Cbottomnav :showtab="false"></Cbottomnav>
        <!--提示窗Start-->
        <div v-show="isShowerr">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd">
                    <strong class="weui-dialog__title">提醒</strong>
                </div>
                <div class="weui-dialog__bd">{{errinfo}}</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="closeShowerr()">确定</a>
                </div>
            </div>
        </div>
        <!--提示窗End-->
    </div>
</template>

<script>
import Bottomnav from '../bottomnav/bottomnav.vue';
import VCIU from 'vue-core-image-upload';
export default {
    mounted: function () {
        this.showtab = false;
        var useragent = window.navigator.userAgent.toLowerCase();
        if (useragent.indexOf('android') !== -1) {
            this.sendData.OperateSystem = 'android';
        }

        if (useragent.indexOf('iphone') !== -1) {
            this.sendData.OperateSystem = 'ios';
        }
    },
    data() {
        return {
            showtab: true,
            isShowerr: false,
            errinfo: '',
            imgsrc: "",
            sendData: { Content: "", OperateSystem: "" }
        }
    },
    components: {
        'Cbottomnav': Bottomnav,
        'vciu': VCIU
    },
    methods: {
        //关闭错误提示
        closeShowerr: function () {
            this.isShowerr = false;
        },
        picUploaded: function (res) {
            if (res.Success) {
                this.imgsrc = 'http://t00005255.corp.vipshop.com:8045/Menu/UploadImage/'+res.Object;
                this.sendData.AttachmentId = res.Object;
                this.isShowerr = true;
                this.errinfo = res.Message;
            }
        },

        picError: function (err) {
            this.isShowerr = true;
            this.errinfo = '网络错误，请稍后刷新重试';
        },

        submitevt: function () {
            if (this.sendData.Content === '') {
                this.isShowerr = true;
                this.errinfo = '请填写相关信息！';
            } else {
                this.$http.post('/Feedback', this.sendData).then(response => {
                    this.isShowerr = true;
                    this.errinfo = '提交成功！后台意见反馈记录用户反馈的信息。';
                }, response => {
                    this.isShowerr = true;
                    this.errinfo = '网络错误，请稍后刷新重试';
                });
            }
        }
    }
} 
</script>