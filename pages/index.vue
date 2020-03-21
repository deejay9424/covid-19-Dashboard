<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex class="todays-data">
        <TodaysData :todaysData="todaysData"></TodaysData>
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
    ]
  }),
  components: {
    Table,
    TodaysData
  },
  computed: {
    arrayData() {
      return this.$store.getters.getArrayData;
    },
    todaysData() {
      return this.$store.getters.getTodaysData;
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$store.dispatch("getDataFromAPI");
      this.$store.dispatch("getTodaysData");
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
</style>
