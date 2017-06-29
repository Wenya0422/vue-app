<template>
	<div id="contact">
		<div class="headerContace">
			<router-link to="/home" class="iconLeft">
                 <i class="glyphicon glyphicon-menu-left"></i>
            </router-link>
			<span class="title">驴友</span>
			<router-link to="/add">
                 <span class="addFriend">
					<img src="res/addP.png">
				</span>
            </router-link>
			
		</div>
		<div class="contactMain">
			<p class="searchBox">
				<input type="text" name="" placeholder="搜索">
			</p>
			<ul class="contacts">
				<li v-on:touchstart="onTouchStart" v-for="x in list">
					 <a href="javascript:;" class="userPhoto" v-bind:style="{ marginLeft: -moveSpace + 'px' }" v-on:touchmove="move" v-model="userPhoto">
						<img :src="x.userPhoto" class="userPhoto">
						<span class="userName" v-text="x.userName"></span>
					</a>
					<span class="editorUser" v-bind:style="{ right: (parseInt(start) +  moveSpace) + 'px' }">
						<i class="remark">备注</i>
						<i class="delete-contact" @click="deleteCur">删除</i>
					</span>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	export default{
		data() {
            return {
				// is_open: false,
				startTouch: null,
				moveTouch: null,
				moveSpace: null,
				userPhoto: null,
				start: '-140px',
				list: [],
				current:{
					userPhoto: null,
					userName: null
				},
				index: null,
				jsonp:{
					r:[
						{
							 userPhoto: 'res/Lavender-Meaning.jpg',
							 userName: '花儿',
						}
						// ,
						// {
						// 	 userPhoto: 'res/1.jpg',
						// 	 userName: 'else',
						// }
					]
				}
            }
        },
        methods: {
        	onTouchStart(event){
        		event.preventDefault()
        		if (event.targetTouches.length == 1 ) {
        			const touch = event.targetTouches[0]
        			this.startTouch = touch.pageX
        		}
        	},
        	move(event){

        		if (event.targetTouches.length == 1 ) {
        			const touch = event.targetTouches[0]
        			this.moveTouch = touch.pageX
        			this.moveSpace =  this.startTouch - this.moveTouch
        			if(this.startTouch > this.moveTouch){
        				// console.log('向左')
        				if(this.moveSpace >= 140){
	        				this.moveSpace = 140
	        			}
        			}else{
        				this.moveSpace = 0
        				// console.log('向右')
        			}
        		}
        	},
        	deleteCur(){
        		console.log(1)
        		//删除列表
               // this.list = this.list.slice(1)
               alert('确认删除选中记录吗？')
        	},


        },
        created() {
            this.list = this.jsonp.r
        },


    }
</script>