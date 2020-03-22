export default {
    POPULATE_DATA(state, payload) {
        state.covid19Data = [];
        payload.forEach(item => {
            state.covid19Data.push(item);
        });
    },
    POPULATE_TODAYS_DATA(state, payload) {
        state.todaysData = payload;
    },
    POPULATE_TODAYS_PIE_DATA(state, payload) {
        //Data
        state.worldWidePieData.datasets[0].data.push(payload.cases);
        state.worldWidePieData.datasets[0].data.push(payload.deaths);
        state.worldWidePieData.datasets[0].data.push(payload.recovered);
        //Colors
        state.worldWidePieData.datasets[0].backgroundColor.push("blue");
        state.worldWidePieData.datasets[0].backgroundColor.push("red");
        state.worldWidePieData.datasets[0].backgroundColor.push("green");
        //Labels
        state.worldWidePieData.labels.push("Cases");
        state.worldWidePieData.labels.push("Deaths");
        state.worldWidePieData.labels.push("Recovered");
        //Options
        state.worldWidePieData.option = {
            legend: { position: 'bottom' }
        }
    },
    POPULATE_TREND_CHART_DATA(state, payload) {
        state.trendChartData.labels = [];
        state.trendChartData.datasets = [];
        
        state.trendChartData.labels = Object.keys(payload.timeline.cases);

        state.trendChartData.datasets.push({
            data: Object.values(payload.timeline.cases),
            label: "Cases",
            borderColor: "blue",
            backgroundColor: "transparent"
        });
        state.trendChartData.datasets.push({
            data: Object.values(payload.timeline.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "transparent"
        });
        state.trendChartData.datasets.push({
            data: Object.values(payload.timeline.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "transparent"
        });
    }
}