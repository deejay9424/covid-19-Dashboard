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
        state.worldWidePieData.datasets[0].backgroundColor.push("#2d4275");
        state.worldWidePieData.datasets[0].backgroundColor.push("red");
        state.worldWidePieData.datasets[0].backgroundColor.push("green");
        //Labels
        state.worldWidePieData.labels.push("Cases");
        state.worldWidePieData.labels.push("Deaths");
        state.worldWidePieData.labels.push("Recovered");
        //Options
        state.worldWidePieData.option = {
            backgroundColor: 'pink',
            legend: {
                display: true,
                position: 'left'
            },
            maintainAspectRatio: false,
            responsive: true
        }
    },
    POPULATE_TREND_CHART_DATA(state, payload) {
        state.trendChartData.labels = [];
        state.trendChartData.datasets = [];
        let _cases = {};
        let _deaths = {};
        let _recovered = {};

        let _labels = Object.keys(payload.timeline.cases).filter(x => new Date(x) >= (new Date().setDate(new Date(Object.keys(payload.timeline.cases)[0]).getDate() - 7)));
        _labels.forEach(e => {
            _cases[e] = payload.timeline.cases[e];
            // _deaths[e] = payload.timeline.deaths[e];
            // _recovered[e] = payload.timeline.recovered[e];
        });

        //Filter Last 7 days data only
        state.trendChartData.labels = _labels;

        state.trendChartData.datasets.push({
            data: Object.values(_cases),
            label: "Cases",
            borderColor: "#2d4275",
            backgroundColor: "transparent"
        });
        state.trendChartData.option = {
            maintainAspectRatio: false,
            responsive: true
        }
        // state.trendChartData.datasets.push({
        //     data: Object.values(_deaths),
        //     label: "Deaths",
        //     borderColor: "red",
        //     backgroundColor: "transparent"
        // });
        // state.trendChartData.datasets.push({
        //     data: Object.values(_recovered),
        //     label: "Recovered",
        //     borderColor: "green",
        //     backgroundColor: "transparent"
        // });
    },
    POPULATE_STATES_CHART_DATA(state, payload) {
        if (payload.success) {
            state.indiaData.summary = payload.data.summary;
            state.indiaData.regional = payload.data.regional;
        }
    }
}