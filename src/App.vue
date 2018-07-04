<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/story">Story</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Miriam+Libre|Varela+Round");
#app {
  color: white;
  h1 {
    font-family: "Varela Round", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 80px;
    font-weight: lighter;
  }
  p {
    font-family: "Miriam Libre", sans-serif;
    font-size: x-large;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
