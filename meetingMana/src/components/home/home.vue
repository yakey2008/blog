<style lang="scss" scoped>
.css-guide-container {
  position: fixed;
  top: 0;
  z-index: 2000;
  height: 100%;
  width: 100%;
  background-color: #f6f7f8;
  .css-guide-step {

    height: 100%;
    .bg-next {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
    .skip {
      position: fixed;
      bottom: 14%;
      right: 13%;
      width: 50px;
      height: 30px; // border: 1px solid;
      z-index: 2001;
    }
  }
}
</style>

<template>
  <div>
    <vue-event-calendar :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged" @date-back-today="dateBackToday"></vue-event-calendar>
    <loading v-bind:pageloading="pageloading"></loading>
    <div class="css-guide-container" v-if="isShowGuide">
      <div class="css-guide-step" v-show="stepnum===1">
        <div class="bg-next" v-bind:style="{backgroundImage:'url('+step1+')'}" v-on:click="nextStep(1)"></div>
        <div class="skip" v-on:click="nextStep('skip')"></div>
      </div>
      <div class="css-guide-step" v-show="stepnum===2">
        <div class="bg-next" v-bind:style="{backgroundImage:'url('+step2+')'}" v-on:click="nextStep(2)"></div>
        <div class="skip" v-on:click="nextStep('skip')"></div>
      </div>
      <div class="css-guide-step" v-show="stepnum===3">
        <div class="bg-next" v-bind:style="{backgroundImage:'url('+step3+')'}" v-on:click="nextStep(3)"></div>
        <div class="skip" v-on:click="nextStep('skip')"></div>
      </div>
      <div class="css-guide-step" v-show="stepnum===4">
        <div class="bg-next" v-bind:style="{backgroundImage:'url('+step4+')'}" v-on:click="nextStep(4)"></div>
        <div class="skip" v-on:click="nextStep('skip')"></div>
      </div>
      <div class="css-guide-step" v-show="stepnum===5">
        <div class="bg-next" v-bind:style="{backgroundImage:'url('+step5+')'}" v-on:click="nextStep(5)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import step1 from '../../images/step1.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import step4 from '../../images/step4.png';
import step5 from '../../images/step5.png';

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
  created() {
    //清除本地存储已存在的数据
    this.clearStorage();
    localdata.removedata('searchKey');
    // setTimeout(() => {
    //   this.$moaapi.resetNavTitle();
    // }, 100)
    // setTimeout(() => {
    this.$moaapi.resetNavTitle();
    this.$moaapi.updateNavTitle('会易订');
    this.$moaapi.hideNavMenu();
    // }, 100)
    // setTimeout(() => {
    // }, 100)
    // alert(localdata.getdata('isShowGuide'))
    // alert(this.isShowGuide)
    if (localdata.getdata('isShowGuide')) {
      this.isShowGuide = false;
      // alert(this.isShowGuide)
    } else {
      this.isShowGuide = true;
    }
  },
  mounted() {
    //原生右上角菜单
    let _this = this;
    window.orderMtr = function() {
      _this.$router.push({ path: '/mtlocationselect' });
    }
    window.mineMtr = function() {
      _this.$router.push({ path: '/mtminemeeting' });
    }
    window.searchMtr = function() {
      _this.$router.push({ path: '/mtsearchmtr' });
    }
    window.noticeSet = function() {
      _this.$router.push({ path: '/mtnoticeset' });
    }
    let list = '[{ "name": "预订会议", "action": "orderMtr()" }, { "name": "我的会议", "action": "mineMtr()" },{ "name": "搜索会议", "action": "searchMtr()" }, { "name": "会议通知设置", "action": "noticeSet()" }]';

    setTimeout(() => {
      // this.$moaapi.closeWebkitSpringBack();
      this.$moaapi.showListNavMenu(list);
    }, 100)

    //获取当前登录人信息
    // window.getUserInfo = function(info) {
    //   // alert(info)
    //   // _this.pureUserinfo = info;
    //   localdata.setdata('pureUserInfo', info);
    //   // alert(_this.pureUserinfo)
    //   // _this.initData(this.datetoday, info.email);
    //   // localdata.setdata('currentUserData', JSON.stringify(info));
    // }
    // setTimeout(() => {
    //   this.$moaapi.getUserInfo('getUserInfo');
    // }, 100)
    //获取登录人信息，如果有原生数据，则拼接原生数据
    // this.$http.get('mt/CurrentUserInfo').then(res => {
    this.pageloading = true;
    this.$http.get(urldata.basePath + urldata.CurrentUserInfo).then(res => {
      //获取当前月的数据
      // setTimeout(() => {
      this.initData(this.datetoday, res.body.data.UserEmail);
      // this.initData(this.datetoday, 'jianxian.zhou@contoso.com');//临时
      this.currentUserData = res.body.data;
      let obj;
      //是否有从原生获取的登录人信息
      // alert(localdata.getdata('pureUserInfo'));
      // if (localdata.getdata('pureUserInfo')) {

      //获取登录人头像id职业
      this.$http.get(urldata.basePath + urldata.GetPersonInfo + '?emailAddress=' + res.body.data.UserEmail).then(res => {
        obj = Object.assign(this.currentUserData, res.body.data);
        obj.email = obj.Email;
        obj.id = obj.Id;
        obj.url = obj.AvatarUrl;
        obj.job = obj.Job;
        obj.name = obj.name;
        localdata.setdata('currentUserData', JSON.stringify(obj));
      }, error => {
        // alert(error.body.errorMessage);
      })
      // alert(JSON.stringify(obj))
      // } else {
      //   obj = res.body.data;
      // }
      // alert(JSON.stringify(obj))
      // }, 100)
    }, error => {
      console.log(error.body.errorMessage);
    })
    //获取所有会议室列表和会议室的映射关系
    this.$http.get(urldata.basePath + urldata.GetAllRoomListAndRoom).then(res => {
      // this.currentUserData = res.body.data;
      localdata.setdata('GetAllRoomListAndRoom', JSON.stringify(res.body.data));
    }, error => {
      console.log(error.body.errorMessage);
    })
  },
  // destroyed() {
  //   this.$moaapi.hideNavMenu();
  // },
  data() {
    return {
      step1,//指引页相关
      step2,
      step3,
      step4,
      step5,
      stepnum: 1,
      isShowGuide: true,

      pageloading: false,

      pureUserinfo: '',//原生获取人
      curDateMonth: moment().format('YYYY/M'),//当前月份
      datetoday: moment().format('YYYY/M/D'),
      currentUserData: [],//当前登录用户信息
      demoEvents: []
    }
  },
  methods: {
    //初始化 重新获取
    initData(date, userEmail) {
      this.demoEvents = [];
      this.pageloading = true;
      // this.$http.get('/json/index.json').then(response => {
      // this.$http.get('/mt/MyCalendar?date=' + date + '&userEmail=eric.hu@vipshop.com').then(response => {
      this.$http.get(urldata.basePath + urldata.MyCalendar + '?date=' + date + '&num=' + (+new Date().getTime())).then(response => {
        if (response.status === 200) {
          let arr = response.body.data;
          arr.forEach(function(el) {
            let obj = {};
            let strStart = el.Start.substr(11);
            let strStart2 = strStart.substr(0, strStart.length - 3);
            let strEnd = el.End.substr(11);
            let strEnd2 = strEnd.substr(0, strEnd.length - 3);
            if (strEnd2 === "00:00") {
              strEnd2 = "23:59";
            }
            obj.curData = el;
            obj.title = el.Subject;
            if (el.Resources.length === 0) {
              let arr = el.Location.split('; ');
              let arr2 = [];
              if (arr.length > 1) {
                arr.forEach((el) => {
                  arr2.push({ Name: el });
                }, this)
                obj.desc = arr2;
              } else {
                obj.desc = [{ Name: el.Location }];
              }

            } else {
              obj.desc = el.Resources;
            }
            //结束时间为00:00:00的算在前一天
            if (strEnd === '00:00:00') {
              let stTime = el.End.substr(0, el.End.length - 9).split('-');
              obj.date = stTime[0] + '/' + stTime[1] + '/' + ((+stTime[2]) - 1);
            } else {
              obj.date = el.End.substr(0, el.End.length - 9).replace(/-/g, '/');
            }

            obj.datetime = strStart2 + ' - ' + strEnd2;
            this.demoEvents.push(obj);
          }, this);
          this.pageloading = false;
        }
      }, error => {
        console.error(error.body.errorMessage);
        // alert('网络出现意外错误，请稍后重试。');
        this.$moaapi.closeWin();
      }).then(() => {
        //更换时间
        let cur = this.datetoday.split('/')[1];
        let evt = date.split('/')[1];
        if (evt === cur) {
          this.$EventCalendar.toDate(this.datetoday);
        } else {
          this.$EventCalendar.toDate(date);
        }
      })
    },
    //回到当前天
    dateBackToday() {
      let toadyM = this.datetoday.split('/')[0] + '/' + this.datetoday.split('/')[1];
      if (this.curDateMonth !== toadyM) {
        this.initData(this.datetoday, this.currentUserData.UserEmail);
        this.curDateMonth = toadyM;
      } else {
        this.$EventCalendar.toDate(this.datetoday);
      }
    },
    handleDayChanged(data) {
      let monthDate = moment(new Date(data.date)).format('YYYY/M');
      if (this.curDateMonth !== monthDate) {
        this.curDateMonth = monthDate;
        let date = moment(new Date(data.date)).format('YYYY/M/D')
        this.initData(date, this.currentUserData.UserEmail);
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
      // if (this.curDateMonth === this.datetoday.substr(this.datetoday, this.datetoday.length - 3)) {
      //   this.initData(this.datetoday, this.currentUserData.UserEmail);
      // } else {
      this.initData(str2, this.currentUserData.UserEmail);

      // }
    },
    //指引页下一步 开始使用 num 下一页的页码
    nextStep(num) {
      //num=skip 5 跳过并记录
      if (num === 1) {
        this.stepnum = 2;
      } else if (num === 2) {
        this.stepnum = 3;
      } else if (num === 3) {
        this.stepnum = 4;
      } else if (num === 4) {
        this.stepnum = 5;
      } else {
        this.isShowGuide = false;
        localdata.setdata('isShowGuide', false);
      }
    },
    //清除本地存储已存在的数据
    clearStorage() {
      localdata.removedata(storageList);
    }
  }
}
</script>