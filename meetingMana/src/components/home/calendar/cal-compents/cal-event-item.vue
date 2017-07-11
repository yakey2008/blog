<template>
  <div class="wrapper">
    <h3 class="title">{{event.title}}</h3>
    <!--<p class="time">{{dateTimeFormatter(Date.parse(new Date(event.date)),i18n[locale].fullFormat)}}</p>-->
    <p class="time">{{event.datetime}}</p>
    <p class="desc"><i class="css-locaticon"><img v-bind:src="locaticon"></i>{{event.desc}}</p>
  </div>
</template>
<script>
import i18n from '../../../../js/i18n.js'
import { dateTimeFormatter } from '../../../../js/tools.js'
import locaticon from '../../../../images/locaticon.png';
export default {
  data () {
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
    dateTimeFormatter
  }
}
</script>