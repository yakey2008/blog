<style lang="scss">
.weui-uploader__bd {
    overflow: initial;
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
    background-color: #f6f7f8; //文本框
    .css-mtmeetdetailinvite-textarea {
        .weui-textarea {
            height: 35px;
            resize: vertical;
            color: #333;
        }
    } //更换单选区的颜色
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
                    // @include flexbox();
                    .css-must-in {
                        // @include flexboxwidth(1);
                        position: relative;
                        width: 20%;
                        text-align: center;
                        font-size: .87rem;
                        .css-name-box {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .css-delIcon {
                            position: absolute;
                            top: -6px;
                            right: 10%;
                            width: 19px;
                            height: 19px;
                            border-radius: 18px;
                            z-index: 500;
                            background-size: cover;
                            @media (max-width: 355px) {
                                right: 2%;
                            }
                        }
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
                                <textarea class="weui-textarea" placeholder="请输入文本" rows="3" maxlength="30" v-model="sendData.Subject"></textarea>
                                <!-- <div class="weui-cell__ft">
                                    
                                </div> -->
                            </div>
                        </div>
                        <i class="css-meet-statu">{{mtrStatuText}}</i>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells css-mtlaunchmeet-meettime">
                        <div class="weui-cell weui-cell_access" v-on:click="takeTime()">
                            <div class="weui-cell__bd">
                                <p>会议时间</p>
                            </div>
                            <div class="weui-cell__ft">
                                {{formatDate(mtrSelected.timeInterval)}}
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p v-if="!mtrSelected.isDIYResource">会议地点（{{mtrSelected.mtrList.length}}）</p>
                                <p v-else>会议地点</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn" v-if="!mtrSelected.isDIYResource">
                                <span class="css-add-btn" v-on:click="mtrAddone()">添加</span>
                            </div>
                        </div>
                        <div v-if="!mtrSelected.isDIYResource">
                            <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in mtrSelected.mtrList" :key="mtr" v-show="index<showMore">
                                <div class="css-mtlaunchmeet-mtl-location-info">
                                    <p>{{mtr.mtrName}}</p>
                                </div>
                                <div class="css-mtlaunchmeet-mtl-location-deladdbtn">
                                    <i class="css-del-btn" v-on:click="mtrDelone(index)"></i>
                                </div>
                            </div>
                        </div>
                        <div v-if="mtrSelected.isDIYResource">
                            <div class="css-mtlaunchmeet-mtl-location-container">
                                <div class="css-mtlaunchmeet-mtl-location-info">
                                    <p>{{mtrSelected.Location[0]}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container css-shouall-container" v-if="mtrSelected.mtrList.length>2" v-on:click="showMoreMtr()">
                            <div class="css-showall-participate">{{showMtrText}}</div>
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
                                <textarea class="weui-textarea" placeholder="请输入会议内容（可选）" rows="3" maxlength="30" v-model="sendData.Body"></textarea>
                                <!-- <div class="weui-cell__ft">
                                    <textarea class="weui-textarea" placeholder="请输入会议内容（可选）" rows="3" maxlength="30" v-model="sendData.Body"></textarea>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-participate-container">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>参会人员（{{mtrSelected.RequiredAttendees.length+mtrSelected.OptionalAttendees.length}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn" v-on:click="addWithEmail()">
                                <!-- <router-link :to="'/mtaddcontact'" tag="div"> -->
                                <span class="css-add-btn">通过邮箱地址添加</span>
                                <!-- </router-link> -->
                            </div>
                        </div>
                        <div class="css-invited-statu" v-on:click="checkAlluser()">
                            <div class="css-invited-statu-btn">全部</div>
                            <div class="css-invited-statu-btn">已接收({{mtrSelected.AttentdeesStat.Accept}})</div>
                            <div class="css-invited-statu-btn">已谢绝({{mtrSelected.AttentdeesStat.Decline}})</div>
                            <div class="css-invited-statu-btn mgr0">未接收({{mtrSelected.AttentdeesStat.NoResponseReceived+userFromEmailLen}})</div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(mustuser,index) in noDeptMustList" :key="mustuser.Address" v-if="index<4">
                                        <div v-on:click="viewUserInfo(mustuser.id)">
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+mustuser.url+')'}" v-if="mustuser.url"></div>
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                        </div>
                                        <span class="css-delIcon" v-bind:style="{backgroundImage:'url('+deluserIcon+')'}" v-on:click="delUser(0,index)" v-if="index!==0"></span>
                                        <p class="css-name-box">{{mustuser.name}}</p>
                                    </div>
                                    <div class="fl-l css-must-in">
                                        <div class="weui-uploader__input-box css-mtlaunchmeet-mtl-participate marginle12p" v-on:click="userTaker(0)">
                                            <div class="weui-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="css-right-icon css-must-icon"></i>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(optional,index) in noDeptOptionalList" :key="optional.Address" v-if="index<4">
                                        <div v-on:click="viewUserInfo(optional.id)">
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+optional.url+')'}" v-if="optional.url"></div>
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                        </div>
                                        <span class="css-delIcon" v-bind:style="{backgroundImage:'url('+deluserIcon+')'}" v-on:click="delUser(1,index)"></span>
                                        <p class="css-name-box">{{optional.name}}</p>
                                    </div>
                                    <div class="fl-l css-must-in">
                                        <div class="weui-uploader__input-box css-mtlaunchmeet-mtl-participate marginle12p" v-on:click="userTaker(1)">
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
                                <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked" v-model="sendData.IsResponseRequested">
                                <i class="weui-icon-checked"></i>
                            </div>
                            <div class="weui-cell__bd">
                                <p class="css-acceptnotice-text">接收参会者对此会议的接受/谢绝通知</p>
                            </div>
                        </label>
                    </div>
                </section>
            </div>
            <div class="weui-tabbar css-bottombar" v-if="isShowCtrlBtn">
                <div class="weui-btn css-bottombtn css-delinebtn" v-on:click="cancelMt()">取消会议</div>
                <div class="weui-btn css-bottombtn css-acceptbtn" v-on:click="updateMt()">提交修改</div>
            </div>
        </div>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:isShowCancel="isShowCancel" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:cancel="nocancel()" v-on:confirm="agreeconfirm()" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import localdata from '../../js/localdata.js';
import moment from 'moment';
import urldata from '../../config/urldata.js';
import storageList from '../../config/storageList.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
import noavatar from '../../images/noavatar.png';
import deluserIcon from '../../images/deluser.png';

export default {
    name: 'mtMeetDetailInvite',
    components: {
        loading,
        notice
    },
    created() {
        this.initPage();
        if (localdata.getdata('mtrSelected')) {
            this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
        }
        if (localdata.getdata('userMustList')) {
            this.userMustList = JSON.parse(localdata.getdata('userMustList'));
            this.userMustList.forEach((el) => {
                el.name = el.Name;
            }, this)
            this.noDeptMustList = this.userMustList;
            this.eachSplit(this.noDeptMustList);
        }
        if (localdata.getdata('userOptionalList')) {
            this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
            this.userOptionalList.forEach((el) => {
                el.name = el.Name;
            }, this)
            this.noDeptOptionalList = this.userOptionalList;
            this.eachSplit(this.noDeptOptionalList);
        }
        if (localdata.getdata('userFromEmail')) {
            this.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
        }
        if (localStorage.getItem('themeTitle')) {
            this.sendData.Subject = localStorage.getItem('themeTitle');
        }
        if (localStorage.getItem('content')) {
            this.sendData.Body = localStorage.getItem('content');
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     next(app => {

    //         if (localdata.getdata('mtrSelected')!=='undefined') {
    //             app.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
    //         }
    //         if (localdata.getdata('userMustList')) {
    //             app.userMustList = JSON.parse(localdata.getdata('userMustList'));
    //         }
    //         if (localdata.getdata('userOptionalList')) {
    //             app.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
    //         }
    //         if (localdata.getdata('userFromEmail')) {
    //             app.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
    //         }
    //     })
    // },
    // activated() {
    //     if (localdata.getdata('mtrSelected')) {
    //         this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
    //     }
    //     if (localdata.getdata('userMustList')) {
    //         this.userMustList = JSON.parse(localdata.getdata('userMustList'));
    //     }
    //     if (localdata.getdata('userOptionalList')) {
    //         this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
    //     }
    //     if (localdata.getdata('userFromEmail')) {
    //         this.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
    //     }
    //     if (localStorage.getItem('themeTitle')) {
    //         this.sendData.Subject = localStorage.getItem('themeTitle');
    //     }
    //     if (localStorage.getItem('content')) {
    //         this.sendData.Body = localStorage.getItem('content');
    //     }
    // },
    // deactivated() {
    //     localStorage.setItem('themeTitle', JSON.stringify(this.sendData.Subject));
    //     localStorage.setItem('content', JSON.stringify(this.sendData.Body));
    // },
    mounted() {
        this.$moaapi.updateNavTitle('会议详情');
        this.$moaapi.hideNavMenu();
        //引用类型数组去重
        let objUnique = function (arr) {
            var hash = {};
            let arr2 = arr.reduce(function (item, next) {
                hash[next.id] ? '' : hash[next.id] = true && item.push(next);
                return item;
            }, [])
            return arr2;
        }
        //原生选择人
        let _this = this;
        window.excMustUser = function (userList) {
            if (_this.userMustList.length > 0) {
                _this.userMustList = _this.userMustList.concat(JSON.parse(userList));
                _this.userMustList = objUnique(_this.userMustList);
            } else {
                _this.userMustList = JSON.parse(userList);
            }
            _this.noDeptMustList = _this.userMustList;
            _this.eachSplit(_this.noDeptMustList);
            window.localStorage.setItem('userMustList', JSON.stringify(_this.userMustList));
        }
        window.excOptionalUser = function (userList) {
            if (_this.userOptionalList.length > 0) {
                _this.userOptionalList = _this.userOptionalList.concat(JSON.parse(userList));
                _this.userOptionalList = objUnique(_this.userOptionalList);
            } else {
                _this.userOptionalList = JSON.parse(userList);
            }
            _this.noDeptOptionalList = _this.userOptionalList;
            _this.eachSplit(_this.noDeptOptionalList);
            window.localStorage.setItem('userOptionalList', JSON.stringify(_this.userOptionalList));
        }

        this.GetAllRoomListAndRoom = JSON.parse(localdata.getdata('GetAllRoomListAndRoom'));
    },
    data() {
        return {
            noavatar,//无头像显示
            deluserIcon,//删除人员icon

            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            isShowCancel: false,//是否取消弹出
            isUpdateDone: false,//是否已修改成功

            //提交数据结构
            sendData: {
                UniqueId: "",//会议id
                Subject: "",//主题
                Body: "",//内容
                Start: "",//2017-9-24 22:10:00
                End: "",//2017-9-24 22:20:00
                OrganizerEmailAndAvatarUrl: {},//组织者信息{"Email":"eric.hu@vipshop.com","AvatarUrl":"OrganizerEmailAndAvatarUrl"}
                RequiredAttendees: [],//必选人[{"Email":"city-test@vipshop.com","AvatarUrl":"url_1"}]
                OptionalAttendees: [],//可选人[{"Email":"city-test@vipshop.com","AvatarUrl":"url_1"}]
                Resources: [],//会议室id "gd2bl-room2@vipshop.com","gd2gg-room2@vipshop.com"
                OtherAttendees: [],//通过邮箱人
                IsResponseRequested: true
            },

            mtrSelected: {},//选择的会议室
            curRegion: '',//区域name
            curRegionId: '',//区域id
            userMustList: [],//必选人员列表
            userOptionalList: [],//可选人员列表
            userFromEmail: [],//通过email人员列表
            noDeptMustList: [],//去掉职位必选人员列表
            noDeptOptionalList: [],//去掉职位可选人员列表
            userFromEmailLen: 0,//来自回填email人数
            currentUserData: {},//当前登录用户信息
            showMtrText: '展开显示全部会议室',//多个会议室显示按钮文字
            showMore: 2,//显示更多会议室
            GetAllRoomListAndRoom: {},//所有会议相关信息
            mtrStatu: undefined,//审批状态
            mtrStatuText: '',//审批状态名称
            isShowCtrlBtn: true//是否显示操作按钮
        }
    },
    methods: {
        //去掉职位
        eachSplit(list) {
            list.forEach((el) => {
                // alert(el.Name)
                el.Name = el.name.split('[')[0];
                el.name = el.name.split('[')[0];
            }, this)
            return list;
        },
        setCache() {
            localStorage.setItem('themeTitle', this.sendData.Subject);
            localStorage.setItem('content', this.sendData.Body);
        },
        initPage() {
            if (localdata.getdata('mtrSelected')) {
                this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
                this.userMustList = JSON.parse(localdata.getdata('userMustList'));
                this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
                this.noDeptMustList = this.userMustList;
                this.eachSplit(this.noDeptMustList);
                this.noDeptOptionalList = this.userOptionalList;
                this.eachSplit(this.noDeptOptionalList);
            } else {
                this.currentUserData = JSON.parse(localdata.getdata('currentUserData'));
                let getParams = this.$route.query;
                //是否来自消息列表
                if (typeof getParams.uniqueId === 'undefined') {
                    this.mtrSelected = JSON.parse(localdata.getdata('meetDetailView'));
                } else {
                    //来自app
                    this.pageloading = true;
                    this.$http.post(urldata.basePath + urldata.GetMeetingDetail, { uniqueId: getParams.uniqueId }).then(res => {
                        this.pageloading = false;
                        this.mtrSelected = res.body.data;
                    }, error => {
                        this.isShowerr = true;
                        this.errinfo = error.body.errorMessage;
                    })
                }

                this.mtrSelected.Location = this.mtrSelected.Location.split('; ');
                let date = this.mtrSelected.Start.split(' ')[0];
                let st = this.mtrSelected.Start.split(' ')[1];
                let ed = this.mtrSelected.End.split(' ')[1];

                this.mtrSelected.dateTime = date;
                this.mtrSelected.meetTimeDetail = date + ' \r\n' + st.substr(0, st.length - 3) + '-' + ed.substr(0, ed.length - 3);
                this.mtrSelected.mtrList = [];
                this.mtrSelected.timeInterval = this.mtrSelected.meetTimeDetail;
                //判断是否自定义会议室
                if (this.mtrSelected.Resources.length === 0) {
                    this.mtrSelected.isDIYResource = true;
                    this.mtrSelected.isFromModified = true;
                    this.mtrSelected.mtrList.push({ mtrName: this.mtrSelected.Location[0] });
                } else {
                    this.mtrSelected.Resources.forEach((el) => {
                        el.mtrName = el.Name;
                        el.mtrId = el.Address;
                        el.isAdded = true;
                        this.mtrSelected.mtrList.push(el);
                    })
                }

                this.userMustList = this.mtrSelected.RequiredAttendees;

                this.userMustList.forEach((el, index) => {
                    if (el.ResponseType === null) {
                        //判断是否来自email
                        this.userFromEmailLen = JSON.parse(el.Name).length;
                        JSON.parse(el.Name).forEach((elemail) => {
                            let emailUser = {
                                Address: "",
                                AvatarUrl: "",
                                LastResponseTime: null,
                                Name: elemail,
                                ResponseType: null,
                                id: elemail,
                                name: elemail,
                                url: "",
                                isEmail: true
                            };
                            this.userMustList.push(emailUser);
                        }, this)
                        this.userMustList.splice(index, 1);
                    } else {
                        el.name = el.Name;
                        el.url = el.AvatarUrl;
                        el.id = el.Address;
                        el.email = el.Address;
                    }

                }, this)
                //将发起人添加到必选列表第一位
                this.mtrSelected.Organizer.name = this.mtrSelected.Organizer.Name;
                this.mtrSelected.Organizer.url = this.mtrSelected.Organizer.AvatarUrl;
                this.mtrSelected.Organizer.id = this.mtrSelected.Organizer.Address;
                this.mtrSelected.Organizer.ResponseType = 1;
                this.userMustList.unshift(this.mtrSelected.Organizer);

                this.userOptionalList = this.mtrSelected.OptionalAttendees;
                this.userOptionalList.forEach((el) => {
                    el.name = el.Name;
                    el.url = el.AvatarUrl;
                    el.id = el.Address;
                    el.email = el.Address;
                }, this)

                this.noDeptMustList = this.userMustList;
                this.eachSplit(this.noDeptMustList);
                this.noDeptOptionalList = this.userOptionalList;
                this.eachSplit(this.noDeptOptionalList);

                localdata.setdata('mtrSelected', JSON.stringify(this.mtrSelected));
                localdata.setdata('userMustList', JSON.stringify(this.userMustList));
                localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            }
            this.mtrStatu = this.mtrSelected.ApprovedStatus;
            //无状态为自定义
            if (this.mtrStatu === 1) {
                this.mtrStatuText = '会议待审批';
            } else if (this.mtrStatu === 2) {
                this.mtrStatuText = '会议审批通过';
            } else if (this.mtrStatu === 3) {
                this.mtrStatuText = '会议审批不通过';
            } else {
                this.mtrStatuText = '会议审批通过';
            }

            if (!this.mtrSelected.IsCancelled && this.mtrSelected.Processing === 2) {
                this.mtrStatuText = '进行中';
            } else if (!this.mtrSelected.IsCancelled && this.mtrSelected.Processing === 3) {
                this.mtrStatuText = '已结束';
                this.isShowCtrlBtn = false;
            }

            this.sendData.Subject = this.mtrSelected.Subject;
            this.sendData.Body = this.mtrSelected.Body;
            this.sendData.IsResponseRequested = this.mtrSelected.IsResponseRequested;

            localdata.setdata('isFromModified', true);
        },
        formatDate(val) {
            let date = moment(val.split(' ')[0]).format('YYYY年MM月DD日 ddd');
            let time = val.split(' ')[1];
            return date + ' ' + time;
        },
        //取得第一个会议室的id
        getRegionId() {
            let mtrId = this.mtrSelected.mtrList[0].Address;
            this.GetAllRoomListAndRoom.RoomLists.forEach((el) => {
                this.curRegion = el.Name;
                this.curRegionId = el.Address;
                el.Rooms.forEach((elmtr, index) => {
                    if (mtrId === elmtr.Address) {
                        localdata.setdata('curRegion', this.curRegion);
                        localdata.setdata('curRegionId', this.curRegionId);
                        this.mtrSelected.listindex = index;
                        // this.mtrSelected.selectedTime = [];
                        // let str =  this.mtrSelected.selectedTime.push({Name:'',st:this.mtrSelected.meetTimeDetail.split(' ')[1].split('-')[0],ed:this.mtrSelected.meetTimeDetail.split(' ')[1].split('-')[1]});
                        // localdata.setdata('selectedTime',JSON.stringify(str))
                        localdata.setdata('mtrSelected', JSON.stringify(this.mtrSelected));
                    }
                }, this)
            }, this)
        },
        //重新选择时间
        takeTime() {
            this.setCache();
            if (!this.mtrSelected.isDIYResource) {
                if (this.mtrSelected.mtrList.length === 0) {
                    this.isShowerr = true;
                    this.errinfo = '请先选择会议室';
                } else {
                    this.getRegionId()
                    this.$router.push({ path: '/mttimeselect' });
                }
            } else {

                this.$router.push({ path: '/mttimeselect' });
            }
        },
        //添加会议地点
        mtrAddone() {
            this.setCache();
            // if (!this.mtrSelected.isDIYResource) {
            // this.getRegionId()
            // }
            // let arritem = { name: 'okok' }
            // this.meetingroom.push(arritem);
            this.$router.push({ path: '/mtlocationselect' });
        },
        //删除一条会议地点
        mtrDelone(idx) {
            this.isShowCancel = false;
            // if (this.mtrSelected.mtrList.length === 1) {
            //     this.isShowerr = true;
            //     this.errinfo = '最少一个会议地点';
            // } else {
            //     this.mtrSelected.mtrList.splice(idx, 1);
            // }
            // if (this.mtrSelected.mtrList.length > 0) {
            this.mtrSelected.mtrList.splice(idx, 1);
            localdata.setdata('mtrSelected', JSON.stringify(this.mtrSelected));
            // } else {
            //     localdata.removedata('mtrSelected');
            // }
        },
        //查看更多会议地点
        showMoreMtr() {
            if (this.showMore === 2) {
                this.showMore = this.mtrSelected.mtrList.length;
                this.showMtrText = '收起会议室';
            } else {
                this.showMore = 2;
                this.showMtrText = '展开显示全部会议室';
            }
        },
        //添加人
        userTaker(type) {
            this.setCache();
            if (type === 0) {
                this.$moaapi.selUser(1, 'excMustUser');
            } else {
                this.$moaapi.selUser(1, 'excOptionalUser');
            }
        },
        //通过邮箱添加
        addWithEmail() {
            this.setCache();
            localdata.setdata('userMustList', JSON.stringify(this.userMustList));
            localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            if (!localdata.getdata('userFromEmail')) {
                localdata.setdata('userFromEmail', '[]');
            }
            this.$router.push({ path: '/mtaddcontact' });
        },
        //删除人员 0 必选 1 可选
        delUser(type, idx) {
            if (type === 0) {
                if (this.userMustList[idx].id === this.currentUserData.UserEmail) {
                    this.isShowerr = true;
                    this.errinfo = '不可以删除发起人';
                } else {
                    this.userMustList.splice(idx, 1);
                    this.noDeptMustList = this.userMustList;
                    this.eachSplit(this.noDeptMustList);
                    localdata.setdata('userMustList', JSON.stringify(this.userMustList));
                }
            } else {
                this.userOptionalList.splice(idx, 1);
                this.noDeptOptionalList = this.userOptionalList;
                this.eachSplit(this.noDeptOptionalList);
                localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            }
        },
        //查看全部人员
        checkAlluser() {
            this.setCache();
            localdata.setdata('userMustList', JSON.stringify(this.userMustList));
            localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            this.$router.push({ path: '/mtparticipantslistset' });
        },
        //查看人员信息
        viewUserInfo(id) {
            this.$moaapi.callUserProfile(id);
        },
        //确认修改会议
        updateMt() {
            this.isShowCancel = false;
            //拼接会议室
            if (this.mtrSelected.isDIYResource === true) {
                this.sendData.DIYResource = this.mtrSelected.mtrList[0].mtrName;
            }
            // if (this.mtrSelected.isDIYResource === true && this.sendData.DIYResource === '') {
            //     this.isShowerr = true;
            //     this.errinfo = '请选择会议室';
            // }

            if (this.mtrSelected.mtrList.length === 0) {
                this.isShowerr = true;
                this.errinfo = '请选择会议室';

            } else if (this.sendData.Subject === '') {
                this.isShowerr = true;
                this.errinfo = '主题不能为空';
            } else if (this.userMustList.length + this.userOptionalList.length < 1) {
                this.isShowerr = true;
                this.errinfo = '请选择参会人';
            } else {
                //会议id
                this.sendData.UniqueId = this.mtrSelected.Id;
                //拼接会议室
                if (!this.mtrSelected.isDIYResource) {
                    this.mtrSelected.mtrList.forEach((el) => {
                        this.sendData.Resources.push(el.mtrId);
                    }, this);
                }

                //拼接时间
                let date = this.mtrSelected.timeInterval.split(' ')[0];
                let st = this.mtrSelected.timeInterval.split(' ')[1].split('-')[0];
                let ed = this.mtrSelected.timeInterval.split(' ')[1].split('-')[1];
                this.sendData.Start = date + ' ' + st;
                this.sendData.End = date + ' ' + ed;
                // this.sendData.Start = this.mtrSelected.dateTime + ' ' + this.mtrSelected.startTime;
                // this.sendData.End = this.mtrSelected.dateTime + ' ' + this.mtrSelected.endTime;
                //组织者
                this.sendData.OrganizerEmailAndAvatarUrl = { Email: this.mtrSelected.Organizer.id, AvatarUrl: this.mtrSelected.Organizer.AvatarUrl };
                //拼接必选人 拼接通过email人员
                this.userMustList.forEach((el, index) => {
                    if (index !== 0) {
                        // if (el.hasOwnProperty('isMust')) {
                        let obj = {};
                        obj.Email = el.email;
                        if (el.url) {
                            obj.AvatarUrl = el.url;
                        } else {
                            obj.AvatarUrl = '';
                        }
                        if (el.hasOwnProperty('isEmail')) {
                            this.sendData.OtherAttendees.push(el.id);
                        } else {
                            this.sendData.RequiredAttendees.push(obj)
                        }
                        // }
                    }
                }, this)
                //拼接可选人
                this.userOptionalList.forEach((el) => {
                    // if (!el.hasOwnProperty('isMust')) {
                    let obj = {};
                    obj.Email = el.email;
                    if (el.url) {
                        obj.AvatarUrl = el.url;
                    } else {
                        obj.AvatarUrl = '';
                    }
                    this.sendData.OptionalAttendees.push(obj);
                    // }
                })
                //拼接通过email人员
                // this.userFromEmail.forEach((el) => {
                //     this.sendData.OtherAttendees.push(el.id);
                // })

                this.pageloading = true;

                // this.$http.post('/mt/CreateMeeting', this.sendData).then(res => {
                this.$http.post(urldata.basePath + urldata.UpdateMeeting, this.sendData).then(res => {
                    if (res.body.status === 200) {
                        this.pageloading = false;
                        this.isShowerr = true;
                        this.errinfo = '修改成功';
                        this.isUpdateDone = true;
                    }
                }, error => {
                    this.isShowCancel = false;
                    this.isShowerr = true;
                    this.errinfo = error.body.errorMessage;
                })
            }
        },
        //取消会议
        cancelMt() {
            this.isShowCancel = true;
            this.isShowerr = true;
            this.errinfo = '是否取消此次会议？';
        },
        //不取消
        nocancel() {
            this.isShowerr = false;
        },
        //取消后处理
        agreeconfirm() {
            this.isShowerr = false;
            this.pageloading = true;
            let ICalUid = { "ICalUid": this.mtrSelected.ICalUid };
            this.$http.post(urldata.basePath + urldata.CancelMeeting, ICalUid).then(res => {
                if (res.body.status === 200) {
                    this.pageloading = false;
                    this.clearStorage();
                    this.$router.push({ path: '/' });
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                }
            }, error => {
                this.isShowCancel = false;
                this.isShowerr = true;
                this.errinfo = error.body.errorMessage;
            })
        },
        //清除本地存储已存在的数据
        clearStorage() {
            localdata.removedata(storageList);
        },
        //关闭错误提示
        closeShowerr() {
            if (this.isUpdateDone) {
                //清除本地存储已存在的数据
                this.clearStorage();
                this.$router.push({ path: '/' });
            }
            this.isShowerr = false;
        }
    }
} 
</script>
