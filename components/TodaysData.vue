<template>
  <v-card>
    <v-card-title>Worldwide</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-col cols="10" sm="3" class="inner-card">
        <v-card>
          <v-card-title>{{ todaysData.cases }}</v-card-title>
          <v-card-text>Total Cases</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" sm="3" class="inner-card">
        <v-card>
          <v-card-title>{{ todaysData.deaths }}</v-card-title>
          <v-card-text>Total Deaths</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" sm="3" class="inner-card">
        <v-card>
          <v-card-title>{{ todaysData.recovered }}</v-card-title>
          <v-card-text>Total Recovered</v-card-text>
        </v-card>
      </v-col>
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
  display: inline-block !important;
}
.inner-card .v-card__title {
  color: orangered;
  font-size: 34px;
  justify-content: center;
}
.inner-card .v-card__text {
  font-size: 30px;
}
@media only screen and (max-width: 600px) {
  .inner-card {
    width: 24% !important;
    display: contents !important;
  }
}
</style>