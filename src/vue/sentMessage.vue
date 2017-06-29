<template>
	<div  class="sendBox"  @click="closeMessage">
		<div class="header">
            <router-link to="/home">
                 <i class="glyphicon glyphicon-menu-left"></i>
            </router-link>

            <span class="title">正文</span>
            <span class="share" @click="share" style="top: 0;
            width: 3rem;
            height: 3rem;
            background: transparent;">
                <i class="glyphicon glyphicon-leaf" style="margin: 0.25rem 1rem 0;
                color: rgb(147, 112, 219);
                font-size: 2.4rem;"></i>
            </span>
        </div>
        <div class="content">
            <ul style="padding-bottom: 1rem">
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
            
            <div class="ifoList" v-for="x in messageListPush">
                <a href="javascript:;" class="userPhoto">
                    <img :src="x.userPhoto" >
                </a>
                <div class="discussPhoto">
                    <strong class="discussName" v-text="x.discussName"></strong>
                    <p class="discussIfon" v-text="x.discussIfon"></p>
                    <span class="discussTime" v-text="x.discussTime"></span>
                </div>
                <div class="photoRight">
                    <span><i class="glyphicon glyphicon-thumbs-up"></i></span>
                    <span><i class="glyphicon glyphicon-envelope"></i></span>
                </div>
            </div>
        </div>






        <div class="sentMessage" >
			<h4>私下发送</h4>
			<div class="messageBg">
				<input type="text" name="" placeholder="添加新评论" class="addMessage">
				<a href="javascript:;" class="sentCurrent">发送</a>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		data() {  
            return {
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
                    }
                ],
                messageListPush:[],
                messageList:[
                    {
                        userPhoto:'res/Lavender-Meaning.jpg',
                        discussName:'Elsa',
                        discussIfon:'照片很美哦，好喜欢啊',
                        discussTime:'6月4日 20:60'
                    },
                    {
                        userPhoto:'res/1.jpg',
                        discussName:'Sherry',
                        discussIfon:'在哪里哦',
                        discussTime:'6月4日 20:60'
                    },
                ],

                
            }
        },
        methods: {
        	
        	closeMessage(){
        		console.log(1)
        	}
        	
        },
        created() {
            this.accountListPush = this.accountList
            this.messageListPush = this.messageList
        },
    }
</script>