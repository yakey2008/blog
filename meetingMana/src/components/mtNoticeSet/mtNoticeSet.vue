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
      .weui-media-box__title {
          white-space: normal;
      }
      .css-main-container {
          .css-pageinfo {
              background-color: #fff;
               padding: 0px 5.86%;
              .css-pagebox{
                  height: 90px;
                padding: 5px 0px ;
                border-bottom: 1px solid #e7e7e7;
                .css-status {
                    padding: 5px 0px 5px 0px;
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
              }
              .css-setting {
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
              height: 56px;
              background-color: #fff;
              padding: 5px 5.86%;
              .css-setting {
                  padding: 15px 0px;
                  .css-item {
                    font-size: 1rem;
                    color:#333333;
                  }
                  .css-settime {
                    font-size: 1rem;
                    color: #4c8afe
                  }
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
                        <div class="css-pagebox">
                        <div class="weui-cell weui-cell_switch css-status">
                            <div class="weui-cell__bd css-item">接收会议邀请通知</div>
                            <div class="weui-cell__ft">
                                <input class="weui-switch" type="checkbox">
                            </div>
                        </div>
                          <p class="css-explantime">开启后，当有您有受邀请的会议时，唯秘将推送消息到您的手机消息通知栏。</p>
                        </div>
                    </section>
                    <section class="css-pageinfo">
                        <div class="css-pagebox">
                        <div class="weui-cell weui-cell_switch css-status">
                            <div class="weui-cell__bd css-item">会议开始前，通知我</div>
                            <div class="weui-cell__ft">
                                <input class="weui-switch" type="checkbox">
                            </div>
                        </div>
                          <p class="css-explantime">开启后，在会议开始前，唯秘将推送会议提醒到您的手机消息通知栏。</p>
                        </div>
                    </section>

                    <section class="css-pagesetting">
                        <div class="weui-cell weui-cell_switch css-setting weui-cell_access">
                            <div class="weui-cell__bd css-item ">提醒时间</div>
                            <div>
                              提前
                              <span class="css-settime">15分钟</span>
                            </div>
                            <div class="weui-cell__ft"></div>
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

export default {
    name: 'mtNoticeSet',
    mounted() {

    },
    data() {
        return {
        }
    },
     methods: {
    }
}
</script>
