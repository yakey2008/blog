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
                        position: relative;
                        width: 25%;
                        text-align: center;
                        font-size: .87rem;
                        .css-delIcon {
                            position: absolute;
                            top: -6px;
                            right: 0;
                            width: 19px;
                            height: 19px;
                            border-radius: 18px;
                            z-index: 500;
                            background-size: cover;
                        }
                        .css-name-box {
                            word-break: break-all;
                            word-wrap: break-word;
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
                        // margin-left: 12%;
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
                                <textarea class="weui-textarea" placeholder="请输入会议主题" rows="3" maxlength="30" v-model="sendData.Subject"></textarea>
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
                            <div class="weui-cell__ft">
                                <span>{{mtrSelected.timeInterval}}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>会议地点（{{mtrSelected.mtrList.length}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn" v-if="!mtrSelected.DIYResource && mtrSelected.mtrList.length!==0">
                                <span class="css-add-btn" v-on:click="mtrAddone()">添加</span>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in mtrSelected.mtrList" :key="mtr.mtrId" v-show="index<showMore">
                            <div class="css-mtlaunchmeet-mtl-location-info">
                                <p>{{mtr.mtrName}}</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-location-deladdbtn">
                                <i class="css-del-btn" v-on:click="mtrDelone(index)"></i>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container css-shouall-container" v-if="mtrSelected.mtrList.length>2" v-on:click="showMoreMtr()">
                            <div class="css-showall-participate">展开查看所有会议地点</div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells weui-cells_form css-mtlaunchmeet-content">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <textarea class="weui-textarea" placeholder="请输入会议内容（可选）" rows="3" maxlength="500" v-model="sendData.Body"></textarea>
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
                                <!-- <router-link :to="'/mtaddcontact'" tag="div"> -->
                                <span class="css-add-btn">通过邮箱地址添加</span>
                                <!-- </router-link> -->
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd clearfix">
                                <div class="weui-uploader__files css-invite-container">
                                    <!-- <div class="fl-l css-must-in">
                                                            <div class="css-must-in-item" style="background-image:url(./src/images/avatar2.jpg)"></div>
                                                            <p>{{this.currentUserData.Name}}</p>
                                                        </div> -->
                                    <div class="fl-l css-must-in" v-for="(mustuser,index) in userMustList" :key="mustuser.id" v-if="index<4">
                                        <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+mustuser.url+')'}" v-if="mustuser.url"></div>
                                        <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                        <span class="css-delIcon" v-bind:style="{backgroundImage:'url('+deluserIcon+')'}" v-on:click="delUser(0,index)" v-if="index!==0"></span>
                                        <p class="css-name-box">{{mustuser.name}}</p>
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
                                    <div class="fl-l css-must-in" v-for="(optional,index) in userOptionalList" :key="optional.id" v-if="index<4">
                                        <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+optional.url+')'}" v-if="optional.url"></div>
                                        <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                        <span class="css-delIcon" v-bind:style="{backgroundImage:'url('+deluserIcon+')'}" v-on:click="delUser(1,index)"></span>
                                        <p class="css-name-box">{{optional.name}}</p>
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
                <div class="weui-btn weui-btn_primary css-submit-btn" v-on:click="sendDataEvt()">提交</div>
            </div>
        </div>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import moment from 'moment';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';
import storageList from '../../config/storageList.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';
import noavatar from '../../images/noavatar.jpg';
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
        }
    },
    activated() {
        if (localdata.getdata('mtrSelected')) {
            this.mtrSelected = JSON.parse(localdata.getdata('mtrSelected'));
        }
        if (localdata.getdata('userMustList')) {
            this.userMustList = JSON.parse(localdata.getdata('userMustList'));
        }
        if (localdata.getdata('userOptionalList')) {
            this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
        }
        if (localdata.getdata('userFromEmail')) {
            this.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
        }
    },
    mounted() {
        //原生选择人
        let _this = this;
        window.excMustUser = function (userList) {
            if (_this.userMustList.length > 0) {
                _this.userMustList = _this.userMustList.concat(JSON.parse(userList));
            } else {
                _this.userMustList = JSON.parse(userList);
            }
        }
        window.excOptionalUser = function (userList) {
            if (_this.userOptionalList.length > 0) {
                _this.userOptionalList = _this.userOptionalList.concat(JSON.parse(userList));
            } else {
                _this.userOptionalList = JSON.parse(userList);
            }
        }
        // this.paramsData.dateTime = this.paramsData.dateTime.split(' ')[0];
        // this.paramsData.meetingroom = JSON.parse(this.paramsData.meetingroom);
        this.currentUserData = JSON.parse(localdata.getdata('currentUserData'));
        let obj = { name: this.currentUserData.Name, id: this.currentUserData.UserEmail, dept: this.currentUserData.DeptFullName, isInitiator: true }
        this.userMustList.push(obj);
        localdata.setdata('userMustList', JSON.stringify(this.userMustList));
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
                IsResponseRequested: true
            },
            // meetingroom: [
            //     { name: '广州-广新2F 巴黎会议室（8人；投影仪；玻璃写字板）' },
            //     { name: '广州-广新10F 黎巴嫩会议室（21人；玻璃写字板）' }
            // ],
            // paramsData:this.$route.params,//上一页带过来的params
            mtrSelected: {},//选择的会议室
            userMustList: [],//必选人员列表
            userOptionalList: [],//可选人员列表
            userFromEmail: [],//通过email人员列表
            currentUserData: {},//当前登录用户信息
            showMore: 2,//显示更多会议室
        }
    },
    methods: {
        //重新选择时间
        takeTime() {
            this.$router.push({ path: '/mttimeselect' });
        },
        //添加会议地点
        mtrAddone() {
            // let arritem = { name: 'okok' }
            // this.meetingroom.push(arritem);
            this.$router.push({ path: '/mtlocationselect' });
        },
        //删除一条会议地点
        mtrDelone(idx) {
            this.mtrSelected.mtrList.splice(idx, 1);
            if (this.mtrSelected.mtrList.length > 0) {
                localdata.setdata('mtrSelected', JSON.stringify(this.mtrSelected));
            } else {
                localdata.removedata('mtrSelected');
            }
        },
        //查看更多会议地点
        showMoreMtr() {
            if (this.showMore === 2) {
                this.showMore = this.mtrSelected.mtrList.length;
            } else {
                this.showMore = 2;
            }
        },
        //添加人
        userTaker(type) {
            if (type === 0) {
                this.$moaapi.selUser(1, 'excMustUser');
            } else {
                this.$moaapi.selUser(1, 'excOptionalUser');
            }
        },
        //通过邮箱添加
        addWithEmail() {
            localdata.setdata('userMustList', JSON.stringify(this.userMustList));
            localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            localdata.setdata('userFromEmail', JSON.stringify(this.userFromEmail));
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
                    localdata.setdata('userMustList', JSON.stringify(this.userMustList));
                }
            } else {
                this.userOptionalList.splice(idx, 1);
                localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            }
        },
        //查看全部人员
        checkAlluser() {
            localdata.setdata('userMustList', JSON.stringify(this.userMustList));
            localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
            this.$router.push({ path: '/mtparticipantslist' });
        },
        //提交事件
        sendDataEvt() {
            //拼接会议室
            if (this.mtrSelected.isDIYResource === true) {
                this.sendData.DIYResource = this.mtrSelected.mtrList[0].mtrName;
                if (this.mtrSelected.isDIYResource === true && this.sendData.DIYResource === '') {
                    this.isShowerr = true;
                    this.errinfo = '请选择会议室';
                }
            } else {
                this.mtrSelected.mtrList.forEach((el) => {
                    this.sendData.Resources.push(el.mtrId);
                }, this);
                if (this.sendData.Resources.length === 0) {
                    this.isShowerr = true;
                    this.errinfo = '请选择会议室';
                }
            }
            if (this.sendData.Subject === '') {
                this.isShowerr = true;
                this.errinfo = '主题不能为空';
            } else if (this.userMustList.length < 2) {
                this.isShowerr = true;
                this.errinfo = '请选择参会人';
            } else {
                //拼接时间
                this.sendData.Start = this.mtrSelected.dateTime + ' ' + this.mtrSelected.startTime;
                this.sendData.End = this.mtrSelected.dateTime + ' ' + this.mtrSelected.endTime;
                //组织者
                this.sendData.OrganizerEmailAndAvatarUrl = { Email: this.currentUserData.UserEmail, AvatarUrl: this.currentUserData.AvatarUrl }
                //拼接必选人
                this.userMustList.forEach((el) => {
                    if (el.hasOwnProperty('isMust')) {
                        this.sendData.RequiredAttendees.push({ Email: el.id, AvatarUrl: el.url })
                    }
                })
                //拼接可选人
                this.userOptionalList.forEach((el) => {
                    if (!el.hasOwnProperty('isMust')) {
                        this.sendData.OptionalAttendees.push({ Email: el.id, AvatarUrl: el.url })
                    }
                })
                //拼接通过email人员
                this.userFromEmail.forEach((el) => {
                    this.sendData.OtherAttendees.push(el.id);
                })

                this.pageloading = true;
                // this.$http.post('/mt/CreateMeeting', this.sendData).then(res => {
                this.$http.post(urldata.basePath + urldata.CreateMeeting, this.sendData).then(res => {
                    if (res.body.status === 200) {
                        this.pageloading = false;
                        this.isShowerr = true;
                        this.errinfo = '提交成功';
                        //清除本地存储已存在的数据
                        this.clearStorage();
                        // console.log(this.sendData)
                        this.$router.push({ path: '/' });
                    }
                })
            }
        },
        //清除本地存储已存在的数据
        clearStorage() {
            localdata.removedata(storageList);
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
        }
    }
}
</script>
