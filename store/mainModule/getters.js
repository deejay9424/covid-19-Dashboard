export default {
    getApiData(state) {
        return state.apiResponse;
    },
    getArrayData(state) {
        return state.covid19Data;
    },
    getTodaysData(state) {
        state.todaysData.cases = state.fnThousandSeperator(state.todaysData.cases)
        state.todaysData.deaths = state.fnThousandSeperator(state.todaysData.deaths)
        state.todaysData.recovered = state.fnThousandSeperator(state.todaysData.recovered)
        state.todaysData.updated = state.fnThousandSeperator(state.todaysData.updated)
        return state.todaysData;
    },
    getPieData(state){
        return state.worldWidePieData;
    },
    getTrendChartData(state){
        return state.trendChartData;
    },
    getStatesChartData(state){
        return state.indiaData;
    }
}