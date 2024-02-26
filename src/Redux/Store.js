import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import SearchSlice from "./SearchSlice";


//  ()
export const store = configureStore ({
    // Change it later 
    reducer:{
        home: HomeSlice
    },
   
})