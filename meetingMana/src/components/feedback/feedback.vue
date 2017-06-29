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
        .weui-gallery {
            display: block;
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
                        <span>{{sendData.Content.length}}</span>&#47;200</div>
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
                            <div class="weui-gallery" v-show="isShowviewpic">
                                <span class="weui-gallery__img" v-bind:style="{backgroundImage:'url('+imgsrc+')'}" v-on:click="closeviewpic()"></span>
                                <div class="weui-gallery__opr">
                                    <a href="javascript:" class="weui-gallery__del">
                                        <i class="weui-icon-delete weui-icon_gallery-delete" v-on:click="delpic()"></i>
                                    </a>
                                </div>
                            </div>
                            <ul class="weui-uploader__files" v-show="isShowpic">
                                <li class="weui-uploader__file" v-bind:style="{backgroundImage:'url('+imgsrc+')'}" v-on:click="showviewpic()"></li>
                            </ul>
                            <vciu v-bind:class="['weui-uploader__input-box','pure-button-primary','js-btn-crop']" text="" v-bind:crop="false" v-bind:url="uploadurl" extensions="png,gif,jpeg,jpg" v-on:imageuploaded="picUploaded" v-on:errorhandle="picError" v-show="!isShowpic"></vciu>
                        </div>
                    </div>
                </div>
            </div>
            <a href="javascript:;" class="weui-btn weui-btn_primary css-submitbtn" v-on:click="submitevt()">确认提交</a>
        </div>
        <Bottomnav :showtab="false"></Bottomnav>
        <!--提示窗Start-->
        <notice v-show="isShowerr" v-bind:errtitle="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
        <!--提示窗End-->
    </div>
</template>

<script>
import Bottomnav from '../bottomnav/bottomnav.vue';
import vciu from 'vue-core-image-upload';
import urldata from '../../config/urldata.js';
import notice from '../popnotice/notice.vue';
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
            uploadurl: urldata.basePath + urldata.UploadImage,
            showtab: true,
            isShowerr: false,
            isShowpic: false,
            isShowviewpic: false,
            errtitle: "提示",
            errinfo: "",
            imgsrc: "",
            sendData: { Content: "", OperateSystem: "" }
        }
    },
    components: {
        Bottomnav,
        vciu,
        notice
    },
    methods: {
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
        },
        showviewpic() {
            this.isShowviewpic = true;
        },
        closeviewpic() {
            this.isShowviewpic = false;
        },
        delpic() {
            this.imgsrc = '';
            this.isShowviewpic = false;
            this.isShowpic = false;
            delete this.sendData.AttachmentId;
        },
        picUploaded(res) {
            if (res.Success) {
                // this.imgsrc = 'http://t00005255.corp.vipshop.com:8045' + urldata.picurl + res.Object;
                this.imgsrc = urldata.basePath + urldata.picurl + res.Object;
                this.sendData.AttachmentId = res.Object;
                this.isShowerr = true;
                this.errinfo = res.Message;
                this.isShowpic = true;
            }
        },

        picError(err) {
            this.isShowerr = true;
            this.errinfo = '网络错误，请稍后刷新重试';
        },

        submitevt() {
            if (this.sendData.Content === '') {
                this.isShowerr = true;
                this.errinfo = '请填写相关信息！';
            } else {
                this.$http.post(urldata.basePath + urldata.Feedback, this.sendData).then(response => {
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