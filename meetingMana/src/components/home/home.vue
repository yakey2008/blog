<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1,
h2,
h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}









/* li {
  display: inline-block;
  margin: 0 10px;
} */

a {
  color: #42b983;
}

.t-center {
  text-align: center;
  margin: 20px;
}
</style>

<template>
  <div>
    <vue-event-calendar :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>
    <loading v-bind:pageloading="pageloading"></loading>
  </div>
</template>

<script>
import loading from '../loading/loading.vue';
import moment from 'moment';
import searchicon from '../../images/searchicon.png';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';

export default {
  name: 'home',
  components: {
    loading
  },
  data() {
    return {
      pageloading: false,
      datetoday: moment().format('YYYY/MM/DD'),
      isInit: true,
      isEvent: false,
      demoEvents: [
        //   {
        //   date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
        //   title: 'ABC项目沟通会',
        //   desc: '广州-唯品大学创新会议室（130人；可外接电话会议）'
        // }, {
        //   date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
        //   title: 'ABC项目沟通会',
        //   desc: '广州-唯品大学创新会议室（130人；可外接电话会议）'
        // }, {
        //   date: `${today.getFullYear()}/${today.getMonth() + 1}/15`,
        //   title: 'Title-1',
        //   desc: 'longlonglong description'
        // }, {
        //   date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
        //   title: 'Title-2'
        // }, {
        //   date: `${today.getFullYear()}/${today.getMonth() === 11 ? 1 : today.getMonth() + 2}/06`,
        //   title: 'Title-3',
        //   desc: 'description'
        // }
      ]
    }
  },
  mounted() {
    //原生右上角菜单
    let _this = this;
    window.orderMtr = function () {
      _this.$router.push({ path: '/mtlocationselect' });
    }
    window.mineMtr = function () {
      _this.$router.push({ path: '/mtminemeeting' });
    }
    window.searchMtr = function () {
      _this.$router.push({ path: '/mtsearchmtr' });
    }
    window.noticeSet = function () {
      _this.$router.push({ path: '/mtnoticeset' });
    }
    let list = '[{ "name": "预定会议", "action": "orderMtr" }, { "name": "我的会议", "action": "mineMtr" },{ "name": "搜索会议", "action": "searchMtr" }, { "name": "会议通知设置", "action": "noticeSet" }]';
    this.$moaapi.showListNavMenu(list);
    //清除本地存储已存在的数据
    localdata.cleardata();

    //获取当前登录人信息
    // this.$http.get('mt/CurrentUserInfo').then(res => {
    this.$http.get(urldata.basePath + urldata.CurrentUserInfo).then(res => {
      //获取当前月的数据
      this.initData(this.datetoday,res.body.data.UserEmail);
      localdata.setdata('currentUserData', JSON.stringify(res.body.data));
    })
  },
  methods: {
    initData(date,userEmail, isEvent) {
      this.demoEvents = [];
      this.pageloading = true;
      // this.$http.get('/json/index.json').then(response => {
      // this.$http.get('/mt/MyCalendar?date=' + date + '&userEmail=eric.hu@vipshop.com').then(response => {
      this.$http.get(urldata.basePath + urldata.MyCalendar + '?date=' + date + '&userEmail='+userEmail).then(response => {
        if (response.status === 200) {
          let arr = response.body.data;
          arr.forEach(function (el) {
            let obj = {};
            let strStart = el.Start.substr(11);
            let strStart2 = strStart.substr(0, strStart.length - 3);
            let strEnd = el.End.substr(11);
            let strEnd2 = strEnd.substr(0, strEnd.length - 3);

            obj.curData = el;
            obj.title = el.Subject;
            obj.desc = el.Location;
            obj.date = el.End.substr(0, el.End.length - 9).replace(/-/g, '/')
            obj.datetime = strStart2 + ' - ' + strEnd2;
            this.demoEvents.push(obj);
          }, this);
          this.pageloading = false;
        }
      }, response => {
        // error
      }).then(() => {
        let cur = this.datetoday.substr(this.datetoday, this.datetoday.length - 3);
        let evt = date.substr(date, date.length - 3);
        // if (this.isInit) {
        if (evt === cur) {
          this.$EventCalendar.toDate(this.datetoday);
        } else {
          this.$EventCalendar.toDate(date);
        }
        //   this.isInit = false;
      });
    },
    handleDayChanged(data) {

      // this.$EventCalendar.toDate(data.date);
    },
    handleMonthChanged(data) {
      let str = data.split('年');
      let str2 = '';
      str.forEach((el, idx) => {
        if (idx === 1) {
          str2 = str2 + '/' + el.substr(el, el.length - 1) + '/' + '01';
        } else {
          str2 = el;
        }
      })
      this.initData(str2);
    }
  }
}
</script>