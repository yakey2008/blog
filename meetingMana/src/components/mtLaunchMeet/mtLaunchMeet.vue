<style lang="scss" scoped>
.weui-uploader__bd {
    overflow: initial;
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

.css-mtlaunchmeet-page {
    background-color: #f6f7f8;
    .weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before {
        color: #ec4280;
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
            .css-acceptnotice-text {
                font-size: .95rem;
            }
        }
        .css-mtlaunchmeet-theme {
            margin: 0;
            font-size: 1rem;
            padding-top: 14px;

            .weui-cell {
                padding-top: 23px;
                padding-left: 22px;
                .weui-textarea {
                    resize: none;
                    overflow: hidden;
                    min-height: 33px;
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
                padding: 17px 22px 17px 0; // border-top: 1px solid #e7e7e7;
                margin-left: 22px;
                &:after {
                    content: " ";
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    height: 1px;
                    border-top: 1px solid #e7e7e7;
                    color: #e7e7e7;
                    -webkit-transform-origin: 0 100%;
                    transform-origin: 0 100%;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                }
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
                    resize: none;
                    overflow: hidden;
                    min-height: 36px;
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
                // border-top: 1px solid #e7e7e7;
                margin-left: 22px;
                &:after {
                    content: " ";
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    height: 1px;
                    border-top: 1px solid #e7e7e7;
                    color: #e7e7e7;
                    -webkit-transform-origin: 0 100%;
                    transform-origin: 0 100%;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                }
                .css-right-icon {
                    width: 31px;
                    height: 15px;
                    position: absolute;
                    z-index: 500;
                    top: 1px;
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
                        position: relative;
                        width: 20%;
                        text-align: center;
                        font-size: .87rem;
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
                        .css-name-box {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
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
                    } // &.marginle12p {
                    // margin-left: 12%;
                    // }
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
            &.css-btn-cancel {
                background-color: #fff;
                border-top: 1px solid #ccc;
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
                                <textarea class="weui-textarea" placeholder="请输入会议主题" rows="3" maxlength="30" v-model="sendData.Subject" v-on:keyup="auto_grow($event)" id="js-mtrSubject"></textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells css-mtlaunchmeet-meettime">
                        <div class="weui-cell weui-cell_access" v-on:click="takeTime()">
                            <div class="weui-cell__bd">
                                <p>会议时间</p>
                            </div>
                            <div class="weui-cell__ft" v-html="formatDate(mtrSelected.timeInterval)">
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
                            <div class="css-mtlaunchmeet-mtl-addbtn">
                                <span class="css-add-btn" v-on:click="mtrAddone()" v-if="mtrSelected.isDIYResource&&mtrSelected.mtrList.length===0">添加</span>
                                <span class="css-add-btn" v-on:click="mtrAddone()" v-if="!mtrSelected.isDIYResource">添加</span>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in mtrSelected.mtrList" :key="index" v-show="index<showMore">
                            <div class="css-mtlaunchmeet-mtl-location-info">
                                <p>{{mtr.mtrName}}</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-location-deladdbtn">
                                <i class="css-del-btn" v-on:click="mtrDelone(index)"></i>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container css-shouall-container" v-if="mtrSelected.mtrList.length>2" v-on:click="showMoreMtr()">
                            <div class="css-showall-participate">{{showMtrText}}</div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells weui-cells_form css-mtlaunchmeet-content">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <textarea class="weui-textarea" placeholder="请输入会议内容（可选）" rows="3" maxlength="500" v-model="sendData.Body" v-on:keyup="auto_grow($event)" id="js-mtrContent" v-on:focus="inputFocus()"></textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-participate-container">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>参会人员（{{userMustList.length + userOptionalList.length}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn" v-on:click="addWithEmail()">
                                <span class="css-add-btn">通过邮箱地址添加</span>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd clearfix">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(mustuser,index) in noDeptMustList" :key="index" v-if="index<4">
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
                                    <div class="fl-l css-must-in" v-for="(optional,index) in noDeptOptionalList" :key="index" v-if="index<4">
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
                        <div class="css-mtlaunchmeet-mtl-participate-items css-shouall-container">
                            <div class="css-showall-participate" v-on:click="checkAlluser()">点击查看所有参会人</div>
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
            <div class="weui-tabbar css-bottombar">
                <div class="weui-btn weui-btn_plain-default css-submit-btn css-btn-cancel" v-on:click="cancelMt()">取消</div>
                <div class="weui-btn weui-btn_primary css-submit-btn" v-on:click="sendDataEvt()">提交</div>
            </div>
        </div>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:isShowCancel="isShowCancel" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:cancel="nocancel()" v-on:confirm="agreeconfirm()" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import moment from 'moment';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';
import storageList from '../../config/storageList.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
import noavatar from '../../images/noavatar.png';
import deluserIcon from '../../images/deluser.png';
export default {
    name: 'mtLaunchMeet',
    components: {
        loading,
        notice
    },
    created() {
        if (localdata.getdata('mtrSelected')) {
            this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
        } else {
            this.$moaapi.closeWin();
            // this.$router.push({ path: '/' });
        }
        this.currentUserData = JSON.parse(localdata.getdata('currentUserData'));

        if (localdata.getdata('userMustList')) {
            this.userMustList = JSON.parse(localdata.getdata('userMustList'));
            this.noDeptMustList = this.userMustList;
            this.eachSplit(this.noDeptMustList);
        }
        if (localdata.getdata('userOptionalList')) {
            this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
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

        if (localStorage.getItem('IsResponseRequested')) {
            this.sendData.IsResponseRequested = localStorage.getItem('IsResponseRequested');
            if (this.sendData.IsResponseRequested === 'true') {
                this.sendData.IsResponseRequested = true;
            } else {
                this.sendData.IsResponseRequested = false;
            }
        }

        localdata.setdata('launchPage', true);

        localdata.removedata('isFromModified');
    },
    mounted() {
        setTimeout(() => {
            this.$moaapi.resetNavTitle();
            this.$moaapi.updateNavTitle('会议详情');
            this.$moaapi.hideNavMenu();
        }, 100)
        this.auto_grow('init');
        //引用类型数组去重
        let objUnique = function(arr) {
            var hash = {};
            let arr2 = arr.reduce(function(item, next) {
                hash[next.email] ? '' : hash[next.email] = true && item.push(next);
                return item;
            }, [])
            return arr2;
        }
        if (localdata.getdata('userMustList')) {
            this.userMustList = JSON.parse(localdata.getdata('userMustList'));
            this.noDeptMustList = this.userMustList;
            this.eachSplit(this.noDeptMustList);
        } else {
            //适应原生 与后端返回字段
            let obj = { name: this.currentUserData.Name, Name: this.currentUserData.Name, email: this.currentUserData.UserEmail, id: this.currentUserData.id, Job: this.currentUserData.job, job: this.currentUserData.job, url: this.currentUserData.url, isInitiator: true }
            // this.currentUserData.isInitiator = true;
            // this.userMustList.push(this.currentUserData);
            this.userMustList.push(obj);
            this.noDeptMustList = this.userMustList;
            this.eachSplit(this.noDeptMustList);
            localdata.setdata('userMustList', JSON.stringify(this.userMustList));
        }
        this.userFromEmail = [];
        localdata.setdata('userFromEmail', JSON.stringify(this.userFromEmail));

        //原生选择人
        let _this = this;
        window.excMustUser = function(userList) {
            if (_this.userMustList.length > 0) {
                _this.userMustList = _this.userMustList.concat(JSON.parse(userList));
            } else {
                _this.userMustList = JSON.parse(userList);
            }

            //禁止添加已存在的人员
            let splitArr = [];
            _this.userMustList.forEach((el, index) => {
                _this.userOptionalList.forEach((eloptional) => {
                    if (el.email === eloptional.email) {
                        splitArr.push(index);
                    }
                }, _this)
            }, _this)
            splitArr.reverse().forEach((el) => {
                _this.userMustList.splice(el, 1);
            })
            // if(splitArr.length>0){
            //     _this.isShowerr = true;
            //     _this.errinfo = '不可添加已添加的人员';
            // }

            _this.userMustList = objUnique(_this.userMustList);
            _this.noDeptMustList = _this.userMustList;
            _this.eachSplit(_this.noDeptMustList);
            window.localStorage.setItem('userMustList', JSON.stringify(_this.userMustList));
        }
        window.excOptionalUser = function(userList) {
            if (_this.userOptionalList.length > 0) {
                _this.userOptionalList = _this.userOptionalList.concat(JSON.parse(userList));
            } else {
                _this.userOptionalList = JSON.parse(userList);
            }
            //禁止添加已存在的人员
            let splitArr = [];
            _this.userOptionalList.forEach((el, index) => {
                _this.userMustList.forEach((elmust) => {
                    if (el.email === elmust.email) {
                        splitArr.push(index);
                    }
                }, _this)
            }, _this)
            splitArr.reverse().forEach((el) => {
                _this.userOptionalList.splice(el, 1);
            })
            // if(splitArr.length>0){
            //     _this.isShowerr = true;
            //     _this.errinfo = '不可添加已添加的人员';
            // }

            _this.userOptionalList = objUnique(_this.userOptionalList);
            _this.noDeptOptionalList = _this.userOptionalList;
            _this.eachSplit(_this.noDeptOptionalList);

            window.localStorage.setItem('userOptionalList', JSON.stringify(_this.userOptionalList));
        }
        // this.paramsData.dateTime = this.paramsData.dateTime.split(' ')[0];
        // this.paramsData.meetingroom = JSON.parse(this.paramsData.meetingroom);

    },
    data() {
        return {
            noavatar,//无头像显示
            deluserIcon,//删除人员icon

            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,
            //提交数据结构
            sendData: {
                Subject: "",//主题
                Body: "",//内容
                Start: "",//2017-9-24 22:10:00
                End: "",//2017-9-24 22:20:00
                OrganizerEmailAndAvatarUrl: {},//组织者信息{"Email":"eric.hu@vipshop.com","AvatarUrl":"OrganizerEmailAndAvatarUrl"}
                RequiredAttendees: [],//必选人[{"Email":"city-test@vipshop.com","AvatarUrl":"url_1"}]
                OptionalAttendees: [],//可选人[{"Email":"city-test@vipshop.com","AvatarUrl":"url_1"}]
                Resources: [],//会议室id "gd2bl-room2@vipshop.com","gd2gg-room2@vipshop.com"
                OtherAttendees: [],//通过邮箱人
                IsResponseRequested: false,
                AllPersonInfo: {
                    Organizer: {},
                    RequiredAttendees: [],
                    OptionalAttendees: []
                }
            },
            // meetingroom: [
            //     { name: '广州-广新2F 巴黎会议室（8人；投影仪；玻璃写字板）' },
            //     { name: '广州-广新10F 黎巴嫩会议室（21人；玻璃写字板）' }
            // ],
            // paramsData:this.$route.params,//上一页带过来的params
            mtrSelected: {},//选择的会议室
            userMustList: [],//必选人员列表
            userOptionalList: [],//可选人员列表
            noDeptMustList: [],//去掉职位必选人员列表
            noDeptOptionalList: [],//去掉职位可选人员列表
            userFromEmail: [],//通过email人员列表
            currentUserData: {},//当前登录用户信息
            showMtrText: '展开显示全部会议室',//多个会议室显示按钮文字
            showMore: 2,//显示更多会议室
            submitComplete: false,//是否提交成功
            isShowCancel: false//是否取消弹出
        }
    },
    methods: {
        //去掉职位
        eachSplit(list) {
            list.forEach((el) => {
                el.Name = el.name.split('[')[0];
                el.name = el.name.split('[')[0];
            }, this)
            return list;
        },
        setCache() {
            localStorage.setItem('IsResponseRequested', this.sendData.IsResponseRequested);
            localStorage.setItem('themeTitle', this.sendData.Subject);
            localStorage.setItem('content', this.sendData.Body);
        },
        //文本框自适应高度
        auto_grow(element) {
            let el, el2;
            if (element === 'init') {
                el = document.getElementById('js-mtrSubject');
                el2 = document.getElementById('js-mtrContent');

                el2.style.height = "5px";
                el2.style.height = (el2.scrollHeight) + "px";
            } else {
                el = element.currentTarget;
            }
            el.style.height = "5px";
            el.style.height = (el.scrollHeight) + "px";
        },
        formatDate(val) {
            let date = moment(+new Date(val.split(' ')[0])).format('YYYY年MM月DD日 ddd');
            let time = val.split(' ')[1];
            return date + '<br>' + time;
        },
        //重新选择时间
        takeTime() {
            this.setCache();
            if (this.mtrSelected.mtrList.length === 0) {
                this.isShowerr = true;
                this.errinfo = '请先选择会议室';
            } else {
                // this.getRegionId();
                localdata.setdata('isFromTimeModify', true);
                localdata.setdata('isFromModified', true);
                this.$router.push({ path: '/mttimeselect' });
            }

        },
        //添加会议地点
        mtrAddone() {
            this.setCache();
            // let arritem = { name: 'okok' }
            // this.meetingroom.push(arritem);
            // if(this.mtrSelected.mtrList.length>0){
            //     localdata.setdata('isFromModified', true);
            // }
            localdata.setdata('isFromModified', true);
            this.$router.push({ path: '/mtlocationselect' });
        },
        //删除一条会议地点
        mtrDelone(idx) {
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
            localdata.setdata('userFromEmail', JSON.stringify(this.userFromEmail));
            this.$router.push({ path: '/mtaddcontact' });
        },
        //删除人员 0 必选 1 可选
        delUser(type, idx) {
            if (type === 0) {
                // if (this.userMustList[idx].id === this.currentUserData.UserEmail) {
                //     this.isShowerr = true;
                //     this.errinfo = '不可以删除发起人';
                // } else {
                this.userMustList.splice(idx, 1);
                this.noDeptMustList = this.userMustList;
                this.eachSplit(this.noDeptMustList);
                localdata.setdata('userMustList', JSON.stringify(this.userMustList));
                // }
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
            this.$router.push({ path: '/mtparticipantslist' });
        },
        //查看人员信息
        viewUserInfo(id) {
            if (id !== '') {
                this.$moaapi.callUserProfile(id);
            }
        },
        //提交事件
        sendDataEvt() {
            //拼接会议室 自定义地点使用mtrName
            if (this.mtrSelected.isDIYResource === true) {
                // this.sendData.DIYResource = '';
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
                //拼接会议室 非自定义地点使用mtrId
                if (!this.mtrSelected.isDIYResource) {
                    this.sendData.Resources = [];
                    this.mtrSelected.mtrList.forEach((el) => {
                        this.sendData.Resources.push(el.mtrId);
                    }, this);
                }

                //拼接时间
                this.sendData.Start = this.mtrSelected.dateTime + ' ' + this.mtrSelected.startTime;
                if (this.mtrSelected.endTime === '24:00') {
                    this.sendData.End = this.mtrSelected.dateTime + ' ' + '23:59';
                } else {
                    this.sendData.End = this.mtrSelected.dateTime + ' ' + this.mtrSelected.endTime;
                }
                //组织者
                // this.sendData.OrganizerEmailAndAvatarUrl = { Email: this.currentUserData.UserEmail, AvatarUrl: this.currentUserData.AvatarUrl }
                this.sendData.OrganizerEmailAndAvatarUrl = { Email: this.currentUserData.UserEmail, AvatarUrl: this.currentUserData.url };
                //提交不成功时候，清空数据
                this.sendData.AllPersonInfo = {
                    Organizer: {},
                    RequiredAttendees: [],
                    OptionalAttendees: []
                }
                this.sendData.OtherAttendees = [];
                this.sendData.RequiredAttendees = [];
                this.sendData.OptionalAttendees = [];

                //拼接必选人 拼接通过email人员
                this.userMustList.forEach((el, index) => {
                    if (index !== 0) {
                        let obj = {};
                        obj.Email = el.email;
                        if (el.url) {
                            obj.AvatarUrl = el.url;
                        } else {
                            obj.AvatarUrl = '';
                        }

                        if (el.hasOwnProperty('isEmail')) {
                            //将email添加的人员email加入其他人员
                            this.sendData.OtherAttendees.push(el.name);
                        } else {
                            this.sendData.RequiredAttendees.push(obj);
                            //拼接带有职位id全部信息
                            obj.Id = el.id;
                            obj.Job = el.job;
                            obj.Name = el.name;
                            this.sendData.AllPersonInfo.RequiredAttendees.push(obj);
                        }
                    }
                })
                //拼接可选人
                this.userOptionalList.forEach((el) => {
                    let obj = {};
                    obj.Email = el.email;
                    if (el.url) {
                        obj.AvatarUrl = el.url;
                    } else {
                        obj.AvatarUrl = '';
                    }
                    this.sendData.OptionalAttendees.push(obj);
                    //拼接带有职位id全部信息
                    obj.Id = el.id;
                    obj.Job = el.job;
                    obj.Name = el.name;
                    this.sendData.AllPersonInfo.OptionalAttendees.push(obj);
                })
                //拼接通过email人员
                // this.userFromEmail.forEach((el, index) => {
                //     if (this.sendData.OtherAttendees.indexOf(el) !== -1) {
                //         this.userFromEmail.splice(index, 1);
                //     } else {
                //         this.sendData.OtherAttendees.push(el.id);
                //     }
                // })

                //拼接带有职位id全部信息
                this.sendData.AllPersonInfo.Organizer = { Email: this.currentUserData.UserEmail, AvatarUrl: this.currentUserData.url, Id: this.currentUserData.id, Job: this.currentUserData.job, Name: this.currentUserData.Name };

                this.pageloading = true;
                // this.$http.post('/mt/CreateMeeting', this.sendData).then(res => {
                this.$http.post(urldata.basePath + urldata.CreateMeeting, this.sendData).then(res => {
                    if (res.body.status === 200) {
                        this.pageloading = false;
                        this.isShowerr = true;
                        this.errinfo = '提交成功';
                        this.submitComplete = true;
                        //清除本地存储已存在的数据
                        this.clearStorage();
                        // console.log(this.sendData)
                    } else {
                        this.isShowerr = true;
                        this.errinfo = res.body.errorMessage;
                        this.pageloading = false;
                    }
                }, error => {
                    this.isShowerr = true;
                    this.errinfo = error.body.errorMessage;
                    // this.clearStorage();
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
            this.$router.push({ path: '/' });
        },
        //清除本地存储已存在的数据
        clearStorage() {
            localdata.removedata(storageList);
        },
        inputFocus() {
            setTimeout(function() {
                if (document.body.scrollTop !== 0) {
                    document.body.scrollTop = document.body.scrollHeight / 2;
                }
            }, 500)
            // clearInterval(interval);
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
            this.pageloading = false;
            if (this.submitComplete) {
                this.$router.push({ path: '/' });
            }
        }
    }
}
</script>
