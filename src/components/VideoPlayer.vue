<template>

  <div class="video-player">

    <iframe :width="this.windowHeight"
            :height="Math.floor(this.windowHeight / 1.778)"
            :src="'https://www.youtube.com/embed/' + this.video"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen></iframe>

  </div>

</template>

<script>

  export default {
    name: 'VideoPlayer',
    data() {
      return {
        windowHeight: window.innerHeight + 260,
        video: this.$store.state.videos[this.topic]
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
    methods: {
      onResize() {
        this.windowHeight = window.innerHeight + 260
      }
    },
    props: {
      topic: String
    }
  }

</script>

<style scoped>

  .video-player {
    padding: 60px 0px 110px;
  }

  @media (max-width: 768px) {
    .video-player {
      padding: 20px 0px 20px;
    }
    iframe {
      width: 100%;
      height: auto;
    }
}

</style>
