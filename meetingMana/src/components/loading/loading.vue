<style scoped>
.css-pageloading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
}
</style>

<template>
    <div class="weui-mask" v-show="pageloading">
        <i class="weui-loading css-pageloading"></i>
    </div>
</template>
<script>
export default {
    props: { pageloading: false },
    methods: {

    }
}
</script>