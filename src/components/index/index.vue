<template>
    <div>
        <h4>欢迎！<span v-text="text"></span></h4>
        <li><router-link to="/signin">登入</router-link></li>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                text:'动态数据'
            }
        }
    }
</script>