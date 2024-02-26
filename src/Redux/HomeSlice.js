import { createSlice } from "@reduxjs/toolkit";

// ()
export const HomeSlice = createSlice({
    name:"counter",
    initialState: {
        // for saving url of images and genres details
        url: {},
        genres: {},

    },
    reducers:  {
        // state is intialState and action the action we will pass
         getApiConfiguration: (state,action) =>{
            // we accessed the state(intialState) url and send it's payload(data)
        //  state.url = action.payload;
        // state.url = JSON.parse(action.payload);

    },
    getGenres: (state,action) =>{
        // state.genres = action.payload;

    }
    }
})

// You have to export actions of reducer{reducerName}
export const {getApiConfiguration, getGenres } = HomeSlice.actions
// You have to export reducer
export default HomeSlice.reducer