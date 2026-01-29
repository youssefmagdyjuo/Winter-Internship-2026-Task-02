import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        getCategories: (state, action) => {
            return action.payload;
        }
    }
});

// Export actions
export const { getCategories } = categoriesSlice.actions;

// Export reducer
export default categoriesSlice.reducer;
