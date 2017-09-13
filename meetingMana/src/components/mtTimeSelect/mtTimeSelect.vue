<style lang="scss" scoped>
div {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.css-mttime-page {
    &>.weui-tab__panel {
        padding-bottom: 64px;
    }
    .weui-navbar:after {
        border-bottom: none;
    }
    .weui-tab {
        overflow: hidden;
    }
    .css-nav-container {
        position: fixed;
        padding: 7px;
        padding-left: 22px;
        background-color: #fff;
        -webkit-flex-direction: column;
        flex-direction: column;
        .location-info {
            font-size: 14px;
            padding: 7px 0;
            padding-right: 20px;
            .css-locaticon {
                width: 10px;
                height: 14px;
                background-size: cover;
                display: block;
                float: left;
                margin-right: 5px;
                margin-top: 4px;
                img {
                    width: 100%;
                }
            }
        }
    }

    .css-main-container {
        .weui-cells {
            margin: 0;
            position: absolute;
            width: 100%;
            &.css-ctrl-day {
                position: fixed;
            }
        }
        .weui-cells:before {
            border: none;
        }
        .weui-cells:after {
            border: none;
        }
        .weui-cell:before {
            border: none;
        }
        .css-take-oneday {
            position: relative;
            width: 20%;
            color: #585c64;
            font-size: .875rem;
            .css-onday-text {
                width: 75%;
                display: inline-block;
            }
            &.css-align-left {
                text-align: left;
            }
            &.css-align-right {
                text-align: right;
            }
        }
        .css-align-center {
            text-align: center;
        }
        .css-timeline {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            padding-top: 55px;
            .css-timeline-datetime {
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                flex: 1;
                .css-timeline-hours {
                    position: relative;
                    height: 103px;
                    border-top: 2px solid #e7e7e7;
                    z-index: -1;
                    &.margint26 {
                        margin-top: 26px;
                    }
                    &.height26 {
                        height: 26px;
                    }
                    .css-timeline-hours-text {
                        position: absolute;
                        top: -14px;
                        display: block;
                        background-color: #f6f7f8;
                        width: 90%;
                        text-align: center;
                    }
                }
            }
            .css-timeline-ordered {
                -webkit-box-flex: 3;
                -webkit-flex: 3;
                flex: 3;
                .css-pageinfo {
                    background-color: #fff;
                    border-left: 1px solid #e7e7e7;
                    border-bottom: 1px solid #e7e7e7;
                    .selected-box {
                        height: 25px;
                        line-height: 25px;
                        border-top: 1px solid #e7e7e7;
                        color: #fff;
                        padding-left: 10px;
                        font-size: .875rem;
                        &.bordertw2 {
                            border-top-width: 2px;
                        }
                    }

                    .selected {
                        background-color: #7ba9ff;
                    }
                    .passed {
                        // background-color: #f7f7f7;
                        background-color: #f0f0f0;
                    }
                    .ordered {
                        background-color: #ffbb41;
                    }
                }
            }
        }
    } //底部bar
    .css-bottombar {
        position: fixed;
        bottom: 0;
        background-color: #fff;
        &.weui-tabbar:before {
            border: none;
        }
        .css-maxwidth {
            width: 100%;
            font-size: .875rem;
            .weui-cell__bd .weui-input {
                padding-left: 15%;
                width: 85%;
            }
            .css-col9b {
                color: #9b9b9b;
            }
            .css-col4c8 {
                color: #4c8afe;
            }
            .css-next-step {
                background-color: #88b1ff;
                font-size: .9rem;
                height: 36px;
                width: 75px;
                border-radius: 4px;
            }
        }
    }
}
</style>
<template>
    <div class="weui-tab css-mttime-page">
        <div class="weui-tab__panel">
            <div class="weui-tab">
                <div class="weui-navbar css-nav-container" id="js-locationbox">
                    <div v-if="!mtrSelected.isDIYResource">
                        <p class="location-info" v-for="(mtr,index) in mtrSelected.mtrList" :key="index">
                            <i class="css-locaticon" v-bind:style="{backgroundImage:'url('+locaticonpng+')'}">
                            </i>{{mtr.mtrName}}</p>
                    </div>
                    <p class="location-info" v-if="mtrSelected.isDIYResource">
                        <i class="css-locaticon" v-bind:style="{backgroundImage:'url('+locaticonpng+')'}">
                        </i>{{mtrSelected.mtrList[mtrSelected.mtrList.length-1].mtrName}}</p>
                </div>
                <div class="weui-tab__panel css-main-container" id="js-mainheight">
                    <section class="weui-cells css-ctrl-day">
                        <div class="hr-div"></div>
                        <div class="weui-cell">
                            <div class="css-take-oneday css-align-right" v-on:click="preday()">
                                <i class="arrow-left icon"></i>
                                <span class="css-onday-text">前一天</span>
                            </div>
                            <div class="weui-flex__item css-align-center" v-if="!mtrSelected.isDIYResource">
                                {{formatToWeek(mtrSelected.dateTime)}}
                            </div>
                            <div class="weui-flex__item css-align-center" v-if="mtrSelected.isDIYResource">
                                {{formatToWeek(mtrSelected.dateTime)}}
                            </div>
                            <div class="css-take-oneday css-align-left" v-on:click="nextday()">
                                <span class="css-onday-text">后一天</span>
                                <i class="arrow-right icon"></i>
                            </div>
                        </div>
                    </section>
                    <div class="css-timeline">
                        <aside class="css-timeline-datetime">
                            <div class="css-timeline-hours" v-for="(time,index) in initDatetime" :key="index" :class="[index===0?'margint26':'',index===initDatetime.length-1?'height26':'']">
                                <span class="css-timeline-hours-text">{{time}}</span>
                            </div>
                        </aside>
                        <section class="css-timeline-ordered">
                            <div class="css-pageinfo">
                                <div class="selected-box passed"></div>
                                <div class="selected-box" v-for="(item,index) in matchAllTimezone" :key="index" v-on:click="selectedevent(index)" :class="[item.selected?'selected':'',item.ordered?'ordered':'',item.passed?'passed':'',index%4===0?'bordertw2':'']">{{item.Name}}</div>
                                <div class="selected-box bordertw2 passed"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-tabbar css-bottombar">
            <div class="weui-cell css-maxwidth">
                <div class="weui-cell__bd">
                    <p class="css-col9b">请点击条格选择（每格为15分钟）</p>
                    <p>开始时间&nbsp;
                        <span class="css-col4c8">
                            <span>{{startTime}}</span>
                        </span>&nbsp;&nbsp;结束时间&nbsp;
                        <span class="css-col4c8">
                            <span>{{endTime}}</span>
                        </span>
                    </p>
                </div>
                <div class="weui-cell__ft">
                    <!-- <router-link :to="'/mtlaunchmeet'" tag="div"> -->
                    <button class="weui-btn css-next-step" v-on:click="tolaunchPage()">下一步</button>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
import moment from 'moment';
import locaticonpng from '../../images/locaticon.png';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';

moment.locale('zh-cn');

export default {
    name: 'mtTimeSelect',
    components: {
        loading,
        notice
    },
    created() {
        if (localdata.getdata('DIYResource')) {
            this.mtrSelected = JSON.parse(localdata.getdata('DIYResource'));
            // this.mtrSelected.weekDateTime = moment(this.mtrSelected.dateTime).format('YYYY-MM-DD ddd');
        }
        if (localdata.getdata('mtrSelected')) {
            this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
            // this.mtrSelected.weekDateTime = moment(this.mtrSelected.dateTime).format('YYYY-MM-DD ddd');
            if (!localdata.getdata('isFromTimeModify')) {
                this.mtrSelected.mtrList[0].isAdded = false;
            }
            localdata.setdata('mtrSelected', JSON.stringify(this.mtrSelected));
        }


    },
    mounted() {
        setTimeout(() => {
            this.$moaapi.resetNavTitle();
            this.$moaapi.updateNavTitle('选择时间');
            this.$moaapi.hideNavMenu();
        }, 100)

        this.today = +new Date(moment().format('YYYY/MM/DD'));

        this.initTimeSatus(this.mtrSelected.dateTime);
        if (!this.mtrSelected.isDIYResource) {
            // this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=2017-08-10&roomListAddress=' + localdata.getdata('curRegionId'));
            this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'));
        }


        //兼容iphone5c
        document.querySelector('html').style.height = 'auto';
        document.querySelector('body').style.height = 'auto';

        //定位到当前时间
        this.matchAllTimezone.forEach((el, index) => {
            if (el.value === moment().format('HH') + ':00') {
                // document.querySelector('#js-mainheight').scrollTop = 25 * index;
                document.body.scrollTop = 25 * index;
            }
        }, this)

        // document.querySelector('.css-timeline').style.height = window.innerHeight+'px';
        document.querySelector('#js-mainheight').style.paddingTop = document.querySelector('#js-locationbox').scrollHeight;
    },
    destroyed() {
        document.querySelector('html').removeAttribute('style');
        document.querySelector('body').removeAttribute('style');
    },
    data() {
        return {
            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            today: '',//当天
            // curdate: '',
            // selectedBox: [],
            firstIndex: undefined,//选中的时间区第一个索引
            endIndex: undefined,//选中的时间区最后一个索引
            isShowregion: false,
            isShowtime: false,
            isNodata: false,
            isShowtab: true,
            // initTimenum: 96,//预定格数量
            initDatetime: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],//所有时间区域
            // matchTimezonCopy: [],//区域默认副本
            matchAllTimezone: [{ "value": "00:00", "selected": false, "ordered": false, "passed": false }, { "value": "00:15", "selected": false, "ordered": false, "passed": false }, { "value": "00:30", "selected": false, "ordered": false, "passed": false }, { "value": "00:45", "selected": false, "ordered": false, "passed": false }, { "value": "01:00", "selected": false, "ordered": false, "passed": false }, { "value": "01:15", "selected": false, "ordered": false, "passed": false }, { "value": "01:30", "selected": false, "ordered": false, "passed": false }, { "value": "01:45", "selected": false, "ordered": false, "passed": false }, { "value": "02:00", "selected": false, "ordered": false, "passed": false }, { "value": "02:15", "selected": false, "ordered": false, "passed": false }, { "value": "02:30", "selected": false, "ordered": false, "passed": false }, { "value": "02:45", "selected": false, "ordered": false, "passed": false }, { "value": "03:00", "selected": false, "ordered": false, "passed": false }, { "value": "03:15", "selected": false, "ordered": false, "passed": false }, { "value": "03:30", "selected": false, "ordered": false, "passed": false }, { "value": "03:45", "selected": false, "ordered": false, "passed": false }, { "value": "04:00", "selected": false, "ordered": false, "passed": false }, { "value": "04:15", "selected": false, "ordered": false, "passed": false }, { "value": "04:30", "selected": false, "ordered": false, "passed": false }, { "value": "04:45", "selected": false, "ordered": false, "passed": false }, { "value": "05:00", "selected": false, "ordered": false, "passed": false }, { "value": "05:15", "selected": false, "ordered": false, "passed": false }, { "value": "05:30", "selected": false, "ordered": false, "passed": false }, { "value": "05:45", "selected": false, "ordered": false, "passed": false }, { "value": "06:00", "selected": false, "ordered": false, "passed": false }, { "value": "06:15", "selected": false, "ordered": false, "passed": false }, { "value": "06:30", "selected": false, "ordered": false, "passed": false }, { "value": "06:45", "selected": false, "ordered": false, "passed": false }, { "value": "07:00", "selected": false, "ordered": false, "passed": false }, { "value": "07:15", "selected": false, "ordered": false, "passed": false }, { "value": "07:30", "selected": false, "ordered": false, "passed": false }, { "value": "07:45", "selected": false, "ordered": false, "passed": false }, { "value": "08:00", "selected": false, "ordered": false, "passed": false }, { "value": "08:15", "selected": false, "ordered": false, "passed": false }, { "value": "08:30", "selected": false, "ordered": false, "passed": false }, { "value": "08:45", "selected": false, "ordered": false, "passed": false }, { "value": "09:00", "selected": false, "ordered": false, "passed": false }, { "value": "09:15", "selected": false, "ordered": false, "passed": false }, { "value": "09:30", "selected": false, "ordered": false, "passed": false }, { "value": "09:45", "selected": false, "ordered": false, "passed": false }, { "value": "10:00", "selected": false, "ordered": false, "passed": false }, { "value": "10:15", "selected": false, "ordered": false, "passed": false }, { "value": "10:30", "selected": false, "ordered": false, "passed": false }, { "value": "10:45", "selected": false, "ordered": false, "passed": false }, { "value": "11:00", "selected": false, "ordered": false, "passed": false }, { "value": "11:15", "selected": false, "ordered": false, "passed": false }, { "value": "11:30", "selected": false, "ordered": false, "passed": false }, { "value": "11:45", "selected": false, "ordered": false, "passed": false }, { "value": "12:00", "selected": false, "ordered": false, "passed": false }, { "value": "12:15", "selected": false, "ordered": false, "passed": false }, { "value": "12:30", "selected": false, "ordered": false, "passed": false }, { "value": "12:45", "selected": false, "ordered": false, "passed": false }, { "value": "13:00", "selected": false, "ordered": false, "passed": false }, { "value": "13:15", "selected": false, "ordered": false, "passed": false }, { "value": "13:30", "selected": false, "ordered": false, "passed": false }, { "value": "13:45", "selected": false, "ordered": false, "passed": false }, { "value": "14:00", "selected": false, "ordered": false, "passed": false }, { "value": "14:15", "selected": false, "ordered": false, "passed": false }, { "value": "14:30", "selected": false, "ordered": false, "passed": false }, { "value": "14:45", "selected": false, "ordered": false, "passed": false }, { "value": "15:00", "selected": false, "ordered": false, "passed": false }, { "value": "15:15", "selected": false, "ordered": false, "passed": false }, { "value": "15:30", "selected": false, "ordered": false, "passed": false }, { "value": "15:45", "selected": false, "ordered": false, "passed": false }, { "value": "16:00", "selected": false, "ordered": false, "passed": false }, { "value": "16:15", "selected": false, "ordered": false, "passed": false }, { "value": "16:30", "selected": false, "ordered": false, "passed": false }, { "value": "16:45", "selected": false, "ordered": false, "passed": false }, { "value": "17:00", "selected": false, "ordered": false, "passed": false }, { "value": "17:15", "selected": false, "ordered": false, "passed": false }, { "value": "17:30", "selected": false, "ordered": false, "passed": false }, { "value": "17:45", "selected": false, "ordered": false, "passed": false }, { "value": "18:00", "selected": false, "ordered": false, "passed": false }, { "value": "18:15", "selected": false, "ordered": false, "passed": false }, { "value": "18:30", "selected": false, "ordered": false, "passed": false }, { "value": "18:45", "selected": false, "ordered": false, "passed": false }, { "value": "19:00", "selected": false, "ordered": false, "passed": false }, { "value": "19:15", "selected": false, "ordered": false, "passed": false }, { "value": "19:30", "selected": false, "ordered": false, "passed": false }, { "value": "19:45", "selected": false, "ordered": false, "passed": false }, { "value": "20:00", "selected": false, "ordered": false, "passed": false }, { "value": "20:15", "selected": false, "ordered": false, "passed": false }, { "value": "20:30", "selected": false, "ordered": false, "passed": false }, { "value": "20:45", "selected": false, "ordered": false, "passed": false }, { "value": "21:00", "selected": false, "ordered": false, "passed": false }, { "value": "21:15", "selected": false, "ordered": false, "passed": false }, { "value": "21:30", "selected": false, "ordered": false, "passed": false }, { "value": "21:45", "selected": false, "ordered": false, "passed": false }, { "value": "22:00", "selected": false, "ordered": false, "passed": false }, { "value": "22:15", "selected": false, "ordered": false, "passed": false }, { "value": "22:30", "selected": false, "ordered": false, "passed": false }, { "value": "22:45", "selected": false, "ordered": false, "passed": false }, { "value": "23:00", "selected": false, "ordered": false, "passed": false }, { "value": "23:15", "selected": false, "ordered": false, "passed": false }, { "value": "23:30", "selected": false, "ordered": false, "passed": false }, { "value": "23:45", "selected": false, "ordered": false, "passed": false }],//15分一格的区域
            initTimeitem: [],//是否选中true false
            mtrSelected: {},//会议室id 索引 选择的时间
            pageOrderedTime: [],//会议室已定时间
            takeSelectedTime: [],//选中的时间
            startTime: '--:--',//选中的开始时间
            endTime: '--:--',//选中的结束时间
            locaticonpng
        }
    },
    methods: {
        formatToWeek(val) {
            return moment(+new Date(val)).format('M月D日 ddd');
        },
        initTimeSatus(time) {
            //已过时间标记
            let now = +new Date();
            if (this.mtrSelected.isDIYResource) {
                this.matchAllTimezone.forEach((el, i) => {
                    if (now > +new Date(time + ' ' + el.value)) {
                        el.passed = true;
                        el.selected = false;
                    } else {
                        el.passed = false;
                    }
                }, this)
            } else if (localdata.getdata('isFromModified')) {
                this.matchAllTimezone.forEach((el, i) => {
                    if (now > +new Date(time + ' ' + el.value)) {
                        el.passed = true;
                        el.selected = false;
                    } else {
                        el.passed = false;
                    }
                }, this)
            } else {
                this.matchAllTimezone.forEach((el, i) => {
                    if (now > +new Date(time + ' ' + el.value)) {
                        el.passed = true;
                        el.selected = false;
                    } else {
                        el.passed = false;
                    }
                }, this)

                // for (let i = 0; i < this.initTimenum; i++) {
                //     this.selectedBox.push({ value: i, selected: false })
                // }
                // this.ajaxMtrStatu('/mt/GetRoomsStatus?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'));

                // this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus+'?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'));
            }
        },
        //根据会议室Id获取会议室方法
        ajaxMtrStatu(url, type) {
            this.pageloading = true;
            this.matchAllTimezone = [{ "value": "00:00", "selected": false, "ordered": false, "passed": false }, { "value": "00:15", "selected": false, "ordered": false, "passed": false }, { "value": "00:30", "selected": false, "ordered": false, "passed": false }, { "value": "00:45", "selected": false, "ordered": false, "passed": false }, { "value": "01:00", "selected": false, "ordered": false, "passed": false }, { "value": "01:15", "selected": false, "ordered": false, "passed": false }, { "value": "01:30", "selected": false, "ordered": false, "passed": false }, { "value": "01:45", "selected": false, "ordered": false, "passed": false }, { "value": "02:00", "selected": false, "ordered": false, "passed": false }, { "value": "02:15", "selected": false, "ordered": false, "passed": false }, { "value": "02:30", "selected": false, "ordered": false, "passed": false }, { "value": "02:45", "selected": false, "ordered": false, "passed": false }, { "value": "03:00", "selected": false, "ordered": false, "passed": false }, { "value": "03:15", "selected": false, "ordered": false, "passed": false }, { "value": "03:30", "selected": false, "ordered": false, "passed": false }, { "value": "03:45", "selected": false, "ordered": false, "passed": false }, { "value": "04:00", "selected": false, "ordered": false, "passed": false }, { "value": "04:15", "selected": false, "ordered": false, "passed": false }, { "value": "04:30", "selected": false, "ordered": false, "passed": false }, { "value": "04:45", "selected": false, "ordered": false, "passed": false }, { "value": "05:00", "selected": false, "ordered": false, "passed": false }, { "value": "05:15", "selected": false, "ordered": false, "passed": false }, { "value": "05:30", "selected": false, "ordered": false, "passed": false }, { "value": "05:45", "selected": false, "ordered": false, "passed": false }, { "value": "06:00", "selected": false, "ordered": false, "passed": false }, { "value": "06:15", "selected": false, "ordered": false, "passed": false }, { "value": "06:30", "selected": false, "ordered": false, "passed": false }, { "value": "06:45", "selected": false, "ordered": false, "passed": false }, { "value": "07:00", "selected": false, "ordered": false, "passed": false }, { "value": "07:15", "selected": false, "ordered": false, "passed": false }, { "value": "07:30", "selected": false, "ordered": false, "passed": false }, { "value": "07:45", "selected": false, "ordered": false, "passed": false }, { "value": "08:00", "selected": false, "ordered": false, "passed": false }, { "value": "08:15", "selected": false, "ordered": false, "passed": false }, { "value": "08:30", "selected": false, "ordered": false, "passed": false }, { "value": "08:45", "selected": false, "ordered": false, "passed": false }, { "value": "09:00", "selected": false, "ordered": false, "passed": false }, { "value": "09:15", "selected": false, "ordered": false, "passed": false }, { "value": "09:30", "selected": false, "ordered": false, "passed": false }, { "value": "09:45", "selected": false, "ordered": false, "passed": false }, { "value": "10:00", "selected": false, "ordered": false, "passed": false }, { "value": "10:15", "selected": false, "ordered": false, "passed": false }, { "value": "10:30", "selected": false, "ordered": false, "passed": false }, { "value": "10:45", "selected": false, "ordered": false, "passed": false }, { "value": "11:00", "selected": false, "ordered": false, "passed": false }, { "value": "11:15", "selected": false, "ordered": false, "passed": false }, { "value": "11:30", "selected": false, "ordered": false, "passed": false }, { "value": "11:45", "selected": false, "ordered": false, "passed": false }, { "value": "12:00", "selected": false, "ordered": false, "passed": false }, { "value": "12:15", "selected": false, "ordered": false, "passed": false }, { "value": "12:30", "selected": false, "ordered": false, "passed": false }, { "value": "12:45", "selected": false, "ordered": false, "passed": false }, { "value": "13:00", "selected": false, "ordered": false, "passed": false }, { "value": "13:15", "selected": false, "ordered": false, "passed": false }, { "value": "13:30", "selected": false, "ordered": false, "passed": false }, { "value": "13:45", "selected": false, "ordered": false, "passed": false }, { "value": "14:00", "selected": false, "ordered": false, "passed": false }, { "value": "14:15", "selected": false, "ordered": false, "passed": false }, { "value": "14:30", "selected": false, "ordered": false, "passed": false }, { "value": "14:45", "selected": false, "ordered": false, "passed": false }, { "value": "15:00", "selected": false, "ordered": false, "passed": false }, { "value": "15:15", "selected": false, "ordered": false, "passed": false }, { "value": "15:30", "selected": false, "ordered": false, "passed": false }, { "value": "15:45", "selected": false, "ordered": false, "passed": false }, { "value": "16:00", "selected": false, "ordered": false, "passed": false }, { "value": "16:15", "selected": false, "ordered": false, "passed": false }, { "value": "16:30", "selected": false, "ordered": false, "passed": false }, { "value": "16:45", "selected": false, "ordered": false, "passed": false }, { "value": "17:00", "selected": false, "ordered": false, "passed": false }, { "value": "17:15", "selected": false, "ordered": false, "passed": false }, { "value": "17:30", "selected": false, "ordered": false, "passed": false }, { "value": "17:45", "selected": false, "ordered": false, "passed": false }, { "value": "18:00", "selected": false, "ordered": false, "passed": false }, { "value": "18:15", "selected": false, "ordered": false, "passed": false }, { "value": "18:30", "selected": false, "ordered": false, "passed": false }, { "value": "18:45", "selected": false, "ordered": false, "passed": false }, { "value": "19:00", "selected": false, "ordered": false, "passed": false }, { "value": "19:15", "selected": false, "ordered": false, "passed": false }, { "value": "19:30", "selected": false, "ordered": false, "passed": false }, { "value": "19:45", "selected": false, "ordered": false, "passed": false }, { "value": "20:00", "selected": false, "ordered": false, "passed": false }, { "value": "20:15", "selected": false, "ordered": false, "passed": false }, { "value": "20:30", "selected": false, "ordered": false, "passed": false }, { "value": "20:45", "selected": false, "ordered": false, "passed": false }, { "value": "21:00", "selected": false, "ordered": false, "passed": false }, { "value": "21:15", "selected": false, "ordered": false, "passed": false }, { "value": "21:30", "selected": false, "ordered": false, "passed": false }, { "value": "21:45", "selected": false, "ordered": false, "passed": false }, { "value": "22:00", "selected": false, "ordered": false, "passed": false }, { "value": "22:15", "selected": false, "ordered": false, "passed": false }, { "value": "22:30", "selected": false, "ordered": false, "passed": false }, { "value": "22:45", "selected": false, "ordered": false, "passed": false }, { "value": "23:00", "selected": false, "ordered": false, "passed": false }, { "value": "23:15", "selected": false, "ordered": false, "passed": false }, { "value": "23:30", "selected": false, "ordered": false, "passed": false }, { "value": "23:45", "selected": false, "ordered": false, "passed": false }];
            this.$http.get(url).then(res => {
                if (res.body.status === 200) {
                    if (res.body.data.length > 0) {
                        (function(res, _this) {
                            //时间区域索引数组
                            let arr = [];
                            let arrNextpage = [];
                            let isNostatus = false;//是否选中为空
                            let arrNostatus = [];//存储相应索引的会议室选择状态
                            let now = +new Date();
                            //会议地点数据初始化
                            _this.ordered = res.body.data;
                            //遍历会议数据
                            _this.ordered.forEach((el) => {
                                //取到会议室状态处理
                                arr = [];
                                let objNextpage = {};
                                objNextpage.Id = el.Address;
                                objNextpage.selectedTime = [];
                                if (el.RoomStatus.length > 0) {
                                    el.RoomStatus.forEach((elrmstatu) => {
                                        //空临时对象存储已选中时间索引
                                        let obj = {};
                                        let timeobg = {}
                                        //已选中开始结束时间
                                        let st = elrmstatu.Start.split(' ')[1];
                                        let ed = elrmstatu.End.split(' ')[1];
                                        //存储选中会议室时间格式
                                        timeobg.st = st;
                                        timeobg.ed = ed;
                                        timeobg.Name = elrmstatu.Organizer.Name;
                                        if (_this.mtrSelected.dateTime.split(' ')[0].split('/')[2] === elrmstatu.End.split(' ')[0].split('-')[2] && elrmstatu.End.split(' ')[1] === '00:00:00') {
                                            // objNextpage.selectedTime.push(timeobg);
                                        } else {
                                            objNextpage.selectedTime.push(timeobg);
                                        }
                                    }, _this)
                                    //存储选中会议室时间
                                    arrNextpage.push(objNextpage);

                                    localdata.setdata('selectedTime', JSON.stringify(arrNextpage));
                                    isNostatus = false;
                                    arrNostatus.push(isNostatus);
                                } else {
                                    arrNextpage.push(objNextpage);
                                    localdata.setdata('selectedTime', JSON.stringify(arrNextpage));
                                    isNostatus = true;
                                    arrNostatus.push(isNostatus);
                                }
                            }, _this)

                            if (localdata.getdata('isFromModified') && !localdata.getdata('isFromTimeModify')) {
                                arrNextpage[_this.mtrSelected.listindex].selectedTime.forEach((el) => {
                                    if (el.st === _this.mtrSelected.Start.split(' ')[1] && el.ed === _this.mtrSelected.End.split(' ')[1]) {
                                        let timeInterval = _this.mtrSelected.timeInterval.split(' ')[1].split('-');
                                        el.st = timeInterval[0] + ':00';
                                        el.ed = timeInterval[1] + ':00';
                                    }
                                }, _this)
                            }

                            //来自手动返回到时间
                            if (localdata.getdata('launchPage')) {
                                if (type !== 'changeday') {
                                    let modifyFirstIndex = undefined;
                                    let st = _this.mtrSelected.timeInterval.split(' ')[1].split('-')[0].trim();
                                    let ed = _this.mtrSelected.timeInterval.split(' ')[1].split('-')[1].trim();
                                    _this.startTime = st;
                                    _this.endTime = ed;
                                    _this.matchAllTimezone.forEach((el, index) => {
                                        if (el.value === st) {
                                            modifyFirstIndex = index;
                                            _this.firstIndex = index;
                                            if (el.passed) {
                                                el.selected = false;
                                            } else {
                                                el.selected = true;
                                            }
                                            el.ordered = false;
                                        } else if (el.value === ed) {
                                            modifyFirstIndex = undefined;
                                        }
                                        if (typeof modifyFirstIndex !== 'undefined') {
                                            el.ordered = false;
                                            if (el.passed) {
                                                el.selected = false;
                                            } else {
                                                el.selected = true;
                                            }
                                        }
                                    }, _this)
                                }
                            }

                            //恢复到默认无选中状态
                            if (arrNostatus[_this.mtrSelected.listindex]) {
                                _this.matchAllTimezone.forEach((el2, index) => {
                                    if (now > +new Date(_this.mtrSelected.dateTime + ' ' + el2.value)) {
                                        el2.passed = true;
                                        el2.selected = false;
                                    } else {
                                        el2.passed = false;
                                    }
                                    el2.ordered = false;
                                    if (el2.Name) {
                                        delete el2.Name;
                                    }
                                }, _this)
                                // _this.matchAllTimezone = _this.matchTimezonCopy;
                            } else {
                                //处理零散时间
                                arrNextpage[_this.mtrSelected.listindex].selectedTime.forEach((el) => {
                                    let st = el.st.substr(0, el.st.length - 3).split(':')[1];
                                    let ed = el.ed.substr(0, el.ed.length - 3).split(':')[1];
                                    if (st !== '00' && st !== '15' && st !== '30' && st !== '45') {
                                        if (+st < 15) {
                                            el.st = el.st.substr(0, el.st.length - 3).split(':')[0] + ':00:00';
                                        } else if (+st > 15 && +st < 30) {
                                            el.st = el.st.substr(0, el.st.length - 3).split(':')[0] + ':15:00';
                                        } else if (+st > 30 && +st < 45) {
                                            el.st = el.st.substr(0, el.st.length - 3).split(':')[0] + ':30:00';
                                        } else if (+st > 45) {
                                            el.st = (+el.st.substr(0, el.st.length - 3).split(':')[0] + 1) + ':45:00';
                                        }
                                    }
                                    if (ed !== '00' && ed !== '15' && ed !== '30' && ed !== '45') {
                                        if (+ed < 15) {
                                            el.ed = el.ed.substr(0, el.ed.length - 3).split(':')[0] + ':15:00';
                                        } else if (+ed > 15 && +ed < 30) {
                                            el.ed = el.ed.substr(0, el.ed.length - 3).split(':')[0] + ':30:00';
                                        } else if (+ed > 30 && +ed < 45) {
                                            el.ed = el.ed.substr(0, el.ed.length - 3).split(':')[0] + ':45:00';
                                        } else if (+ed > 45) {
                                            el.ed = (+el.ed.substr(0, el.ed.length - 3).split(':')[0] + 1) + ':00:00';
                                        }
                                    }
                                }, this)
                                //将会议室开始结束时间段合并
                                arrNextpage[_this.mtrSelected.listindex].selectedTime.forEach((el, seltindex) => {
                                    //是否已预定
                                    _this.matchAllTimezone.forEach((el2, index) => {
                                        if (now > +new Date(_this.mtrSelected.dateTime + ' ' + el2.value)) {
                                            el2.passed = true;
                                            el2.selected = false;
                                        } else {
                                            el2.passed = false;
                                        }
                                        //取得时间原数据用来显示
                                        let originalTimeArr = JSON.parse(localdata.getdata('selectedTime'));
                                        // _this.pageOrderedTime.forEach((el2) => {
                                        if (el2.value.indexOf(el.st.substr(0, el.st.length - 3)) !== -1) {
                                            let time = originalTimeArr[_this.mtrSelected.listindex].selectedTime[seltindex];
                                            _this.matchAllTimezone[index].ordered = true;
                                            // _this.matchAllTimezone[index].Name = el.Name + ' （' + el.st.substr(0, el.st.length - 3) + '-' + el.ed.substr(0, el.ed.length - 3) + '）';
                                            //根据原数据显示人员与选择时间
                                            _this.matchAllTimezone[index].Name = el.Name + ' （' + time.st.substr(0, time.st.length - 3) + '-' + time.ed.substr(0, time.ed.length - 3) + '）';
                                        }
                                        if (el2.value.indexOf(el.ed.substr(0, el.ed.length - 3)) !== -1) {
                                            if (index === 0) {
                                                _this.matchAllTimezone[index].ordered = true;

                                            } else {
                                                _this.matchAllTimezone[index - 1].ordered = true;
                                            }
                                        }
                                        // }, _this)
                                    }, _this)
                                    // _this.pageOrderedTime.push(el.st.substr(0, el.st.length - 3));
                                    // _this.pageOrderedTime.push(el.ed.substr(0, el.ed.length - 3));
                                }, _this)

                                //已订的时间
                                // _this.pageOrderedTime = _this.pageOrderedTime.unique();
                                // localdata.setdata('test', JSON.stringify(_this.pageOrderedTime));
                                // _this.pageOrderedTime = arrNextpage[_this.mtrSelected.listindex];

                                //区间内的都判定选中
                                arrNextpage[_this.mtrSelected.listindex].selectedTime.forEach((el) => {
                                    let el2index = undefined;
                                    let stval = el.st.substr(0, el.st.length - 3);
                                    let edval = el.ed.substr(0, el.ed.length - 3);
                                    _this.matchAllTimezone.forEach((el2, index) => {
                                        if (el2.value === stval) {
                                            el2index = index;
                                            el2.ordered = true;
                                        } else if (el2.value === edval) {
                                            el2index = undefined;
                                        }

                                        if (typeof el2index !== 'undefined') {
                                            el2.ordered = true;
                                        }
                                    }, _this)
                                }, _this)
                            }
                            //来自修改 将已预定时间修改为 选中
                            if (type !== 'changeday') {
                                if (localdata.getdata('isFromModified')) {
                                    let modifyFirstIndex = undefined;
                                    let st = _this.mtrSelected.timeInterval.split(' ')[1].split('-')[0].trim();
                                    let ed = _this.mtrSelected.timeInterval.split(' ')[1].split('-')[1].trim();
                                    _this.startTime = st;
                                    _this.endTime = ed;
                                    _this.matchAllTimezone.forEach((el, index) => {
                                        if (el.value === st) {
                                            modifyFirstIndex = index;
                                            _this.firstIndex = index;
                                            if (el.passed) {
                                                el.selected = false;
                                            } else {
                                                el.selected = true;
                                            }
                                            el.ordered = false;
                                        } else if (el.value === ed) {
                                            modifyFirstIndex = undefined;
                                        }
                                        if (typeof modifyFirstIndex !== 'undefined') {
                                            el.ordered = false;
                                            if (el.passed) {
                                                el.selected = false;
                                            } else {
                                                el.selected = true;
                                            }
                                        }
                                    }, _this)
                                }
                            }
                        })(res, this)
                    } else {
                        this.initTimeSatus(this.mtrSelected.dateTime);
                    }
                    this.pageloading = false;
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                    this.pageloading = false;
                }
            }, error => {
                this.isShowerr = true;
                this.errinfo = error.body.errorMessage;
            });
        },
        preday() {
            let selectedTime = +new Date(this.mtrSelected.dateTime) - 24 * 60 * 60 * 1000;
            let type;
            if (selectedTime < this.today) {
                this.isShowerr = true;
                this.errinfo = '不可以选择今天之前的日期';
            } else {
                // let pretimestemp = +moment(this.mtrSelected.weekDateTime.split(' ')[0]) - 24 * 60 * 60 * 1000;
                // this.mtrSelected.weekDateTime = moment(pretimestemp).format('YYYY-MM-DD ddd');
                // this.mtrSelected.dateTime = this.mtrSelected.weekDateTime.split(' ')[0];
                this.mtrSelected.dateTime = moment(+new Date(this.mtrSelected.dateTime) - 24 * 60 * 60 * 1000).format('YYYY/M/D');
                let orderedDay = moment(+new Date(this.mtrSelected.meetTimeDetail.split(' ')[0])).format('YYYY/M/D');
                // this.ajaxMtrStatu('/mt/GetRoomsStatus?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'));
                if (!this.mtrSelected.isDIYResource) {
                    if (this.mtrSelected.dateTime !== orderedDay) {
                        type = "changeday";
                    }
                    this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'), type);
                } else {
                    this.initTimeSatus(this.mtrSelected.dateTime);
                }
                // this.mtrSelected.weekDateTime = this.mtrSelected.dateTime
                // this.curdate = this.curdate.subtract(1, 'days').calendar();
            }
        },
        nextday() {
            // let pretimestemp =+new Date(this.mtrSelected.dateTime) + 24 * 60 * 60 * 1000;
            let type;
            // this.mtrSelected.weekDateTime = moment(pretimestemp).format('YYYY-MM-DD ddd');
            // this.mtrSelected.dateTime = this.mtrSelected.weekDateTime.split(' ')[0];
            this.mtrSelected.dateTime = moment(+new Date(this.mtrSelected.dateTime) + 24 * 60 * 60 * 1000).format('YYYY/M/D');
            let orderedDay = moment(+new Date(this.mtrSelected.meetTimeDetail.split(' ')[0])).format('YYYY/M/D');
            // this.ajaxMtrStatu('/mt/GetRoomsStatus?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'));
            if (!this.mtrSelected.isDIYResource) {
                if (this.mtrSelected.dateTime !== orderedDay) {
                    type = "changeday";
                }
                this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.mtrSelected.dateTime + '&roomListAddress=' + localdata.getdata('curRegionId'), type);
            } else {
                this.initTimeSatus(this.mtrSelected.dateTime);
            }

            // this.mtrSelected.weekDateTime = this.mtrSelected.dateTime
            // this.curdate = this.curdate.subtract(1, 'days').calendar();
        },
        //选择时间事件
        selectedevent(index) {
            //为true记录第一个选择索引
            let cango = true;
            let isHasOrdered = false;
            //判断当前点击是否选中
            if (this.matchAllTimezone[index].selected === true) {
                this.matchAllTimezone[index].selected = false;
                if (this.firstIndex === index) {
                    this.matchAllTimezone.forEach(function(element) {
                        element.selected = false;
                    }, this);
                    this.startTime = '--:--';
                    this.endTime = '--:--';
                } else if (this.firstIndex > index) {
                    if (index === this.matchAllTimezone.length - 1) {
                        this.endTime = "23:59";
                    } else {
                        this.startTime = this.matchAllTimezone[index + 1].value;
                    }
                } else if (this.firstIndex < index) {
                    if (index === this.matchAllTimezone.length - 1) {
                        this.endTime = this.matchAllTimezone[index].value;
                    } else {
                        this.endTime = this.matchAllTimezone[index].value;
                    }
                }

            } else if (!this.matchAllTimezone[index].ordered && !this.matchAllTimezone[index].passed && this.matchAllTimezone[index].selected === false) {
                //是否存在选中
                this.matchAllTimezone.forEach(function(element) {
                    if (element.selected === true) {
                        cango = false;
                    }
                }, this);
                this.matchAllTimezone[index].selected = true;
                //没有选中，记录第一个索引
                if (cango) {
                    this.firstIndex = index;
                    this.startTime = this.matchAllTimezone[index].value;
                    if (index === this.matchAllTimezone.length - 1) {
                        this.endTime = "23:59";
                    } else {
                        this.endTime = this.matchAllTimezone[index + 1].value;
                    }
                }
            }

            //如果已记录第一个索引
            if (typeof this.firstIndex !== 'undefined') {
                //如果选中了比第一个选中索引大的
                if (this.firstIndex < index) {
                    for (let i = this.firstIndex, end = index; i < end; i++) {
                        if (this.matchAllTimezone[i].ordered) {
                            this.matchAllTimezone[end].selected = false;
                            this.isShowerr = true;
                            this.errinfo = '不可选择已存在会议的时间段';
                            isHasOrdered = true;
                            return false;
                        }
                    }
                    if (!isHasOrdered) {
                        for (let i = this.firstIndex, end = index; i < end; i++) {
                            //已过时间就不再标记为选中
                            if (!this.matchAllTimezone[i].passed) {
                                this.matchAllTimezone[i].selected = true;
                            }
                        }
                        //取消选中大于二次选中的索引
                        this.matchAllTimezone.forEach(function(el, idx) {
                            if (idx > index) {
                                el.selected = false;
                            }
                        })
                        if (this.matchAllTimezone[index].selected) {
                            if (index === this.matchAllTimezone.length - 1) {
                                this.endTime = "23:59";
                            } else {
                                this.endTime = this.matchAllTimezone[index + 1].value;
                            }
                        }
                    }
                }

                //如果选中了比第一个选中索引小的
                if (this.firstIndex > index) {
                    for (let i = this.firstIndex, end = index; i > end; i--) {
                        if (this.matchAllTimezone[i].ordered || this.matchAllTimezone[i].passed) {
                            this.matchAllTimezone[end].selected = false;
                            this.isShowerr = true;
                            this.errinfo = '不可选择已存在会议的时间段';
                            isHasOrdered = true;
                            return false;
                        }
                    }
                    if (!isHasOrdered) {
                        for (let i = this.firstIndex, end = index; i > end; i--) {
                            this.matchAllTimezone[i].selected = true;
                        }
                        //取消选中小于二次选中的索引
                        this.matchAllTimezone.forEach(function(el, idx) {
                            if (idx < index) {
                                el.selected = false;
                            }
                        })
                        if (this.matchAllTimezone[index].selected) {
                            this.startTime = this.matchAllTimezone[index].value;
                        }
                    }
                }
            }
            // this.startTime = this.matchAllTimezone[this.firstIndex].value;
            // this.endTime = this.matchAllTimezone[this.endIndex].value;
            //显示记录选中的时间区
            // this.matchAllTimezone.every((el, index) => {
            //     if (el.selected && !el.ordered && !el.passed) {
            //         if (!this.endIndex) {
            //             this.endIndex = index;
            //             this.startTime = el.value;
            //             this.endTime = this.matchAllTimezone[index+1].value;
            //         } else if (index < this.endIndex) {
            //             // this.endTime = this.startTime;
            //             this.startTime = el.value;
            //         }
            //         return false;
            //     } else {
            //         return true;
            //     }
            // }, this)
            // this.matchAllTimezone.forEach((el, index) => {
            //     if (el.selected && !el.ordered && !el.passed) {
            //         if (!this.endIndex) {
            //             this.endIndex = index;
            //             this.startTime = el.value;
            //             this.endTime = this.matchAllTimezone[index+1].value;
            //         } else if (index > this.endIndex) {
            //             // this.startTime = this.endTime;
            //             this.endTime = el.value;
            //         }
            //     }
            // }, this)
        },
        tolaunchPage() {
            if (this.startTime === '--:--' || this.endTime === '--:--') {
                this.isShowerr = true;
                this.errinfo = '请选择正确的时间区域';
            } else {
                // this.mtrSelected.dateTime = this.mtrSelected.weekDateTime.split(' ')[0];
                this.mtrSelected.timeInterval = this.mtrSelected.dateTime + ' ' + this.startTime + '-' + this.endTime;


                this.mtrSelected.startTime = this.startTime;
                this.mtrSelected.endTime = this.endTime;

                if (!this.mtrSelected.DIYResource) {
                    this.mtrSelected.mtrList[this.mtrSelected.mtrList.length - 1].isAdded = true;
                    // this.mtrSelected.meetingroom = JSON.stringify(this.mtrSelected.meetingroom);
                }
                localdata.setdata('mtrSelected', JSON.stringify(this.mtrSelected));
                // this.$router.push({ name: 'mtlaunchmeet',params:this.mtrSelected});
                //来自详情修改
                if (localdata.getdata('isFromModified')) {
                    if (localdata.getdata('isFromTimeModify')) {
                        this.$router.push({ path: '/mtlaunchmeet' });
                    } else {
                        this.$router.push({ path: '/mtmeetdetailinvite' });
                    }
                } else {
                    this.$router.push({ path: '/mtlaunchmeet' });
                }
            }
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
        }
    }
} 
</script>
