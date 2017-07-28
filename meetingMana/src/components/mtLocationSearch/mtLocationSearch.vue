<style lang="scss">
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
        .select-btn {
            .css-arrow {
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
            }
        }
    }
    .css-main-container {
        .css-pageinfo-container {
            position: absolute;
            width: 100%;
            .css-pagesetting {
                height: 56px;
                background-color: #fff;
                padding: 5px 5.86%;
                .css-setting {
                    padding: 15px 0px;
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
            .css-tip {
                height: 56px;
                padding: 5px 4.3%;
                .weui-footer__text {
                      font-size: 0.875rem;
                      color: #9b9b9b
                }
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
            .weui-cell__bd  {
                .weui-footer__btn {
                  color:#fff;
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
                        6-15 星期四
                        <i class="css-arrow" :class="{drop:isShowtime}"></i>
                    </div>
                    <div class="weui-navbar__item select-btn" v-on:click="showregion()">
                        广州广新大厦
                        <i class="css-arrow" :class="{drop:isShowregion}"></i>
                    </div>
                </div>
                <div class="weui-tab__panel css-main-container">
                    <section>
                        <div class="css-pageinfo-container">
                            <div class="hr-div"></div>
                            <section class="css-pagesetting">
                                <div class="weui-cell weui-cell_switch css-setting weui-cell_access">
                                    <div class="weui-cell__hd ">开始时间</div>
                                    <div class="weui-cell__bd">
                                      <input v-model="val_start" class="weui-input css-settime"  pattern="[0-9]*" placeholder="请输入时间（时：分）">
                                    </div>
                                    <div :class="val_start.length>0?'weui-cell__ft':''"></div>
                                </div>
                            </section>
                            <section class="css-pagesetting">
                              <div class="weui-cell weui-cell_switch  css-setting weui-cell_access">
                                  <div class="weui-cell__hd">结束时间</div>
                                  <div class="weui-cell__bd">
                                      <input v-model="val_end" class="weui-input css-settime"  pattern="[0-9]*" placeholder="请输入时间（时：分）">
                                  </div>

                                  <!-- <div class="weui-cell__ft"></div> -->
                                  <div :class="val_end.length>0?'weui-cell__ft':''"></div>
                              </div>
                            </section>
                            <div class="hr-div"></div>
                            <section class="css-pagesetting">
                              <div class="weui-cell css-setting">
                                  <div class="weui-cell__hd">会议室名称</div>
                                  <div class="weui-cell__bd">
                                      <input class="weui-input css-setname"  pattern="[0-9]*" placeholder="请输入会议室名称">
                                  </div>
                              </div>
                            </section>
                            <div class="hr-div"></div>
                            <section class="css-tip">
                            <p class="weui-footer__text">搜索帮助：</p>
                            <p class="weui-footer__text">1、可用搜索指定时间段，空闲的会议室资源；</p>
                            <p class="weui-footer__text">2、可以通过会议室名称，快速找到会议室。</p>
                          </section>
                        </div>

                    </section>

                </div>
            </div>
        </div>
        <a href="javascript:;">
        <div class="weui-tabbar css-bottombar">
            <div class="weui-cell css-maxwidth">
                <div class="weui-cell__bd">
                <p class="weui-footer__btn">开始搜索</p>
                </div>
            </div>
        </div></a>
    </div>
</template>
<script>
import weui from '../../lib/js/weui.min.js';
import moment from 'moment';

export default {
    name: 'mtLocationSearch',
    mounted() {
    },
    data() {
        return {
            isShowregion: false,
            isShowtime: false,
            curregion: '广州广新大厦',
            val_start: '',
            val_end: '',
            tabVal: [
                { label: '广州广新大厦', value: 0 },
                { label: '上海上新时代科技大厦', value: 1 },
                { label: '北京北新科技大厦', value: 2 }
            ],
        }
    },
    methods: {
        //时间下拉并处理

            //时间下拉并处理
            showtime() {
                let curyear = new Date().getFullYear();
                let curMonth = (new Date().getMonth()) + 1;
                let curday = new Date().getDate();
                let _this = this;
                this.isShowregion = false;
                if (this.isShowtime) {
                    this.isShowtime = false;
                } else {
                    this.isShowtime = true;
                }
                weui.datePicker({
                    // start:_this.weekstart,
                    // end: _this.weekend,
                    defaultValue: [curyear, curMonth, curday],
                    cron: '* * 1-6',  // 每逢周一到周六
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
            //处理区域显示及选择
            showregion() {
                let _this = this;
                this.isShowtime = false;
                if (this.isShowregion) {
                    this.isShowregion = false;
                } else {
                    this.isShowregion = true;
                }

                weui.picker(this.tabVal, {
                    className: 'custom-classname',
                    defaultValue: [_this.curregion],
                    onChange: function (result) {
                        //选中后的处理
                    },
                    onConfirm: function (result) {
                        _this.curregion = result[0].label;
                        _this.curregionId = result[0].value;
                        _this.setlocaldata('isShowguide', _this.curregion);
                        _this.setlocaldata('curregionId', _this.curregionId);
                        _this.isShowregion = false;
                        _this.ajaxregionmenu(_this.curregionId, _this.todaytime, _this.mealtime[0].value);
                    },
                    onCancel: function () {
                        _this.isShowregion = false;
                    },
                    id: 'pickregion'
                });
                document.querySelector('.custom-classname').addEventListener('click', function () {
                    this.isShowregion = false;
                })
            },
    }
    // components: {
    //     Mmain,
    //     Bottomnav
    // }
}
</script>
