<style lang="scss">
@mixin placeholder($color) {
     ::-webkit-input-placeholder {
        // WebKit browsers
        color: $color;
    }
     :-moz-placeholder {
        // Mozilla Firefox 4 to 18
        color: $color;
    }
     ::-moz-placeholder {
        // Mozilla Firefox 19+
        color: $color;
    }
     :-ms-input-placeholder {
        // Internet Explorer 10+
        color: $color;
    }
}

@mixin boxshadow($hs, $vs, $blur, $spread, $color:#000) {
    box-shadow: $hs $vs $blur $spread $color;
    -ms-box-shadow: $hs $vs $blur $spread $color;
    -webkit-box-shadow: $hs $vs $blur $spread $color;
    -moz-box-shadow: $hs $vs $blur $spread $color;
    -o-box-shadow: $hs $vs $blur $spread $color;
}

$col9b:#9b9b9b;

@include placeholder(#ccc);
.css-mtnotice-page {
    background-color: #fff;
    .css-top-btn {
        position: relative;
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        font-size: 15px;
        span {
            display: inline-block;
            padding: 13px 8px;
        }
        &.css-selected {
            span {

                border-bottom: 2px solid #ec4280;
                color: #ec4280;
            }
        }
    }
    .weui-media-box__title {
        white-space: normal;
    }
    .css-main-container {
        .css-pageinfo {
            background-color: #fff;
            margin-left: 22px;
            border-bottom: 1px solid #e7e7e7;
            .css-pageinfoBox {
                padding-left: 0px;
                padding-right: 0px;
                .css-avarar-box {
                    position: relative;
                    .css-picBox {
                        width: 46px;
                        height: 46px;
                        border-radius: 50px;
                        background: no-repeat center center;
                        background-size: cover;
                        margin: 0 auto;
                        .css-pic {
                            overflow: hidden;
                            border-radius: 50%;
                            img {
                                width: 44px;
                                display: block;
                            }
                            .css-delIcon {
                                position: absolute;
                                top: -.3em;
                                right: -.4em;
                                line-height: normal;
                            }
                        }
                    }
                    .css-delIcon {
                        position: absolute;
                        top: -6px;
                        right: 0;
                        width: 19px;
                        height: 19px;
                        border-radius: 18px;
                        z-index: 500;
                        background-size: cover;
                    }
                    .css-pagebox {
                        height: 90px;
                        padding: 5px 0px;
                        border-bottom: 1px solid #e7e7e7;
                        .css-status {
                            padding: 5px 0px 5px 0px;
                            .css-item {
                                font-size: 1rem;
                                color: #333333;
                            }
                            .weui-cell__ft {
                                .weui-switch {
                                    width: 52px;
                                    height: 27px;
                                }
                                .weui-switch:checked {
                                    border-color: #fbd9e7;
                                    background-color: #fbd9e7;
                                }
                                .weui-switch:before,
                                .weui-switch-cp__box:before {
                                    height: 25px;
                                }
                                .weui-switch:after,
                                .weui-switch-cp__box:after {
                                    background-color: #ec4280;
                                    left: 4px;
                                    width: 22px;
                                    height: 22px;
                                    margin-top: 1px;
                                }
                            }
                        }
                    }
                    .css-setting {
                        .css-item {
                            font-size: 1rem;
                            color: #333333;
                        }
                    }
                    .css-explantime {
                        margin-top: -5px;
                        font-size: 0.75rem;
                        color: $col9b;
                    }
                    .css-username {
                        float: left;
                        margin-right: 10px;
                        height: 25px;
                    }
                    .css-useractor {
                        float: left;
                        width: 80px;
                        height: 25px;
                        padding-top: 5px;
                        .css-label {
                            float: left;
                            text-align: center;
                            border-radius: 4px;
                            width: 75px;
                            height: 18px;
                            color: #fff;
                            font-size: 0.75rem;
                            &.none {
                                display: none;
                            }
                            &.purple {
                                background-color: #989ad7;
                            }
                            &.gray {
                                background-color: #cccccc;
                            }
                        }
                    }
                    .css-userposition {
                        font-size: 13px;
                        color: #888888;
                    }
                    .css-rose {
                        width: 130px;
                    }
                }
                .weui-cell__bd {
                    padding: 0 10px;
                }
            }
        }
    }
}
</style>
<template>
    <div class="weui-tab css-mtnotice-page">
        <div class="weui-tab__panel">
            <div class="weui-tab">
                <div class="weui-navbar">
                    <div class="css-top-btn" :class="{'css-selected':isHoverClass===0}" v-on:click="switchBtn(0)">
                        <span>全部({{userLen}})</span>
                    </div>
                    <div class="css-top-btn" :class="{'css-selected':isHoverClass===1}" v-on:click="switchBtn(1)">
                        <span>已接受({{mtrSelected.AttentdeesStat.Accept}})</span>
                    </div>
                    <div class="css-top-btn" :class="{'css-selected':isHoverClass===2}" v-on:click="switchBtn(2)">
                        <span>已谢绝({{mtrSelected.AttentdeesStat.Decline}})</span>
                    </div>
                    <div class="css-top-btn" :class="{'css-selected':isHoverClass===3}" v-on:click="switchBtn(3)">
                        <span>未接受({{mtrSelected.AttentdeesStat.NoResponseReceived+userFromEmailLen}})</span>
                    </div>
                </div>

                <div class="css-main-container weui-tab__panel">
                    <div class="hr-div"></div>
                    <section class="css-pageinfo">
                        <div class="weui-cell css-pageinfoBox" v-for="(must,index) in userMustList" :key="must.id" v-if="must.isShow">
                            <div class="css-avarar-box">
                                <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+must.url+')'}" v-if="must.url"></div>
                                <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                <span class="css-delIcon" v-bind:style="{backgroundImage:'url('+deluserIcon+')'}" v-on:click="delUser(0,index)" v-if="index!==0"></span>
                            </div>
                            <div class="weui-cell__bd">
                                <div class="css-username">{{must.Name}}</div>
                                <div class="css-useractor" v-if="must.isInitiator">
                                    <span class="css-label">会议组织者</span>
                                </div>
                                <div class="clearfix"></div>
                                <p class="css-userposition" v-if="!must.hasOwnProperty('isEmail')">{{must.isInitiator?must.dept:must.job}}</p>
                                <p class="css-userposition" v-if="must.hasOwnProperty('isEmail')">通过邮件邀请的人员</p>
                            </div>
                        </div>
                    </section>

                    <section class="css-pageinfo" v-if="userOptionalList.length>0">
                        <div class="weui-cell css-pageinfoBox" v-for="(optional,index) in userOptionalList" :key="optional.id" v-if="optional.isShow">
                            <div class="css-avarar-box">
                                <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+optional.url+')'}" v-if="optional.url"></div>
                                <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                <span class="css-delIcon" v-bind:style="{backgroundImage:'url('+deluserIcon+')'}" v-on:click="delUser(0,index)"></span>
                            </div>

                            <div class="weui-cell__bd">
                                <div class="css-username">{{optional.Name}}</div>
                                <div class="css-useractor">
                                    <span class="css-label gray">可选参会者</span>
                                </div>
                                <div class="clearfix"></div>
                                <p class="css-userposition">{{optional.job}}</p>
                                <!-- <p class="css-userposition" v-if="optional.hasOwnProperty('isMust')">通过邮件邀请的人员</p> -->
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import weui from '../../lib/js/weui.min.js';
import moment from 'moment';
import localdata from '../../js/localdata.js';
import noavatar from '../../images/noavatar.png';
import deluserIcon from '../../images/deluser.png';

export default {
    name: 'mtParticipantsListSet',
    created() {
        this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
    },
    mounted() {
        let arr = [];
        this.currentUserData = JSON.parse(localdata.getdata('currentUserData'));

        if (localdata.getdata('userFromEmail')) {
            this.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
            this.userLen = this.userFromEmail.length;
        }
        this.userMustList = JSON.parse(localdata.getdata('userMustList'));
        this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
        this.userMustList.forEach(function (el) {
            if(el.isEmail){
                arr.push(el);
            }
            el.isShow = true;
        }, this);
        this.userOptionalList.forEach(function (el) {
            el.isShow = true;
        }, this);

        this.userFromEmailLen = arr.length;
        this.userLen = this.userLen+this.userFromEmailLen;
        this.userLen = this.userMustList.length + this.userOptionalList.length;
        this.$moaapi.updateNavTitle('参与人员');
    },
    data() {
        return {
            noavatar,//无头像显示
            deluserIcon,//删除人员icon

            currentUserData: {},//当前登录用户信息
            mtrSelected: {},//选择的会议室
            userFromEmail: [],
            userMustList: [],
            userOptionalList: [],
            userFromEmailLen :0,//来自回填email人数
            isHoverClass: 0,
            userLen:0//全部人员人数
        }
    },
    methods: {
        switchBtn(type) {
            //全部
            if (type === 0) {
                this.isHoverClass = 0;
                this.userMustList.forEach(function (el) {
                    el.isShow = true;
                }, this);
                this.userOptionalList.forEach(function (el) {
                    el.isShow = true;
                }, this);
            //已接受
            } else if (type === 1) {
                this.isHoverClass = 1;
                this.userMustList.forEach(function (el) {
                    if (el.ResponseType === 3) {
                        el.isShow = true;
                    } else {
                        el.isShow = false;
                    }
                }, this);
                this.userOptionalList.forEach(function (el) {
                    if (el.ResponseType === 3) {
                        el.isShow = true;
                    } else {
                        el.isShow = false;
                    }
                }, this);
            //已拒绝
            } else if (type === 2) {
                this.isHoverClass = 2;
                this.userMustList.forEach(function (el) {
                    if (el.ResponseType === 4) {
                        el.isShow = true;
                    } else {
                        el.isShow = false;
                    }
                }, this);
                this.userOptionalList.forEach(function (el) {
                    if (el.ResponseType === 4) {
                        el.isShow = true;
                    } else {
                        el.isShow = false;
                    }
                }, this);
            //未接受
            } else if (type === 3) {
                this.isHoverClass = 3;
                this.userMustList.forEach(function (el) {
                    if (el.ResponseType === 0 || el.ResponseType === 2 || el.ResponseType === 5 || el.ResponseType === null) {
                        el.isShow = true;
                    } else {
                        el.isShow = false;
                    }
                }, this);
                this.userOptionalList.forEach(function (el) {
                    if (el.ResponseType === 0 || el.ResponseType === 2 || el.ResponseType === 5 || el.ResponseType === null) {
                        el.isShow = true;
                    } else {
                        el.isShow = false;
                    }
                }, this);
            }
        },
        //删除人员 0 必选 1 可选
        delUser(type, idx) {
            if (type === 0) {
                if (this.userMustList[idx].id === this.currentUserData.UserEmail) {
                    this.isShowerr = true;
                    this.errinfo = '不可以删除发起人';
                } else {
                    this.userMustList.splice(idx, 1);
                    localdata.setdata('userMustList', JSON.stringify(this.userMustList));
                }
            } else {
                this.userOptionalList.splice(idx, 1);
                localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            }
        }
    }
}
</script>
