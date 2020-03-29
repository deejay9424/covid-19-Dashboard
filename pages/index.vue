<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex col xs>
        <TodaysChart
          :pieChartData="pieChartData"
          v-if="pieChartData.option.responsive"
          :header="worldWideChartHeader"
        ></TodaysChart>
      </v-flex>

      <v-flex col xs>
        <TodaysChart
          :pieChartData="getIndiaChartData"
          v-if="getIndiaChartData.option.responsive"
          :header="indiaChartHeader"
        ></TodaysChart>
      </v-flex>

      <v-flex col xs>
        <TrendChart :trendChartData="trendChartData" v-if="trendChartData.labels.length > 0"></TrendChart>
      </v-flex>

      <v-flex class="map-chart">
        <IndiaMap :data="getGeoChartData.cases"
         :divID="'1'"
         :chartColor="['#2d4275']"
         :cardTitle="'Cases'">
        </IndiaMap>
      </v-flex>

      <v-flex class="map-chart">
        <IndiaMap :data="getGeoChartData.deaths"
         :divID="'2'"
         :chartColor="['red']"
         :cardTitle="'Deaths'">
        </IndiaMap>
      </v-flex>

      <v-flex class="map-chart">
        <IndiaMap :data="getGeoChartData.recovered"
         :divID="'3'"
         :chartColor="['green']"
         :cardTitle="'Recovered'"
        ></IndiaMap>
      </v-flex>

      <v-flex>
        <v-card>
          <v-card-title>
            Countries
            <v-spacer></v-spacer>
            <v-text-field
              v-model="searchText"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-divider></v-divider>
          <Table :headers="headers" :data="arrayData" :searchText="searchText"></Table>
        </v-card>
      </v-flex>
    </v-layout>
    <v-footer :fixed="true" app>
      <span>Developer Contact : Dhruv Jain</span>
    </v-footer>
  </v-container>
</template>

<script>
import Table from "~/components/Table.vue";
import TodaysData from "~/components/TodaysData.vue";
import TodaysChart from "~/components/TodaysChart.vue";
import TrendChart from "~/components/TrendChart.vue";
import IndiaMap from "~/components/IndiaMap.vue";

export default {
  data: () => ({
    searchText: "",
    headers: [
      { text: "Country", value: "country", sortable: true },
      { text: "Cases", value: "cases", sortable: true },
      { text: "Cases Today", value: "todayCases", sortable: true },
      { text: "Deaths Today", value: "todayDeaths", sortable: true },
      { text: "Total Deaths", value: "deaths", sortable: true },
      { text: "Total Recovered", value: "recovered", sortable: true },
      { text: "Active Cases", value: "active", sortable: true },
      { text: "Critical Cases", value: "critical", sortable: true },
      { text: "Cases/Million", value: "casesPerOneMillion", sortable: true }
    ],
    worldWideChartHeader: "Worldwide",
    indiaChartHeader: "India"
  }),
  components: {
    Table,
    TodaysData,
    TodaysChart,
    TrendChart,
    IndiaMap
  },
  computed: {
    arrayData() {
      return this.$store.getters.getArrayData;
    },
    todaysData() {
      return this.$store.getters.getTodaysData;
    },
    pieChartData() {
      return this.$store.getters.getPieData;
    },
    trendChartData() {
      return this.$store.getters.getTrendChartData;
    },
    getIndiaChartData() {
      return this.$store.getters.getIndiaChartData;
    },
    getGeoChartData() {
      // console.log(this.$store.getters.getGeoChartData)
      return this.$store.getters.getGeoChartData;
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$store.dispatch("getDataFromAPI");
      this.$store.dispatch("getTodaysData");
      this.$store.dispatch("getHistoricalData");
      this.$store.dispatch("getIndianStatesData");
      this.$store.dispatch("getIndianStatesDataPie");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.todays-data {
  min-width: 100%;
}

.map-chart {
  width: 33.33%;
  height: 350px;
}

@media only screen and (max-width: 600px) {
  .map-chart {
    width: 100%;
    height: 350px;
  }
}
</style>