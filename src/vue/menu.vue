<template>
    <div id="menuFooter">
        <ul>
            <li>
                 <router-link to="/home">
                    <i class="glyphicon glyphicon-heart-empty"></i>
                    Home
                 </router-link>
            </li>
            <li>
                <router-link to="/discover">
                    <i class="glyphicon glyphicon-globe"></i>
                    Discover
                </router-link>
            </li>
            <li>
                <router-link to="/schedule">
                    <i class="glyphicon glyphicon-send"></i>
                    Schedule
                </router-link>
            </li>
            <li>
                <router-link to="/me">
                    <i class="glyphicon glyphicon-user"></i>
                    Me
                </router-link>
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
  data () {
    return {
        
    }
  },
 
}
</script>
