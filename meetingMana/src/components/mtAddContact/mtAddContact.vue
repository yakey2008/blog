<style lang="scss">
.css-mtaddcontarct-page {
    background-color: #fff;
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

    .weui-cells_form {
        margin-top: 0;
        &.weui-cells:before {
            border: none;
        }
        &.weui-cells:after {
            border: none;
        }
        .weui-cell {
            padding: 22px;
        }
    }
}
</style>

<template>
    <div class="weui-tab css-mtaddcontarct-page">
        <div class="weui-tab__panel">
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" placeholder="请输入参会人邮箱" rows="3" v-model="inputemail"></textarea>
                    </div>
                </div>
                <!-- <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">是否添加必选</div>
                        <div class="weui-cell__ft">
                            <input class="weui-switch" type="checkbox" checked="checked" v-model="isMust">
                        </div>
                    </div> -->
            </div>
    
        </div>
        <div class="weui-tabbar css-bottombar">
            <div class="weui-btn weui-btn_primary css-submit-btn" v-on:click="setEmail()">确定</div>
        </div>
        <loading v-bind:pageloading="pageloading"></loading>
        <notice v-show="isShowerr" v-bind:title="errtitle" v-bind:errinfo="errinfo" v-on:closenotice="closeShowerr()"></notice>
    </div>
</template>
<script>
import localdata from '../../js/localdata.js';
import loading from '../loading/loading.vue';
import notice from '../popNotice/popNotice.vue';

export default {
    name: 'mtaddcontact',
    components: {
        loading,
        notice
    },
    data() {
        return {
            isShowerr: false,//错误提示关闭
            errtitle: "提示",
            errinfo: "请稍后再试",
            pageloading: false,

            isEmail: true,
            inputemail: '',
            userFromEmail: [],
            userMustList: [],
            userOptionalList: []
        }
    },
    mounted() {
        this.$moaapi.updateNavTitle('添加参会人');
        if (localdata.getdata('userFromEmail') !== "undefined") {
            this.userFromEmail = JSON.parse(localdata.getdata('userFromEmail'));
        }
        if (localdata.getdata('userMustList') !== "undefined") {
            this.userMustList = JSON.parse(localdata.getdata('userMustList'));
        }
        if (localdata.getdata('userOptionalList') !== "undefined") {
            this.userOptionalList = JSON.parse(localdata.getdata('userOptionalList'));
        }
    },
    methods: {
        setEmail() {
            this.inputemail = this.inputemail.trim();
            if (this.checkEmail(this.inputemail)) {
                let isNotAdd = true;
                let obj = {};
                //适应原生 与后端返回字段
                obj.name = this.inputemail;
                obj.Name = this.inputemail;
                obj.id = this.inputemail;
                obj.isEmail = true;
                this.userMustList.forEach(function (el) {
                    if (el.name === obj.name) {
                        this.isShowerr = true;
                        this.errinfo = '不可添加已添加邮箱';
                        isNotAdd = false;
                        return false;
                    }
                }, this);
                if (isNotAdd) {
                    this.userFromEmail.push(obj);
                    this.userMustList.push(obj);
                    localdata.setdata('userMustList', JSON.stringify(this.userMustList));
                    // localdata.setdata('userOptionalList', JSON.stringify(this.userOptionalList));
                    localdata.setdata('userFromEmail', JSON.stringify(this.userFromEmail));
                    if (localdata.getdata('isFromModified')) {
                        this.$router.push({ path: '/mtmeetdetailinvite' });
                    } else {
                        this.$router.push({ path: '/mtlaunchmeet' });
                    }
                }

            } else {
                this.isShowerr = true;
                this.errinfo = '请输入正确的邮箱';
            }
        },
        checkEmail(email_address) {
            var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            if (regex.test(email_address)) {
                return true;
            } else {
                return false;
            }
        },
        //关闭错误提示
        closeShowerr() {
            this.isShowerr = false;
        }
    }
}
</script>