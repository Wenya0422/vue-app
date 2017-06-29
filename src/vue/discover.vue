<template>
  <div class="carrousel" id="discover">
      <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="item in items" style="height:200px">
            <img :src="item" class="index_img" style="width: 100%; height: auto;">
        </swiper-slide>
        <!-- 小圆点与左右也切换 -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>

      <div class="ItemBox">
          <ul class="ItemUl">
              <li v-for="(item,index) in list" class="discoverItems" @click="toggle(index)">
                  <a href="javascript:;" v-text="item" :class="{active:active===index}"></a>
              </li>
          </ul>
      </div>
      <component :is="currentView" transition="fade" transition-mode="out-in"></component>
  </div>
  
</template>
<style>
    #discover .ItemBox ul.ItemUl li.discoverItems a.active{
        color: #fff;
        background: #337ab7;
    }
</style>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import rank_tab_0 from './hot.vue'
    export default{
        name:'carrousel',
        components: {  
            swiper,  
            swiperSlide
        },  
        data() {  
            return {
                items:['res/1.jpg','res/2.jpg','res/1.jpg','res/1.jpg'],
                list:[],
                lists:['精选','潮餐厅','酒店','翻译'],
                active: 0,
                currentView:'rank_tab_0',
                swiperOption: {  
                    notNextTick: true,
                      // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 3000,
                    direction: 'horizontal',
                    grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    setWrapperSize: false,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    paginationClickable :true,
                    prevButton: '.swiper-button-prev',//上一张
                    nextButton: '.swiper-button-next',//下一张
                    // scrollbar: '.swiper-scrollbar',//滚动条
                    mousewheelControl : true,
                    observeParents:true,
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.carrousel = swiper.realIndex;  

                    },  
                }, 
            }  
        },
        methods: {
            toggle(index){//tab切换
                this.active = index,
                this.currentView = 'rank_tab_' + index;
            },

        },
        //定义这个sweiper对象  
        computed: {  
            swiper() {
              return this.$refs.mySwiper.swiper;  
            },
            
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.slideTo(0, 0, false);  
        },
        created() {
            this.list = this.lists
        },
        components: {
            rank_tab_0,
            // rank_tab_1,
            // rank_tab_2
        }

    }
</script>
