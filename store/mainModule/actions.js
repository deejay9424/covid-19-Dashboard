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
          context.commit("POPULATE_TODAYS_DATA", response.data)
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