import axios from "axios";

export default {
  getDataFromAPI(context) {
    try {
      axios.get(process.env.baseURL + "countries")
        .then(response => {
          context.commit("POPULATE_DATA", response.data)
        })
        .catch(exp => {
          console.log(exp)
        })
    }
    catch (exp) {
      console.log(exp)
    }
  },
  getTodaysData(context) {
    try {
      axios.get(process.env.baseURL + "all")
        .then(response => {
          context.commit("POPULATE_TODAYS_DATA", response.data);
          context.commit("POPULATE_TODAYS_PIE_DATA", response.data)
        })
        .catch(exp => {
          console.log(exp)
        })
    }
    catch (exp) {
      console.log(exp)
    }
  },
  getHistoricalData(context) {
    try {
      axios.get(process.env.baseURL + "v2/historical/India")
        .then(response => {
          context.commit("POPULATE_TREND_CHART_DATA", response.data);
        })
        .catch(exp => {
          console.log(exp)
        })
    }
    catch (exp) {
      console.log(exp)
    }
  },
  getIndianStatesData(context) {
    try {
      axios.get(process.env.indiaAPI)
        .then(response => {
          context.commit("POPULATE_STATES_CHART_DATA", response.data);
        })
        .catch(exp => {
          console.log(exp)
        })
    }
    catch (exp) {
      console.log(exp)
    }
  },
  getIndianStatesDataPie(context) {
    try {
      axios.get(process.env.baseURL + "countries/India")
        .then(response => {
          context.commit("POPULATE_INDIA_PIE_DATA", response.data);
        })
        .catch(exp => {
          console.log(exp)
        })
    }
    catch (exp) {
      console.log(exp)
    }
  }
}