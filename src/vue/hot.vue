<template>
	<div class="discoverIfo1">
		<ul class="ifoHot">
		  <li class="hotList" v-for="(x,index) in hotList">
		    <a href="javascript:;">
		        <img :src="x.img">
		        <p class="HotTitle" v-text="x.HotTitle"></p>
		        <p class="witerIfo">
		            <span class="HotWriter" v-text="x.HotWriter"></span>
		            <span class="HotRead" v-text="x.HotRead"></span>人看过
		        </p>
		    </a>
		  </li>
		</ul>
	</div>
</template>
<script>
	export default{
        data() {  
            return {
                hotList:[],
                ifoHot:[
                    {
                        img: 'res/sunrise.jpg',
                        HotTitle: '寻觅梦中的那一次云海日出',
                        HotWriter: '旅行家',
                        HotRead: '3385'
                    },
                    {
                        img: 'res/starSky.jpg',
                        HotTitle: '还记得我们第一熬夜一起看星星时吗',
                        HotWriter: '旅行家',
                        HotRead: '1000'
                    }
                ],

            }
        },
		created() {
            this.hotList = this.ifoHot
        },

    }
</script>