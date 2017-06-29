<template>
	<div class="writeBox"  v-show="is_open" v-bind:class="selected ? 'writeOpen' : 'writeCloseW'">

		<div class="headerWrite">
			<a href="javascript:;" class="writePhoto">
				<img src="res/Lavender-Meaning.jpg" >
			</a>
			<a href="javascript:;" class="writeClose" @click="close" >
				<i class="glyphicon glyphicon-remove"></i>
			</a>
		</div>
		<div class="textareaBox">
			<textarea placeholder="有什么新鲜的事？"></textarea>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
            return {
				is_open: true,
				selected: true
            }
        },
        methods: {
        	close() {
				this.is_open =! this.is_open
			},
        }


    }
</script>