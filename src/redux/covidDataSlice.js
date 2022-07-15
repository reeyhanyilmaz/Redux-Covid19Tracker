import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCovidData = createAsyncThunk("covidData/fetchCovidData", async (countryNames) => {
    if(countryNames === "") { //global data gelecek
        const { data} = await axios("https://covid19.mathdro.id/api")
        return data;
    }else{
        const { data } = await axios(`https://covid19.mathdro.id/api/countries/${countryNames}`);
        return  data ;
    }
    });


export const fetchDataDaily = createAsyncThunk("covidData/fetchDataDaily", async () => {
    const { data} = await axios("https://covid19.mathdro.id/api/daily");
    console.log('data :>> ', data);
    return data;
})

export const covidDataSlice = createSlice({
    name: "covidData",
    initialState: {
        covidData:"",
        countryNames:"",
        dailyData:""
    },
    reducers: {
        setCountryNames: (state, action) => {
            state.countryNames = action.payload;    
        }
    },
    extraReducers: {
        [fetchCovidData.fulfilled]: (state, action) => {
            state.covidData = action.payload;
        },
        [fetchDataDaily.fulfilled] : (state, action) => {
            state.dailyData = action.payload;
        }
    },
});

export const { setCountryNames} = covidDataSlice.actions;
export default covidDataSlice.reducer;