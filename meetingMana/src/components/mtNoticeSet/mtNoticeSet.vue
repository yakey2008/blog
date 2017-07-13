<style lang="scss">
  @mixin placeholder($color) {
       ::-webkit-input-placeholder {
          // WebKit browsers
          color: $color;
      }
       :-moz-placeholder {
          // Mozilla Firefox 4 to 18
          color: $color;
      }
       ::-moz-placeholder {
          // Mozilla Firefox 19+
          color: $color;
      }
       :-ms-input-placeholder {
          // Internet Explorer 10+
          color: $color;
      }
  }

  @mixin boxshadow($hs, $vs, $blur, $spread, $color:#000) {
      box-shadow: $hs $vs $blur $spread $color;
      -ms-box-shadow: $hs $vs $blur $spread $color;
      -webkit-box-shadow: $hs $vs $blur $spread $color;
      -moz-box-shadow: $hs $vs $blur $spread $color;
      -o-box-shadow: $hs $vs $blur $spread $color;
  }

  $col9b:#9b9b9b;

  @include placeholder(#ccc);
  .css-mtnotice-page {
      background-color: #f6f7f8;
      //主体
      .weui-media-box__title {
          white-space: normal;
      }
      .css-main-container {
          .css-pageinfo {
              height: 100px;
              background-color: #fff;
              padding: 5px 5.86%;
              .css-status {
                  padding: 10px 0px;
                  .css-item {
                    font-size: 1rem;
                    color:#333333;
                  }
                  .weui-cell__ft {
                    .weui-switch {
                      width: 52px;
                      height: 27px;
                    }
                    .weui-switch:checked {
                      border-color: #fbd9e7;
                      background-color: #fbd9e7;
                    }
                    .weui-switch:before, .weui-switch-cp__box:before {
                      height:25px;
                    }
                    .weui-switch:after, .weui-switch-cp__box:after {
                      background-color: #ec4280;
                      left:4px;
                      width: 22px;
                      height: 22px;
                      margin-top: 1px;
                    }
                  }
              }
              .css-setting {
                  padding: 10px 0px;
                  .css-item {
                    font-size: 1rem;
                    color:#333333;
                  }
              }
              .css-explantime {
                  margin-top: -5px;
                  font-size: 0.75rem;
                  color: $col9b;
              }
          }
          .css-pagesetting {
              height: 66px;
              background-color: #fff;
              padding: 5px 5.86%;
              .css-status {
                  padding: 10px 0px;
                  .css-item {
                    font-size: 1rem;
                    color:#333333;
                  }
              }
              .css-setting {
                  padding: 10px 0px;
                  .css-item {
                    font-size: 1rem;
                    color:#333333;
                  }
                  .css-settime {
                    font-size: 1rem;
                    color: #4c8afe
                  }
                  .css-listopenicon {
                      width: 25px;
                      height:30px;
                      display: block;
                      float: left;
                      margin-right: 5px;
                      margin-top: 8px;
                      img {
                          width: 100%;
                          height:80%;
                      }
                  }
              }
              .css-explantime {
                  margin-top: -5px;
                  font-size: 0.75rem;
                  color: $col9b;
              }
          }
      }
  }
</style>
<template>
    <div class="weui-tab css-mtnotice-page">
        <div class="weui-tab__panel">
            <div class="weui-tab">
                <div class="css-main-container">
                    <section class="css-pageinfo">
                        <div class="weui-cell weui-cell_switch css-status">
                            <div class="weui-cell__bd css-item">接收会议邀请通知</div>
                            <div class="weui-cell__ft">
                                <input class="weui-switch" type="checkbox">
                            </div>
                        </div>
                          <p class="css-explantime">开启后，当有您有受邀请的会议时，唯秘将推送消息到您的手机消息通知栏。</p>
                    </section>
                    <section class="css-pageinfo">
                        <div class="weui-cell weui-cell_switch css-status">
                            <div class="weui-cell__bd css-item">会议开始前，通知我</div>
                            <div class="weui-cell__ft">
                                <input class="weui-switch" type="checkbox">
                            </div>
                        </div>
                          <p class="css-explantime">开启后，在会议开始前，唯秘将推送会议提醒到您的手机消息通知栏。</p>
                    </section>
                    <section class="css-pagesetting">
                        <div class="weui-cell weui-cell_switch css-setting">
                            <div class="weui-cell__bd css-item">提醒时间</div>
                            <div>
                              提前
                              <span class="css-settime">15分钟</span>
                            </div>
                            <div class="weui-cell__ft css-listopenicon">
                              <img v-bind:src="listopenicon">
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import weui from '../../lib/js/weui.min.js';
import moment from 'moment';
import VueRouter from 'vue-router';
import routes from '../../routes/routes.js';

import listopenicon from '../../images/listopenicon.png';

const router = new VueRouter({
    routes
})

export default {
    mounted() {

    },
    data() {
        return {
            listopenicon
        }
    },
     methods: {
    }
}
</script>
