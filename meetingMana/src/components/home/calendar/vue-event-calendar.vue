<style lang="scss">
$base-orange: #88b1ff;
$white: #ffffff;
$gray: #e0e0e0;
$gray-dark: #b1b1b1;

$icon-border-size: 1px;
@media screen and (min-width: 768px) {
  .__vev_calendar-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    .cal-wrapper {
      width: 50%;
      padding: 100px 50px;
      .date-num {
        line-height: 50px;
      }
    }
    .events-wrapper {
      width: 50%;
      color: $white;
      padding: 40px 50px;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .__vev_calendar-wrapper {
    .cal-wrapper {
      width: 100%;
      padding: 0 5px;
      .date-num {
        line-height: 37px;
      }
    }
    .events-wrapper {
      width: 100%;
      padding-left: 24px;
    }
  }
}

.hr-div {
  background-color: #f6f7f9;
  min-height: 10px;
}

.__vev_calendar-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  * {
    box-sizing: border-box;
  }
  .cal-wrapper {
    .cal-header {
      position: relative;
      width: 100%;
      background-color: $white; // box-shadow: 0 6px 5px rgba(0,0,0,.1);
      font-weight: 500;
      overflow: hidden;
      .css-todaybtn {
        position: absolute;
        width: 32px;
        height: 24px;
        top: 9px;
        left: 4%;
        padding: 0;
        background-size: cover;
        background-repeat: no-repeat; // img {
        //   width: 100%;
        // }
      }
      .css-searchbtn {
        position: absolute;
        top: 10px;
        right: 13%;
        padding: 0;
        width: 22px;
        img {
          width: 100%;
        }
      }
      .css-viewlocation {
        position: absolute;
        display: inline-block;
        width: 18px;
        height: 18px;
        right: 3%;
        top: 12px;
        overflow: hidden;
        padding: 0;
        &::before {
          display: block;
          width: 2px;
          height: 39.5px;
        }
        &::after {
          display: block;
          width: 39.5px;
          height: 2px;
        }
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -54%);
          transform: translate(-50%, -54%);
          background-color: #585c64;
        }
      }

      &>div {
        float: left;
        line-height: 20px;
        padding: 12px;
      }
      .title {
        width: 60%;
        text-align: center;
      }
      .l {
        text-align: left;
        width: 20%;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;
        left: 22%;
      }
      .r {
        text-align: right;
        width: 20%;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;
        right: 23%;
      }
    }
    .cal-body {
      width: 100%;
      .weeks {
        width: 100%;
        overflow: hidden;
        text-align: center;
        font-size: 1rem;
        .item {
          line-height: 42px;
          float: left;
          width: 14.285%;
          color: #9b9b9b;
        }
      }
      .dates {
        width: 100%;
        overflow: hidden;
        text-align: center;
        font-size: 1rem;
        padding-bottom: 10px;
        .item {
          position: relative;
          float: left;
          display: block;
          width: 14.285%;
          cursor: default;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          .date-num {
            font-size: 1rem;
            position: relative;
            z-index: 3;
          }
          &.event {
            cursor: pointer;

            &.selected-day {
              .date-num {
                color: #fff!important;
              }
              .has-event {
                background-color: #fff!important;
              }
              .is-event {
                background-color: #88b1ff!important;
              }
            }
          }
          .is-event {
            content: ''; // border: 1px solid $base-orange;
            // background-color: #fff;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1;
            margin-left: -18px;
            margin-top: -19px;
          }
          .has-event {
            content: '';
            background-color: #4c8afe;
            border-radius: 50%;
            width: 6px;
            height: 6px;
            position: absolute;
            left: 50%;
            top: 53%;
            z-index: 2;
            margin-left: -2px;
            margin-top: 8px;
          }
        }
      }
    }
  }
  .events-wrapper {
    .css-datetitle {
      color: #9b9b9b;
      padding: 15px 0;
    }
    .cal-events {
      height: 100%;
    }
    .date {
      max-width: 60%;
      min-width: 200px;
      text-align: center;
      color: $white;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      margin: 0 auto;
      font-size: 22px;
    }
    .event-item {
      padding: 5px 0;
      border-top: 1px solid #e7e7e7;
      background-color: #fff;
      color: #333;
      position: relative;
      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 60%;
        height: 40px;
        line-height: 40px;
        color: #333;
        font-size: 16px;
      }
      .time {
        position: absolute;
        right: 20px;
        top: 15px;
        color: #9b9b9b;
        font-size: 14px;
      }
      .desc {
        color: #9b9b9b;
        font-size: 14px;
        padding: 7px 0;
        padding-right: 20px;
        .css-locaticon {
          width: 10px;
          display: block;
          float: left;
          margin-right: 5px;
          margin-top: 2px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .arrow-left.icon {
    color: #000;
    position: absolute;
    left: 6%;
    margin-top: 9px;
  }
  .arrow-left.icon:before {
    content: '';
    position: absolute;
    left: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid $icon-border-size currentColor;
    border-right: solid $icon-border-size currentColor;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .arrow-right.icon {
    color: #000;
    position: absolute;
    right: 6%;
    margin-top: 9px;
  }
  .arrow-right.icon:before {
    content: '';
    position: absolute;
    right: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid $icon-border-size currentColor;
    border-right: solid $icon-border-size currentColor;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  h3,
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
<template>
  <div class="__vev_calendar-wrapper">
    <cal-panel :events="events" :calendar="calendarOptions" :selectedDay='selectedDayEvents.date' @cur-day-changed="handleChangeCurDay" @month-changed="handleMonthChanged" @back-today="dateBacktoday">
    </cal-panel>
    <div class="hr-div"></div>
    <cal-events :dayEvents="selectedDayEvents" :locale="calendarOptions.options.locale" :color="calendarOptions.options.color">
      <slot :showEvents="selectedDayEvents.events"></slot>
    </cal-events>
  </div>
</template>
<script>
import { isEqualDateStr } from '../../../js/tools.js'

import calEvents from './cal-compents/cal-events.vue'
import calPanel from './cal-compents/cal-panel.vue'

const inBrowser = typeof window !== 'undefined'
export default {
  name: 'vue-event-calendar',
  components: {
    'cal-events': calEvents,
    'cal-panel': calPanel
  },
  data() {
    return {
      selectedDayEvents: {
        date: 'all',
        events: this.events || []  //default show all event
      }
    }
  },
  props: {
    events: {
      type: Array,
      required: true,
      default: [],
      validator(events) {
        let validate = true
        events.forEach((event, index) => {
          if (!event.date) {
            console.error('Vue-Event-Calendar-Error:' + 'Prop events Wrong at index ' + index)
            validate = false
          }
        })
        return validate
      }
    }
  },
  computed: {
    calendarOptions() {
      let dateObj = new Date()
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA
      } else {
        return {
          options: {
            locale: 'en', //zh
            color: ' #88b1ff'
          },
          params: {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEventsDate: 'all'
          }
        }
      }
    },
    calendarParams() {
      let dateObj = new Date()
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA.params
      } else {
        return {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: dateString
        }
      }
    }
  },
  created() {
    if (this.calendarParams.curEventsDate !== 'all') {
      this.handleChangeCurDay(this.calendarParams.curEventsDate)
    }
  },
  methods: {
    dateBacktoday(){
      this.$emit('date-back-today');
    },
    handleChangeCurDay(date) {
      let events = this.events.filter(function (event) {
        return isEqualDateStr(event.date, date)
      })
      this.selectedDayEvents = {
        date: date,
        events: events
      }
      this.$emit('day-changed', {
        date: date,
        events: events
      })
    },
    handleMonthChanged(yearMonth) {
      this.$emit('month-changed', yearMonth)
    }
  },
  watch: {
    calendarParams() {
      if (this.calendarParams.curEventsDate !== 'all') {
        this.handleChangeCurDay(this.calendarParams.curEventsDate)
      } else {
        this.selectedDayEvents = {
          date: 'all',
          events: this.events
        }
      }
    },
    events() {
      this.selectedDayEvents = {
        date: 'all',
        events: this.events || []
      }
    }
  }
}
</script>
