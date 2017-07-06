<template>
        <div class="header-loge">
            <div class="header-nav-left">
                <div class="use-account-btn">
                    <a href="javascript:;" class="user-profile" @click="selectIfo">
                        <span style="display: inline-block; float: left; margin-right: 10px;">Weclome</span>
                        <img width="28" src="res/user.jpg">
                        <span>Mona</span>
                        <i class="glyph-icon icon-angle-down"></i>
                    </a>
                    <div class="userInfo"  v-bind:class="selectedIfo ? 'submenu-show' : 'submenu-hide'">
                        <router-link to="/message">我的消息</router-link>
                        <router-link to="/setting">设置</router-link>
                        <a href="login.html" @click="logout">退出登录</a>
                    </div>
                </div>
            </div>
        </div>



</template>
<script>
	export default {
        data(){
             return {
               selectedIfo: false,
             }
        },
		methods: {
            selectIfo () {
                this.selectedIfo =! this.selectedIfo
            },
			logout(){
				window.location.href = 'login.html'
			},
		},
	}
</script>