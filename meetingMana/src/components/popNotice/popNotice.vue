<template>
    <div>
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd">
                <strong class="weui-dialog__title">{{errtitle}}</strong>
            </div>
            <div class="weui-dialog__bd">{{errinfo}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="confirmclose()">确定</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{errtitle:"",errinfo:""},
    methods:{
        confirmclose(){
            return this.$emit('closenotice');
        }
    }
}
</script>