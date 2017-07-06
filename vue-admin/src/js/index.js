
import '../less/index.less'
import nav from '../vue/nav.vue'
import menu from '../vue/menu.vue'
import table from '../vue/table.vue'
import ECharts from '../vue/echarts.vue'
import message from '../vue/message.vue'
import setting from '../vue/setting.vue'
import travle from '../vue/travle.vue'

const router = new VueRouter({
    routes: [
        {path: '/table', component: table},
        {path: '/chart', component: ECharts},
        {path: '/message', component: message},
        {path: '/setting', component: setting},
        {path: '/travle', component: travle},
    ],
})

const v = new Vue({
    data: {
    },
    components: {
        navBox: nav,
        menuBox: menu,
    },
    router,
})


window.addEventListener('load', event => {
    v.$mount('#app')
})
