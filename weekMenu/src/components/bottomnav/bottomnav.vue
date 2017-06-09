<template>
    <div class="weui-tabbar css-bottombar">
        <div class="weui-navbar__item" :class="{'weui-bar__item_on':showtab}" v-on:click="toMenu()">
            本周菜单
        </div>
        <div class="weui-navbar__item" :class="{'weui-bar__item_on':!showtab}" v-on:click="toFeedback()">
            意见反馈
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../../routes/routes.js';
const router = new VueRouter({
    routes
})

export default {
    data() {
        return {
            
        }
    },
    props: ['showtab'],
    methods:{
        toMenu:function(){
            router.push({path: '/'});
            
        },
        toFeedback:function(){
            router.push({path: '/Feedback'});
        }
    }
}
</script>