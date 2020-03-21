export default ({
    apiResponse: {
        country: "",
        cases: 0,
        todayCases: 0,
        deaths: 0,
        todayDeaths: 0,
        recovered: 0,
        active: 0,
        critical: 0,
        casesPerOneMillion: 0
    },
    covid19Data: [],
    todaysData: {
        cases:0,
        deaths:0,
        recovered:0,
        updated:0
    },
    fnThousandSeperator(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
})