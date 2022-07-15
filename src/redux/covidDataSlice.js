import { createSlice } from "@reduxjs/toolkit"

export const covidDataSlice = createSlice({
    name: "covidData",
    initialState: {
        covidData: {},
    },
    reducers: {},
});

export default covidDataSlice.reducer;