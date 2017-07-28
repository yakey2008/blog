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
      background-color: white;
      .weui-media-box__title {
          white-space: normal;
      }
      .css-main-container {
          .css-pageinfo {
               background-color: #fff;
               margin-left: 22px;
               border-bottom: 1px solid #e7e7e7;
               .css-pageinfoBox{
                    padding-left:0px;
                    padding-right:0px;
                    .css-picBox {
                      position: relative;
                      margin-right: 16px;
                       .css-pic {
                         overflow: hidden;
                         border-radius: 50%;
                         img {
                           width: 44px;
                           display: block;
                         }
                       }
                    }
                    .css-pagebox {
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
                  .css-username {
                    float:left;
                    margin-right: 10px;
                    height: 25px;
                  }
                  .css-useractor {
                    float:left;
                    width: 80px;
                    height: 25px;
                    padding-top: 5px;
                    .css-label {
                      float:left;
                      text-align: center;
                      border-radius: 4px;
                      width: 75px;
                      height: 18px;
                      color: #fff;
                      font-size: 0.75rem;
                      &.none{
                        display: none;
                      }
                      &.purple {
                        background-color: #989ad7;
                      }
                      &.gray {
                        background-color: #cccccc;
                      }
                    }
                  }
                  .css-userposition {
                    font-size: 13px;color: #888888;
                  }
                  .css-rose {
                    width: 130px;
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
                          <div class="weui-cell css-pageinfoBox" style="">
                              <div class="weui-cell__hd css-picBox">
                                  <div class="css-pic">
                                    <img src="./../../images/user.jpg">
                                  </div>
                              </div>
                              <div class="weui-cell__bd">
                                  <div class="css-username">用户名</div>
                                  <div class="css-useractor">
                                    <span class="css-label purple">会议组织者</span>
                                  </div>
                                  <div class="clearfix"></div>
                                  <p class="css-userposition">办公自动化-高级工程师</p>
                              </div>
                          </div>
                    </section>

                    <section class="css-pageinfo">
                          <div class="weui-cell css-pageinfoBox" style="">
                              <div class="weui-cell__hd css-picBox">
                                  <div class="css-pic">
                                    <img src="./../../images/user.jpg">
                                  </div>
                              </div>
                              <div class="weui-cell__bd">
                                  <div class="css-username">sam.zhang@123.com</div>
                                  <div class="css-useractor">
                                    <span class="css-label gray">可选参会者</span>
                                  </div>
                                  <div class="clearfix"></div>
                                  <p class="css-userposition">通过邮件邀请的人员</p>
                              </div>
                          </div>
                    </section>

                    <section class="css-pageinfo">
                          <div class="weui-cell css-pageinfoBox" style="">
                              <div class="weui-cell__hd css-picBox">
                                  <div class="css-pic">
                                    <img src="./../../images/user.jpg">
                                  </div>
                              </div>
                              <div class="weui-cell__bd">
                                  <div class="css-username">小小蓝</div>
                                  <div class="css-useractor">
                                    <span class="css-label none">可选参会者</span>
                                  </div>
                                  <div class="clearfix"></div>
                                  <p class="css-userposition">前端-初级前端工程师</p>
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

export default {
    name: 'mtParticipantsList',
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
