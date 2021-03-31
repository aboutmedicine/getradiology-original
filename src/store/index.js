import Vue from 'vue'
import Vuex from 'vuex'
import images from './images'
import videos from './videos'
import quizzes from './quizzes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: images,
    videos: videos,
    quizzes: quizzes,
    activeLesson: 'Chest X-rays: Part 1',
    lessonList: ['Chest X-rays: Part 1', 'Chest X-rays: Part 2', 'Chest X-rays: Part 3']
  },
  mutations: {
    SET_ACTIVE_LESSON(state, payload) {
      state.activeLesson = payload;
      console.log(state.activeLesson);
    }
  },
  actions: {
  },
  modules: {
  },
})
