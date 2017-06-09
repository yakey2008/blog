<style lang="scss">
.c-item-container {
    overflow-x: scroll;
    margin-left: 21.3333%;
    background-color: #fff;
    border-left: 1px solid #e7e7e7;
}
</style>

<template>
    <div class="weui-tab__panel css-main-container" id="js-mainheight">
        <aside class="aside-container">
            <div class="aside">
                <div class="c-lefttab tabactive">早餐</div>
                <div class="c-lefttab">午餐</div>
                <div class="c-lefttab">晚餐</div>
            </div>
        </aside>
        <section class="c-item-container" id="js-setheight">
            <div class="c-item-panel">
                <div class="c-item">
                    主食：中式意粉
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
                    主食：中式意粉
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
                    主食：中式意粉
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
        </section>
    </div>
</template>

<script>
export default {
    mounted: function () {
        let mainheight = document.getElementById('js-mainheight').offsetHeight;
        document.getElementById('js-setheight').style.height = (mainheight - 50) + 'px';
    }
} 
</script>
