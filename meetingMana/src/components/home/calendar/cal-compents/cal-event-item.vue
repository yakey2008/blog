<template>
  <div class="wrapper" v-on:click="nextPage()">
    <h3 class="title">{{event.title}}</h3>
    <!--<p class="time">{{dateTimeFormatter(Date.parse(new Date(event.date)),i18n[locale].fullFormat)}}</p>-->
    <p class="time">{{event.datetime}}</p>
    <p class="desc">
      <i class="css-locaticon">
        <img v-bind:src="locaticon">
      </i>{{event.desc}}</p>
  </div>
</template>
<script>
import i18n from '../../../../js/i18n.js'
import { dateTimeFormatter } from '../../../../js/tools.js'
import locaticon from '../../../../images/locaticon.png';
import localdata from '../../../../js/localdata.js';

export default {
  name:'cal-event-item',
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
        this.$router.push({ path: '/mtmeetdetailinvite', query:{mtrid:false}});
      } else {
        this.$router.push({ path: '/mtmeetdetailaccept' });
      }
    }
  }
}
</script>