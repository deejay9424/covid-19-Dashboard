      <template>
  <v-card>
    <v-card-title>Trend in India</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="card-img-bottom">
        <chartjs-line
          :backgroundcolor="bgColor"
          :beginzero="beginZero"
          :bind="true"
          :bordercolor="borderColor"
          :datasets="trendChartData.datasets"
          :labels="trendChartData.labels"
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
      beginZero: false,
      borderColor:"#81894e"
    };
  },
  props: {
    trendChartData: { type: Object, required: false }
  },
  methods: {}
};
</script>