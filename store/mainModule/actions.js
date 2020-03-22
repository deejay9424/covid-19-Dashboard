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
      axios.get(process.env.baseURL + "historical/India")
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
  }
}