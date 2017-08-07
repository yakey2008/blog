<style lang="scss" scoped>
//区域弹出 Start
// .css-curregion {
//     color: #308ee3;
// }
.css-selector-container {
    .css-mask {
        position: fixed;
        z-index: 501;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .css-selector-list {
        width: 100%;
        position: absolute;
        z-index: 501;
        top: 50px;
        background-color: #fff;
        max-height: 150px;
        overflow-y: scroll;
        .css-selector-item {
            position: relative;
            padding: 0 22px;
            height: 50px;
            line-height: 50px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &:after {
                content: " ";
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 1px;
                border-bottom: 1px solid #CCCCCC;
                color: #CCCCCC;
                -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
        }
    }
}

.css-nav-container.weui-navbar {
    z-index: 502;
    background-color: #fff;
    .css-select-region {
        padding-left: 8%;
        padding-right: 20%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}

//区域弹出 End
.weui-navbar:after {
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

.weui-navbar__item {
    margin: 13px 0;
    padding: 0;
    &:active {
        background-color: #fff;
    }
}

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
.arrow-right::before {
    content: '';
    position: absolute;
    right: 5%;
    top: 40%;
    width: 10px;
    height: 10px;
    border-top: solid 1px #d2d2d2;
    border-right: solid 1px #d2d2d2;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.css-mtlocation-page {
    background-color: #f6f7f8; //主体
    .weui-media-box__title {
        white-space: normal;
    }
    .css-nav-container {
        .select-btn {
            .css-arrow {
                position: absolute;
                right: 11px;
                top: 6px;
                display: inline-block;
                height: 8px;
                width: 8px;
                border-bottom: 1px solid #98989f;
                border-left: 1px solid #98989f;
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
                margin-left: 10px;
                margin-bottom: 3px;
            }
            .drop {
                top: 10px;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
                margin-bottom: -2px;
            }
        }
    }
    .css-main-container {
        .css-pageinfo-container {
            background-color: #fff; // position: absolute;
            // width: 100%;
            .css-pagesetting {
                background-color: #fff;
                margin-left: 5%;
                overflow: hidden;
                &.css-bottom-line {
                    border-bottom: 1px solid #e7e7e7;
                }
                .css-setting {
                    position: relative;
                    padding: 19px 0px;

                    .css-settime {
                        margin-left: 20px;
                        font-size: 1rem;
                        color: #4c8afe
                    }
                    .css-setname {
                        margin-left: 20px;
                        font-size: 1rem;
                        color: #333333
                    }
                }
            }
        }
        .css-tip {
            margin: 0 5%;
            color: #9b9b9b;
            font-size: .875rem;
            .weui-footer__text {
                font-size: 0.875rem;
                color: #9b9b9b
            }
        }
    } //底部bar
    .css-bottombar {
        height: 49px;
        background-color: #88b1ff;
        &.weui-tabbar:before {
            border: none;
            @include boxshadow(0, -7, 49, 0);
        }
        .css-maxwidth {
            width: 100%;
            .weui-cell__bd {
                .weui-footer__btn {
                    color: #fff;
                    text-align: center;
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>
<template>
    <div class="weui-tab css-mtlocation-page">
        <div class="weui-tab__panel">
            <div class="weui-tab">
                <div class="weui-navbar css-nav-container">
                    <div class="weui-navbar__item select-btn" v-on:click="showtime()">
                        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
                        <i class="css-arrow" :class="{drop:isShowtime}"></i>
                    </div>
                    <div class="weui-navbar__item select-btn" v-on:click="showregion()" :class="{'css-curregion':isShowregion}">
                        <div class="css-select-region">{{curRegion}}</div>
                        <i class="css-arrow" :class="{drop:isShowregion}"></i>
                    </div>
                </div>
                <div class="weui-tab__panel css-main-container">
                    <section>
                        <div class="css-pageinfo-container">
                            <div class="hr-div"></div>
                            <section class="css-pagesetting css-bottom-line">
                                <div class="weui-cell css-setting">
                                    <div class="weui-cell__hd">开始时间</div>
                                    <div class="weui-cell__bd">
                                        <input v-model="val_start" class="weui-input css-settime" pattern="[0-9]*" placeholder="请输入时间（时：分）">
                                    </div>
                                    <div :class="{'arrow-right':val_start.length>0}"></div>
                                </div>
                            </section>
                            <section class="css-pagesetting">
                                <div class="weui-cell css-setting">
                                    <div class="weui-cell__hd">结束时间</div>
                                    <div class="weui-cell__bd">
                                        <input v-model="val_end" class="weui-input css-settime" pattern="[0-9]*" placeholder="请输入时间（时：分）">
                                    </div>
                                    <div :class="{'arrow-right':val_end.length>0}"></div>
                                </div>
                            </section>
                            <!-- <section class="css-pagesetting">
                                                                                <div class="weui-cell weui-cell_switch css-setting weui-cell_access">
                                                                                    <div class="weui-cell__hd ">开始时间</div>
                                                                                    <div class="weui-cell__bd">
                                                                                        <input v-model="val_start" class="weui-input css-settime" pattern="[0-9]*" placeholder="请输入时间（时：分）">
                                                                                    </div>
                                                                                    <div :class="val_start.length>0?'weui-cell__ft':''"></div>
                                                                                </div>
                                                                            </section>
                                                                            <section class="css-pagesetting">
                                                                                <div class="weui-cell weui-cell_switch  css-setting weui-cell_access">
                                                                                    <div class="weui-cell__hd">结束时间</div>
                                                                                    <div class="weui-cell__bd">
                                                                                        <input v-model="val_end" class="weui-input css-settime" pattern="[0-9]*" placeholder="请输入时间（时：分）">
                                                                                    </div>
                                                    
                                                                                    <div :class="val_end.length>0?'weui-cell__ft':''"></div>
                                                                                </div>
                                                                            </section> -->
                            <div class="hr-div"></div>
                            <section class="css-pagesetting">
                                <div class="weui-cell css-setting">
                                    <div class="weui-cell__hd">会议室名称</div>
                                    <div class="weui-cell__bd">
                                        <input class="weui-input css-setname" pattern="[0-9]*" placeholder="请输入会议室名称">
                                    </div>
                                </div>
                            </section>
                            <div class="hr-div"></div>
    
                        </div>
    
                    </section>
                    <section class="css-tip">
                        <p class="weui-footer__text">搜索帮助：</p>
                        <p class="weui-footer__text">1、可用搜索指定时间段，空闲的会议室资源；</p>
                        <p class="weui-footer__text">2、可以通过会议室名称，快速找到会议室。</p>
                    </section>
                </div>
            </div>
        </div>
    
        <div class="weui-tabbar css-bottombar" v-on:click="searchEvt()">
            <div class="weui-cell css-maxwidth">
                <div class="weui-cell__bd">
                    <p class="weui-footer__btn">开始搜索</p>
                </div>
            </div>
        </div>
    
        <!-- 区域弹出 End -->
        <div class="css-selector-container" v-if="isShowregion">
            <div class="css-mask" v-on:click="showregion()"></div>
            <div class="css-selector-list">
                <div class="css-selector-item" v-for="item in tabVal" :key="item.Address" v-on:click="regionEvt(item)" :class="{'css-curregion':curRegionId===item.Address}" :curregionid="item.Address">{{item.Name}}</div>
            </div>
        </div>
        <!-- 区域弹出 Start -->
        <vue-timepicker></vue-timepicker>
    </div>
</template>
<script>
import myDatepicker from 'vue-datepicker';
import moment from 'moment';
import VueTimepicker from 'vue2-timepicker';
import urldata from '../../config/urldata.js';
export default {
    name: 'mtLocationSearch',
    components: {
        VueTimepicker,
        'date-picker': myDatepicker
    },
    mounted() {
        // this.$http.get('/mt/GetAllPosition').then(response => {
        this.$http.get(urldata.basePath + urldata.GetAllPosition).then(response => {
            if (response.status === 200) {
                this.tabVal = response.body.data;
            }
        })
        this.curRegion = 'Webex-云会议室列表';
        this.curRegionId = 'WebexCloudMeeting-room@vipshop.com';
    },
    data() {
        return {
            startTime: {
                time: moment().format('YYYY-MM-DD')
            },
            endtime: {
                time: ''
            },
            option: {
                type: 'day',
                week: ['一', '二', '三', '四', '五', '六', '日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD',
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default
            },
            timeoption: {
                type: 'min',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD HH:mm'
            },
            multiOption: {
                type: 'multi-day',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: "YYYY-MM-DD HH:mm"
            },
            limit: [],


            isShowregion: false,
            isShowtime: false,
            curRegion: '广州广新大厦',
            curRegionId: '',
            val_start: '09:00:00',
            val_end: '15:00:00',
            tabVal: [],
        }
    },
    methods: {
        //时间下拉并处理
        showtime() {
            this.isShowregion = false;
            if (this.isShowtime) {
                this.isShowtime = false;
            } else {
                this.isShowtime = true;
            }
        },
        //处理区域显示及选择
        showregion() {
            this.isShowtime = false;
            if (this.isShowregion) {
                this.isShowregion = false;
            } else {
                this.isShowregion = true;
            }
        },
        regionEvt(item) {
            this.curRegion = item.Name;
            this.curRegionId = item.Address;
            this.showregion();
        },
        searchEvt() {
            this.val_start = this.startTime.time + ' ' + this.val_start;
            this.val_end = this.startTime.time + ' ' + this.val_end;
            // this.$router.push({ path: `/mtlocationselect/${this.curRegionId}/${this.val_start}/${this.val_end}` });
            this.$router.push({ path: '/mtlocationselect', query: { searchregionid: this.curRegionId, starttime: this.val_start, endtime: this.val_end } });
        }
    }
}
</script>
