<template>
    <div class="weui-tab">
        <div class="weui-tab__panel">
    
        </div>
        <Cbottomnav :showtab="false"></Cbottomnav>
    </div>
</template>

<script>
import Bottomnav from '../bottomnav/bottomnav.vue';
export default {
    data() {
        return { showtab: true }
    },
    components: {
        'Cbottomnav': Bottomnav
    },
    mounted: function () {
        this.showtab = false;
    }
} 
</script>