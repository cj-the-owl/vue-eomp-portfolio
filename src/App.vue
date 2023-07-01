<template>
  <navbar-comp/>
  <router-view/>
</template>

<script>
  import navbarComp from "./components/navbar-comp.vue";

  export default {
    components: {navbarComp}
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
