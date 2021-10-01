<template>
  <div id="app">
    <myheader></myheader>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "@/components/myheader";
import myfooter from "@/components/myfooter";

export default {
  name: 'App',
  components: {
    myheader,
    myfooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
