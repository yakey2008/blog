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
.css-mtlaunchmeet-page {
    background-color: #f6f7f8;
    .weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before {
        color: #ec4280;
    }
    .css-bottombar {
        background-color: #fff;
        &.weui-tabbar:before {
            border: none;
        }
        .css-submit-btn {
            width: 100%;
            border: 0;
            border-radius: 0;
            background-color: #88b1ff;
            &.weui-btn:after {
                border: none;
            }
        }
    }

    .css-main-container {
        .weui-cells {
            margin: 0;
            font-size: 1rem;

            &:before {
                border: none;
            }
            &:after {
                border: none;
            }
        }
        .css-mtlaunchmeet-theme {
            margin: 0;
            font-size: 1rem;
            padding-top: 24px;

            .weui-cell {
                padding-top: 17px;
                padding-left: 22px;
                .weui-textarea {
                    height: 33px;
                    resize: vertical;
                }
            }
        }
        .css-mtlaunchmeet-meettime {
            .weui-cell__bd {
                @include flexboxwidth(initial);
            }
            .weui-cell {
                padding: 22px;
                color: #9b9b9b;
                .weui-cell__ft {
                    @include flexboxwidth(1);
                    color: #333;
                    text-align: left;
                    padding-left: 20px;
                }
                @media (max-width: 340px) {
                    .weui-cell__ft {

                        padding-left: 5px;
                    }
                }
                &.weui-cell_access .weui-cell__ft:after {
                    height: 10px;
                    width: 10px;
                    top: 10px;
                    border-width: 1px 1px 0 0;
                }
            }
        }

        .css-mtlaunchmeet-meetlocation {
            background-color: #fff;
            .css-mtlaunchmeet-mtl-infoadd-container {
                @include flexbox();
                background-color: #fff;
                font-size: 1rem;
                overflow: hidden;
                position: relative;
                padding: 11px 22px;
                color: #9b9b9b;
                .css-mtlaunchmeet-mtl-info {
                    @include flexboxwidth(1);
                    text-align: left;
                }
                .css-mtlaunchmeet-mtl-addbtn {
                    @include flexboxwidth(1);
                    text-align: right;
                    .css-add-btn {
                        font-size: .875rem;
                        color: #4c8afe;
                    }
                }
            }

            .css-mtlaunchmeet-mtl-location-container {
                @include flexbox();
                background-color: #fff;
                font-size: 1rem;
                overflow: hidden;
                position: relative;
                padding: 17px 22px 17px 0;
                border-top: 1px solid #e7e7e7;
                margin-left: 22px;
                .css-mtlaunchmeet-mtl-location-info {
                    @include flexboxwidth(1);
                    text-align: left;
                }
                .css-mtlaunchmeet-mtl-location-deladdbtn {
                    text-align: right; //添加
                    .css-del-btn {
                        display: block;
                        width: 25px;
                        height: 25px;
                        background-image: url('../../images/del-btn-icon.png');
                        background-size: cover;
                    }
                }
                &.css-shouall-container {
                    padding: 13px 22px 13px 0;
                    .css-showall-participate {
                        flex: 1;
                        font-size: .875rem;
                        color: #4c8afe;
                        text-align: center;
                    }
                }
            }
        }

        .css-mtlaunchmeet-content {
            padding-top: 10px;
            .weui-cell {
                padding-left: 22px;
                .weui-textarea {
                    height: 36px;
                    resize: vertical;
                }
            }
        }
        .css-mtlaunchmeet-participate-container {
            background-color: #fff;
            .css-mtlaunchmeet-mtl-infoadd-container {
                @include flexbox();
                background-color: #fff;
                font-size: 1rem;
                overflow: hidden;
                position: relative;
                padding: 11px 22px;
                color: #9b9b9b;
                .css-mtlaunchmeet-mtl-info {
                    @include flexboxwidth(1);
                    text-align: left;
                }
                .css-mtlaunchmeet-mtl-addbtn {
                    @include flexboxwidth(1);
                    text-align: right;
                    .css-add-btn {
                        font-size: .875rem;
                        color: #4c8afe;
                    }
                }
            }

            .css-mtlaunchmeet-mtl-participate-items {
                background-color: #fff;
                font-size: 1rem;
                overflow: hidden;
                position: relative;
                padding: 17px 22px 17px 0;
                border-top: 1px solid #e7e7e7;
                margin-left: 22px;
                .css-right-icon {
                    width: 31px;
                    height: 15px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-size: cover;
                    &.css-must-icon {
                        background-image: url('../../images/must.png');
                    }
                    &.css-optional-icon {
                        background-image: url('../../images/optional.png');
                    }
                }
                .css-invite-container {
                    @include flexbox();
                    .css-must-in {
                        @include flexboxwidth(1);
                        text-align: center;
                        font-size: .87rem;
                        .css-must-in-item {
                            width: 46px;
                            height: 46px;
                            border-radius: 50px;
                            background: no-repeat center center;
                            background-size: cover;
                            margin: 0 auto;
                        }
                    }
                }

                .css-mtlaunchmeet-mtl-participate {
                    width: 44px;
                    height: 44px;
                    border-radius: 50px;
                    border-style: dashed;
                    border-color: #a0a0a0;
                    margin-bottom: 0;
                    &.weui-uploader__input-box:before {
                        height: 21px;
                        background-color: #434750;
                    }
                    &.weui-uploader__input-box:after {
                        width: 21px;
                        background-color: #434750;
                    }
                    &.marginle12p {
                        margin-left: 12%;
                    }
                }

                &.css-shouall-container {
                    padding: 13px 22px 13px 0;
                    .css-showall-participate {
                        font-size: .875rem;
                        color: #4c8afe;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="weui-tab css-mtlaunchmeet-page">
        <div class="weui-tab">
            <div class="weui-tab__panel css-main-container">
                <section>
                    <div class="weui-cells weui-cells_form css-mtlaunchmeet-theme">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <textarea class="weui-textarea" placeholder="请输入文本" rows="3" maxlength="30"></textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells css-mtlaunchmeet-meettime">
                        <a class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__bd">
                                <p>会议时间</p>
                            </div>
                            <div class="weui-cell__ft"><span>2016-06-10</span>&nbsp;&nbsp;<span>10:11-11:30</span></div>
                        </a>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>会议地点（<span>{{meetingroom.length}}</span>）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn">
                                <span class="css-add-btn" v-on:click="mtrAddone()">添加</span>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in meetingroom" :key="mtr">
                            <div class="css-mtlaunchmeet-mtl-location-info">
                                <p>{{mtr.name}}</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-location-deladdbtn">
                                <i class="css-del-btn" v-on:click="mtrDelone(index)"></i>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container css-shouall-container">
                            <div class="css-showall-participate">展开查看所有会议地点</div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells weui-cells_form css-mtlaunchmeet-content">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <textarea class="weui-textarea" placeholder="请输入会议内容（可选）" rows="3" maxlength="500"></textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-participate-container">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>参会人员（<span>{{meetingroom.length}}</span>）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn">
                                <router-link :to="'/mtaddcontarct'" tag="div">
                                <span class="css-add-btn">通过邮箱地址添加</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in">
                                        <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                        <p>图兰朵</p>
                                    </div>
                                    <div class="fl-l css-must-in">
                                        <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                        <p>巴图</p>
                                    </div>
                                    <div class="fl-l css-must-in">
                                        <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                        <p>艾尔巴以</p>
                                    </div>
                                    <div class="fl-l css-must-in">
                                        <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                        <p>露西</p>
                                    </div>
                                    <div class="fl-l css-must-in">
                                        <div class="weui-uploader__input-box css-mtlaunchmeet-mtl-participate marginle12p">
                                            <div class="weui-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="css-right-icon css-must-icon"></i>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__input-box css-mtlaunchmeet-mtl-participate">
                                    <div class="weui-uploader__input"></div>
                                </div>
                            </div>
                            <i class="css-right-icon css-optional-icon"></i>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items css-shouall-container">
                            <div class="css-showall-participate">点击查看所有参会人</div>
                        </div>
    
                        <div class="hr-div"></div>
                        <div class="weui-cells weui-cells_checkbox">
                            <label class="weui-cell weui-check__label" for="s11">
                                <div class="weui-cell__hd">
                                    <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
                                    <i class="weui-icon-checked"></i>
                                </div>
                                <div class="weui-cell__bd">
                                    <p>接收参会者对此会议的接受/谢绝通知</p>
                                </div>
                            </label>
                        </div>
    
                    </div>
                </section>
            </div>
            <div class="weui-tabbar css-bottombar">
                <div class="weui-btn weui-btn_primary css-submit-btn">提交</div>
            </div>
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
            meetingroom: [
                { name: '广州-广新2F 巴黎会议室（8人；投影仪；玻璃写字板）' },
                { name: '广州-广新10F 黎巴嫩会议室（21人；玻璃写字板）' }
            ]
        }
    },
    methods: {
        mtrDelone(idx) {
            this.meetingroom.splice(idx, 1);
        },
        mtrAddone() {
            let arritem = { name: 'okok' }
            this.meetingroom.push(arritem);
        }
    }
} 
</script>
