<template>

  <div class="home">
    <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1>Get Radiology</h1>
          <p class="lead text-muted">Welcome!</p>
          <p>
            <a href="#" class="btn btn-primary my-2 padded">Sign Up</a>
            <a href="#" class="btn btn-secondary my-2">Log In</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <HomeCard title="Deakin Medical Students" numberOfLessons="13" />
            <HomeCard title="Allied Health" numberOfLessons="10" />
            <HomeCard title="Foot Radiology" numberOfLessons="9" />
          </div>
          <div class="row">
            <HomeCard title="Hand Radiology" numberOfLessons="5" />
            <HomeCard title="RANZCR Exam Tips" numberOfLessons="15"/>
            <HomeCard title="Symbolism & the History of Medicine" numberOfLessons="404" />
          </div>
        </div>
      </div>

    </main>
    <DefaultFooter/>
  </div>

</template>

<script>

  import DefaultFooter from '@/components/DefaultFooter.vue'
  import HomeCard from '@/components/HomeCard.vue'

  export default {
    name: 'Home',
    components: {
      DefaultFooter,
      HomeCard
    }
  }

</script>

<style scoped>

  .jumbotron {
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 0;
    background-color: #fff;
  }
  @media (min-width: 768px) {
    .jumbotron {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  .jumbotron p:last-child {
    margin-bottom: 0;
  }

  .jumbotron h1 {
    font-weight: 300;
  }

  .jumbotron .container {
    max-width: 40rem;
  }

  .padded {
    margin-right: 10px;
  }

</style>
