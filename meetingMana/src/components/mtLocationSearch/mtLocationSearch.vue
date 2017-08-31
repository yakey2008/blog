<style lang="scss" scoped>
//区域弹出 Start
.css-curregion {
    color: #308ee3;
}

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
            &.css-curregion {
                color: #308ee3;
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
        .weui-navbar__item {
            width: 50%; // padding: 0;
            // margin: 13px 0;
            &:active {
                background-color: #fff; // .cov-datepicker {
                //     background-color: #EDEDED!important;
                // }
            }
        }
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
    } //timepicker
    .css-timepicker {
        @include flexbox();
        .css-timepicker-box {
            @include flexboxwidth(1);

            ul {
                height: 100px;
                overflow-y: scroll;
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
                    <div class="weui-navbar__item select-btn">
                        <date-picker :date="startTime" :option="option" :limit="limit" v-on:showpicker="showtime()" v-if="isPicker"></date-picker>
                        <div v-if="!isPicker" v-on:click="showtime()">{{formatToWeek(startTime.time)}}</div>
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
                                    <div class="weui-cell__bd" v-on:click="takeStartTime(1)">
                                        <input v-model="hourVal" class="weui-input css-settime" pattern="[0-9]*" placeholder="请选择开始时间" readonly="readonly">
                                    </div>
                                    <div :class="{'arrow-right':hourVal.length>0}"></div>
                                </div>
                            </section>
                            <section class="css-pagesetting">
                                <div class="weui-cell css-setting">
                                    <div class="weui-cell__hd">结束时间</div>
                                    <div class="weui-cell__bd" v-on:click="takeStartTime(2)">
                                        <input v-model="minuteVal" class="weui-input css-settime" pattern="[0-9]*" placeholder="请选择结束时间" readonly="readonly">
                                    </div>
                                    <div :class="{'arrow-right':minuteVal.length>0}"></div>
                                </div>
                            </section>
                            <div class="hr-div"></div>
                            <section class="css-pagesetting">
                                <div class="weui-cell css-setting">
                                    <div class="weui-cell__hd">会议室名称</div>
                                    <div class="weui-cell__bd">
                                        <input class="weui-input css-setname" placeholder="请输入会议室名称" v-model="MtrName">
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
                    <div class="css-selector-item" v-for="(item,index) in tabVal" :key="index" v-on:click="regionEvt(item)" :class="{'css-curregion':curRegionId===item.Address}" :curregionid="item.Address">{{item.Name}}</div>
                </div>
            </div>
        </div>
        <!-- 区域弹出 Start -->
        <!-- time picker pop -->
        <div v-if="isShowTimepicker">
            <div class="weui-mask" v-on:click="closeTimpicker()"></div>
            <div class="weui-dialog css-timepicker">
                <div class="css-timepicker-box">
                    <div>小时</div>
                    <ul id="js-hours">
                        <li v-for="(hours,index) in timepickerArr.hours" :key="index" v-on:click="takehour(hours)">{{hours}}</li>
                    </ul>
                </div>
                <div class="css-timepicker-box">
                    <div>分钟</div>
                    <ul>
                        <li v-for="(minutes,index) in timepickerArr.minutes" :key="index" v-on:click="takeminute(minutes)">{{minutes}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- time picker pop -->
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
import myDatepicker from '../vue-datepicker/vue-datepicker.vue';
import moment from 'moment';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';

export default {
    name: 'mtLocationSearch',
    components: {
        loading,
        notice,
        'date-picker': myDatepicker
    },
    mounted() {
        setTimeout(() => {
            this.$moaapi.resetNavTitle();
            this.$moaapi.updateNavTitle('搜索会议室');
            this.$moaapi.hideNavMenu();
        }, 100)

        this.today = +new Date(moment().format('YYYY/MM/DD'));
        // this.weekDate = moment(this.startTime.time).format('MM-DD dddd');
        // this.$http.get('/mt/GetAllPosition').then(response => {
        this.$http.get(urldata.basePath + urldata.GetAllPosition).then(response => {
            if (response.status === 200) {
                this.tabVal = response.body.data;
            }
        })
        if (localdata.getdata('curRegion')) {
            this.curRegion = localdata.getdata('curRegion');
            this.curRegionId = localdata.getdata('curRegionId');
        }

    },
    data() {
        return {
            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            today: '',//当天
            // weekDate: '',

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
                format: 'YYYY-M-D',
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default
            },
            // timeoption: {
            //     type: 'min',
            //     week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            //     month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            //     format: 'YYYY-MM-DD HH:mm'
            // },
            // multiOption: {
            //     type: 'multi-day',
            //     week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            //     month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            //     format: "YYYY-MM-DD HH:mm"
            // },
            limit: [],


            isShowregion: false,
            isShowtime: false,
            curRegion: '请选择',
            curRegionId: '',
            isShowTimepicker: false,//是否显示时间选择
            timePickerType: undefined,//选择时间开始 还是结束
            timepickerArr: {
                hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                minutes: ["00", "15", "30", "45"]
            },//时间选择数据
            startHour: '00',
            startMinute: '00',
            endHour: '00',
            endMinute: '00',
            hourVal: moment().format('HH')+':00',
            minuteVal:moment().format('HH')+':00',
            MtrName: '',//会议室名称
            tabVal: [],
            isPicker: true,//是否使用时间组件
        }
    },
    methods: {
        formatToWeek(val) {
            return moment(val).format('M月D日 ddd');
        },
        swichTimeDom() {
            this.isPicker = true;
        },
        //时间下拉并处理
        showtime() {
            this.isShowregion = false;
            if (this.isShowtime) {
                this.isShowtime = false;
            } else {
                this.isShowtime = true;
            }
        },
        //处理区域显示
        showregion() {
            this.isPicker = true;
            if (this.isShowregion) {
                this.isShowregion = false;
            } else {
                if (this.isShowtime) {
                    this.isPicker = false;
                }
                let _this = this;
                setTimeout(() => {
                    _this.isPicker = true;
                }, 100)
                this.isShowregion = true;
            }
            this.isShowtime = false;
        },
        regionEvt(item) {
            this.curRegion = item.Name;
            this.curRegionId = item.Address;
            this.showregion();
        },
        //定位当前时间
        setTimePostion() {
            let top = 0;
            this.timepickerArr.hours.forEach((el, index) => {
                if (moment().format('HH') === el) {
                    top = 25 * index;
                }
            }, this)
            document.querySelector('#js-hours').scrollTop = top;
        },
        //选择开始时间
        takeStartTime(type) {
            this.isShowTimepicker = true;
            //type 1 开始 2结束
            this.timePickerType = type;
            setTimeout(() => {
                this.setTimePostion();
            }, 0)
        },
        takehour(val) {

            if (this.timePickerType === 1) {
                this.startHour = val;
                this.hourVal = this.startHour + ':' + this.startMinute;
            } else {
                this.endHour = val;
                this.minuteVal = this.endHour + ':' + this.endMinute;
            }
        },
        takeminute(val) {
            if (this.timePickerType === 1) {
                this.startMinute = val;
                this.hourVal = this.startHour + ':' + this.startMinute;
            } else {
                this.endMinute = val;
                this.minuteVal = this.endHour + ':' + this.endMinute;
            }
            this.isShowTimepicker = false;
        },
        //发起搜索
        searchEvt() {
            let selectedTime = +moment(this.startTime.time);
            if (selectedTime < this.today) {
                this.isShowerr = true;
                this.errinfo = '不可以选择今天之前的日期';
            } else {
                let now = +new Date();
                let stTime = this.startTime.time + ' ' + this.hourVal;
                let edTime = this.startTime.time + ' ' + this.minuteVal;
                let stStemp = +moment(stTime);
                let edStemp = +moment(edTime);

                if (stStemp === edStemp) {
                    this.isShowerr = true;
                    this.errinfo = '不可选择相同时间';
                } else if (stStemp < now) {
                    this.isShowerr = true;
                    this.errinfo = '不可选择当前时间之前的时间';
                } else if (edStemp < now) {
                    this.isShowerr = true;
                    this.errinfo = '不可选择当前时间之前的时间';
                } else if (stStemp > edStemp) {
                    this.isShowerr = true;
                    this.errinfo = '开始时间不可晚于结束时间';
                } else if ((+moment(edTime)) - (+moment(stTime)) <= 60 * 15 * 1000) {
                    this.isShowerr = true;
                    this.errinfo = '查询时间段最小为30分钟';
                } else {
                    // this.$router.push({ path: `/mtlocationselect/${this.curRegionId}/${this.val_start}/${this.val_end}` });
                    this.$router.push({ path: '/mtlocationselect', query: { searchregionid: this.curRegionId, starttime: stTime, endtime: edTime, roomName: this.MtrName } });
                    // this.showregion();
                }
            }
        },
        closeTimpicker() {
            this.isShowTimepicker = false;
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
        }
    }
}
</script>
