<style lang="scss">
.aside-container {
    position: relative;
}

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
</style>

<template>
    <aside class="aside-container">
        <div class="aside">
            <div class="c-lefttab tabactive">a</div>
            <div class="c-lefttab">b</div>
            <div class="c-lefttab">c</div>
        </div>
    </aside>
</template>

<script>
export default {
    methods:{
        switchBtn:{
            
        }
    }
} 
</script>
