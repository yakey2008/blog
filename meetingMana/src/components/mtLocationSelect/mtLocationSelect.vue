<style lang="scss" scoped>
//区域弹出 Start
.css-curregion {
    color: #308ee3;
}

.weui-navbar__item:after {
    border: none;
}

.css-selector-container {
    .css-mask {
        position: fixed;
        z-index: 501;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
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
        border-left: 1px solid #e7e7e7;
    }
}

//区域弹出 End
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
                top: 18px;
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
                top: 24px;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
                margin-bottom: -2px;
            }
        }
    }
    .css-main-container {
        .css-pageinfo-container {
            position: absolute;
            width: 100%;
            .css-pageinfo {
                background-color: #fff;
                .css-middlescore {
                    border-top: 1px solid #ddd;
                    width: 10%;
                    margin-top: 28px;
                }
                .css-status {
                    padding: 5px 4%;
                    margin-left: 1%;
                    .css-yellow-point {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background-color: #ffba41;
                        border-radius: 50px;
                        margin-right: 5px;
                    }
                    .css-explantime {
                        font-size: 0.5rem;
                        color: $col9b;
                    }
                }

                .css-datetime {
                    padding: 15px 1%;
                    color: $col9b;
                }
                @media (min-width: 340px) {
                    .css-datetime {
                        padding: 15px 2%;
                    }
                }
                @media (min-width: 375px) {
                    .css-datetime {
                        padding: 15px 3%;
                    }
                }
                @media (min-width: 400px) {
                    .css-middlescore {
                        margin-left: 1%;
                        margin-right: 1%;
                    }
                    .css-datetime {
                        padding: 15px 3%;
                    }
                }
            }
        }
        .css-locationdatetime-container {
            padding-top: 55px;
            .css-locationdatetime {
                .css-meetingroom-item {
                    background-color: #fff;
                    height: 80px;
                    .css-meetingroom-name {
                        width: 25%;
                        height: 60px;
                        padding: 0 5%;
                        margin: 10px 0;
                        line-height: 20px;
                        overflow: hidden;
                    }
                    .css-meetingroom-timeline {
                        width: 61%;
                        height: 100%;
                        .css-meetingroom-timeline-box {
                            height: 100%;
                            border-left: 1px solid #e7e7e7;
                            width: 4.55555%;
                            &.room-ordered {
                                background-color: #ffbb41;
                            }
                            &.border-l2 {
                                border-left: 2px solid #e7e7e7;
                            }
                            &.border-r2 {
                                border-right: 2px solid #e7e7e7;
                            }
                        }
                    }
                }
            }
            .css-noUserMtr {
                padding-top: 50px;
                text-align: center;
            }
        }
    } //底部bar
    .css-bottombar {
        background-color: #fff;
        z-index: 400;
        &.weui-tabbar:before {
            border: none;
            @include boxshadow(0, -7, 49, 0);
        }
        .css-maxwidth {
            width: 100%;
            .css-inputinco {
                display: block;
                position: absolute;
                left: 5%;
                width: 25px;
                height: 25px;
                background-image: url('../../images/custominput.png');
                background-size: cover;
            }
            .weui-cell__bd .weui-input {
                padding-left: 15%;
                width: 85%;
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
                        <date-picker :date="startTime" :option="option" :limit="limit" v-on:ajaxdata="changeday()" v-on:showpicker="showtime()" v-if="isPicker"></date-picker>
                        <div v-if="!isPicker" v-on:click="showtime()">{{formatToWeek(startTime.time)}}</div>
                        <i class="css-arrow" :class="{drop:isShowtime}"></i>
                    </div>
                    <div class="weui-navbar__item select-btn" v-on:click="showregion()" :class="{'css-curregion':isShowregion}">
                        <div class="css-select-region">{{curRegion}}</div>
                        <i class="css-arrow" :class="{drop:isShowregion}"></i>
                    </div>
                </div>
                <!-- <div v-on:click="showtime()">
                                                                                                                                                                                        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
                                                                                                                                                                                    </div> -->
                <div class="weui-tab__panel css-main-container">
                    <section>
                        <div class="css-pageinfo-container">
                            <div class="hr-div"></div>
                            <div class="css-pageinfo clearfix">
                                <div class="css-status fl-l">
                                    <p class="css-notice">
                                        <i class="css-yellow-point"></i>
                                        <span>已预订</span>
                                    </p>
                                    <p class="css-explantime">(每格30分钟)</p>
                                </div>
                                <div>
                                    <div class="css-datetime fl-l">
                                        <span>09:00</span>
                                    </div>
                                    <div class="css-middlescore fl-l"></div>
                                    <div class="css-datetime fl-l">
                                        <span>13:00</span>
                                    </div>
                                    <div class="css-middlescore fl-l"></div>
                                    <div class="css-datetime fl-l">
                                        <span>18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="css-locationdatetime-container">
                            <div class="css-locationdatetime" v-for="(meetingroom,index) in ordered" :key="index">
                                <div class="hr-div"></div>
                                <!-- <router-link :to="{path:'/mttimeselect',query:{meetingroom:meetingroom,listindex:index}}" tag="div"> -->
                                <div class="css-meetingroom-item clearfix" v-on:click="totimeselect(meetingroom,index)">
                                    <div class="css-meetingroom-name fl-l">{{meetingroom.Location}}</div>
                                    <div class="css-meetingroom-timeline fl-l">
                                        <div class="css-meetingroom-timeline-box fl-l" v-for="(ordered,index) in meetingroom.timeorder" :key="index" :class="[ordered?'room-ordered':'',index===0?'border-l2':'',index===17?'border-r2':'']"></div>
                                    </div>
                                </div>
                                <!-- </router-link> -->
                            </div>
                            <div class="css-noUserMtr" v-if="ordered.length===0">{{noUserMtrText}}</div>
                        </div>
                    </section>
                </div>
            </div>

            <div class="weui-tabbar css-bottombar">
                <div class="weui-cell css-maxwidth">
                    <div class="weui-cell__bd">
                        <i class="css-inputinco" v-on:click="addCustomMtr()"></i>
                        <input class="weui-input" type="text" placeholder="其它地点" v-model="customMtr" v-on:keyup="keyAddCustomMtr($event)">
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
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
        <!-- <psltor :list="tabVal" :curRegionId="curregionId" v-on:listclick="regionEvt()" v-if="isShowregion"></psltor> -->
    </div>
</template>
<script>
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
import moment from 'moment';
import myDatepicker from '../vue-datepicker/vue-datepicker.vue';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';
import searchicon from '../../images/searchicon.png';

export default {
    name: 'mtLocationSelect',
    components: {
        loading,
        notice,
        'date-picker': myDatepicker
    },
    created() {

        this.$moaapi.resetNavTitle();
        this.$moaapi.updateNavTitle('选择地点');
        this.$moaapi.hideNavMenu();
        // setTimeout(() => {
        // this.$moaapi.hideNavMenu();
        // }, 100)

        window.rightHeaderEvent = function() {
            window.location.href = '#/mtlocationsearch';
        }
        setTimeout(() => {
            this.$moaapi.showNavMenu(searchicon);
        }, 100)
    },
    mounted() {
        this.today = +new Date(moment().format('YYYY/MM/DD'));
        let getParams = this.$route.query;

        // this.weekDate = moment(this.startTime.time).format('MM-DD dddd');

        if (getParams.searchregionid) {
            // let searchurl = decodeURIComponent('/mt/SearchRooms?begin=' + getParams.starttime + '&end=' + getParams.endtime + '&roomListAddress=' + getParams.searchregionid);
            this.curRegion = localdata.getdata('curRegion');
            this.curRegionId = localdata.getdata('curRegionId');
            let searchurl = decodeURIComponent(urldata.basePath + urldata.SearchRooms + '?begin=' + getParams.starttime + '&end=' + getParams.endtime + '&roomListAddress=' + getParams.searchregionid + '&roomName=' + getParams.roomName);
            this.startTime.time = getParams.starttime.split(' ')[0];
            this.ajaxMtrStatu(searchurl);
        } else if (localdata.getdata('isFromModified')) {
            this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
            this.startTime.time = this.mtrSelected.dateTime;
            if (localdata.getdata('curRegion')) {
                this.curRegion = localdata.getdata('curRegion');
                this.curRegionId = localdata.getdata('curRegionId');
                this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.startTime.time + '&roomListAddress=' + this.curRegionId);
            }
        } else {
            if (localdata.getdata('curRegion')) {
                this.curRegion = localdata.getdata('curRegion');
                this.curRegionId = localdata.getdata('curRegionId');
                this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.startTime.time + '&roomListAddress=' + this.curRegionId);
            }
        }

        for (let i = 0; i < this.initTimenum; i++) {
            this.initTimeitem.push({ value: i })
        }

        // this.$http.get('/mt/GetAllPosition').then(response => {
        this.$http.get(urldata.basePath + urldata.GetAllPosition).then(res => {
            if (res.body.status === 200) {
                this.tabVal = res.body.data;
            } else {
                this.isShowerr = true;
                this.errinfo = res.body.errorMessage;
            }
        }, error => {
            this.isShowerr = true;
            this.errinfo = error.body.errorMessage;
        })
        // this.curRegion = '广州-广新办公区会议室列表';
        // this.curRegionId = 'gd2wpds-room@vipshop.com';
        // this.ajaxMtrStatu('/mt/GetRoomsStatus?date=' + this.startTime.time + '&roomListAddress=' + this.curRegionId);

    },
    updated() {
        this.dompadding = document.querySelector('.css-nav-container').offsetHeight;
    },
    data() {
        return {

            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            // weekDate: '',
            today: '',//当天

            startTime: {
                time: moment().format('YYYY-MM-DD')
            },
            // startTime: {
            //     time: '2017-08-26'
            // },
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

            isCurRegion: false,
            timelist: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'],
            timeorder: [
                false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
            ],
            dompadding: 50,//容器padding计算
            isShowregion: false,
            isShowtime: false,
            isNodata: false,
            isShowtab: true,
            isPicker: true,//是否使用时间组件
            initTimenum: 18,//预定格数量
            initTimeitem: [],
            curRegion: '请选择',
            curRegionId: '',
            customMtr: '',//自定义会议室
            tabVal: [],
            //会议室信息
            ordered: [],
            noUserMtrText: ''//无会议室提示
        }
    },
    methods: {
        formatToWeek(val) {
            return moment(val).format('M月D日 ddd');
        },
        //根据会议室Id获取会议室方法
        ajaxMtrStatu(url) {
            this.pageloading = true;
            this.$http.get(url).then(res => {
                if (res.status === 200) {

                    (function(res, _this) {
                        // let _this = this;
                        //时间区域索引数组
                        let arr = [];
                        let arrNextpage = [];
                        //会议地点数据初始化
                        _this.ordered = res.body.data;
                        if (_this.ordered.length === 0) {
                            _this.noUserMtrText = '该区域暂无可用会议室';
                        }
                        //遍历会议数据
                        _this.ordered.forEach((el) => {
                            //取到会议室状态处理
                            // arr = [];
                            let objNextpage = {};
                            objNextpage.Id = el.Address;
                            objNextpage.selectedTime = [];
                            el.RoomStatus.forEach((elrmstatu) => {
                                //空临时对象存储已选中时间索引
                                let obj = {};
                                let timeobg = {}
                                //已选中开始结束时间
                                let date = elrmstatu.Start.split(' ')[0];
                                let st = elrmstatu.Start.substr(0, elrmstatu.Start.length - 3);
                                let ed = elrmstatu.End.substr(0, elrmstatu.End.length - 3);
                                //存储选中会议室时间格式
                                timeobg.date = date.replace(/-/g, '/');
                                timeobg.st = st.replace(/-/g, '/');
                                timeobg.ed = ed.replace(/-/g, '/');
                                objNextpage.selectedTime.push(timeobg);
                                // //已选中开始结束时间索引
                                // obj.stidx = _this.timelist.indexOf(st.substr(st, st.length - 3));
                                // obj.edidx = _this.timelist.indexOf(ed.substr(ed, ed.length - 3));
                                // if (obj.stidx !== -1) {
                                //     arr.push(obj);
                                // }
                            }, _this)

                            //存储选中会议室时间
                            arrNextpage.push(objNextpage);
                            localdata.setdata('selectedTime', JSON.stringify(arrNextpage))
                            //时间状态数组
                            _this.timeorder = [
                                false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
                            ];
                            let spliceInde = [];
                            objNextpage.selectedTime.forEach((el, index) => {
                                let stStemp = +new Date(el.st);
                                let edStemp = +new Date(el.ed);
                                let firstList = +new Date(el.date + ' ' + _this.timelist[0]);
                                let lastList = +new Date(el.date + ' ' + _this.timelist[_this.timelist.length - 1]);

                                if (stStemp < firstList && edStemp < firstList) {
                                    spliceInde.push(index);
                                } else if (stStemp > lastList && edStemp > lastList) {
                                    spliceInde.push(index);
                                }

                                // if ((new Date(el.st).getTime()) < (new Date(el.date + ' ' + _this.timelist[0]).getTime()) && (new Date(el.ed).getTime()) > (new Date(el.date + ' ' + _this.timelist[_this.timelist.length - 1]).getTime())) {
                                //     objNextpage.selectedTime.splice(index, 1);
                                // }
                            }, _this)
                            //去掉开始结束时间在范围外的项
                            spliceInde.reverse().forEach((el, index) => {
                                objNextpage.selectedTime.splice(el, 1)
                            }, _this)

                            _this.timelist.forEach((el, idx) => {
                                objNextpage.selectedTime.forEach((elinside) => {
                                    let stStemp = +new Date(elinside.st);
                                    let edStemp = +new Date(elinside.ed);
                                    let curListtime = +new Date(elinside.date + ' ' + el);
                                    if (stStemp < curListtime && edStemp >= curListtime) {
                                        _this.timeorder[idx - 1] = true;
                                    } else if (stStemp > curListtime) {
                                        if (!_this.timeorder[idx]) {
                                            _this.timeorder[idx] = false;
                                        }
                                    } else if (stStemp < curListtime && edStemp > curListtime) {
                                        _this.timeorder[idx] = true;
                                    } else if (edStemp > curListtime) {
                                        if (edStemp - stStemp >= 1800000) {
                                            _this.timeorder[idx] = false;
                                        } else {
                                            _this.timeorder[idx] = true;
                                        }
                                    }
                                }, _this)
                            }, _this)

                            //遍历选中时间索引匹配选中时间数组
                            arr.forEach((timecheck) => {
                                let sttime = timecheck.stidx;
                                let edtime = timecheck.edidx;

                                _this.timelist.forEach((elinside, idx) => {
                                    if (_this.timeorder[idx]) {
                                        return false;
                                    }
                                    if (idx >= sttime && idx < edtime) {
                                        _this.timeorder[idx] = true;
                                    }
                                }, _this)
                            }, _this)
                            el.timeorder = _this.timeorder;

                        }, _this)
                    })(res, this)
                }
                this.pageloading = false;
            }, error => {
                this.isShowerr = true;
                this.errinfo = error.body.errorMessage;
            })
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
        changeday() {
            this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.startTime.time + '&roomListAddress=' + this.curRegionId);
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
        //选择区域
        regionEvt(item) {
            this.curRegion = item.Name;
            this.curRegionId = item.Address;
            localdata.setdata('curRegion', this.curRegion);
            localdata.setdata('curRegionId', this.curRegionId);
            // this.ajaxMtrStatu('/mt/GetRoomsStatus?date=' + this.startTime.time + '&roomListAddress=' + item.Address);
            this.ajaxMtrStatu(urldata.basePath + urldata.GetRoomsStatus + '?date=' + this.startTime.time + '&roomListAddress=' + this.curRegionId);
            this.showregion();
        },
        //选择会议室
        totimeselect(meetingroom, index) {
            let selectedTime = +new Date(this.startTime.time);
            if (selectedTime < this.today) {
                this.isShowerr = true;
                this.errinfo = '不可以选择今天之前的日期';
            } else {
                // this.$router.push({ name: 'mttimeselect',params:{meetingroom:JSON.stringify(meetingroom),dateTime:this.startTime.time,listindex:index} });
                let saveLocaldata = {}
                let mtrinfo = {};
                if (localdata.getdata('mtrSelected') && JSON.parse(localdata.getdata('mtrSelected')).mtrList.length === 1 && !JSON.parse(localdata.getdata('mtrSelected')).mtrList[0].isAdded) {
                    localdata.removedata('mtrSelected');
                }
                if (localdata.getdata('mtrSelected')) {
                    let pass = true;
                    let isAddedPass = true;
                    saveLocaldata = JSON.parse(localdata.getdata('mtrSelected'));
                    saveLocaldata.isDIYResource = false;
                    //是否来自修改
                    if (localdata.getdata('isFromModified')) {
                        for (let i = 0, len = saveLocaldata.mtrList.length; i < len; i++) {
                            if (saveLocaldata.mtrList[i].mtrId === meetingroom.Address) {
                                this.isShowerr = true;
                                this.errinfo = '不可重复添加会议室';
                                return false;
                            }
                        }
                    } else {
                        for(let i=0,len=saveLocaldata.mtrList.length;i<len;i++){
                            if(saveLocaldata.mtrList[i].mtrId === meetingroom.Address && saveLocaldata.mtrList[i].isAdded){
                                this.isShowerr = true;
                                this.errinfo = '不可重复添加会议室';
                                return false;
                            }
                        }
                        // saveLocaldata.mtrList.some((el) => {
                        //     if (el.mtrId === meetingroom.Address && el.isAdded) {
                        //         this.isShowerr = true;
                        //         this.errinfo = '不可重复添加会议室';
                        //         return true;
                        //     }
                        // }, this)
                        // if (saveLocaldata.mtrList[index] && meetingroom.Address === saveLocaldata.mtrList[index].mtrId && saveLocaldata.mtrList[index].isAdded) {
                        //     this.isShowerr = true;
                        //     this.errinfo = '不可重复添加会议室';
                        //     return false;
                        // }
                    }
                    // if (isAddedPass) {
                    mtrinfo.mtrId = meetingroom.Address;
                    mtrinfo.mtrName = meetingroom.Location;
                    mtrinfo.isAdded = true;
                    saveLocaldata.mtrList.push(mtrinfo)
                    // }

                } else {
                    saveLocaldata.listindex = index;
                    saveLocaldata.dateTime = this.startTime.time;
                    saveLocaldata.regionId = this.curRegionId;
                    saveLocaldata.mtrList = [];
                    mtrinfo.mtrId = meetingroom.Address;
                    mtrinfo.mtrName = meetingroom.Location;
                    mtrinfo.isAdded = false;
                    saveLocaldata.mtrList.push(mtrinfo)
                }
                //来自详情修改
                if (localdata.getdata('isFromModified')) {
                    localdata.setdata('mtrSelected', JSON.stringify(saveLocaldata));
                    this.$router.push({ path: '/mtmeetdetailinvite' });
                } else {
                    if (localdata.getdata('mtrSelected')) {
                        // this.mtrSelected.mtrList[this.mtrSelected.mtrList.length - 1].isAdded = true;
                        localdata.setdata('mtrSelected', JSON.stringify(saveLocaldata));
                        this.$router.push({ path: '/mtlaunchmeet' });
                    } else {
                        localdata.setdata('mtrSelected', JSON.stringify(saveLocaldata));
                        this.$router.push({ path: '/mttimeselect' });
                    }
                }

                localdata.setdata('curRegionId', this.curRegionId);
            }
        },
        //添加其它地点
        addCustomMtr() {
            if (this.customMtr !== '') {
                if (localdata.getdata('mtrSelected') && !JSON.parse(localdata.getdata('mtrSelected')).DIYResource && JSON.parse(localdata.getdata('mtrSelected')).isAdded) {
                    this.isShowerr = true;
                    this.errinfo = '已选择会议室，不可再添加其它地点';
                    // localdata.setdata('mtrSelected', JSON.stringify(saveLocaldata));
                    // this.$router.push({ path: '/mtlaunchmeet' });
                } else {
                    localdata.removedata('mtrSelected');
                    localdata.setdata('mtrSelected', JSON.stringify({ "listindex": 0, "mtrList": [{ "isAdded": false, "mtrId": "", "mtrName": this.customMtr }], "dateTime": this.startTime.time, "isDIYResource": true }));
                    this.$router.push({ path: '/mttimeselect' });
                }

            }
        },
        keyAddCustomMtr(evt) {
            if (this.customMtr !== '') {
                if (evt.keyCode === 13) {
                    if (localdata.getdata('mtrSelected') && !JSON.parse(localdata.getdata('mtrSelected')).DIYResource && JSON.parse(localdata.getdata('mtrSelected')).isAdded) {
                        this.isShowerr = true;
                        this.errinfo = '已选择会议室，不可再添加其它地点';
                        // localdata.setdata('mtrSelected', JSON.stringify(saveLocaldata));
                        // this.$router.push({ path: '/mtlaunchmeet' });
                    } else {
                        localdata.removedata('mtrSelected');
                        localdata.setdata('mtrSelected', JSON.stringify({ "listindex": 0, "mtrList": [{ "isAdded": false, "mtrId": "", "mtrName": this.customMtr }], "dateTime": this.startTime.time, "isDIYResource": true }));
                        this.$router.push({ path: '/mttimeselect' });
                    }
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
