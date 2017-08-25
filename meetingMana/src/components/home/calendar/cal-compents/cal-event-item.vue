<template>
  <div class="wrapper" v-on:click="nextPage()">
    <h3 class="title">{{event.title}}</h3>
    <!--<p class="time">{{dateTimeFormatter(Date.parse(new Date(event.date)),i18n[locale].fullFormat)}}</p>-->
    <p class="time">{{event.datetime}}</p>
    <p class="desc" v-for="mtr in event.desc" :key="mtr.Address">
      <i class="css-locaticon">
        <img v-bind:src="locaticon">
      </i>{{mtr.Name}}</p>
  </div>
</template>
<script>
import i18n from '../../../../js/i18n.js';
import { dateTimeFormatter } from '../../../../js/tools.js';
import locaticon from '../../../../images/locaticon.png';
import localdata from '../../../../js/localdata.js';

export default {
  name: 'cal-event-item',
  data() {
    return {
      locaticon,
      i18n
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  methods: {
    dateTimeFormatter,
    nextPage() {
      localdata.setdata('meetDetailView', JSON.stringify(this.event.curData));
      if (this.event.curData.IsShowAttentdeesStat) {
        //发起者已结束跳转到预览页
        if (!this.event.curData.IsCancelled && this.event.curData.Processing === 3) {
          this.$router.push({ path: '/mtmeetdetailaccept' });
        } else {
          this.$router.push({ path: '/mtmeetdetailinvite' });
        }
      } else {
        this.$router.push({ path: '/mtmeetdetailaccept' });
      }
    }
  }
}
</script>