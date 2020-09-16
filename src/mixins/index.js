import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'kmPerHour',
      'mPerHour',
      'hikes'
    ])
  }
}
