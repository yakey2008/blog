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
    .col9b {
        color: #9b9b9b;
    }
    background-color: #f6f7f8;
    .css-mtnoticelist-main {
        .css-main-container {
            .css-timeline-date {
                width: 56px;
                margin-left: 8px;
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
            .css-timeline-line {
                position: absolute;
                left: 81px;
                height: 100%;
                border: 2px solid #ddd;
                &::after {
                    width: 5px;
                    height: 5px;
                    background-color: #ccc;
                }
                @media (max-width: 340px) {
                    left: 73px;
                }
            }
            .css-list-item {
                @media (max-width: 340px) {
                    width: 71%;
                    margin: 0 1% 26px 24px;
                }
                @media (min-width: 425px) {
                    width: 68%;
                }
                width: 65%;
                margin: 0 7% 26px 40px;
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
                        @media (max-width: 340px) {
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
    <div class="weui-tab css-mtnoticelist-page">
        <section>
            <input type="text">
        </section>
        <div class="css-mtnoticelist-main">
            <section class="css-main-container clearfix">
                <div class="css-timeline-date fl-l">
                    <div class="css-left-datetime">
                        <p>10-10</p>
                        <p>星期三</p>
                        <span class="right-arrowpop"></span>
                    </div>
                </div>
                <div class="css-timeline-line fl-l"></div>
                <div class="css-list-item fl-l">
                    <span class="left-arrowpop"></span>
                    <div class="css-list-item-main">
                        <span class="right-ribbon">已接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">部门例会是主题</h3>
                            <div class="inside-item css-list-item-main-info-time">
                                <span class="leftdom col9b">时间</span>
                                <span class="rightdom">2017/6/18 12:00-15:00</span>
                            </div>
                            <div class="inside-item">
                                <span class="leftdom col9b">地点</span>
                                <span class="rightdom">广新5楼休息区</span>
                            </div>
                            <div class="inside-item">
                                <span class="leftdom col9b">人员</span>
                                <span class="rightdom">狂三/李四/张五/时六啊/超数字...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="css-main-container clearfix">
                <div class="css-timeline-date fl-l">
                    <div class="css-left-datetime">
                        <p>6-10</p>
                        <p>星期三</p>
                        <span class="right-arrowpop"></span>
                    </div>
                </div>
                <div class="css-timeline-line fl-l"></div>
                <div class="css-list-item fl-r">
                    <span class="left-arrowpop"></span>
                    <div class="css-list-item-main">
                        <span class="right-ribbon">已预定</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">部门例会是主题</h3>
                            <div class="inside-item css-list-item-main-info-time">
                                <span class="leftdom col9b">时间</span>
                                <span class="rightdom">2017/6/18 12:00-15:00</span>
                            </div>
                            <div class="inside-item">
                                <span class="leftdom col9b">地点</span>
                                <span class="rightdom">广新5楼休息区</span>
                            </div>
                            <div class="inside-item">
                                <span class="leftdom col9b">人员</span>
                                <span class="rightdom">狂三/李四/张五/时六啊/超数字...</span>
                            </div>
                            <div class="css-bottombar">
                                <div class="weui-btn css-bottombtn">取消会议</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="css-main-container clearfix">
                <div class="css-timeline-date fl-l">
                    <div class="css-left-datetime">
                        <p>6-10</p>
                        <p>星期三</p>
                        <span class="right-arrowpop"></span>
                    </div>
                </div>
                <div class="css-timeline-line fl-l"></div>
                <div class="css-list-item fl-r">
                    <span class="left-arrowpop"></span>
                    <div class="css-list-item-main">
                        <span class="right-ribbon unaccept">未接受</span>
                        <div class="css-list-item-main-info">
                            <h3 class="css-list-item-main-title">部门例会是主题</h3>
                            <div class="inside-item css-list-item-main-info-time">
                                <span class="leftdom col9b">时间</span>
                                <span class="rightdom">2017/6/18 12:00-15:00</span>
                            </div>
                            <div class="inside-item">
                                <span class="leftdom col9b">地点</span>
                                <span class="rightdom">广新5楼休息区</span>
                            </div>
                            <div class="inside-item">
                                <span class="leftdom col9b">人员</span>
                                <span class="rightdom">狂三/李四/张五/时六啊/超数字...</span>
                            </div>
                            <div class="css-bottombar">
                                <div class="weui-btn css-bottombtn css-delinebtn">谢绝</div>
                                <div class="weui-btn css-bottombtn css-acceptbtn">接受</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import weui from '../../lib/js/weui.min.js';
import moment from 'moment';
import VueRouter from 'vue-router';
import routes from '../../routes/routes.js';

const router = new VueRouter({
    routes
})

export default {
    mounted() {

    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
