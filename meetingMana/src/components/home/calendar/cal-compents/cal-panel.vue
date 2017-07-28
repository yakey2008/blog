<template>
  <div class="cal-wrapper">
    <div class="cal-header">
      <div class="css-todaybtn" v-on:click="backtoday">
        <router-link :to="'/mtnoticeset'" tag="div">
        <img v-bind:src="todaybg">
        </router-link>
      </div>
      <div class="l" @click="preMonth">
        <div class="arrow-left icon">&nbsp</div>
      </div>
      <div class="title">{{curYearMonth}}</div>
      <div class="r" @click="nextMonth">
        <div class="arrow-right icon">&nbsp</div>
      </div>
      <div class="css-searchbtn">
        <router-link :to="'/mtlocationsearch'" tag="div">
          <img v-bind:src="searchbtn">
        </router-link>
  
      </div>
      <router-link :to="'/mtlocationselect'" tag="section">
        <div class="css-viewlocation">
        </div>
      </router-link>
    </div>
    <div class="cal-body">
      <div class="weeks">
        <span v-for="dayName in i18n[calendar.options.locale].dayNames" class="item" :key="dayName">{{dayName}}</span>
      </div>
      <div class="dates">
        <div v-for="date in dayList" class="item" :class="{
                    today: date.status ? (today == date.date) : false,
                    event: date.status ? (date.title != undefined) : false,
                    [calendar.options.className] : (date.date == selectedDay ||date.date ===curday)
                  }" :key="date" v-on:click="removecls()">
          <p class="date-num" @click="handleChangeCurday(date)" :style="{color: date.title != undefined ? ((date.date == selectedDay) ? ((date.status===0) ?'#ccc':colfff):((date.status===0) ?'#ccc':'inherit')) :((date.status===0) ?'#ccc':'inherit')}">
            {{date.date.split('/')[2]}}</p>
          <span v-if="date.status ? (date.title != undefined) : false" class="has-event" :style="{backgroundColor: (date.date == selectedDay) ? colfff : eventsubcolor}"></span>
          <span v-if="date.status ? (date.title != undefined) : false" class="is-event" :style="{borderColor: customColor, backgroundColor: (date.date == selectedDay) ? customColor : 'inherit'}"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../../../js/i18n.js';
import { dateTimeFormatter, isEqualDateStr } from '../../../../js/tools.js';
import todaybg from '../../../../images/todaybg.png';
import searchbtn from '../../../../images/searchicon.png';

const inBrowser = typeof window !== 'undefined'
let dateObj = new Date()
export default {
  name: 'cal-panel',
  data() {
    return {
      curday:`${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}`,
      colfff: '#fff',
      eventsubcolor: '#4c8afe',
      todaybg,
      searchbtn,
      i18n
    }
  },
  props: {
    events: {
      type: Array,
      required: true
    },
    calendar: {
      type: Object,
      required: true
    },
    selectedDay: {
      type: String,
      required: false
    }
  },
  computed: {
    dayList() {
      let firstDay = new Date(this.calendar.params.curYear + '/' + (this.calendar.params.curMonth + 1) + '/01')
      let startTimestamp = firstDay - 1000 * 60 * 60 * 24 * firstDay.getDay()
      let item, status, tempArr = [], tempItem
      for (let i = 0; i < 42; i++) {
        item = new Date(startTimestamp + i * 1000 * 60 * 60 * 24)
        if (this.calendar.params.curMonth === item.getMonth()) {
          status = 1
        } else {
          status = 0
        }
        tempItem = {
          date: `${item.getFullYear()}/${item.getMonth() + 1}/${item.getDate()}`,
          status: status
        }
        this.events.forEach((event) => {
          if (isEqualDateStr(event.date, tempItem.date)) {
            tempItem.title = event.title
            tempItem.desc = event.desc || ''
          }
        })
        tempArr.push(tempItem)
      }
      return tempArr
    },
    today() {
      let dateObj = new Date()
      return `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}`
    },
    curYearMonth() {
      let tempDate = Date.parse(new Date(`${this.calendar.params.curYear}/${this.calendar.params.curMonth + 1}/01`))
      return dateTimeFormatter(tempDate, this.i18n[this.calendar.options.locale].format)
    },
    customColor() {
      return '#88b1ff';
    }
  },
  methods: {
    nextMonth() {
      this.$EventCalendar.nextMonth()
      this.$emit('month-changed', this.curYearMonth)
    },
    preMonth() {
      this.$EventCalendar.preMonth()
      this.$emit('month-changed', this.curYearMonth)
    },
    handleChangeCurday(date) {
      let str = date.date.substr(date.date.length-2,2);
      if(date.status===0&&str.substr(0,1)!=='/'){
        this.preMonth()
      }
      if(date.status===0&&str.substr(0,1)==='/'){
        this.nextMonth()
      }
      this.$emit('cur-day-changed', date.date)
    },
    backtoday() {
      this.today;
    },
    removecls(){
      this.curday = false;
    }
  }
}
</script>
