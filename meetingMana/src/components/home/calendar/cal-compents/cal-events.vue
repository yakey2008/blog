<template>
  <div class="events-wrapper">
    <!--<h2 class="date">
            {{dayEventsTitle}}
          </h2>-->
    <p class="css-datetitle">{{dayEventsTitle}}</p>
    <div class="cal-events">
      <slot>
        <div v-for="(event, index) in events" class="event-item" :key="index">
          <cal-event-item :event="event" :index="index" :locale="locale"></cal-event-item>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import i18n from '../../../../js/i18n.js';
import { dateTimeFormatter } from '../../../../js/tools.js';
import calEventItem from './cal-event-item.vue';
import utils from '../../../../js/utils.js';

export default {
  name: 'cal-events',
  data() {
    return {
      i18n
    }
  },
  components: {
    'cal-event-item': calEventItem
  },
  props: {
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle() {
      if (this.dayEvents.date !== 'all') {
        let tempDate
        if (this.dayEvents.events.length !== 0) {

          let date = new Date(this.dayEvents.events[0].date)

          let tempDate = Date.parse(date)

          let day = utils.dayFormat(date)

          let week = utils.weekFormat(date)

          let year = moment().format('YYYY');

          if (this.dayEvents.date.split('/')[0] !== year) {
            year = this.dayEvents.date.split('/')[0]  + '年';
          } else {
            year = '';
          }

          return year + day + ' ' + dateTimeFormatter(tempDate, i18n[this.locale].monthDayFormat) + ' ' + week
        } else {
          let date = new Date(this.dayEvents.date)

          let day = utils.dayFormat(date)

          tempDate = dateTimeFormatter(Date.parse(date), i18n[this.locale].monthDayFormat)

          let week = utils.weekFormat(date)

          let year = moment().format('YYYY');
          if (this.dayEvents.date.split('/')[0] !== year) {
            year = this.dayEvents.date.split('/')[0]  + '年';
          } else {
            year = '';
          }

          return `${year} ${day} ${tempDate} ${week} ${i18n[this.locale].notHaveEvents}`
        }
      } else {
        return i18n[this.locale].dayEventsTitle
      }
    },
    events() {
      return this.dayEvents.events
    },
    bgColor() {
      return { backgroundColor: this.color }
    }
  },
  methods: {
    dateTimeFormatter
  }
}
</script>