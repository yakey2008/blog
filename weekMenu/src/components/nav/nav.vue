<template>
    <div>
        <nav class="nav-container">
            <div class="cat">
                <div class="select-btn" v-on:click="showregion()" id="js-region">
                    全部区域<i class="css-arrow" :class="{drop:isShowregion}"></i>
                </div>
                <div class="select-btn" v-on:click="showtime()" id="js-time">
                    2017-6-1<i class="css-arrow" :class="{drop:isShowtime}"></i>
                </div>
            </div>
            <section class="select-container" v-show="isShowregion" id="js-select-region">
                <ul>
                    <li>广新餐厅</li>
                    <li>信义餐厅</li>
                    <li>恒荔海湾餐厅</li>
                    <li>大旺餐厅</li>
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
        closemask:function(){
            this.isOverlay = false;
            this.isShowregion = false;
            this.isShowtime = false;
        }
    }

} 
</script>
