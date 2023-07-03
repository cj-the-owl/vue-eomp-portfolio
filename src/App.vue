<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import FooterComp from './components/footer-comp.vue';
  import navbarComp from "./components/navbar-comp.vue";

  export default {
    components: {navbarComp, FooterComp}
  }

</script>
<style>
body {
  background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  font-family: 'Kiwi Maru', serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
