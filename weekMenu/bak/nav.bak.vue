<style lang="scss">
.nav-container {
    position: relative;
    z-index: 11;
    .cat {
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        padding: 13px 0;
        text-align: center;
        position: absolute;
        top: 0;
        width: 100%;
        .select-btn {
            display: inline-block;
            width: 49%;
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
    }
    .select-container {
        position: absolute;
        width: 100%;
        top: 52px;
        li {
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            border-bottom: 1px solid #ddd;
            background-color: #fff;
        }
    }
}

.overlay {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    position: fixed;
}
</style>

<template>
    <div>
        <nav class="nav-container">
            <div class="cat">
                <div class="select-btn weui-navbar__item" v-on:click="showregion()" id="js-region">
                    全部区域
                    <i class="css-arrow" :class="{drop:isShowregion}"></i>
                </div>
                <div class="select-btn" v-on:click="showtime()" id="js-time">
                    2017-6-1
                    <i class="css-arrow" :class="{drop:isShowtime}"></i>
                </div>
            </div>
            <section class="select-container" v-show="isShowregion" id="js-select-region">
                <ul>
                    <li>广新餐厅</li>
                    <li>信义餐厅</li>
                    <li>总部餐厅</li>
                </ul>
            </section>
            <section class="select-container" v-show="isShowtime" id="js-select-time">
                <li>2017-6-1</li>
                <li>2017-6-2</li>
                <li>2017-6-3</li>
                <li>2017-6-4</li>
                <li>2017-6-5</li>
                <li>2017-6-6</li>
                <li>2017-6-7</li>
            </section>
    
        </nav>
        <div class="overlay" v-on:click="closemask" v-show="isOverlay"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowregion: false,
            isShowtime: false,
            isOverlay: false
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
        }
    }

} 
</script>
