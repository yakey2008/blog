<style lang="scss" scoped>
@mixin flexbox() {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

@mixin flexboxwidth($w) {
    -webkit-box-flex: $w;
    -webkit-flex: $w;
    flex: $w;
}

.weui-btn:after {
    border: none;
}


.css-mtnoticelist-page {
    height: 100%;
    .col9b {
        color: #9b9b9b;
    }
    background-color: #f6f7f8;
    .css-list-item {
        margin: 26px 22px;
        .css-list-item-time {
            text-align: center;
            margin-bottom: 15px;
        }
        .css-list-item-main {
            border: 1px solid #ddd;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            position: relative; // &:after {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     border: 1px solid #000;
            //     -webkit-box-sizing: border-box;
            //     box-sizing: border-box;
            //     width: 200%;
            //     height: 200%;
            //     -webkit-transform: scale(0.5);
            //     transform: scale(0.5);
            //     -webkit-transform-origin: left top;
            //     transform-origin: left top;
            // }
            .right-ribbon {
                position: absolute;
                right: -25px;
                top: 6px;
                padding: 5px 0;
                width: 94px;
                text-align: center;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                background-color: #88b1ff;
                color: #fff;
                font-size: .875rem;
                &.unaccept {
                    background-color: #ccc;
                }
            }
            .css-list-item-main-info {
                margin: 0 22px;
                .inside-item {
                    @include flexbox();
                    padding-bottom: 13px;
                    &.css-list-item-main-info-time {
                        padding-top: 13px;
                    }
                    .leftdom {
                        @include flexboxwidth(1);
                    }
                    .rightdom {
                        @include flexboxwidth(5); // overflow: hidden;
                        // white-space: nowrap;
                        // text-overflow: ellipsis;
                        word-break: break-all;
                        &.css-username {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
            .css-list-item-main-title {
                position: relative;
                font-size: 1.125rem;
                padding: 12px 0;
                word-break: break-all;
                padding-right: 8%; // @media (max-width: 350px) {
                //     padding-right: 20%;
                // }
                &:after {
                    content: " ";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    height: 1px;
                    border-bottom: 1px solid #e7e7e7;
                    color: #e7e7e7;
                    -webkit-transform-origin: 0 100%;
                    transform-origin: 0 100%;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                }
            }
            &.bgcolor {
                background-color: #e7e7e7;
                word-break: break-all;
                padding: 7px 0;
                border: none;
                .css-list-item-main-info {
                    margin: 0 15px;
                }
            }
            &.modify-title {
                margin-bottom: 20px;
            }
        }
        .css-bottombar {
            @include flexbox();
            &.weui-tabbar:before {
                border: none;
            }
            .css-bottombtn {
                @include flexboxwidth(1);
                margin-bottom: 24px;
                height: 36px;
                line-height: 36px;
                font-size: 1rem;
                border-radius: 6px;
                font-size: 1rem;
                &.css-delinebtn {
                    margin-right: 0;
                    color: #9b9b9b;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    &:active {
                        color: rgba(0, 0, 0, 0.6);
                        background-color: #dedede;
                    }
                }
                &.css-acceptbtn {
                    margin-left: 21px;
                    background-color: #88b1ff;
                    &:active {
                        background-color: #6097ff;
                    }
                }
            }
        }
    }
}

.css-to-home {
    position: fixed;
    z-index: 550;
    right: 5px;
    bottom: 5px;
    border-radius: 50px;
    display: block;
    width: 70px;
    height: 70px;
    background-size: cover;
}
</style>

<template>
    <div>
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="scroller" class="css-mtnoticelist-page">
            <div v-for="(item,index) in data" :key="index">

                <div v-if="item.DisplayType !== 2 &&item.DisplayType !== 4&& item.MeetingResponseType >= 10" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime.substr(0,item.CreateTime.length-3)}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon">已取消</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject===''||item.Subject===null?'[无主题]':item.Subject}}</h3>
                            <!-- <div v-on:click="toDetail(item.IsShowAttentdeesStat,item.ICalUid)"> -->
                            <div v-on:click="toDetail('mtrCanceled')">
                                <div class="inside-item css-list-item-main-info-time">
                                    <span class="leftdom col9b">时间</span>
                                    <span class="rightdom">{{item.AttendeeTime}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">地点</span>
                                    <span class="rightdom">{{item.MeetingAddress}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">人员</span>
                                    <span class="rightdom css-username">{{item.RequiredAttendees}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="item.DisplayType !== 2 &&item.DisplayType !== 4&& item.MeetingResponseType == 4" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime.substr(0,item.CreateTime.length-3)}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">已谢绝</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject===''||item.Subject===null?'[无主题]':item.Subject}}</h3>
                            <!-- <div v-on:click="toDetail(item.IsShowAttentdeesStat,item.ICalUid)"> -->
                            <div v-on:click="toDetail('mtrDelined')">
                                <div class="inside-item css-list-item-main-info-time">
                                    <span class="leftdom col9b">时间</span>
                                    <span class="rightdom">{{item.AttendeeTime}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">地点</span>
                                    <span class="rightdom">{{item.MeetingAddress}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">人员</span>
                                    <span class="rightdom css-username">{{item.RequiredAttendees}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="item.DisplayType !== 2 &&item.DisplayType !== 4&& item.MeetingResponseType == 3" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime.substr(0,item.CreateTime.length-3)}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon">已接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject===''||item.Subject===null?'[无主题]':item.Subject}}</h3>
                            <div v-on:click="toDetail(item.IsShowAttentdeesStat,item.ICalUid)">
                                <div class="inside-item css-list-item-main-info-time">
                                    <span class="leftdom col9b">时间</span>
                                    <span class="rightdom">{{item.AttendeeTime}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">地点</span>
                                    <span class="rightdom">{{item.MeetingAddress}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">人员</span>
                                    <span class="rightdom css-username">{{item.RequiredAttendees}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="item.DisplayType !== 2 &&item.DisplayType !== 4&& item.MeetingResponseType == 0" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime.substr(0,item.CreateTime.length-3)}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">未接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject===''||item.Subject===null?'[无主题]':item.Subject}}</h3>
                            <div v-on:click="toDetail(item.IsShowAttentdeesStat,item.ICalUid)">
                                <div class="inside-item css-list-item-main-info-time">
                                    <span class="leftdom col9b">时间</span>
                                    <span class="rightdom">{{item.AttendeeTime}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">地点</span>
                                    <span class="rightdom">{{item.MeetingAddress}}</span>
                                </div>
                                <div class="inside-item">
                                    <span class="leftdom col9b">人员</span>
                                    <span class="rightdom css-username">{{item.RequiredAttendees}}</span>
                                </div>
                            </div>
                            <div class="css-bottombar">
                                <div class="weui-btn css-bottombtn css-delinebtn" @click="responseMeeting(item.ICalUid, false)">谢绝</div>
                                <div class="weui-btn css-bottombtn css-acceptbtn" @click="responseMeeting(item.ICalUid, true)">接受</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.DisplayType == 2" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime.substr(0,item.CreateTime.length-3)}}</p>
                    <div class="css-list-item-main bgcolor">
                        <div class="css-list-item-main-info">{{item.Subject}}</div>
                    </div>
                </div>
                <div v-if="item.DisplayType == 4" class="css-list-item" v-on:click="toDetail(item.IsShowAttentdeesStat,item.ICalUid)">
                    <p class="css-list-item-time col9b">{{item.CreateTime.substr(0,item.CreateTime.length-3)}}</p>
                    <div class="css-list-item-main bgcolor">
                        <div class="css-list-item-main-info">{{item.Subject}}</div>
                    </div>
                </div>
            </div>

        </scroller>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:isShowCancel="isShowCancel" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:cancel="nocancel()" v-on:confirm="agreeconfirm()" v-on:closenotice="closeShowerr()"></notice>
        <div class="css-to-home" v-on:click="gobackhome()" v-bind:style="{backgroundImage:'url('+tohome+')'}">
        </div>
    </div>
</template>

<script>
import tohome from '../../images/tohome.png';
import Scroller from '../scroll/index.vue';
import urldata from '../../config/urldata.js';
import localdata from '../../js/localdata.js';
import storageList from '../../config/storageList.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';

export default {
    name: 'mtNoticeList',
    components: {
        Scroller,
        loading,
        notice
    },
    mounted() {
        setTimeout(() => {
            this.$moaapi.resetNavTitle();
            this.$moaapi.updateNavTitle('会易订');
            this.$moaapi.hideNavMenu();
        }, 100)
    },
    activated() {
        this.$moaapi.updateNavTitle('会易订');
        this.$refs.scroller.finishInfinite(false);
        if (localdata.getdata('needreload')) {
            setTimeout(() => {
                window.location.reload();
            }, 100)
            localdata.removedata('needreload')
        }
    },
    data() {
        return {
            tohome,//去会易订首页图片
            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            isShowCancel: false,//是否取消弹出
            isUpdateDone: false,//是否已修改成功
            isCanTodetail: false,//是否可以去到详情

            page: 1,
            pageSize: 10,//一页返回条数
            getNoticeList: urldata.basePath + urldata.GetServiceNotification,//获取消息列表
            ResponseMeeting: urldata.basePath + urldata.ResponseMeeting,
            data: []
        }
    },
    methods: {
        refresh() {
            setTimeout(() => {
                this.page = 1;
                this.$http.get(this.getNoticeList + '?page=' + this.page + '&pageSize=' + this.pageSize).then(res => {
                    this.data = res.body.data.list;
                    this.$refs.scroller.finishPullToRefresh();
                }, error => {
                    console.log(error)
                })
            }, 500)
        },
        infinite() {
            setTimeout(() => {
                if (this.data.length > 0) {
                    this.page = this.page + 1;
                }
                this.$http.get(this.getNoticeList + '?page=' + this.page + '&pageSize=' + this.pageSize).then(res => {
                    let len = res.body.data.list.length;
                    if (len === 0) {
                        this.$refs.scroller.finishInfinite(true);
                    } else {
                        this.data = this.data.concat(res.body.data.list);
                        this.$refs.scroller.finishInfinite(false);
                    }
                }, error => {
                    // this.$refs.scroller.finishInfinite(true);
                })
            }, 500)
        },
        //跳转到详情
        toDetail(isInvite, id) {
            // localdata.setdata('meetDetailView', JSON.stringify(this.mtrData[index]));
            localdata.setdata('isFromNoticeList', true);
            // this.pageloading = true;
            // this.$http.post(urldata.basePath + urldata.GetMeetingDetail, { ICalUid: id }).then(res => {
            //     if (res.body.status === 200) {
            //         this.pageloading = false;
            //         if (isInvite) {
            //             this.$router.push({ path: '/mtmeetdetailinvite?ICalUid=' + id });
            //         } else {
            //             this.$router.push({ path: '/mtmeetdetailaccept?ICalUid=' + id });
            //         }
            //     } else {
            //         this.isCanTodetail = true;
            //         this.pageloading = false;
            //         this.isShowerr = true;
            //         this.errinfo = res.body.errorMessage;
            //     }
            // }, error => {
            //     console.log(error)
            //     this.isShowerr = true;
            //     this.errinfo = error.body.errorMessage;
            // })
            if (isInvite === 'mtrCanceled') {
                this.isCanTodetail = true;
                this.pageloading = false;
                this.isShowerr = true;
                this.errinfo = '此会议已取消';
            } else if (isInvite === 'mtrDelined') {
                this.isCanTodetail = true;
                this.pageloading = false;
                this.isShowerr = true;
                this.errinfo = '此会议已谢绝';
            } else if (isInvite) {
                this.$router.push({ path: '/mtmeetdetailinvite?ICalUid=' + id });
            } else {
                this.$router.push({ path: '/mtmeetdetailaccept?ICalUid=' + id });
            }
        },
        responseMeeting(ICalUid, accept) {
            let sendData = {
                "ICalUid": ICalUid,
                "IsAccept": accept
            }
            this.pageloading = true;
            this.isShowCancel = false;
            this.$http.post(this.ResponseMeeting, sendData).then(res => {
                if (res.status === 200) {
                    // meeting.MeetingResponseType = accept ? 3 : 4
                    this.clearStorage();
                    this.pageloading = false;
                    this.isShowerr = true;
                    if (accept) {
                        this.errinfo = '接受成功';
                    } else {
                        this.errinfo = '谢绝成功';
                    }
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                }
            }, status => {
                this.isShowerr = true;
                this.errinfo = status.body.errorMessage;
            })
        },
        gobackhome() {
            this.$router.push({ path: '/' });
        },
        //清除本地存储已存在的数据
        clearStorage() {
            localdata.removedata(storageList);
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
            this.pageloading = false;
            if (this.isCanTodetail) {
                this.isCanTodetail = false;
            } else {
                window.location.reload();
            }
            // this.$router.push({ path: '/' });
        }
    }
}
</script>

