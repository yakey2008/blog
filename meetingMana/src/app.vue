<template>
  <transition mode="out-in">
    <keep-alive include="mtLaunchMeet,mtNoticeList">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>