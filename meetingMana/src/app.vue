<template>
  <!-- <transition mode="out-in"> -->
    <keep-alive include="mtMineMeeting,mtNoticeList,mtSearchMtr">
      <router-view></router-view>
    </keep-alive>
  <!-- </transition> -->
</template>