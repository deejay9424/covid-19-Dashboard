<template>
  <v-card>
    <v-card-title>Worldwide Data</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-card class="inner-card">
        <v-card-title>Total Cases</v-card-title>
        <v-card-text>{{ todaysData.cases }}</v-card-text>
      </v-card>

      <v-card class="inner-card">
        <v-card-title>Total Deaths</v-card-title>
        <v-card-text>{{ todaysData.deaths }}</v-card-text>
      </v-card>

      <v-card class="inner-card">
        <v-card-title>Total Recovered</v-card-title>
        <v-card-text>{{ todaysData.recovered }}</v-card-text>
      </v-card>

      <v-card class="inner-card">
        <v-card-title>Total Updated</v-card-title>
        <v-card-text>{{ todaysData.updated }}</v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  props: {
    todaysData: { type: Object, required: false }
  },
  computed: {},
  methods: {}
};
</script>

<style>
.inner-card {
  width: 24% !important;
  display: inline-block !important;
}
.inner-card .v-card__title {
    color: orangered;
}
.inner-card .v-card__text{
    font-size: 34px;
}
@media only screen and (max-width: 600px) {
  .inner-card {
    width: 24% !important;
    display: contents !important;
  }
}
</style>