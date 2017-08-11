<style lang="scss" scoped>
$col9b:#9b9b9b;

.css-mtnotice-page {
    background-color: white;
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
                .css-picBox {
                    width: 46px;
                    height: 46px;
                    border-radius: 50px;
                    background: no-repeat center center;
                    background-size: cover;
                    margin: 0 auto;
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
        }
    }
}
</style>
<template>
    <div class="weui-tab css-mtnotice-page">
        <div class="weui-tab__panel">
            <div class="weui-tab">
                <div class="css-main-container">
                    <!-- <section class="css-pageinfo">
                                <div class="weui-cell css-pageinfoBox" style="">
                                    <div class="weui-cell__hd css-picBox">
                                        <div class="css-pic">
                                            <img src="./../../images/user.jpg">
                                        </div>
                                    </div>
                                    <div class="weui-cell__bd">
                                        <div class="css-username">{{currentUserData.Name}}</div>
                                        <div class="css-useractor">
                                            <span class="css-label purple">会议组织者</span>
                                        </div>
                                        <div class="clearfix"></div>
                                        <p class="css-userposition">{{currentUserData.DeptFullName}}</p>
                                    </div>
                                </div>
                            </section> -->
    
                    <section class="css-pageinfo">
                        <div class="weui-cell css-pageinfoBox" v-for="must in userMustList" :key="must.id">
                            <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+must.url+')'}" v-if="must.url"></div>
                            <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                            <div class="weui-cell__bd">
                                <div class="css-username">{{must.name}}</div>
                                <div class="css-useractor" v-if="must.isInitiator">
                                    <span class="css-label purple">会议组织者</span>
                                </div>
                                <div class="clearfix"></div>

                                <p class="css-userposition" v-if="!must.hasOwnProperty('isMust')">{{must.isInitiator?must.dept:'职位'}}</p>
                                <p class="css-userposition" v-if="must.hasOwnProperty('isMust')">通过邮件邀请的人员</p>
                            </div>
                        </div>
                    </section>
    
                    <section class="css-pageinfo" v-if="userOptionalList.length>0">
                        <div class="weui-cell css-pageinfoBox" v-for="optional in userOptionalList" :key="optional.id">
                            <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+optional.url+')'}" v-if="optional.url"></div>
                            <div class="weui-cell__hd css-picBox" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                            <div class="weui-cell__bd">
                                <div class="css-username">{{optional.name}}</div>
                                <div class="css-useractor">
                                    <span class="css-label gray">可选参会者</span>
                                </div>
                                <div class="clearfix"></div>
                                <p class="css-userposition" v-if="!optional.hasOwnProperty('isMust')">职位</p>
                                <p class="css-userposition" v-if="optional.hasOwnProperty('isMust')">通过邮件邀请的人员</p>
                            </div>
                        </div>
                    </section>
                    <!-- <section class="css-pageinfo">
                                <div class="weui-cell css-pageinfoBox">
                                    <div class="weui-cell__hd css-picBox">
                                        <div class="css-pic">
                                            <img src="./../../images/user.jpg">
                                        </div>
                                    </div>
                                    <div class="weui-cell__bd">
                                        <div class="css-username">sam.zhang@123.com</div>
                                        <div class="css-useractor">
                                            <span class="css-label gray">可选参会者</span>
                                        </div>
                                        <div class="clearfix"></div>
                                        <p class="css-userposition">通过邮件邀请的人员</p>
                                    </div>
                                </div>
                            </section> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import localdata from '../../js/localdata.js';
import noavatar from '../../images/noavatar.jpg';

export default {
    name: 'mtParticipantsList',
    mounted() {
        // this.currentUserData = JSON.parse(localdata.getdata('currentUserData'));
        if (localdata.getdata('userFromEmail')) {
            this.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
        }
        this.userMustList = JSON.parse(localdata.getdata('userMustList'));
        this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));

    },
    data() {
        return {
            noavatar,//无头像显示
            // currentUserData: {},//当前登录用户信息
            userFromEmail: [],
            userMustList: [],
            userOptionalList: []
        }
    },
    methods: {
    }
}
</script>
