      <template>
  <v-card>
    <v-card-title>Last 7 days in India</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="card-img-bottom">
        <chartjs-line
          ref="chart"
          :backgroundcolor="bgColor"
          :beginzero="beginZero"
          :bordercolor="borderColor"
          :datasets="trendChartData.datasets"
          :labels="trendChartData.labels"
          :bind="true"
          :option="trendChartData.option"
        />
      </div>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      bgColor: "#81894e",
      beginZero: true,
      borderColor: "#81894e"
    };
  },
  props: {
    trendChartData: { type: Object, required: true }
  }
};
</script>