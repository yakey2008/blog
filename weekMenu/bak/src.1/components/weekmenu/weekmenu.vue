<template>
    <div class="weui-tab">
        <Cmain></Cmain>
        <Cbottomnav :showtab="true"></Cbottomnav>
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
        'Cmain': Mmain,
        'Cbottomnav': Bottomnav
    },
    mounted: function () {
    }
} 
</script>
