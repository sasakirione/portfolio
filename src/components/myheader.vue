<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/">Portfolio</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded text large>
        <router-link to="/about">AboutMe</router-link>
      </v-btn>
      <v-btn rounded text large>
        <router-link to="/works">Works</router-link>
      </v-btn>
      <v-btn rounded text large>
        <router-link to="/contact">Contact</router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "myheader"
}
</script>

<style scoped>

</style>