<template>

  <div class="image-stack-scroller">

    <div class="stack"
         @scroll="getScrollVal( $event )"
         :style="{ backgroundImage: 'url(' + this.images[this.scrollVal] + ')'}">

      <img v-for="image in images"
           :src="image"
           :key="image">

      <div class="scroller"
           :style="{ height: scrollerHeight() + 'px' }">

      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'ImageStackScroller',

    data() {
      return {
        scrollVal: 0,
      };
    },
    created() {
    },
    methods: {
      getScrollVal: function(e) {
        let heightVal = (this.scrollerHeight() - 300) / (this.images.length - 1);
        this.scrollVal = Math.floor(e.target.scrollTop / heightVal);
      },
      scrollerHeight: function() {
        return Math.floor(0.1 * this.images.length * 300);
      }
    },
    computed: {
      images: function() {
        return this.$store.state.images[this.region][this.plane]
      }
    },
    props: {
      region: String,
      plane: String
    }
  };

</script>

<style scoped>

  .stack {
    width: 300px;
    height: 300px;
    overflow: auto;
    background-size: cover;
    border-radius: 5px;
  }

  .scroller {
    width: 100%;
  }

  img {
    height: 600px;
    width: 600px;
    display: none;
  }

</style>
