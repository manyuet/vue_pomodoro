<template>
  <div id="app">
    <top-nav-bar />
    <div class="router">
      <router-view />
    </div>

  </div>
</template>

<script>

import TopNavBar from './components/topNavBar'

export default {
  name: 'App',
  components: {
    TopNavBar

  },
  methods: {}
}
</script>

<style scoped>
    #app {
        /*max-width: 1080px;*/
        /*min-width: 1080px;*/
        /*max-height: 900px;*/
        /*min-height: 900px;*/
        margin-left: auto;
        margin-right: auto;
        background-color: rgb(241, 242, 244);
        /*margin-top: 50px;*/
    }
</style>
