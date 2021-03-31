<template lang="html">

    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></svg>
        <div class="card-body">
          <p class="card-text"> {{title}} </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="show(title)">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Tags</button>
            </div>
            <small class="text-muted"> {{numberOfLessons}} Lessons </small>
          </div>
        </div>
      </div>

  </div>

</template>

<script>
export default {
  props: {
    title: String,
    numberOfLessons: Number,
  },
  methods: {
    show: function() {
      this.$router.push('/sample')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
