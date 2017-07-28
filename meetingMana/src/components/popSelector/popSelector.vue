<style lang="scss">
//区域弹出 Start
.css-selector-container {
    .css-mask {
        position: fixed;
        z-index: 501;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .css-selector-list {
        width: 100%;
        position: absolute;
        z-index: 501;
        top: 50px;
        background-color: #fff;
        max-height: 150px;
        overflow-y: scroll;
        .css-selector-item {
            position: relative;
            padding: 0 22px;
            height: 50px;
            line-height: 50px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &:after {
                content: " ";
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 1px;
                border-bottom: 1px solid #CCCCCC;
                color: #CCCCCC;
                -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
            &.css-curregion {
                color: #308ee3;
            }
        }
    }
}
//区域弹出 End
</style>
<template>
    <!-- 区域弹出 End -->
    <div class="css-selector-container">
        <div class="css-mask"></div>
        <div class="css-selector-list">
            <div class="css-selector-item" v-for="(item,index) in list" :key="item.Address" v-on:click="listonclick(index,item.Address)" :class="{'css-curregion':curRegionId===item.Address}" :curregionid="item.Address">{{item.Name}}</div>
        </div>
    </div>
    <!-- 区域弹出 Start -->
</template>
<script>
export default {
    props: {list:Array,curRegionId:'',curregionid:''},
    methods: {
        listonclick(index,id){
            this.$emit('listclick');
            return id;
        }
        // __trigger(name, res) {
        //     this.$emit && this.$emit(name, res);
        // },
        // click() {
        //     return this.__trigger('closenotice');
        // }
    }
}
</script>