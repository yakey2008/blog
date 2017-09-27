<style lang="scss" scoped>
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
                        word-break: break-all;
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
                        // @include flexboxwidth(1);
                        width: 25%;
                        text-align: center;
                        font-size: .87rem;
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
                margin-right: 0;
                color: #9b9b9b;
                &:active {
                    color: rgba(0, 0, 0, 0.6);
                    background-color: #DEDEDE;
                }
            }
            &.css-acceptbtn {
                margin-left: 21px;
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
                                <span class="css-mt-themetext">{{mtrSelected.Subject}}</span>
                            </div>
                        </div>
                        <i class="css-meet-statu">{{mtrStatuText}}</i>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="weui-cells css-mtlaunchmeet-meettime">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p>会议时间</p>
                            </div>
                            <div class="weui-cell__ft" v-html="formatDate(mtrSelected.meetTimeDetail)">
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-meetlocation">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>会议地点（{{mtrSelected.mtrLen}}）</p>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container" v-for="(mtr,index) in mtrSelected.Resources" :key="index" v-show="index<showMore">
                            <div class="css-mtlaunchmeet-mtl-location-info">
                                <p>{{mtr.Name}}</p>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-location-container css-shouall-container" v-if="mtrSelected.mtrLen>2" v-on:click="showMoreMtr()">
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
                                <span class="css-mt-themetext">{{mtrSelected.Body}}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="hr-div"></div>
                <section>
                    <div class="css-mtlaunchmeet-participate-container">
                        <div class="css-mtlaunchmeet-mtl-infoadd-container weui-cell_access">
                            <div class="css-mtlaunchmeet-mtl-info">
                                <p>参会人员（{{mtrSelected.userLen}}）</p>
                            </div>
                            <div class="css-mtlaunchmeet-mtl-addbtn weui-cell__ft" v-on:click="checkAlluser()">
                                <span class="css-add-btn">查看所有参与人</span>
                            </div>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(requiremen,index) in noDeptMustList" :key="index" v-if="index<4">
                                        <div v-on:click="viewUserInfo(requiremen.Id)">
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+requiremen.AvatarUrl+')'}" v-if="requiremen.AvatarUrl"></div>
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                        </div>
                                        <p class="css-name-box">{{requiremen.Name}}</p>
                                    </div>
                                </div>
                            </div>
                            <i class="css-right-icon css-must-icon"></i>
                        </div>
                        <div class="css-mtlaunchmeet-mtl-participate-items" v-if="mtrSelected.optionalLen>0">
                            <div class="weui-uploader__bd">
                                <div class="weui-uploader__files css-invite-container">
                                    <div class="fl-l css-must-in" v-for="(optionalmen,index) in noDeptOptionalList" :key="index" v-if="index<4">
                                        <div v-on:click="viewUserInfo(optionalmen.Id)">
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+optionalmen.AvatarUrl+')'}" v-if="optionalmen.AvatarUrl"></div>
                                            <div class="css-must-in-item" v-bind:style="{backgroundImage:'url('+noavatar+')'}" v-else></div>
                                        </div>
                                        <p class="css-name-box">{{optionalmen.Name}}</p>
                                    </div>
                                </div>
                            </div>
                            <i class="css-right-icon css-optional-icon"></i>
                        </div>
                    </div>
                </section>
            </div>
            <div class="weui-tabbar css-bottombar" v-if="isShowCtrlBtn">
                <div class="weui-btn css-bottombtn css-delinebtn" v-on:click="responseMeeting(false)">谢绝</div>
                <div class="weui-btn css-bottombtn css-acceptbtn" v-on:click="responseMeeting(true)">接受</div>
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
import noavatar from '../../images/noavatar.png';

export default {
    name: 'mtMeetDetailAccept',
    components: {
        loading,
        notice
    },
    created() {
        let getParams = this.$route.query;
        //是否从app推送过来
        this.currentUserInfo = JSON.parse(localdata.getdata('currentUserData'));
        if (typeof getParams.ICalUid === 'undefined') {

            this.initData(JSON.parse(localdata.getdata('meetDetailView')));
            if (!this.mtrSelected) {
                // this.$router.push({ path: '/' });
                this.$moaapi.closeWin();
            }
        } else {
            //来自app
            this.pageloading = true;
            this.$http.post(urldata.basePath + urldata.GetMeetingDetail, { ICalUid: getParams.ICalUid }).then(res => {
                if (res.body.status === 200) {
                    this.pageloading = false;
                    this.initData(res.body.data);
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                }
            }, error => {
                console.log(error)
                this.isShowerr = true;
                this.errinfo = error.body.errorMessage;
            })
        }
    },
    mounted() {
        setTimeout(() => {
            this.$moaapi.updateNavTitle('会议详情');
            this.$moaapi.hideNavMenu();
        }, 100)
    },
    data() {
        return {
            noavatar,//无头像显示

            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,

            noDeptMustList: [],//去掉职位必选人员列表
            noDeptOptionalList: [],//去掉职位可选人员列表
            mtrSelected: {},//选择的会议室
            showMtrText: '展开显示全部会议室',//多个会议室显示按钮文字
            showMore: 2,//显示更多会议室
            currentUserInfo: {},//当前用户信息
            mtrStatuText: '',//审批状态名称
            isShowCtrlBtn: true//是否显示操作按钮
        }
    },
    methods: {
        //去掉职位
        eachSplit(list) {
            list.forEach((el) => {
                el.Name = el.Name.split('[')[0];
                el.name = el.Name.split('[')[0];
            }, this)
            return list;
        },
        formatDate(val) {
            if (val) {
                let date = moment(val.split(' ')[0]).format('YYYY年MM月DD日 ddd');
                let time = val.split(' ')[1];
                return date + '<br>' + time;
            }
        },
        initData(data) {
            this.mtrSelected = data;

            //来自接受者拼接到Resources,来自发起者直接用Resources
            if (this.mtrSelected.Resources.length === 0) {
                this.mtrSelected.Location.split('; ').forEach((el) => {
                    this.mtrSelected.Resources.push({ Name: el });
                })
            }
            //兼容app消息显示长度

            let date = this.mtrSelected.Start.split(' ')[0];
            let st = this.mtrSelected.Start.split(' ')[1];
            let ed = this.mtrSelected.End.split(' ')[1];
            if (ed === '00:00:00') {
                ed = '23:59:00';
            }
            if (this.mtrSelected.MyResponseType === 3) {
                this.mtrStatuText = '已接受';
                this.isShowCtrlBtn = false;
            } else if (this.mtrSelected.MyResponseType === 4) {
                this.mtrStatuText = '已谢绝';
                this.isShowCtrlBtn = false;
            } else {
                this.mtrStatuText = '未接受';
            }
            if (!this.mtrSelected.IsCancelled && this.mtrSelected.Processing === 2) {
                this.mtrStatuText = '进行中';
            } else if (!this.mtrSelected.IsCancelled && this.mtrSelected.Processing === 3) {
                this.mtrStatuText = '已结束';
                this.isShowCtrlBtn = false;
            }

            if (this.mtrSelected.IsCancelled) {
                this.mtrStatuText = '已取消';
                this.isShowCtrlBtn = false;
            }

            this.mtrSelected.meetTimeDetail = date + ' \r\n' + st.substr(0, st.length - 3) + '-' + ed.substr(0, ed.length - 3);
            //存储邮箱人
            let emailArr = [];
            this.mtrSelected.RequiredAttendees.forEach((el, index) => {
                //判断是否来自email
                if (el.ResponseType === null && el.Name.substr(0, 1) === '[' && el.Name.substr(el.Name.length - 1, 1) === ']') {
                    try {
                        JSON.parse(el.Name).forEach((elemail) => {
                            let emailUser = {
                                Address: elemail,
                                email: elemail,
                                AvatarUrl: "",
                                LastResponseTime: null,
                                Name: elemail,
                                id: "",
                                ResponseType: null,
                                isEmail: true
                            };
                            emailArr.push(emailUser);
                            this.mtrSelected.RequiredAttendees.push(emailUser);
                        }, this)
                    } catch (e) {
                        console.log(e)
                    }
                    this.mtrSelected.RequiredAttendees.splice(index, 1);
                }
            }, this)
            //去掉邮箱添加的人
            let spliceArr = [];
            this.mtrSelected.RequiredAttendees.forEach((el, index) => {
                emailArr.forEach((elinside) => {
                    if (el.Address === elinside.Address && !el.hasOwnProperty('isEmail')) {
                        spliceArr.push(index);
                    }
                }, this)
                // if (!el.hasOwnProperty('LastResponseTime') === '' && !el.hasOwnProperty('isEmail')) {
                //     spliceArr.push(index);
                // }
            }, this)
            spliceArr.reverse().forEach((el) => {
                this.mtrSelected.RequiredAttendees.splice(el, 1);
            }, this)
            //将发起人添加到必选列表第一位 是否来自pc发起
            if (this.mtrSelected.AllPersonInfo) {
                if (this.mtrSelected.RequiredAttendees.length === 0 || this.mtrSelected.RequiredAttendees[0].Address !== this.mtrSelected.Organizer.Address) {
                    this.mtrSelected.AllPersonInfo.Organizer.name = this.mtrSelected.Organizer.Name;
                    this.mtrSelected.AllPersonInfo.Organizer.Name = this.mtrSelected.Organizer.Name;
                    this.mtrSelected.AllPersonInfo.Organizer.ResponseType = 1;
                    this.mtrSelected.RequiredAttendees.unshift(this.mtrSelected.AllPersonInfo.Organizer);
                } else {
                    this.mtrSelected.RequiredAttendees[0].Id = this.mtrSelected.AllPersonInfo.Organizer.Id;
                    this.mtrSelected.RequiredAttendees[0].Job = this.mtrSelected.AllPersonInfo.Organizer.Job;
                }

                //去掉部门
                this.noDeptMustList = this.mtrSelected.RequiredAttendees;
                this.noDeptOptionalList = this.mtrSelected.OptionalAttendees;

                this.noDeptMustList.forEach((el) => {
                    this.mtrSelected.AllPersonInfo.RequiredAttendees.forEach((elinside) => {
                        if (el.Address === elinside.Email) {
                            el.Id = elinside.Id;
                            el.Job = elinside.Job;
                            if (el.AvatarUrl === '') {
                                el.AvatarUrl = elinside.AvatarUrl;
                            }
                        }
                    }, this)
                }, this)

                if (this.noDeptOptionalList.length > 0) {
                    this.noDeptOptionalList.forEach((el) => {
                        this.mtrSelected.AllPersonInfo.OptionalAttendees.forEach((elinside) => {
                            if (el.Address === elinside.Email) {
                                el.Id = elinside.Id;
                                el.Job = elinside.Job;
                                if (el.AvatarUrl === '') {
                                    el.AvatarUrl = elinside.AvatarUrl;
                                }
                            }
                        }, this)
                    }, this)
                }

            } else {

                //来自pc等无AllPersonInfo字段的信息
                this.mtrSelected.Organizer.name = this.mtrSelected.Organizer.Name;
                this.mtrSelected.Organizer.Name = this.mtrSelected.Organizer.Name;
                this.mtrSelected.Organizer.url = this.mtrSelected.Organizer.AvatarUrl;
                this.mtrSelected.Organizer.ResponseType = 1;
                if (this.mtrSelected.RequiredAttendees.length === 0 || this.mtrSelected.RequiredAttendees[0].Address !== this.mtrSelected.Organizer.Address) {
                    this.mtrSelected.RequiredAttendees.unshift(this.mtrSelected.Organizer);
                }
                //去掉部门
                this.noDeptMustList = this.mtrSelected.RequiredAttendees;
                this.noDeptOptionalList = this.mtrSelected.OptionalAttendees;

                //处理pc发起人员问题
                this.noDeptMustList.forEach((el) => {
                    if (el.Address) {
                        let elin = el;
                        this.$http.get(urldata.basePath + urldata.GetPersonInfo + '?emailAddress=' + elin.Address).then(res => {
                            if (res.body.status === 200) {
                                if (res.body.data) {
                                    elin.Id = res.body.data.Id;
                                    elin.id = res.body.data.Id;
                                    elin.Job = res.body.data.Job;
                                    elin.job = res.body.data.Job;
                                    elin.AvatarUrl = res.body.data.AvatarUrl;
                                    elin.url = res.body.data.AvatarUrl;
                                }
                            } else {
                                this.isShowerr = true;
                                this.errinfo = res.body.errorMessage;
                                this.pageloading = false;
                            }
                        }, error => {
                            // alert(error.body.errorMessage);
                        })
                    }
                }, this)
                this.noDeptOptionalList.forEach((el) => {
                    if (el.Address) {
                        let elin = el;
                        this.$http.get(urldata.basePath + urldata.GetPersonInfo + '?emailAddress=' + elin.Address).then(res => {
                            if (res.body.status === 200) {
                                if (res.body.data) {
                                    elin.Id = res.body.data.Id;
                                    elin.id = res.body.data.Id;
                                    elin.Job = res.body.data.Job;
                                    elin.job = res.body.data.Job;
                                    elin.AvatarUrl = res.body.data.AvatarUrl;
                                    elin.url = res.body.data.AvatarUrl;
                                }
                            } else {
                                this.isShowerr = true;
                                this.errinfo = res.body.errorMessage;
                                this.pageloading = false;
                            }
                        }, error => {
                            // alert(error.body.errorMessage);
                        })
                    }
                }, this)

            }
            //人员数量
            this.mtrSelected.mtrLen = this.mtrSelected.Resources.length;
            this.mtrSelected.userLen = this.mtrSelected.RequiredAttendees.length + this.mtrSelected.OptionalAttendees.length;
            this.mtrSelected.optionalLen = this.mtrSelected.OptionalAttendees.length;

            this.eachSplit(this.noDeptMustList);
            this.eachSplit(this.noDeptOptionalList);
        },
        //查看更多会议地点
        showMoreMtr() {
            if (this.showMore === 2) {
                this.showMore = this.mtrSelected.Resources.length;
                this.showMtrText = '收起会议室';
            } else {
                this.showMore = 2;
                this.showMtrText = '展开显示全部会议室';
            }
        },
        //查看全部人员
        checkAlluser() {
            localdata.setdata('userMustList', JSON.stringify(this.noDeptMustList));
            localdata.setdata('userOptionalList', JSON.stringify(this.noDeptOptionalList));
            this.$router.push({ path: '/mtparticipantslist' });
        },
        //查看人员信息
        viewUserInfo(id) {
            if (id && id !== '') {
                // console.log(id)
                this.$moaapi.callUserProfile(id);
            }
        },
        responseMeeting(type) {
            let sendData = {
                "ICalUid": this.mtrSelected.ICalUid,
                "IsAccept": type
            }
            // this.$http.post('/mt/ResponseMeeting', this.sendData).then(res => {
            this.pageloading = true;
            this.$http.post(urldata.basePath + urldata.ResponseMeeting, sendData).then(res => {
                if (res.body.status === 200) {
                    this.pageloading = false;
                    this.isShowerr = true;
                    if (type) {
                        this.errinfo = '接受成功';
                    } else {
                        this.errinfo = '谢绝成功';
                    }
                } else {
                    this.isShowerr = true;
                    this.errinfo = res.body.errorMessage;
                }
            }, error => {
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
            this.isShowerr = false;
            this.pageloading = false;
            localdata.setdata('needreload', true);
            if (localdata.getdata('isFromMintMtr')) {
                this.$router.push({ path: '/mtminemeeting' });
            } else if (localdata.getdata('isFromNoticeList')) {
                this.$router.push({ path: '/mtnoticelist' });
            } else if (localdata.getdata('isFromSearchMtr')) {
                this.$router.push({ path: '/mtsearchmtr' });
            } 
            else {
                this.$router.push({ path: '/' });
            }
            //清除本地存储已存在的数据
            this.clearStorage();
        }
    }
} 
</script>
