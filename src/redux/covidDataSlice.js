import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCovidData = createAsyncThunk("covidData/fetchCovidData", async () => {
//         const response = await fetch("https://covid19.mathdro.id/api/confirmed");
//         console.log('response', response);
//         return response;
//     });

export const covidDataSlice = createSlice({
    name: "covidData",
    initialState: {
        covidData:"",
        countryNames:"",
    },
    reducers: {
        setCountryNames: (state, action) => {
            state.countryNames = action.payload;           
        }
    },
    extraReducers: {
    },
});

export const { setCountryNames} = covidDataSlice.actions;
export default covidDataSlice.reducer;