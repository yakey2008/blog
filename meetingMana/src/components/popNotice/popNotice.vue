<template>
    <div>
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd">
                <strong class="weui-dialog__title">{{errtitle}}</strong>
            </div>
            <div class="weui-dialog__bd">{{errinfo}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="confirmBtn()" v-if="isShowCancel">确定</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-on:click="cancelBtn()" v-if="isShowCancel">取消</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="confirmclose()" v-if="!isShowCancel">确定</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{errtitle:"",errinfo:"",isShowCancel:false},
    methods:{
        confirmclose(){
            return this.$emit('closenotice');
        },
        confirmBtn(){
            return this.$emit('confirm');
        },
        cancelBtn(){
            return this.$emit('cancel');
        }
    }
}
</script>