import { configureStore} from "@reduxjs/toolkit";
import covidDataReducer from "./covidDataSlice";

export const store = configureStore({
    reducer: {
        covidData: covidDataReducer,
    }
})