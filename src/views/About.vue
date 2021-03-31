<template>
  <div class="about">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">About</h1>
      <p class="lead">An about page.</p>
    </div>
    <br>
    <br>

    <DefaultFooter/>
  </div>
</template>

<script>
import DefaultFooter from '@/components/DefaultFooter.vue'

export default {
  name: 'About',
  components: {
    DefaultFooter
  }
}
</script>

<style media="screen">
  h1 {
    margin: 30px;
  }
</style>
