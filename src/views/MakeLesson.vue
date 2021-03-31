<template>

  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">

          <form>
            <input id="title" v-model="title" type="text" name="title" placeholder="Title">
            <input id="video" v-model="video" type="text" name="video" placeholder="Video URL">

            <select v-model="scan" name="scan">
              <option value="" disabled selected>Scan to display beneath video</option>
              <option value="ctb">CTB</option>
              <option value="cxr">CXR</option>
              <option value="axr">AXR</option>
            </select>

            <!-- <div v-model="quiz_answers">
              <input v-for="quiz_answers_number" :key="quiz_answers" type="text" name="structure" placeholder="Answer">
            </div> -->

            <input id="slug" v-model="slug" type="text" name="slug" placeholder="URL">


            <button type="submit" name="button" v-on:click.prevent="submitLesson">Submit</button>
          </form>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import * as axios from 'axios'

  export default {
    name: 'MakeLesson',
    data() {
      return {
        title: '',
        video: '',
        quiz_question: '',
        quiz_answers_number: 3,
        quiz_answers: [],
        correct_answer: 0,
        scan: '',
        slug: ''
      }
    },
    methods: {
      submitLesson: function() {
        this.$store.commit('SET_ACTIVE_LESSON', {
          title: this.title,
          video: this.video,
          scan: this.scan,
          slug: this.slug
        })
        this.$router.push('/lessons/' + this.slug)

        axios
          .post('/lessons', {
            title: this.title,
            video: this.video,
            scan: this.scan,
            slug: this.slug
          })
          .then(function(res) {
            console.log(res)
          })
          .catch(function(err) {
            console.log(err)
          })
      }
    }
  }

</script>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
  }

  input,
  textarea,
  select {
    font-family: inherit;
    display: block;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 0.75rem;
    outline: none;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 400;
    overflow: visible;
  }

  textarea {
    line-height: 1.6;
  }

</style>
