export default {
    POPULATE_DATA(state, payload) {
        state.covid19Data = [];
        payload.forEach(item => {
            state.covid19Data.push(item);
        });
    },
    POPULATE_TODAYS_DATA(state, payload){
        state.todaysData = payload;
    }
}