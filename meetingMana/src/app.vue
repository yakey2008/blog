<template>
  <transition mode="out-in">
    <keep-alive include="mtLaunchMeet,home">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>