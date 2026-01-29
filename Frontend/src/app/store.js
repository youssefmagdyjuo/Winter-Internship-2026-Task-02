import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "../features/puplic/navBar.js"; 
import approvedProductsReducer from "../features/products/approvedProducts.js"; 
import categoriesReducer from "../features/products/categories.js"; 
export const store = configureStore({
    reducer: {
        navBar: navBarReducer, 
        approvedProducts: approvedProductsReducer,
        categories:categoriesReducer
    },
});
