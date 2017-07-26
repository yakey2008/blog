<style lang="scss">
div{-webkit-tap-highlight-color:rgba(0,0,0,0); }
.css-mttime-page {
    &>.weui-tab__panel {
        padding-bottom: 64px;
    }
    .weui-navbar:after {
        border-bottom: none;
    }
    .css-nav-container {
        padding: 6px;
        padding-left: 22px;
        background-color: #fff;
        .location-info {
            font-size: 14px;
            padding: 7px 0;
            padding-right: 20px;
            .css-locaticon {
                width: 10px;
                display: block;
                float: left;
                margin-right: 5px;
                margin-top: 2px;
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
                        border-top: 1px solid #e7e7e7;
                        &.bordertw2 {
                            border-top-width: 2px;
                        }
                    }

                    .selected {
                        background-color: #7ba9ff;
                    }
                }
            }
        }
    } //底部bar
    .css-bottombar {
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
                <div class="weui-navbar css-nav-container">
                    <p class="location-info">
                        <i class="css-locaticon">
                            <img v-bind:src="locaticon">
                        </i>广州-唯品大学创新会议室（130人）</p>
                </div>
                <div class="weui-tab__panel css-main-container" id="js-mainheight">
                    <section class="weui-cells">
                        <div class="hr-div"></div>
                        <div class="weui-cell">
                            <div class="css-take-oneday css-align-right">
                                <i class="arrow-left icon"></i>
                                <span class="css-onday-text" v-on:click="preday()">前一天</span>
                            </div>
                            <div class="weui-flex__item css-align-center">
                                {{curdate}}
                            </div>
                            <div class="css-take-oneday css-align-left">
                                <span class="css-onday-text">后一天</span>
                                <i class="arrow-right icon"></i>
                            </div>
                        </div>
                    </section>
                    <div class="css-timeline">
                        <aside class="css-timeline-datetime">
                            <div class="css-timeline-hours" v-for="(time,index) in initDatetime" :key="time" :class="[index===0?'margint26':'',index===initDatetime.length-1?'height26':'']">
                                <span class="css-timeline-hours-text">{{time}}</span>
                            </div>
                        </aside>
                        <section class="css-timeline-ordered">
                            <div class="css-pageinfo">
                                <div class="selected-box"></div>
                                <div class="selected-box" v-for="(item,index) in selectedBox" :key="item" v-on:click="selectedevent(index)" :class="[item.selected?'selected':'',index%4===0?'bordertw2':'']">{{item.value}}</div>
                                <div class="selected-box bordertw2"></div>
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
                    <p>开始时间&nbsp;<span class="css-col4c8"><span>09</span>:<span>00</span></span>&nbsp;&nbsp;结束时间&nbsp;<span class="css-col4c8"><span>10</span>:<span>00</span></span></p>
                </div>
                <div class="weui-cell__ft">
                    <router-link :to="'/mtlaunchmeet'" tag="div">
                        <button class="weui-btn css-next-step">下一步</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import weui from '../../lib/js/weui.min.js';
import moment from 'moment';
import locaticon from '../../images/locaticon.png';
moment.locale('zh-cn');


export default {
    mounted() {
        for (let i = 0; i < this.initTimenum; i++) {
            this.selectedBox.push({ value: i, selected: false })
        }
    },
    data() {
        return {
            curdate:moment().format('YYYY-MM-DD dddd'),
            selectedBox: [],
            firstIndex: undefined,
            endIndex: undefined,
            isShowregion: false,
            isShowtime: false,
            isNodata: false,
            isShowtab: true,
            initTimenum: 96,//预定格数量
            initDatetime: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            initTimeitem: [],
            curregion: '广州广新大厦',
            tabVal: [
                { label: '广州广新大厦', value: 0 },
                { label: '上海上新时代科技大厦', value: 1 },
                { label: '北京北新科技大厦', value: 2 }
            ],
            ordered: [
                {
                    name: '广州-广新2F 巴黎会议室 （18人）', order: [
                        true, false, false, false, false, true, true, false, false, true, false, false, false, false, true, true, false, false
                    ]
                }
            ],
            locaticon
        }
    },
    methods: {
        preday(){
            this.curdate = this.curdate.subtract(1, 'days').calendar();
        },
        selectedevent(index) {
            //为true记录第一个选择索引
            let cango = true;
            //判断当前点击是否选中
            if (this.selectedBox[index].selected === true) {
                this.selectedBox[index].selected = false;
                if (this.firstIndex === index) {
                    this.selectedBox.forEach(function (element) {
                        element.selected = false;
                    }, this);
                }
            } else {
                //是否存在选中
                this.selectedBox.forEach(function (element) {
                    if (element.selected === true) {
                        cango = false;
                    }
                }, this);
                this.selectedBox[index].selected = true;
                //没有选中，记录第一个索引
                if (cango) {
                    this.firstIndex = index;
                }
            }

            //如果已记录第一个索引
            if (typeof this.firstIndex !== 'undefined') {
                //如果选中了比第一个选中索引大的
                if (this.firstIndex < index) {
                    for (var i = this.firstIndex, end = index; i < index; i++) {
                        this.selectedBox[i].selected = true;
                    }
                    //取消选中大于二次选中的索引
                    this.selectedBox.forEach(function (el, idx) {
                        if (idx > index) {
                            el.selected = false;
                        }
                    })
                }

                //如果选中了比第一个选中索引小的
                if (this.firstIndex > index) {
                    for (var i = this.firstIndex, end = index; i > index; i--) {
                        this.selectedBox[i].selected = true;
                    }
                    //取消选中小于二次选中的索引
                    this.selectedBox.forEach(function (el, idx) {
                        if (idx < index) {
                            el.selected = false;
                        }
                    })
                }
            }
        }
    }
} 
</script>
