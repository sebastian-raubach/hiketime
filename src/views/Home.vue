<template>
  <div>
    <div class="text-center py-3">
      <b-img-lazy src="./hiketime.svg" fluid class="about-header-logo" alt="HikeTime logo" />
    </div>

    <h1 class="text-center mb-3">HikeTime</h1>

    <p>This hike time estimator uses the <a href="https://en.wikipedia.org/wiki/Naismith%27s_rule">Naismith's rule</a> for its calculations. The rule is as follows:</p>
    <p class="lead">
      Allow one hour for every 5 kilometers (3 miles) forward, plus an additional hour for every 600 metres (2,000 feet) of ascent.
    </p>

    <p>To estimate the duration of your hike, please add the distance and total ascent below. You can adjust the flat walking speed and climbing speed as well to get a better estimate based on your fitness level.</p>

    <h2 class="mt-3">Parameters</h2>
    <b-row>
      <b-col cols="12" sm="6">
        <b-form-group label="Flat walking speed [km/h]" label-for="kmPerHour">
          <b-input :value="kmPerHour" @input="updateKmPerHour" id="kmPerHour" type="number" min="0" step="any" />
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="6">
        <b-form-group label="Climbing speed [m/h]" label-for="mPerHour">
          <b-input :value="mPerHour" @input="updateMPerHour" id="mPerHour" type="number" min="0" step="any" />
        </b-form-group>
      </b-col>
    </b-row>

    <h2 class="mt-3">Add route</h2>
    <b-form @submit.prevent="addHike">
      <b-row>
        <b-col cols="12" sm="4">
          <b-form-group label="Distance [km]" label-for="distance">
            <b-input v-model="distance" id="distance" type="number" min="0" step="any" ref="distance" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="4">
          <b-form-group label="Total ascent [m]" label-for="ascent">
            <b-input v-model="ascent" id="ascent" type="number" min="0" step="any" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="4">
          <b-form-group label="Name (optional)" label-for="distance">
            <b-input v-model="name" id="name" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" type="submit">Add</b-button>
    </b-form>

    <template v-if="hikes && hikes.length > 0">
      <h2 class="mt-3">Estimated hike times</h2>
      <HikeTable :distanceFactor="distanceFactor" :ascentFactor="ascentFactor" @delete-hike="deleteHike"/>
      <b-button @click="$store.dispatch('setHikes', [])">Clear</b-button>
    </template>

    <h3 class="mt-5">About HikeTime</h3>
    HikeTime was developed by <a href="http://raubach.co.uk">Sebastian Raubach</a>. If you would like to support him, you can <a href="https://github.com/sponsors/sebastian-raubach">buy him a coffee ☕</a>.
  </div>
</template>

<script>
import HikeTable from '@/components/table/HikeTable'

export default {
  data: function () {
    return {
      name: null,
      distance: null,
      ascent: null
    }
  },
  components: {
    HikeTable
  },
  computed: {
    distanceFactor: function () {
      return 60 / this.kmPerHour
    },
    ascentFactor: function () {
      return 60 / this.mPerHour
    }
  },
  methods: {
    addHike: function () {
      if (this.distance !== null && this.ascent !== null) {
        const hike = {
          name: this.name,
          distance: this.distance,
          ascent: this.ascent
        }

        this.$store.dispatch('addHike', hike)

        this.name = null
        this.distance = null
        this.ascent = null

        this.$refs.distance.focus()
      }
    },
    deleteHike: function (data) {
      this.hikes.splice(data.index, 1)
    },
    updateKmPerHour: function (e) {
      this.$store.dispatch('setKmPerHour', e)
    },
    updateMPerHour: function (e) {
      this.$store.dispatch('setMPerHour', e)
    }
  }
}
</script>

<style scoped>
.about-header-logo {
  max-height: 200px;
}
</style>
