<template>
    <div>
        <Cnav></Cnav>
        <Caside></Caside>
        <Cmain></Cmain>
    </div>
</template>
<script>
import Nav from './components/nav/nav.vue';
import Aside from './components/aside/aside.vue';
import Main from './components/main/main.vue';

export default {
    components: {
        'Cnav': Nav,
        'Caside':Aside,
        'Cmain':Main
    }
} 
</script>
