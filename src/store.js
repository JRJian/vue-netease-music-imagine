import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const staticText = {
  namespaced: true,
  state: {
    tabs: ['推荐', '排行', '歌手'],
    sections: ['推荐歌单', '推荐歌曲']
  }
}

export default new Vuex.Store({
  modules: {
    staticText,
  }
})
