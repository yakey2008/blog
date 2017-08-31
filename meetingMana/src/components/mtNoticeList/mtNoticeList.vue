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
            position: relative;
            .right-ribbon {
                position: absolute;
                right: -28px;
                top: 5px;
                height: 31px;
                line-height: 31px;
                width: 94px;
                text-align: center;
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
                        border-top: 1px solid #e7e7e7;
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
                    }
                }
            }
            .css-list-item-main-title {
                font-size: 1.125rem; // height: 50px;
                // line-height: 50px;
                // overflow: hidden;
                // white-space: nowrap;
                // text-overflow: ellipsis;
                // padding-right: 8%;
                padding: 12px 0;
                word-break: break-all;
                padding-right: 8%;
            }
            &.bgcolor {
                background-color: #e7e7e7;
                word-break: break-all;
                padding: 5px 0;
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
                    margin-right: 21px;
                    color: #9b9b9b;
                    &:active {
                        color: rgba(0, 0, 0, 0.6);
                        background-color: #dedede;
                    }
                }
                &.css-acceptbtn {
                    margin-left: 0;
                    background-color: #88b1ff;
                    &:active {
                        background-color: #6097ff;
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div>
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="scroller" class="css-mtnoticelist-page">
            <div v-for="(item,index) in data" :key="index">
                <div v-if="item.DisplayType !== 2 && item.MeetingResponseType == 3" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon">已接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject}}</h3>
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
                                    <span class="rightdom">{{item.RequiredAttendees}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.DisplayType !== 2 && item.MeetingResponseType == 4" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">已谢绝</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject}}</h3>
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
                                    <span class="rightdom">{{item.RequiredAttendees}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.DisplayType !== 2 && item.MeetingResponseType == 0" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main bgcolor modify-title" v-if="item.DisplayType ===3">
                        <div class="css-list-item-main-info">{{item.Title}}</div>
                    </div>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">未接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject}}</h3>
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
                                    <span class="rightdom">{{item.RequiredAttendees}}</span>
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
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main bgcolor">
                        <div class="css-list-item-main-info">{{item.Subject}}</div>
                    </div>
                </div>
                <div v-if="item.DisplayType == 4" class="css-list-item" v-on:click="toDetail(item.IsShowAttentdeesStat,item.ICalUid)">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main bgcolor">
                        <div class="css-list-item-main-info">{{item.Subject}}</div>
                    </div>
                </div>
            </div>

        </scroller>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:isShowCancel="isShowCancel" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:cancel="nocancel()" v-on:confirm="agreeconfirm()" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>

<script>
import Scroller from '../scroll/index.vue';
import urldata from '../../config/urldata.js';
import localdata from '../../js/localdata.js';
import storageList from '../../config/storageList.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
// import service from '../../services/getMeetingNotificationList';
// import service1 from '../../services/postReplyMeetingInvitation';

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
        // service.get(this.getNoticeList, this.$http, {}).then(data => {
        //     this.data = data.list;
        //     this.$refs.scroller.finishInfinite(!data.hasMore)
        // }, status => {
        //     this.$refs.scroller.finishInfinite(true)
        // })
    },
    data() {
        return {
            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            isShowCancel: false,//是否取消弹出
            isUpdateDone: false,//是否已修改成功

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
                // service.reload(this.getNoticeList, this.$http, {}).then(data => {
                //     this.data = data.list;
                //     this.$refs.scroller.finishPullToRefresh()
                // }, status => {
                //     this.$refs.scroller.finishPullToRefresh()
                // })
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
                // service.get(this.getNoticeList, this.$http, {}).then(data => {
                //     this.data = data.list
                //     this.pageloading = false;
                //     this.$refs.scroller.finishInfinite(!data.hasMore)
                // }, status => {
                //     this.$refs.scroller.finishInfinite(true)
                // })
            }, 500)
        },
        //跳转到详情
        toDetail(isInvite, id) {
            // localdata.setdata('meetDetailView', JSON.stringify(this.mtrData[index]));
            if (isInvite) {
                this.$router.push({ path: '/mtmeetdetailinvite?ICalUid=' + id });
            } else {
                this.$router.push({ path: '/mtmeetdetailaccept?ICalUid=' + id });
            }
        },
        responseMeeting(ICalUid, accept) {
            this.pageloading = true;
            this.isShowCancel = false;
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
                this.errinfo = status;
            })
        },
        //清除本地存储已存在的数据
        clearStorage() {
            localdata.removedata(storageList);
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
            this.pageloading = false;
            window.location.reload();
            // this.$router.push({ path: '/' });
        }
    }
}
</script>

