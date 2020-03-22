<template>
  <v-card>
    <v-card-title>Worldwide</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="card-img-bottom">
        <chartjs-doughnut :bind="true"
             :datasets="pieChartData.datasets"
             :labels="pieChartData.labels"
             :option="pieChartData.option" />
      </div>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  props: {
    pieChartData: { type: Object, required: false }
  },
  methods: {}
};
</script>