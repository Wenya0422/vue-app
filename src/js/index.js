import VueAwesomeSwiper from 'vue-awesome-swiper'
import vuePicturePreview from 'vue-picture-preview'

import '../less/index.less'
import menu from '../vue/menu.vue'
import home from '../vue/home.vue'
import discover from '../vue/discover.vue'
import schedule from '../vue/schedule.vue'
import me from '../vue/me.vue'
import sentMessage from '../vue/sentMessage.vue'
import contact from '../vue/contact.vue'
import add from '../vue/add.vue'



const router = new VueRouter({
    routes: [
        {path: '/home', component: home},
        {path: '/discover', component: discover},
        {path: '/schedule', component: schedule},
        {path: '/me', component: me},
        {path: '/sentMessage', component: sentMessage},
        {path: '/contact', component: contact},
        {path: '/add', component: add}
    ],
})

const v = new Vue({
    data: {
    },
    components: {
        navBox: menu,
    },
    router,
})

Vue.use(VueAwesomeSwiper)
Vue.use(vuePicturePreview)
window.addEventListener('load', event => {
    v.$mount('#app')
})
