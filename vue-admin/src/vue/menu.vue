<template>
    <div id="left" v-bind:class="!collapsed ? 'leftFlex' : 'leftFlexSixty'">
        <div class="slimScrollDiv" v-bind:class="collapsed ? 'logo-collapse-width' : 'logo-width'">
            <div class="header-nav-logo" >
                <a href="javascript:;">
                    {{collapsed ? '' : sysName}} 
                </a>
                <a id="close-sidebar" href="javascript:;" @click="collapse">
                    <i v-if="collapsed" class="glyphicon glyphicon-indent-left"></i>
                    <i v-else class="glyphicon glyphicon-indent-right"></i>
                </a>
            </div>
            <div class="scroll-sidebar"  v-bind:class="collapsed?'menu-collapsed':'menu-expanded'" >
                <ul class="sidebar-menu">
                    <li>
                        <a href="javascript:void(0);"  @click="select" class="menu-nav">
                            <i class="glyphicon glyphicon-briefcase menuIcon"></i>
                            
                            <p class="menusNavBox" >
                                <span v-show="!collapsed">Menu One</span>
                                <span v-show="!collapsed">
                                    <i v-if="selected" class="glyphicon glyphicon-menu-down menuSelect"></i>
                                    <i v-else class="glyphicon glyphicon-menu-up menuSelect"></i>
                                </span>
                                
                            </p>
                        </a>
                        <div class="sidebar-submenu" v-show="!collapsed" v-bind:class="selected ? 'submenu-hide' : 'submenu-show'">
                            <ul>
                                <li>
                                    <router-link to="/table">Table</router-link>
                                </li>
                                <li>
                                    <router-link to="/chart">Echarts</router-link>
                                </li>
                                <li>
                                    <router-link to="/travle">Travle</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        sysName: 'Delight',
        collapsed: false,
        selected: true,
        showBox: '1024px',
        sidebarBox: true,
        menuJson:{
            
        }
    }
  },
  methods: {
        //折叠导航栏
        collapse () {
            this.collapsed =! this.collapsed
        },
        select () {
            this.selected =! this.selected
        },
  }
}
</script>
