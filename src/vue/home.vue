<template>
	<section id="home">
		<header>
            <router-link to="/contact">
            	<img src="res/friedns.png">
            </router-link>
            <!-- <span class="title">正文</span> -->
            <span class="share"  @click="share" >
                <i class="glyphicon glyphicon-leaf" style="margin: 0.9rem 1rem 0px;
                color: rgb(147, 112, 219); font-size: 2rem;"></i>
            </span>
		</header>
		<div class="content">
			<ul>
				<li class="account-group" v-for="x in accountListPush">
					<a href="javascript:;" class="account-photoes">
						<img :src="x.userPhoto" class="userPhoto">
					</a>
					<div class="account-list">
						<div class="account-list-header">
							<strong class="headerName" v-text="x.headerName"></strong>
							<span class="headerTime" v-text="x.headerTime"></span>
						</div>
						<div class="account-list-ifo" v-text="x.accountListIfo">
						</div>
						<div class="imgsBox" >
							<a href="javascript:;" v-for="(img,index) in x.imgs"><!-- vue-picture-preview -->
								<img :src="img" v-if="x.imgs.length === 1"  v-preview="img"  v-bind:style="styleObject" v-model="sharePhoto">
								<img :src="img" v-else  v-preview="img" v-model="sharePhoto">
							</a>
						</div>
						<div class="editorIfo">
							<p>
								<span class="editorSamll" >
									<i class="glyphicon glyphicon-heart"  v-on:click="counter += 1" ></i>
									<span class="likeTotal" >{{counter}}</span>
								</span>
								<span class="editorSamll" @click="comtentEditor">
									<i class="glyphicon glyphicon-edit"></i>
									<span class="commentTotal" v-text="x.commentTotal"></span>
								</span>
								<span class="editorSamll">
									<i class="glyphicon glyphicon-share-alt"></i>
									<span class="shareTotal" v-text="x.shareTotal"></span>
								</span>
							</p>
						</div>
					</div>
				</li>

			</ul>
		</div>

		<component :is="currentView" transition="fade" transition-mode="out-in" v-show="!is_open" v-bind:class="selected ? 'writeOpen' : 'writeCloseW'"></component>
	</section>
</template>
<style >
	.lg-preview-wrapper{
		top: 0;
		left: 0
	}

</style>
<script>
import write from './write.vue'
	export default{
		data() {
            return {
            	imgs: ['res/Lavender-Meaning.jpg','res/Lavender-Meaning.jpg','res/Lavender-Meaning.jpg','res/Lavender-Meaning.jpg'],
		    	styleObject: {
				    width: '50%'
				},
            	index:null,
            	current:{
            		banner: null
            	},
            	counter:0,
            	active:{
                    activeColor: 'red',
                },
                is_open: true,
				selected: true,
                currentView: null,
                accountListPush: [],
                accountList:[
                	{
                		userPhoto: 'res/Lavender-Meaning.jpg',
                		headerName: 'Mona',
                		headerTime: '2017/05/24',
                		accountListIfo: 'The beautiful thing about learning is that no one can take it away from you.',
                		imgs: ['res/Lavender-Meaning.jpg','res/Lavender-Meaning.jpg','res/Lavender-Meaning.jpg','res/Lavender-Meaning.jpg'],
                		likeTotal:'0',
                		commentTotal: '10',
                		shareTotal: '10'
                	},
                	{
                		userPhoto: 'res/1.jpg',
                		headerName: 'Lisa',
                		headerTime: '2017/05/24',
                		accountListIfo: 'The beautiful thing about learning is that no one can take it away from you.',
                		imgs: ['res/Lavender-Meaning.jpg','res/1.jpg','res/Lavender-Meaning.jpg','res/2.jpg'],
                		likeTotal:'0',
                		commentTotal: '100',
                		shareTotal: '10'
                	},
                ],

            }
        },


        methods: {
        	comtentEditor(){
        		location.href = 'index.html#/sentMessage'
        	},

        	share(){
        		this.currentView = write
        		this.is_open =! this.is_open

        	},

        	

        },
        mounted() {
            // this.$refs.dialog.open()
        },
        created() {
            this.accountListPush = this.accountList
        },
       

        components: {
        	write
        }
	}
</script>