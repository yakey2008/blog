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
.css-mtmeetdetailinvite-page {
    background-color: #f6f7f8;
    //文本框
    .css-mtmeetdetailinvite-textarea {
        .weui-textarea {
            height: 35px;
            resize: vertical;
            color: #333;
        }
    }
    //更换单选区的颜色
    .weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before {
        color: #ec4280;
    }
    .weui-cell_access .weui-cell__ft:after {
        height: 10px;
        width: 10px;
        top: 10px;
        border-width: 1px 1px 0 0;
    }

    .css-main-container {
        padding-bottom: 80px;
        .weui-cells {
            margin: 0;
            font-size: 1rem;
            &:before {
                border: none;
            }
            &:after {
                border: none;
            }
            .css-acceptnotice-text {
                font-size: .95rem;
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
            position: relative;
            .css-meet-statu {
                position: absolute;
                top: 0;
                right: 0;
                color: #fff;
                padding: 0 5px 9px 25px;
                background-image: url('../../images/invite-bg.png');
                background-size: cover;
                font-style: normal;
                font-size: .875rem;
            }
            .css-mtlaunchmeet-mtl-infoadd-container {
                @include flexbox();
                background-color: #fff;
                font-size: 1rem;
                overflow: hidden;
                position: relative;
                padding: 22px 22px 9px 22px;
                color: #9b9b9b;
                .css-mtmeetdetailinvite-textarea {
                    @include flexboxwidth(2);
                    margin-left: 20px;
                }
                @media (max-width: 340px) {
                    .css-mtmeetdetailinvite-textarea {
                        margin-left: 5px;
                    }
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
                    margin-right: 10px;
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
                    &.weui-cell__ft:after {
                        top: 13px;
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
            } //会议邀请状态按钮
            .css-invited-statu {
                @include flexbox();
                padding: 10px 22px;
                .css-invited-statu-btn {
                    @include flexboxwidth(1);
                    padding: 5px;
                    font-size: .875rem;
                    text-align: center;
                    background-color: #989ad7;
                    color: #fff;
                    margin-right: 11px;
                    border-radius: 4px;
                    &.mgr0 {
                        margin-right: 0;
                    }
                }
                @media (max-width: 400px) {
                    .css-invited-statu-btn {
                        font-size: .7rem;
                    }
                }
                @media (max-width: 355px) {
                    .css-invited-statu-btn {
                        margin-right: 1px;
                    }
                }
            }
        }
    }

    .css-bottombar {
        background-color: #f6f7f8;
        &.weui-tabbar:before {
            border: none;
        }
        .css-bottombtn {
            width: 37%;
            margin: 22px auto;
            height: 36px;
            line-height: 36px;
            font-size: 1rem;
            &.css-delinebtn {
                margin-right: 21px;
                color: #9b9b9b;
                &:active {
                    color: rgba(0, 0, 0, 0.6);
                    background-color: #DEDEDE;
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
</style>
<template>
    <div class="weui-tab css-mtmeetdetailinvite-page">
        <div class="weui-tab">
            <div class="weui-tab__panel css-main-container">
                <section>
                    <div class="css-mtlaunchmeet-theme css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <span>会议主题</span>
                            </div>
                            <div class="css-mtmeetdetailinvite-textarea weui-cell_access">
                                <div class="weui-cell__ft">
                                    <textarea class="weui-textarea" placeholder="请输入文本" rows="3" maxlength="30" v-model="detailData.Subject"></textarea>
                                </div>
                            </div>
                        </div>
                        <i class="css-meet-statu">会议室待审批</i>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells css-mtlaunchmeet-meettime">
                        <div class="weui-cell weui-cell_access">
                            <div class="weui-cell__bd">
                                <p>会议时间</p>
                            </div>
                            <div class="weui-cell__ft">
                                {{detailData.meetTimeDetail}}
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>会议地点（{{detailData.Location.length}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn">
                                <span class="css-add-btn" v-on:click="mtrAddone()">添加</span>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in detailData.Location" :key="mtr">
                            <div class="css-mtlaunchmeet-mtl-location-info">
                                <p>{{mtr}}</p>
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
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <span>会议内容</span>
                            </div>
                            <div class="css-mtmeetdetailinvite-textarea weui-cell_access">
                                <div class="weui-cell__ft">
                                    <textarea class="weui-textarea" placeholder="请输入会议内容（可选）" rows="3" maxlength="30" v-model="detailData.Body"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-participate-container">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>参会人员（{{detailData.RequiredAttendees.length+detailData.OptionalAttendees.length}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn">
                                <router-link :to="'/mtaddcontact'" tag="div">
                                    <span class="css-add-btn">通过邮箱地址添加</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="css-invited-statu">
                            <div class="css-invited-statu-btn">全部</div>
                            <div class="css-invited-statu-btn">已接收(2)</div>
                            <div class="css-invited-statu-btn">已谢绝(10)</div>
                            <div class="css-invited-statu-btn mgr0">未接收(11)</div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(requiremen,index) in detailData.RequiredAttendees" :key="requiremen.Address" v-if="index<4">
                                        <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                        <p>{{requiremen.Name}}</p>
                                    </div>
                                    <!-- <div class="fl-l css-must-in">
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
                                    </div> -->
                                    <div class="fl-l css-must-in">
                                        <div class="weui-uploader__input-box css-mtlaunchmeet-mtl-participate marginle12p">
                                            <div class="weui-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="css-right-icon css-must-icon"></i>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items" v-if="detailData.OptionalAttendees.length>0">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(optionalmen,index) in detailData.OptionalAttendees" :key="optionalmen.Address" v-if="index<4">
                                        <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                        <p>{{optionalmen.Name}}</p>
                                    </div>
                                    <!-- <div class="fl-l css-must-in">
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
                                    </div> -->
                                    <div class="fl-l css-must-in">
                                        <div class="weui-uploader__input-box css-mtlaunchmeet-mtl-participate marginle12p">
                                            <div class="weui-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="css-right-icon css-optional-icon"></i>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells weui-cells_checkbox">
                        <label class="weui-cell weui-check__label" for="s11">
                            <div class="weui-cell__hd">
                                <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked" v-model="detailData.IsResponseRequested">
                                <i class="weui-icon-checked"></i>
                            </div>
                            <div class="weui-cell__bd">
                                <p class="css-acceptnotice-text">接收参会者对此会议的接受/谢绝通知</p>
                            </div>
                        </label>
                    </div>
                </section>
            </div>
            <div class="weui-tabbar css-bottombar">
                <div class="weui-btn css-bottombtn css-delinebtn">取消会议</div>
                <div class="weui-btn css-bottombtn css-acceptbtn">提交修改</div>
            </div>
        </div>
    </div>
</template>
<script>
import localdata from '../../js/localdata.js';
import moment from 'moment';

export default {
    name: 'mtMeetDetailInvite',
    created(){
        this.detailData= JSON.parse(localdata.getdata('meetDetailView'));
        this.detailData.Location = this.detailData.Location.split('; ');
        let date = this.detailData.Start.split(' ')[0];
        let st = this.detailData.Start.split(' ')[1];
        let ed = this.detailData.End.split(' ')[1];
        
        this.detailData.meetTimeDetail = date+' \r\n'+st.substr(0,st.length-3)+'-'+ed.substr(0,ed.length-3);
    },
    mounted() {

    },
    data() {
        return {
            detailData:{},//本条数据详情
        }
    },
    methods: {
        mtrDelone(idx) {
            // this.meetingroom.splice(idx, 1);
        },
        mtrAddone() {
            // let arritem = { name: 'okok' }
            // this.meetingroom.push(arritem);
        }
    }
} 
</script>
