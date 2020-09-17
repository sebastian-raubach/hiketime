<template>
  <b-table striped
           hover
           :items="hikes"
           :fields="columns">
    <template v-slot:cell(distance)="data">
      {{ data.item.distance !== null ? `${data.item.distance.toLocaleString()} km` : null }}
    </template>
    <template v-slot:cell(ascent)="data">
      {{ data.item.ascent !== null ? `${data.item.ascent.toLocaleString()} m` : null }}
    </template>
    <template v-slot:cell(time)="data">
      {{ getTime(data.item) }}
    </template>
    <template v-slot:cell(delete)="data">
      <b-button variant="outline-danger" size="sm" @click="$store.dispatch('removeHike', data.index)">Delete</b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    ascentFactor: {
      type: Number,
      default: 0.2
    },
    distanceFactor: {
      type: Number,
      default: 12
    }
  },
  data: function () {
    return {
      columns: ['name', 'distance', 'ascent', 'time', {
        key: 'delete',
        label: '',
        class: 'text-right'
      }]
    }
  },
  methods: {
    getTime: function (hike) {
      let time = hike.distance * this.distanceFactor
      time = time + hike.ascent * this.ascentFactor

      const minutes = Math.floor(time % 60)
      const hours = Math.floor((time - minutes) / 60)

      return `${hours < 10 ? ('0' + hours) : hours}:${minutes < 10 ? ('0' + minutes) : minutes}`
    }
  }
}
</script>

<style>

</style>
