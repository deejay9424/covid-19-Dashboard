<template>
  <v-card>
    <v-card-title>{{cardTitle}}</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div :id="divID"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import { GoogleCharts } from "google-charts";
export default {
  props: {
    data: { type: Array, required: true },
    divID: { type: String, required: true },
    chartColor: { type: Array, required: true },
    cardTitle: { type: String, required: true }
  },
  computed: {},
  methods: {
    initialize() {
      GoogleCharts.load(this.drawGeoChart, {
        packages: ["geochart"],
        mapsApiKey: "AIzaSyBH0F1X_gHEIgbYyQ4vPdnRobpSgPIcV60"
      });
    },
    drawGeoChart() {
      /* Geo Chart */
      const geo_1_data = GoogleCharts.api.visualization.arrayToDataTable(
        this.data
      );
      const geo_1_options = {
        region: "IN",
        resolution: "provinces",
        is3D: false,
        legend: {
          numberFormat: "###,###"
        },
        width: "100%",
        height: 250,
        colors: this.chartColor
      };
      const geo_1_chart = new GoogleCharts.api.visualization.GeoChart(
        document.getElementById(this.divID)
      );
      geo_1_chart.draw(geo_1_data, geo_1_options);
    }
  },
  mounted() {
    this.initialize();
  }
};
</script>