<template>
  <div>
    <v-data-table
      data-app
      :headers="headers"
      :items="data"
      :items-per-page="10"
      :search="searchText"
      class="elevation-1"
      multi-sort
      loading
      loading-text="Loading... Please wait"
    >
      <template v-slot:item.critical="{ item }">
        <v-chip :class="getColorCritical(item.critical)">{{ item.critical }}</v-chip>
      </template>
      <template v-slot:item.deaths="{ item }">
        <v-chip :class="getColorDeaths(item.deaths)">{{ item.deaths }}</v-chip>
      </template>
      <template v-slot:item.todayDeaths="{ item }">
        <v-chip :class="getColorCritical(item.todayDeaths)">{{ item.todayDeaths }}</v-chip>
      </template>
      <template v-slot:item.recovered="{ item }">
        <v-chip :class="getColorRecovered(item.recovered)">{{ item.recovered }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Array, required: true },
    headers: { type: Array, required: true },
    searchText: { type: String, required: false }
  },
  computed: {},
  methods: {
    getColorRecovered(count) {
      if (count > 500) return "color-green";
      else return "color-transparent";
    },
    getColorCritical(count) {
      if (count > 100) return "color-red";
      else return "color-transparent";
    },
    getColorDeaths(count) {
      if (count > 500) return "color-red";
      else return "color-transparent";
    }
  }
};
</script>

<style>
.color-transparent {
  background-color: transparent !important;
}
.color-green {
  background-color: green !important;
  color: white !important;
}
.color-red {
  background-color: red !important;
  color: white !important;
}
</style>