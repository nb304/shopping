

<template>
        <div>
            <h1 @click="show">acco 我说 acco靓仔</h1>
        </div>
    </template>
    
    <script>
    export default {
        data () {
            return {
                msg: 123123
            }
        },
        methods: {
            show(){
                alert("我是acco.vue 中的show方法")
            }
        }

    }
    </script>
    
<style scoped>
    div {
        color: red;
    }
</style>