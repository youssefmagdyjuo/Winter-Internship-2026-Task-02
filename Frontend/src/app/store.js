import { configureStore } from "@reduxjs/toolkit";
import { navBarSlice } from "../features/puplic/navBar.js";
export const store = configureStore({
    reducer: {
        // Add your reducers here
        navBar: navBarSlice.reducer,
    },
    
});