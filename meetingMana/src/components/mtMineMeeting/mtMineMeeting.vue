<style lang="scss" scoped>
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

@include placeholder(#9b9b9b);
.css-mtnoticelist-page {
    .css-loadmore-text {
        text-align: center;
        color: #4c8afe;
        padding: 10px 0;
        font-size: .875rem;
    }
    .col9b {
        color: #9b9b9b;
    }
    background-color: #fff;
    .css-searcharea {
        position: relative;
        margin: 20px 9px;
        text-align: center;
        background-color: #f3f3f3;
        border-radius: 4px;
        overflow: hidden;
        .css-searcharea-icon {
            position: absolute;
            top: 10px;
            left: 11px;
            width: 15px;
            height: 15px;
            background-size: cover;
            background-image: url('../../images/searchicon.png');
        }
        .css-searcharea-input {
            width: 90%;
            padding: 10px 0;
            padding-left: 35px;
            background-color: #f3f3f3;
            outline: none;
            border: none;
        }
    }
    .css-mtnoticelist-main {
        .css-main-container {
            position: relative;
            overflow: hidden;
            background-color: #fff;
            .css-timeline-date {
                width: 56px;
                margin-left: 8px;
                @media (max-width: 350px) {
                    margin-left: 2px;
                }
                .css-left-datetime {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: .75rem;
                    position: relative;
                    margin-top: 1px;
                    padding: 2px 9px;
                    .right-arrowpop {
                        position: absolute;
                        top: 14px;
                        right: -7px;
                        z-index: 0;
                        width: 15px;
                        height: 15px;
                        border-right: 1px solid #ddd;
                        border-top: 1px solid #ddd;
                        background-color: #fff;
                        transform: rotate(45deg);
                        border-radius: 3px;
                    }
                }
            }
            &.first-container {
                .css-timeline-line {
                    top: 18px;
                    &:after {
                        top: -3px;
                    }
                    @media (max-width: 350px) {
                        top: 20px;
                        left: 71px;
                        &:after {
                            width: 5px;
                            height: 5px;
                        }
                    }
                }
            }
            &.last-container {
                .css-timeline-line {
                    height: 10%;
                }
            }
            .css-timeline-line {
                position: absolute;
                top: -1px;
                left: 82px;
                height: 100%;
                border: 2px solid #e7e7e7;
                &:after {
                    content: '';
                    position: absolute;
                    top: 16px;
                    left: -8px;
                    border-radius: 50px;
                    border: 3px solid #88b1ff;
                    width: 9px;
                    height: 9px;
                    display: block;
                    background-color: #fff;
                }
                @media (max-width: 350px) {
                    left: 71px;
                    &:after {
                        width: 5px;
                        height: 5px;
                        top: 18px;
                        left: -6px;
                    }
                }
            }
            .css-list-item {
                @media (max-width: 350px) {
                    width: 71%;
                    margin: 0 1% 26px 30px;
                } // @media (min-width: 425px) {
                //     width: 68%;
                // }
                width: 70%;
                margin: 0 0 26px 40px;
                position: relative;
                .left-arrowpop {
                    position: absolute;
                    top: 16px;
                    left: -8px;
                    z-index: 50;
                    width: 15px;
                    height: 15px;
                    border-left: 1px solid #ddd;
                    border-bottom: 1px solid #ddd;
                    background-color: #fff;
                    transform: rotate(45deg);
                    border-radius: 3px;
                }
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
                        @media (max-width: 350px) {
                            margin: 0 4%;
                        }
                        margin: 0 9%;
                        .inside-item {
                            @include flexbox();
                            padding-bottom: 13px;
                            &.css-list-item-main-info-time {
                                border-top: 1px solid #e7e7e7;
                                padding-top: 13px;
                            }
                            .leftdom {
                                @include flexboxwidth(1);
                                white-space: nowrap;
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
                        color: #9b9b9b;
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
                            color: #fff;
                            &:active {
                                background-color: #6097ff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div>
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="scroller" class="weui-tab css-mtnoticelist-page">
            <section class="css-loadmore-text">
                {{moreText}}
            </section>
            <div class="css-mtnoticelist-main">
                <section class="css-main-container clearfix" :class="{'first-container':index===0,'last-container':index===mtrData.length-1}" v-for="(mtr,index) in mtrData" :key="index">
                    <div class="css-timeline-date fl-l">
                        <div class="css-left-datetime">
                            <p>{{mtr.MtrTimeMD}}</p>
                            <p>{{mtr.DayOfWeek}}</p>
                            <span class="right-arrowpop"></span>
                        </div>
                    </div>
                    <div class="css-timeline-line fl-l"></div>
                    <div class="css-list-item fl-l">
                        <span class="left-arrowpop"></span>
                        <div class="css-list-item-main">
                            <span class="right-ribbon" :class="{'unaccept':mtr.mtrStatu===0||mtr.mtrStatu===2||mtr.mtrStatu===4}">{{mtr.mtrStatuText}}</span>
                            <div class="css-list-item-main-info">
                                <h3 class="css-list-item-main-title">{{mtr.Subject}}</h3>
                                <div v-on:click="toDetail(mtr.IsShowAttentdeesStat,index)">
                                    <div class="inside-item css-list-item-main-info-time">
                                        <span class="leftdom col9b">时间</span>
                                        <span class="rightdom">{{mtr.MtrTime}}</span>
                                    </div>
                                    <div class="inside-item">
                                        <span class="leftdom col9b">地点</span>
                                        <span class="rightdom">{{mtr.mtrListStr}}</span>
                                    </div>
                                    <div class="inside-item">
                                        <span class="leftdom col9b">人员</span>
                                        <span class="rightdom">{{mtr.UseStr}}</span>
                                    </div>
                                </div>
                                <div class="css-bottombar" v-if="mtr.mtrStatu===1">
                                    <div class="weui-btn css-bottombtn" v-on:click="cancelMt(mtr.ICalUid)">取消会议</div>
                                </div>
                                <div class="css-bottombar" v-if="mtr.mtrStatu===2">
                                    <div class="weui-btn css-bottombtn css-delinebtn" v-on:click="responseMeeting(mtr.ICalUid,false)">谢绝</div>
                                    <div class="weui-btn css-bottombtn css-acceptbtn" v-on:click="responseMeeting(mtr.ICalUid,true)">接受</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </scroller>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:isShowCancel="isShowCancel" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:cancel="nocancel()" v-on:confirm="agreeconfirm()" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import moment from 'moment';
import Scroller from '../scroll/index.vue';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';
import storageList from '../../config/storageList.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
// import service from '../../services/getMeetingNotificationList';
// import service1 from '../../services/postReplyMeetingInvitation';

export default {
    name: 'mtMineMeeting',
    components: {
        Scroller,
        loading,
        notice
    },
    mounted() {
        this.$moaapi.updateNavTitle('我的会议');
        //原生右上角菜单
        let _this = this;
        window.orderMtr = function() {
            _this.$router.push({ path: '/mtlocationselect' });
        }
        window.mineMtr = function() {
            _this.$router.push({ path: '/' });
        }
        window.searchMtr = function() {
            _this.$router.push({ path: '/mtsearchmtr' });
        }
        window.noticeSet = function() {
            _this.$router.push({ path: '/mtnoticeset' });
        }
        let list = '[{ "name": "预定会议", "action": "orderMtr()" }, { "name": "会议日程", "action": "mineMtr()" },{ "name": "搜索会议", "action": "searchMtr()" }, { "name": "会议通知设置", "action": "noticeSet()" }]';
        this.$moaapi.showListNavMenu(list);

        this.currentUserInfo = JSON.parse(localdata.getdata('currentUserData'));

        //清除详情页缓存
        localdata.removedata('mtrSelected');
        localdata.removedata('meetDetailView');
        // service.get(this.getMineMtr, this.$http, { currentDate: '2017-7-19', pageSize: 5, offset: 0, searchDirection: 1 }).then(data => {
        //     this.data = data.list
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

            todayTime: moment().format('YYYY-MM-DD'),//当天时间
            searchSubjectKey: '',//搜索关键字
            currentDate: '',//时间参数
            pageSize: 10,//一页返回条数
            offset: 0,//下页返回的第一个索引
            beforeOffset: 0,//上拉offset
            searchDirection: 1,//显示方向1 从上到下顺序 0从下到上倒序
            getMineMtr: urldata.basePath + urldata.SearchMyMeeting,//我的会议接口
            currentUserInfo: {},//当前用户信息
            mtrData: [],//会议室信息
            resultLen: 0,//会议室信息的长度
            moreText: '下拉查看以前会议'
        }
    },
    methods: {
        initData(url, obj, type) {
            //el.mtrStatu 0(已取消) 1(已预订) 2(未接受) 3(已接受) 4(已拒绝)
            this.$http.get(url, { params: obj }).then(res => {
                if (res.body.status === 200) {
                    this.resultLen = res.body.data.Meetings.length;

                    // this.pageloading = false;
                    if (type === 'reload') {
                        if (this.resultLen > 0) {
                            this.mtrData = res.body.data.Meetings.concat(this.mtrData);
                        } else {
                            this.$refs.scroller.finishPullToRefresh();
                            this.moreText = '没有更多了'
                        }
                    } else {
                        if (this.resultLen > 0) {
                            this.mtrData = this.mtrData.concat(res.body.data.Meetings);
                        }
                    }

                    if (this.resultLen === 0) {
                        this.$refs.scroller.finishInfinite(true)
                    } else {
                        this.$refs.scroller.finishInfinite(false)
                    }

                    this.mtrData.forEach(function(el) {
                        //时间
                        el.MtrTime = el.Start.split(' ')[0] + ' ' + el.Start.split(' ')[1].substr(0, el.Start.split(' ')[1].length - 3) + '-' + el.End.split(' ')[1].substr(0, el.End.split(' ')[1].length - 3);
                        el.MtrTimeMD = el.Start.split(' ')[0].substr(5);
                        //无会议地点
                        if (el.Resources.length === 0) {
                            el.Location.split('; ').forEach((elLocal) => {
                                el.Resources.push({ Name: elLocal });
                            })
                        }
                        //会议地点
                        if (!el.mtrListStr) {
                            el.Resources.forEach(function(elMtr) {
                                if (!el.mtrListStr) {
                                    el.mtrListStr = elMtr.Name;
                                } else {
                                    el.mtrListStr = el.mtrListStr + '/' + elMtr.Name;
                                }
                            }, this);
                        }
                        if (!el.UseStr) {
                            //拼接全部人
                            if (el.MyResponseType === 1) {
                                el.UseStr = el.Organizer.Name.split('[')[0];
                            }
                            if (!el.UseStr) {
                                el.RequiredAttendees.forEach(function(elreA) {

                                    if (elreA.ResponseType === null) {
                                        //判断是否来自email
                                        if (JSON.parse(elreA.Name).length !== 0) {
                                            JSON.parse(elreA.Name).forEach((elemail) => {
                                                el.UseStr = el.UseStr + '/' + elemail
                                            }, this)
                                        }
                                    } else {
                                        if (el.UseStr) {
                                            el.UseStr = el.UseStr + '/' + elreA.Name.split('[')[0];
                                        } else {
                                            el.UseStr = elreA.Name.split('[')[0];
                                        }
                                    }
                                }, this);
                                el.OptionalAttendees.forEach(function(elreA) {
                                    if (el.UseStr) {
                                        el.UseStr = el.UseStr + '/' + elreA.Name.split('[')[0];
                                    } else {
                                        el.UseStr = elreA.Name.split('[')[0];
                                    }
                                }, this);
                            } else {
                                el.RequiredAttendees.forEach(function(elreA) {

                                    if (elreA.ResponseType === null) {
                                        //判断是否来自email
                                        if (JSON.parse(elreA.Name).length !== 0) {
                                            JSON.parse(elreA.Name).forEach((elemail) => {
                                                el.UseStr = el.UseStr + '/' + elemail
                                            }, this)
                                        }
                                    } else {
                                        if (el.UseStr) {
                                            el.UseStr = el.UseStr + '/' + elreA.Name.split('[')[0];
                                        } else {
                                            el.UseStr = elreA.Name.split('[')[0];
                                        }
                                    }
                                }, this);
                                el.OptionalAttendees.forEach(function(elreA) {
                                    if (el.UseStr) {
                                        el.UseStr = el.UseStr + '/' + elreA.Name.split('[')[0];
                                    } else {
                                        el.UseStr = elreA.Name.split('[')[0];
                                    }
                                }, this);
                            }

                            if (el.MyResponseType === 1) {
                                el.mtrStatu = 1;
                                el.mtrStatuText = '已预订';
                            } else if (el.MyResponseType === 3) {
                                el.mtrStatu = 3;
                                el.mtrStatuText = '已接受';
                            } else if (el.MyResponseType === 4) {
                                el.mtrStatu = 4;
                                el.mtrStatuText = '已谢绝';
                            } else {
                                el.mtrStatu = 2;
                                el.mtrStatuText = '未接受';
                            }

                            if (!el.IsCancelled && el.Processing === 2) {
                                if (el.MyResponseType === 3 || el.MyResponseType === 4) {
                                    el.mtrStatu = 6;
                                } else {
                                    el.mtrStatuText = '进行中';
                                }

                            } else if (!el.IsCancelled && el.Processing === 3) {
                                el.mtrStatu = 6;
                                el.mtrStatuText = '已结束';
                            }

                            if (el.IsCancelled) {
                                el.mtrStatu = 0;
                                el.mtrStatuText = '已取消';
                            }

                        }
                    }, this);
                    // this.mtrData.MtrTime = this.mtrData.Start.split(' ')[0]+' '+this.mtrData.Start.split(' ')[1]+'-'+this.mtrData.End.split(' ')[1]
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                    this.pageloading = false;
                }
                //获取当前月的数据
                // this.initData(this.datetoday, res.body.data.UserEmail);
                // this.currentUserData = res.body.data;
                // localdata.setdata('currentUserData', JSON.stringify(res.body.data));
            }, error => {
                alert(error.body.errorMessage);
            })
        },
        refresh() {
            setTimeout(() => {
                // if (this.mtrData.length !== 0) {
                //     this.offset = this.offset + this.pageSize;
                // }
                // this.pageloading = true;

                let obj = { searchSubjectKey: this.searchSubjectKey, currentDate: this.todayTime, pageSize: this.pageSize, offset: this.beforeOffset, searchDirection: 0 };
                this.beforeOffset = this.beforeOffset + this.pageSize;
                this.initData(this.getMineMtr, obj, 'reload');
            }, 500)
        },
        infinite() {
            setTimeout(() => {
                if (this.mtrData.length !== 0) {
                    this.offset = this.offset + this.pageSize;
                }
                let obj = { searchSubjectKey: this.searchSubjectKey, currentDate: this.todayTime, pageSize: this.pageSize, offset: this.offset, searchDirection: this.searchDirection };
                this.initData(this.getMineMtr, obj);
            }, 500)
        },
        //跳转到详情
        toDetail(isInvite, index) {
            localdata.setdata('meetDetailView', JSON.stringify(this.mtrData[index]));
            localdata.setdata('isFromMintMtr', true);
            if (isInvite) {
                this.$router.push({ path: '/mtmeetdetailinvite' });
            } else {
                this.$router.push({ path: '/mtmeetdetailaccept' });
            }
        },
        //取消会议
        cancelMt(ICalUid) {
            this.curICalUid = ICalUid;
            this.isShowCancel = true;
            this.isShowerr = true;
            this.errinfo = '是否取消此次会议？';
        },
        //不取消
        nocancel() {
            this.isShowerr = false;
        },
        //取消后处理
        agreeconfirm() {
            this.isShowerr = false;
            this.pageloading = true;
            let ICalUid = { "ICalUid": this.curICalUid };
            this.$http.post(urldata.basePath + urldata.CancelMeeting, ICalUid).then(res => {
                if (res.body.status === 200) {
                    this.pageloading = false;
                    window.location.reload();
                    // this.$router.push({ path: '/' });
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                }
            }, error => {
                this.isShowCancel = false;
                this.isShowerr = true;
                this.errinfo = error.body.errorMessage;
            })
        },
        //取消会议
        // cancelMtr(ICalUid) {
        //     this.$http.post(urldata.basePath + urldata.CancelMeeting, { "ICalUid": ICalUid }).then(res => {
        //         if (res.body.status === 200) {
        //             // this.pageloading = false;
        //             // this.isShowerr = true;
        //             // this.errinfo = '取消成功';
        //             //清除本地存储已存在的数据
        //             this.clearStorage();
        //             this.$router.push({ path: '/' });
        //         } else {
        //             this.isShowerr = true;
        //             this.errinfo = res.body.errorMessage;
        //         }
        //     }, error => {
        //         alert(error.body.errorMessage);
        //     })
        // },
        //接受谢绝会议
        responseMeeting(ICalUid, accept) {
            let sendData = {
                "ICalUid": ICalUid,
                "IsAccept": accept
            }
            this.pageloading = true;
            this.isShowCancel = false;
            // this.$http.post('/mt/ResponseMeeting', this.sendData).then(res => {
            this.$http.post(urldata.basePath + urldata.ResponseMeeting, sendData).then(res => {
                if (res.status === 200) {
                    //清除本地存储已存在的数据
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
            }, error => {
                alert(error.body.errorMessage);
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
