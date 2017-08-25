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
    <vue-event-calendar :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged" @date-back-today="dateBackToday"></vue-event-calendar>
    <loading v-bind:pageloading="pageloading"></loading>
  </div>
</template>

<script>
import loading from '../loading/loading.vue';
import moment from 'moment';
import searchicon from '../../images/searchicon.png';
import localdata from '../../js/localdata.js';
import urldata from '../../config/urldata.js';
import storageList from '../../config/storageList.js';
export default {
  name: 'home',
  components: {
    loading
  },
  data() {
    return {
      pageloading: false,
      curDateMonth: moment().format('YYYY/MM'),//当前月份
      datetoday: moment().format('YYYY/MM/DD'),
      currentUserData: [],//当前登录用户信息
      demoEvents: []
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
    let list = '[{ "name": "预定会议", "action": "orderMtr()" }, { "name": "会议日程", "action": "mineMtr()" },{ "name": "搜索会议", "action": "searchMtr()" }, { "name": "会议通知设置", "action": "noticeSet()" }]';
    this.$moaapi.updateNavTitle('会易订');
    this.$moaapi.hideNavMenu();
    setTimeout(() => {
      this.$moaapi.closeWebkitSpringBack();
      this.$moaapi.showListNavMenu(list);
    }, 100)

    //获取当前登录人信息
    // this.$http.get('mt/CurrentUserInfo').then(res => {
    this.pageloading = true;
    this.$http.get(urldata.basePath + urldata.CurrentUserInfo).then(res => {
      //获取当前月的数据
      this.initData(this.datetoday, res.body.data.UserEmail);
      // this.initData(this.datetoday, 'jianxian.zhou@contoso.com');//临时
      this.currentUserData = res.body.data;
      localdata.setdata('currentUserData', JSON.stringify(res.body.data));
    }, error => {
      console.log(error.body.errorMessage);
    })
    //获取所有会议室列表和会议室的映射关系
    this.$http.get(urldata.basePath + urldata.GetAllRoomListAndRoom).then(res => {
      //获取当前月的数据
      this.currentUserData = res.body.data;
      localdata.setdata('GetAllRoomListAndRoom', JSON.stringify(res.body.data));
    }, error => {
      console.log(error.body.errorMessage);
    })

    //清除本地存储已存在的数据
    this.clearStorage();
  },
  methods: {
    //初始化 重新获取
    initData(date, userEmail) {
      this.demoEvents = [];
      this.pageloading = true;
      // this.$http.get('/json/index.json').then(response => {
      // this.$http.get('/mt/MyCalendar?date=' + date + '&userEmail=eric.hu@vipshop.com').then(response => {
      this.$http.get(urldata.basePath + urldata.MyCalendar + '?date=' + date).then(response => {
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
            if (el.Resources.length === 0) {
              obj.desc = [{ Name: el.Location }];
            } else {
              obj.desc = el.Resources;
            }

            obj.date = el.End.substr(0, el.End.length - 9).replace(/-/g, '/')
            obj.datetime = strStart2 + ' - ' + strEnd2;
            this.demoEvents.push(obj);
          }, this);
          this.pageloading = false;
        }
      }, error => {
        console.log(error.body.errorMessage);
        this.$moaapi.closeWin();
      }).then(() => {
        //更换时间
        let cur = this.datetoday.substr(this.datetoday, this.datetoday.length - 3);
        let evt = date.substr(date, date.length - 3);
        if (evt === cur) {
          this.$EventCalendar.toDate(this.datetoday);
        } else {
          this.$EventCalendar.toDate(date);
        }
      })
      // .then(() => {
      // let cur = this.datetoday.substr(this.datetoday, this.datetoday.length - 3);
      // let evt = date.substr(date, date.length - 3);
      // // if (this.isInit) {
      // if (evt === cur) {
      //   this.$EventCalendar.toDate(this.datetoday);
      // } else {
      //   this.$EventCalendar.toDate(date);
      // }
      //   this.isInit = false;
      // });
    },
    //回到当前天
    dateBackToday() {
      if (this.curDateMonth !== this.datetoday.substr(0, this.datetoday.length - 3)) {
        this.initData(this.datetoday, this.currentUserData.UserEmail);
        this.curDateMonth = this.datetoday.substr(0, this.datetoday.length - 3);
      } else {
        this.$EventCalendar.toDate(this.datetoday);
      }
    },
    handleDayChanged(data) {
      let monthDate = moment(new Date(data.date)).format('YYYY/MM/DD');
      if (this.curDateMonth !== monthDate.substr(0, monthDate.length - 3)) {
        this.curDateMonth = monthDate.substr(0, monthDate.length - 3);
        this.initData(monthDate, this.currentUserData.UserEmail);
        // this.$EventCalendar.toDate(monthDate);
      }
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
      this.curDateMonth = str2.substr(0, str2.length - 3);
      //切换月份
      this.initData(str2, this.currentUserData.UserEmail);
    },
    //清除本地存储已存在的数据
    clearStorage() {
      localdata.removedata(storageList);
    }
  }
}
</script>