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
            </div>
        </div>
        <div class="weui-tabbar css-bottombar">
            <div class="weui-btn weui-btn_primary css-submit-btn" v-on:click="setEmail()">确定</div>
        </div>
    </div>
</template>
<script>
import localdata from '../../js/localdata.js';

export default {
    data() {
        return {
            inputemail: '',
            emailList: []
        }
    },
    mounted() {
        let emArr = localdata.getdata('costomEmail');
        if (emArr) {
            this.emailList = JSON.parse(emArr);
        }
    },
    methods: {
        setEmail() {
            if (this.inputemail !== '') {
                this.emailList.push(this.inputemail);
                localdata.setdata('costomEmailHistory', JSON.stringify(this.emailList));
                localdata.setdata('costomEmail', this.inputemail);
                this.$router.push({ path: '/mtlaunchmeet' });
            }
        }
    }
}
</script>