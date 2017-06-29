<template>
	<div class="myTravling">
		<div class="containScore">
			<ul class="containOutline">
				<li>
					<a href="javascript:;" >
						<span>Date</span>
						<p class="img">
							<img :src="img" v-for="(img,index) in imgs">
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;" >
						<span>People</span>
						<p class="img">
							<img :src="img" v-for="(img,index) in imgPeople" v-if="imgPeople.length === 1" v-bind:style="styleObject" style="height: auto">
							<img :src="img" v-for="(img,index) in imgPeople" v-else>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<span>Place</span>
						<p class="img">
							<img :src="img" v-for="(img,index) in imgs">
						</p>
					</a>
				</li>
			</ul>
			<div class="popularImgs">
				<ul class="popularTop">
					<li v-for="(img,index) in popularImgs">
						<a href="javascript:;" >
							<img :src="img" v-preview="img" >

							<p>
								<i class="glyphicon glyphicon-eye-open"></i>
								<span>10000</span>
							</p>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="totalPhotos">
			<p>
				共分享了1000张美照
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		data() {  
            return {
            	imgs: ['res/Lavender-Meaning.jpg','res/travle.jpg','res/1.jpg','res/Lavender-Meaning.jpg'],
            	imgPeople:['res/travle.jpg'],
            	styleObject: {
				    width: '100%'
				},
				popularImgs:['res/2.jpg','res/italy.jpg','res/1.jpg'],
            }
        }
    }
</script>