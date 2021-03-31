<template>
<div id="app">
  <div id="nav">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom">
      <router-link class="title my-0 mr-md-auto font-weight-normal text-dark" to="/">GetRadiology</router-link>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark" to="/about">About</router-link>
        <router-link class="p-2 text-dark" to="/pricing">Pricing</router-link>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}

#nav a.router-link-exact-active {
  color: #ddd;
}

.title {
  font-size: 20px;
}

</style>
