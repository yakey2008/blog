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
.css-mtmeetdetailaccept-page {
    background-color: #f6f7f8;
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
        }
        .css-mtlaunchmeet-theme {
            margin: 0;
            font-size: 1rem;
            padding-top: 14px;
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
                background-image: url('../../images/accept-bg.png');
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
                padding: 21px 22px;
                color: #9b9b9b;
                .css-mtlaunchmeet-mtl-info {
                    @include flexboxwidth(1);
                    text-align: left; //会议主题
                    .css-mt-themetext {
                        color: #333;
                        padding-left: 20px;
                    }
                    @media (max-width: 340px) {
                        .css-mt-themetext {
                            padding-left: 5px;
                        }
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
    <div class="weui-tab css-mtmeetdetailaccept-page">
        <div class="weui-tab">
            <div class="weui-tab__panel css-main-container">
                <section>
                    <div class="css-mtlaunchmeet-theme css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <span>会议主题</span>
                                <span class="css-mt-themetext">{{detailData.Subject}}</span>
                            </div>
                        </div>
                        <i class="css-meet-statu">未接受</i>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells css-mtlaunchmeet-meettime">
                        <div class="weui-cell">
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
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in detailData.Location" :key="mtr">
                            <div class="css-mtlaunchmeet-mtl-location-info">
                                <p>{{mtr}}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <span>会议内容</span>
                                <span class="css-mt-themetext">{{detailData.Body}}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-participate-container">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container weui-cell_access">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>参会人员（{{detailData.RequiredAttendees.length+detailData.OptionalAttendees.length}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn weui-cell__ft">
                                <router-link :to="'/mtaddcontarct'" tag="div">
                                    <span class="css-add-btn">查看所有参与人</span>
                                </router-link>
                            </div>
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
                                </div>
                            </div>
                            <i class="css-right-icon css-optional-icon"></i>
                        </div>
                    </div>
                </section>
            </div>
            <div class="weui-tabbar css-bottombar">
                <div class="weui-btn css-bottombtn css-delinebtn">谢绝</div>
                <div class="weui-btn css-bottombtn css-acceptbtn">接受</div>
            </div>
        </div>
    </div>
</template>
<script>
import localdata from '../../js/localdata.js';
import moment from 'moment';

export default {
    name: 'mtMeetDetailAccept',
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
            this.meetingroom.splice(idx, 1);
        },
        mtrAddone() {
            let arritem = { name: 'okok' }
            this.meetingroom.push(arritem);
        }
    }
} 
</script>
