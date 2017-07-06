<template>
<div id="right" >
    <div class="commonBody">
        <p class="x_title">travle</p>
        <img src="res/attachment.png">
    </div>
</div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            

        },
        created() {//获得当前时间
            const 
                date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth()+1,
                myDate = date.getDate()
            this.today = `${year}/${month < 10 ? '0'+month : month}/${myDate < 10 ? '0'+myDate : myDate}`,
            this.getData(this.today)
        },
        components: {
        },
    }
</script>