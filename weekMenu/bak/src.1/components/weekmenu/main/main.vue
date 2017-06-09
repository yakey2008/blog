<style lang="scss">
.css-nav-container {
    .select-btn {
        .css-arrow {
            display: inline-block;
            height: 8px;
            width: 8px;
            border-bottom: 1px solid #98989f;
            border-left: 1px solid #98989f;
            transform: rotate(-45deg);
            margin-left: 10px;
            margin-bottom: 3px;
        }
        .drop {
            transform: rotate(135deg);
            margin-bottom: -2px;
        }
    }
    .select-container {
        position: absolute;
        width: 100%;
        left: 0;
        top: 50px;
        z-index: 11;
        li {
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            border-bottom: 1px solid #ddd;
            background-color: #fff;
        }
    }
}

.css-nav-container.weui-navbar {
    z-index: 502;
}

.css-main-container {
    background-color: #f6f7f9;
    .aside-container {
        position: relative;
        .aside {
            position: absolute;
            left: 0;
            width: 21.3333%;
            .c-lefttab {
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #e7e7e7;
                text-align: center;
            }
            .tabactive {
                background-color: #fff;
                border-right: none;
                color: #ec4280;
            }
        }
    }
    .c-item-container {
        overflow-x: scroll;
        margin-left: 21.3333%;
        background-color: #fff;
        border-left: 1px solid #e7e7e7;
    }
}

.overlay {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 501;
    position: fixed;
}

.guide-overlay {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 501;
    position: fixed;
}
</style>

<template>
    <div class="weui-tab__panel">
        <div class="weui-tab">
            <div class="weui-navbar css-nav-container">
                <div class="weui-navbar__item select-btn" v-on:click="showregion()">
                    全部区域
                    <i class="css-arrow" :class="{drop:isShowregion}"></i>
                </div>
                <section class="select-container" v-show="isShowregion">
                    <ul>
                        <li>广新餐厅</li>
                        <li>信义餐厅</li>
                        <li>总部餐厅</li>
                    </ul>
                </section>
            </div>
            <div id="dialog1" style="display: none;">
                <div class="weui-dialog">
                    <div class="weui-dialog__bd">是否将**餐厅设置为默认区域？</div>
                    <div class="weui-dialog__ft">
                        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确认</a>
                        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
                    </div>
                </div>
            </div>
            <div class="guide-overlay"></div>
        </div>
        <div class="weui-tab ds-n">
            <div class="weui-navbar css-nav-container">
                <div class="weui-navbar__item select-btn" v-on:click="showregion()">
                    全部区域
                    <i class="css-arrow" :class="{drop:isShowregion}"></i>
                </div>
                <div class="weui-navbar__item select-btn" v-on:click="showtime()">
                    2017-6-1
                    <i class="css-arrow" :class="{drop:isShowtime}"></i>
                </div>
                <section class="select-container" v-show="isShowregion">
                    <ul>
                        <li>广新餐厅</li>
                        <li>信义餐厅</li>
                        <li>总部餐厅</li>
                    </ul>
                </section>
                <section class="select-container" v-show="isShowtime">
                    <li>2017-6-1</li>
                    <li>2017-6-2</li>
                    <li>2017-6-3</li>
                    <li>2017-6-4</li>
                    <li>2017-6-5</li>
                    <li>2017-6-6</li>
                    <li>2017-6-7</li>
                </section>
            </div>
            <div class="weui-tab__panel css-main-container" id="js-mainheight">
                <aside class="aside-container">
                    <div class="aside">
                        <div class="c-lefttab" v-for="(val,index) in tabVal" v-on:click="switchpanel(index)" :class="{tabactive:val.ishow}">{{val.name}}</div>
                    </div>
                </aside>
                <section class="c-item-container" id="js-setheight">
                    <div class="c-item-panel" v-for="(val,index) in tabVal" :class="{'ds-n':!val.ishow}">
                        <div class="weui-panel__bd">
                            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in val.object">
                                <div class="weui-media-box__hd">
                                    <img class="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4 class="weui-media-box__title" v-if="item.a">主食：{{item.a}}</h4>
                                    <h4 class="weui-media-box__title" v-if="item.b">套餐：{{item.b}}</h4>
                                    <h4 class="weui-media-box__title" v-if="item.c">饮品：{{item.c}}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--<div class="c-item-panel ds-n">
                                        <div class="c-item">
                                            主食：中式意粉2
                                            <br/> 饮品：卡布奇诺特大份
                                        </div>
                                        <div class="c-item">
                                            主食：中式意粉
                                            <br/> 饮品：卡布奇诺特大份
                                        </div>
                                        <div class="c-item">
                                            主食：中式意粉
                                            <br/> 饮品：卡布奇诺特大份
                                        </div>
                                    </div>
                                    <div class="c-item-panel ds-n">
                                        <div class="c-item">
                                            主食：中式意粉3
                                            <br/> 饮品：卡布奇诺特大份
                                        </div>
                                        <div class="c-item">
                                            主食：中式意粉
                                            <br/> 饮品：卡布奇诺特大份
                                        </div>
                                        <div class="c-item">
                                            主食：中式意粉
                                            <br/> 饮品：卡布奇诺特大份
                                        </div>
                                    </div>-->
                </section>
            </div>
            <div class="overlay" v-on:click="closemask" v-show="isOverlay"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function () {
        let mainheight = document.getElementById('js-mainheight').offsetHeight;
        document.getElementById('js-setheight').style.height = (mainheight - 50) + 'px';
    },
    data() {
        return {
            isShowregion: false,
            isShowtime: false,
            isOverlay: false,
            tabVal: [
                {
                    name: "早餐", object: [
                        { a: "中式一份", b: "焦糖玛奇朵" },
                        { a: "中式茶点", b: "虾饺凤爪", c: "菊花普洱茶" },
                        { a: "中式一份", b: "焦糖玛奇朵" },
                        { a: "中式茶点", b: "虾饺凤爪", c: "菊花普洱茶" }
                    ], ishow: true
                },
                {
                    name: "午餐", object: [
                        { a: "中式二份", b: "焦糖玛奇朵" },
                        { a: "中式茶点", b: "虾饺凤爪", c: "菊花普洱茶" },
                        { a: "中式一份", b: "焦糖玛奇朵" },
                        { a: "中式茶点", b: "虾饺凤爪", c: "菊花普洱茶" }
                    ], ishow: false
                },
                {
                    name: "晚餐", object: [
                        { a: "中式三份", b: "焦糖玛奇朵" },
                        { a: "中式茶点", b: "虾饺凤爪", c: "菊花普洱茶" },
                        { a: "中式一份", b: "焦糖玛奇朵" },
                        { a: "中式茶点", b: "虾饺凤爪", c: "菊花普洱茶" }
                    ], ishow: false
                }
            ],
            itemData: [

            ]
        }
    },
    methods: {
        showregion: function () {
            this.isShowtime = false;
            if (this.isShowregion) {
                this.isShowregion = false;
                this.isOverlay = false;
            } else {
                this.isShowregion = true;
                this.isOverlay = true;
            }
        },
        showtime: function () {
            this.isShowregion = false;
            if (this.isShowtime) {
                this.isShowtime = false;
                this.isOverlay = false;
            } else {
                this.isShowtime = true;
                this.isOverlay = true;
            }
        },
        closemask: function () {
            this.isOverlay = false;
            this.isShowregion = false;
            this.isShowtime = false;
        },
        switchpanel: function (index) {
            for (let i = 0, len = this.tabVal.length; i < len; i++) {
                if (i === index) {
                    this.tabVal[i].ishow = true;
                } else {
                    this.tabVal[i].ishow = false;
                }
            }
        }
    }

} 
</script>
