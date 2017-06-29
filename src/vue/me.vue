<template>
	<section id="me">
		<div class="headerBox">
			<div class="timeline-cover">
				<div class="userBackground">
					<i class="bkgImg"></i>
					<i class="glyphicon glyphicon-camera" style="top: 200px; position: absolute; right: 10px;z-index: 1;color: #fff;"></i>
				</div>

				<div class="userPhoto">
					<i class="userIfoPhoto"></i>
					<i class="glyphicon glyphicon-camera" style="position: absolute;color: rgb(255, 255, 255);right: 10px;top: 130px"></i>
				</div>
				<div class="userNameBox">
					<h3>Mona Wen</h3>
				</div>
			</div>
		</div>

		<div class="containerBox">

			<ul class="containerHeader">        
		        <li v-for="(tab,index) in tabs" @click="toggle(index)">
		       	 	<a href="javascript:;" v-text="tab.view" :class="{active:active===index}"></a>
		         </li>    
		    </ul>   
   			<component :is="currentView" transition="fade" transition-mode="out-in"></component>
		
		</div>
	</section>
</template>
<style>
	#me .containerBox ul.containerHeader li a.active{
	 	color: #fff;
    	background: mediumpurple;
	}
</style>
<script>
import rank_tab_0 from './myTravling.vue'
import rank_tab_1 from './friendsChat.vue'
import rank_tab_2 from './mySetting.vue'
	export default{
		data() {  
            return {
				active: 0,
				currentView:'rank_tab_0',
				tabs: [   //导航
				   {       
				       type: 'tab1',   
				       view: '足迹'  
				    },     
				   {       
				       type: 'tab2',    
				       view: '消息中心'    
				    },     
				   {       
				       type: 'tab3',    
				       view: '设置'    
				    }
				],

            }
        },
        methods: {
        	toggle(index){//tab切换
                this.active = index 
                this.currentView = 'rank_tab_' + index;
            },

        },
        components: {
            rank_tab_0,
            rank_tab_1,
            rank_tab_2
        }
    }
</script>