import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kmPerHour: 5,
    mPerHour: 600,
    hikes: []
  },
  getters: {
    kmPerHour: state => state.kmPerHour,
    mPerHour: state => state.mPerHour,
    hikes: state => state.hikes
  },
  mutations: {
    ON_KM_PER_HOUR_CHANGED_MUTATION: function (state, newKmPerHour) {
      state.kmPerHour = newKmPerHour
    },
    ON_M_PER_HOUR_CHANGED_MUTATION: function (state, newMPerHour) {
      state.mPerHour = newMPerHour
    },
    ON_HIKES_CHANGED_MUTATION: function (state, newHikes) {
      state.hikes = newHikes
    },
    ON_HIKE_ADDED_MUTATION: function (state, newHike) {
      state.hikes.push(newHike)
    },
    ON_HIKE_REMOVED_MUTATION: function (state, index) {
      state.hikes.splice(index, 1)
    }
  },
  actions: {
    setKmPerHour: function ({ commit }, kmPerHour) {
      commit('ON_KM_PER_HOUR_CHANGED_MUTATION', kmPerHour)
    },
    setMPerHour: function ({ commit }, mPerHour) {
      commit('ON_M_PER_HOUR_CHANGED_MUTATION', mPerHour)
    },
    setHikes: function ({ commit }, hikes) {
      commit('ON_HIKES_CHANGED_MUTATION', hikes)
    },
    addHike: function ({ commit }, hike) {
      commit('ON_HIKE_ADDED_MUTATION', hike)
    },
    removeHike: function ({ commit }, index) {
      commit('ON_HIKE_REMOVED_MUTATION', index)
    }
  },
  plugins: [createPersistedState()]
})
