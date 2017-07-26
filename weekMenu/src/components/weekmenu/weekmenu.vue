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


.weui-navbar__item:after {
    border: none;
}

.weui-media-box__title {
    white-space: normal;
}

.weui-actionsheet__menu {
    height: 145px;
    overflow-x: scroll;
}

.weui-media-box:before {
    left: 10px;
}

.weui-media-box_appmsg .weui-media-box__hd {
    width: 76px;
    height: 76px;
}

.css-nav-container {
    .select-btn {
        .css-arrow {
            position: absolute;
            top: 18px;
            right: 14%;
            display: inline-block;
            height: 8px;
            width: 8px;
            border-bottom: 1px solid #98989f;
            border-left: 1px solid #98989f;
            transform: rotate(-45deg);
            margin-left: 10px;
            margin-bottom: 3px;
        }
        .drop {
            transform: rotate(135deg);
            margin-bottom: -2px;
            top: 23px;
        }
    }
}

.css-nav-container.weui-navbar {
    z-index: 548;
    background-color: #fff;
    .css-select-region {
        padding-left: 8%;
        padding-right: 20%;
    }
}

.css-main-container {
    background-color: #f6f7f9;
    .aside-container {
        position: relative;
        z-index: 540;
        .aside {
            position: absolute;
            left: 0;
            width: 18.67%;
            .c-lefttab {
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #e7e7e7;
                text-align: center;
            }
            .tabactive {
                background-color: #fff;
                border-right: none;
                color: #ec4280;
                width: 101.35%;
            }
        }
    }
    .c-item-container {
        height: 100%;
        overflow-y: scroll;
        margin-left: 18.67%;
        background-color: #fff;
        border-left: 1px solid #e7e7e7;
        .css-itembox {
            position: relative;
            padding: 15px 10px;
            .css-menu-pic {
                position: absolute;
                top: 20px;
                border-radius: 4px;
                overflow: hidden;
                .weui-media-box__thumb {
                    height: 100%;
                }
                .css-explain-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #000;
                    opacity: 0.3;
                    z-index: 50;
                }
                .css-explain-text {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    z-index: 51;
                    font-size: .8rem;
                    text-align: center;
                    line-height: 76px;
                }
            }
            .css-menu-info {
                margin-left: 85px;
                min-height: 87px;
                .weui-media-box__title {
                    @include flexbox();
                    line-height: 20px;
                    font-size: .875rem;
                    margin-bottom: 7px;
                    margin-top: 2px;
                    .css-menu-cat {
                        @include flexboxwidth(1);
                        color: #9b9b9b;
                    }
                    .css-menu-content {
                        @include flexboxwidth(1.5);
                        padding-left: 10px;
                    }
                }
            }
        }
    }
}

.css-guide-box {
    .weui-mask {
        z-index: 547;
    }
    .css-guide {
        width: 100%;
        position: absolute;
        z-index: 550;
        top: 50px;
        background-color: #fff;
        max-height: 150px;
        overflow-y: scroll;
        .css-guide-item {
            position: relative;
            padding-left: 22px;
            height: 50px;
            line-height: 50px;
            &.css-curregion {
                color: #308ee3;
            }
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
    .weui-skin_android {
        .weui-dialog__hd {
            text-align: center;
        }
        .css-regionselect {
            max-height: 144px;
            overflow-y: scroll;
            .weui-actionsheet__cell {
                text-align: center;
            }
        }
    }
}

.guide-overlay {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 501;
    position: fixed;
}
</style>

<template>
    <div class="container">
        <div class="weui-tab">
            <!--指引结构头部 Start-->
            <!-- <div class="weui-navbar css-nav-container" v-if="isShowguide">
                                                    <div class="weui-navbar__item select-btn">
                                                        设置区域
                                                    </div>
                                                </div> -->
            <!--指引结构头部 End-->
            <div class="weui-navbar css-nav-container">
                <div class="weui-navbar__item select-btn" v-on:click="showguide()" v-if="isShowguide">
                    <div class="css-select-region">{{curregion}}</div>
                    <i class="css-arrow" :class="{drop:isShowguideselect}"></i>
                </div>
                <div class="weui-navbar__item select-btn" v-on:click="showregion()" v-if="!isShowguide">
                    <div class="css-select-region">{{curregion}}</div>
                    <i class="css-arrow" :class="{drop:isShowregion}"></i>
                </div>
                <div class="weui-navbar__item select-btn" v-on:click="showtime()">
                    {{todaytime}}
                    <i class="css-arrow" :class="{drop:isShowtime}"></i>
                </div>
            </div>
            <div class="weui-tab__panel css-main-container" v-bind:style="{paddingTop:dompadding+'px'}">
                <aside class="aside-container">
                    <div class="aside">
                        <div class="c-lefttab" v-for="(val,index) in mealtime" v-on:click="switchpanel(index)" :class="{tabactive:val.ishow}" :key="val.Id">{{val.name}}</div>
                        <router-link to="/Feedback">意见反馈</router-link>
                        <div class="c-lefttab" v-on:click="clearlocal()">（重置指引）</div>
                    </div>
                </aside>
                <section class="c-item-container">
                    <div class="c-item-panel">
                        <div class="weui-panel__bd" v-show="isShowtab">
                            <div class="weui-media-box weui-media-box_appmsg css-itembox" v-for="(val,index) in tabVal" :key="val.Id">
                                <div class="weui-media-box__hd css-menu-pic">
                                    <div class="weui-media-box__thumb" v-bind:style="{backgroundImage:'url('+val.imgsrc+')',backgroundSize:'cover'}" v-if="val.IconId"></div>
                                    <div class="weui-media-box__thumb" v-bind:style="{backgroundImage:'url('+defaultimg+')',backgroundSize:'cover'}" v-if="!val.IconId"></div>
                                    <!-- <img class="weui-media-box__thumb" v-bind:src="val.imgsrc" v-if="val.IconId">
                                                                    <img class="weui-media-box__thumb" v-bind:src="defaultimg" v-if="!val.IconId"> -->
                                    <span class="css-explain-mask"></span>
                                    <span class="css-explain-text">{{val.Name}}</span>
                                </div>
                                <div class="weui-media-box__bd css-menu-info">
                                    <h4 class="weui-media-box__title" v-for="(initme,idx) in val.Items" :key="initme.Id">
                                        <span class="css-menu-cat" v-if="idx">{{idx}}：</span>
                                        <span class="css-menu-content" v-if="initme.toString()">{{initme.toString()}}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="weui-panel__bd" v-show="!isShowtab">暂无菜单！</div>
                    </div>
                </section>
            </div>
            <!-- 区域选择 Start-->
            <div class="weui-skin_android css-guide-box" id="weui-android-actionsheet" v-if="isShowregion">
                <div class="weui-mask" v-on:click="closeMask()"></div>
                <div class="css-guide" v-bind:style="{top:dompadding+'px'}">
                    <div class="css-guide-item" :class="{'css-curregion':region.Id === curregionId}" v-for="(region,index) in regionVal" v-on:click="menuselectregion(index)" :key="region.Id">{{region.Name}}</div>
                </div>
            </div>
            <!-- 区域选择 End -->
            <!--指引结构弹出 Start-->
            <div class="weui-skin_android css-guide-box" id="weui-android-actionsheet" v-if="isShowguideselect">
                <div class="weui-mask" v-on:click="closeMask()"></div>
                <div class="css-guide" v-if="!noticeguide" v-bind:style="{top:dompadding+'px'}">
                    <div class="css-guide-item" :class="{'css-curregion':region.Id === defaultRegionId}" v-for="(region,index) in regionVal" v-on:click="guideselectregion(index)" :key="region.Id">{{region.Name}}</div>
                </div>
                <div class="weui-dialog" v-if="isShowguideselect" v-show="noticeguide">
                    <div class="weui-dialog__bd">是否将{{curregion}}设置为默认区域？</div>
                    <div class="weui-dialog__ft">
                        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="confirmguide()">确认</a>
                        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-on:click="cancelguide()">取消</a>
                    </div>
                </div>
    
            </div>
            <!--指引结构弹出 End-->
        </div>
        <!--提示窗Start-->
        <notice v-show="isShowerr" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
        <!--提示窗End-->
    </div>
</template>

<script>
import Vue from 'vue';
import weui from '../../../lib/js/weui.min.js';
import moment from 'moment';
import urldata from '../../config/urldata.js';
import notice from '../popnotice/notice.vue';
import defaultImg from '../../images/defaultimg.png';
import feedbackImg from '../../images/feedback-icon.png';
export default {
    components: {
        notice
    },
    data() {
        return {
            dompadding: 50,//容器padding计算
            defaultimg: defaultImg,//默认图片
            weekstart: '',//本周开始时间
            weekend: '',//本周结束时间
            // todaytime: moment().format('YYYY-MM-DD'),//今天时间
            todaytime: '2016-08-30',//临时测试可删
            errtitle: "提示",
            errinfo: "餐厅尚未上传菜单，请稍后再试",
            isShowguideselect: false,
            isShowguide: true,//是否显示指引页
            noticeguide: false,//指引页是否设置默认区域弹窗
            isShowerr: false,//是否显示失败提醒
            isShowregion: false,//是否显示区域下拉
            isShowtime: false,//是否显示时间区域下拉
            defaultRegion: "",//默认广新
            defaultRegionId: "",//默认广新id
            curregion: "加载中...",//当前选中区域
            curregionId: "",//当前选中区域的id
            regionVal: [],//区域数据
            mealtime: [{ name: "早餐", value: 0, ishow: true }, { name: "午餐", value: 1, ishow: false }, { name: "晚餐", value: 2, ishow: false }],//用餐时间数据
            isShowtab: true,//无数据处理
            tabVal: []//菜品数据
        }
    },
    mounted() {
        this.$moaapi.resetNavTitle();
        setTimeout(() => {
            this.$moaapi.showNavMenu(feedbackImg);
        }, 100)

        let localdata = this.getlocaldata('curregion');
        if (localdata) {
            this.isShowguide = false;
            this.isShowguideselect = false;
        }

        let curweekday = moment().format('d');
        this.weekstart = moment().add('days', -curweekday + 1).format('YYYY/MM/DD');
        this.weekend = moment().add('days', 7 - curweekday).format('YYYY/MM/DD');
        //初始化区域
        this.$http.get(urldata.basePath + urldata.Region).then(response => {
            if (response.body.Success) {
                this.isShowregion = false;
                this.isShowtime = false;
                let obj = response.body.Object;
                let matchlocaldata = true;//检测是否存在于本地匹配的数据
                this.regionVal = obj;
                if (localdata) {
                    this.regionVal.forEach((el) => {
                        if (matchlocaldata) {
                            if (el.Name.indexOf(localdata) !== -1) {
                                this.curregion = localdata;
                                this.curregionId = this.getlocaldata('curregionId');
                                matchlocaldata = false;
                            }
                        }
                    })
                    if (matchlocaldata) {
                        let str = '广新';
                        let _this = this;
                        this.regionVal.forEach((el) => {
                            if (el.Name.indexOf(str) !== -1) {
                                _this.curregion = el.Name;
                                _this.curregionId = el.Id;
                            }
                        })
                    }

                    if (this.curregion !== '') {
                        this.setlocaldata('curregion', this.curregion);
                        this.setlocaldata('curregionId', this.curregionId);
                        //初始化区域菜单
                        this.ajaxregionmenu(this.curregionId, this.todaytime, this.mealtime[0].value);
                    }
                } else {
                    let str = '广新';
                    let _this = this;
                    obj.reverse().forEach(function (el) {
                        if (el.Name.indexOf(str) !== -1) {
                            _this.defaultRegion = el.Name;
                            _this.defaultRegionId = el.Id;
                            _this.curregion = el.Name;
                            _this.curregionId = el.Id;
                        }
                    })
                    this.ajaxregionmenu(this.curregionId, this.todaytime, this.mealtime[0].value);
                }
            }
        }, response => {
            this.isShowerr = true;
        });

    },
    updated() {
        this.dompadding = document.querySelector('.css-nav-container').offsetHeight;
    },
    methods: {
        //设置本地存储
        setlocaldata(item, val) {
            return window.localStorage.setItem(item, val);
        },
        //读取本地存储
        getlocaldata(item) {
            return window.localStorage.getItem(item);
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
        },
        //处理指引页选中区域
        guideselectregion(index) {
            this.noticeguide = true;
            this.curregion = this.regionVal[index].Name;
            this.curregionId = this.regionVal[index].Id;
        },
        //菜单页区域选择
        menuselectregion(index) {
            this.isShowtime = false;
            if (this.isShowregion) {
                this.isShowregion = false;
            } else {
                this.isShowregion = true;
            }
            this.curregion = this.regionVal[index].Name;
            this.curregionId = this.regionVal[index].Id;
            this.setlocaldata('curregion', this.curregion);
            this.setlocaldata('curregionId', this.curregionId);
            this.ajaxregionmenu(this.curregionId, this.todaytime, this.mealtime[0].value);
        },
        //处理指引页区域弹窗确认
        confirmguide() {
            if (this.isShowguide) {
                this.isShowguide = false;
                this.isShowguideselect = false;
                this.setlocaldata('isShowguide', false);
                this.setlocaldata('curregion', this.curregion);
                this.setlocaldata('curregionId', this.curregionId);
                this.ajaxregionmenu(this.curregionId, this.todaytime, this.mealtime[0].value);
            } else {
                this.isShowguide = true;
            }
        },
        //处理指引页取消
        cancelguide() {
            if (this.isShowguide) {
                this.isShowguide = false;
                this.isShowguideselect = false;
                // this.curregion = this.regionVal[0].Name;
                // this.curregionId = this.regionVal[0].Id;
                // if (this.curregion.indexOf('广新') === -1) {
                //     this.curregion = this.defaultRegion;
                //     this.curregionId = this.defaultRegionId;
                // }
                this.setlocaldata('isShowguide', false);
                this.setlocaldata('curregion', this.defaultRegion);
                this.setlocaldata('curregionId', this.defaultRegionId);
                this.ajaxregionmenu(this.curregionId, this.todaytime, this.mealtime[0].value);
            } else {
                this.isShowguide = true;
            }
        },
        //指引操作
        showguide() {
            if (this.isShowguideselect) {
                this.isShowguideselect = false;
            } else {
                this.isShowguideselect = true;
            }
        },
        closeMask() {
            this.isShowguideselect = false;
            this.isShowregion = false;
        },
        //处理区域显示及选择
        showregion() {
            let _this = this;
            this.isShowtime = false;
            if (this.isShowregion) {
                this.isShowregion = false;
            } else {
                this.isShowregion = true;
            }
            // //拼接picker配置项
            // let temparr = [];
            // function setopt(el) {
            //     let obj = {
            //         label: el.Name,
            //         value: el.Id
            //     }
            //     temparr.push(obj);
            //     return temparr;
            // }
            // this.regionVal.map(setopt)
            // weui.picker(temparr, {
            //     className: 'custom-classname',
            //     defaultValue: [_this.curregionId],
            //     onChange: function (result) {
            //         //选中后的处理
            //     },
            //     onConfirm: function (result) {
            //         _this.curregion = result[0].label;
            //         _this.curregionId = result[0].value;
            //         _this.setlocaldata('curregion', _this.curregion);
            //         _this.setlocaldata('curregionId', _this.curregionId);
            //         _this.isShowregion = false;
            //         _this.ajaxregionmenu(_this.curregionId, _this.todaytime, _this.mealtime[0].value);
            //     },
            //     onCancel: function () {
            //         _this.isShowregion = false;
            //     },
            //     id: 'pickregion'
            // });
            // document.querySelector('.custom-classname').addEventListener('click', function () {
            //     this.isShowregion = false;
            // })
        },
        //时间下拉并处理
        showtime() {
            let curyear = new Date().getFullYear();
            let curMonth = (new Date().getMonth()) + 1;
            let curday = new Date().getDate();
            let _this = this;
            this.isShowregion = false;
            this.isShowguideselect = false;
            if (this.isShowtime) {
                this.isShowtime = false;
            } else {
                this.isShowtime = true;
            }
            weui.datePicker({
                // start:_this.weekstart,
                // end: _this.weekend,
                defaultValue: [curyear, curMonth, curday],
                // cron: '* * 1-6',  // 每逢周一到周六
                onChange: function (result) {
                    //选中后的处理
                },
                onConfirm: function (result) {
                    let settime = '';
                    for (let i = 0, len = result.length; i < len; i++) {
                        if (i === 0) {
                            settime = result[i].label.substr(0, result[i].label.length - 1);
                        } else {
                            settime = settime + '-' + result[i].label.substr(0, result[i].label.length - 1);
                        }
                    }
                    _this.isShowtime = false;
                    _this.todaytime = settime;
                    _this.ajaxregionmenu(_this.curregionId, _this.todaytime, _this.mealtime[0].value);
                },
                onCancel: function () {
                    _this.isShowtime = false;
                },
                id: 'js-datePicker'
            });
        },
        //处理切换早午晚餐
        switchpanel(index) {
            for (let i = 0, len = this.mealtime.length; i < len; i++) {
                if (i === index) {
                    this.mealtime[i].ishow = true;
                } else {
                    this.mealtime[i].ishow = false;
                }
            }
            this.ajaxregionmenu(this.curregionId, this.todaytime, this.mealtime[index].value);
        },
        //重置餐次
        settobreakfast() {
            this.mealtime.forEach(function (el) {
                if (el.value === 0) {
                    el.ishow = true;
                } else {
                    el.ishow = false;
                }
            })
        },
        //获取菜品数据并合并处理
        ajaxregionmenu(curid, time, meal) {
            if (meal === 0) {
                this.settobreakfast();
            }
            // this.$http.get('/Menu?regionId=' + curid + '&date=' + time + '&mealTime=' + meal).then(response => {
            this.$http.get(urldata.basePath + urldata.Menu + '?regionId=' + curid + '&date=' + time + '&mealTime=' + meal).then(response => {
                if (response.body.Success) {
                    let obj = response.body.Object;
                    if (obj.length === 0) {
                        this.isShowtab = false;
                        return false;
                    } else {
                        this.isShowtab = true;
                    }
                    //处理相同SmallClassName合并
                    obj.forEach(function (el) {
                        let tempobj = {};
                        if (el.Items.length > 0) {
                            el.Items.forEach(function (itemel) {
                                if (tempobj.hasOwnProperty([itemel.SmallClassName])) {
                                    tempobj[itemel.SmallClassName].push(itemel.Name);
                                } else {
                                    tempobj[itemel.SmallClassName] = [itemel.Name];
                                }
                            })
                            // el.imgsrc = "http://t00005255.corp.vipshop.com:8045" + urldata.picurl + el.IconId;
                            el.imgsrc = urldata.basePath + urldata.picurl + el.IconId;
                            el.Items = tempobj;
                        }

                    })
                    this.tabVal = obj;
                }
            }, response => {
                this.isShowerr = true;
            });
        },
        //清除本地存储 可删
        clearlocal() {
            window.localStorage.clear();
            window.location.reload();
        }
    }
} 
</script>
