<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <tab></tab>
    <router-view/>
  </div>
</template>
<script>
import NavigationBar from 'Cpnts/m-header.vue'
import Tab from 'Cpnts/tab.vue'

export default {
    components: {
        NavigationBar,
        Tab,
    }
}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
