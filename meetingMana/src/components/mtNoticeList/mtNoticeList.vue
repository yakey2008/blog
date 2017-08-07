<template>
    <div>
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="scroller" class="css-mtnoticelist-page">
            <div v-for="item in data" :key="item.ID">
                <div v-if="item.DisplayType == 1 && item.MeetingResponseType == 3" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main">
                        <span class="right-ribbon">已接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject}}</h3>
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
                <div v-if="item.DisplayType == 1 && item.MeetingResponseType == 4" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">已谢绝</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject}}</h3>
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
                <div v-if="item.DisplayType == 1 && item.MeetingResponseType == 0" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">未接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">{{item.Subject}}</h3>
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
                            <div class="css-bottombar">
                                <div class="weui-btn css-bottombtn css-delinebtn" @click="respoMeeting(item, false)">谢绝</div>
                                <div class="weui-btn css-bottombtn css-acceptbtn" @click="respoMeeting(item, true)">接受</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  v-if="item.DisplayType == 2" class="css-list-item">
                    <p class="css-list-item-time col9b">{{item.CreateTime}}</p>
                    <div class="css-list-item-main bgcolor">
                        <div class="css-list-item-main-info">{{item.Subject}}</div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
import Scroller from '../scroll/index.vue'
import service from '../../services/getMeetingNotificationList'
import service1 from '../../services/postReplyMeetingInvitation'

export default {
    name: 'mtNoticeList',
    components: {
      Scroller
    },
    mounted() {
 service.init()
    },
    data() {
        return {
            data: []
        }
    },
    methods: {
      refresh () {
        setTimeout(() => {
          service.reload(this.$http, {}).then(data => {
            this.data = data.list
            this.$refs.scroller.finishPullToRefresh()
          }, status => {
            this.$refs.scroller.finishPullToRefresh()
          })
        })
      },
      infinite () {
        setTimeout(() => {
          service.get(this.$http, {}).then(data => {
            this.data = data.list
            this.$refs.scroller.finishInfinite(!data.hasMore)
          }, status => {
            this.$refs.scroller.finishInfinite(true)
          })
        }, 500)
      },
      respoMeeting (meeting,accept) {
        service1.post(this.$http, {iCalUid: meeting.ICalUid, isAccept: accept}).then(data => {
           meeting.MeetingResponseType = accept ? 3:4
        }, status => {
           console.log(status)
        })
      }
    }
}
</script>

<style lang="scss">
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
    height:100%;
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
                        @include flexboxwidth(5);
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
            .css-list-item-main-title {
                font-size: 1.125rem;
                height: 50px;
                line-height: 50px;
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
