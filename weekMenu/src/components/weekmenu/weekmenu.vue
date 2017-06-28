<template>
    <div class="weui-tab">
        <Mmain></Mmain>
        <Bottomnav :showtab="true"></Bottomnav>
    </div>
</template>
<script>
import Mmain from './main/main.vue';
import Bottomnav from '../bottomnav/bottomnav.vue';
export default {
    data() {
        return { showtab: true }
    },
    components: {
        Mmain,
        Bottomnav
    }
} 
</script>
