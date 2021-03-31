<template lang="html">

  <div class="sample">

    <div class="container">
      <h3></h3>
    </div>

    <div class="card text-center m-3">
      <h1 class="card-header"> {{ activeLesson }}</h1>
      <div class="card-body">


        <div class="container">
          <div class="d-flex justify-content-center">

            <VideoPlayer topic="ctb" />

          </div>
        </div>


        <div class="container">
          <div class="row">

            <div class="col-md-4 pos">
              <ImageStackScroller region="ctb" plane="sagittal" />
            </div>
            <div class="col-md-4 pos">
              <ImageStackScroller region="ctb" plane="coronal" />
            </div>
            <div class="col-md-4 pos">
              <ImageStackScroller region="ctb" plane="axial" />
            </div>

          </div>
        </div>


        <div class="container">
          <div class="row">

            <div class="col-lg pos">
              <Quiz topic="ctb"/>
            </div>

          </div>
        </div>


      </div>


      <div class="card-footer pb-0 pt-3">
        <Paginator :items="lessonList" @changePage="onChangePage"></Paginator>
      </div>

    </div>

    <DefaultFooter/>

  </div>

</template>

<script>

  import ImageStackScroller from '@/components/ImageStackScroller.vue'
  import VideoPlayer from '@/components/VideoPlayer.vue'
  import Quiz from '@/components/Quiz.vue'
  import Paginator from '@/components/Paginator.vue'
  import DefaultFooter from '@/components/DefaultFooter.vue'
  // import * as axios from 'axios'

  export default {
    name: 'Home',

    components: {
      ImageStackScroller,
      VideoPlayer,
      Quiz,
      Paginator,
      DefaultFooter
    },

    data() {
      return {
        scan: 'ctb'
      }
    },

    computed: {
      lessonList: function() {
        return this.$store.state.lessonList
      },
      activeLesson: function() {
        return this.$store.state.activeLesson
      }
    },

    methods: {
      onChangePage() {
        // this.$store.commit('SET_ACTIVE_LESSON', {
        //   title: this.lessonList[currentLesson]
        // })
        // update page of items
        // this.pageOfItems = pageOfItems;
        // this.$store.state.activeLesson = pageOfItems;
      }
    }
  }

</script>

<style>

  .padded {
    padding: 1rem;
  }

  .unpadded {
    background: #fff;
    margin: -0.7rem 0rem;
  }

  .sample {
    margin: 60px;
  }

  .card-header {
    padding: 20px;
  }

  .pos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
  .sample {
    margin: 0px;
  }

  .lesson-title {
    padding: 0px;
  }
}

</style>
