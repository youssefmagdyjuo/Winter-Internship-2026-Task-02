import { createSlice } from "@reduxjs/toolkit";

export const approvedProductsSlice = createSlice({
    name: 'approvedProducts',
    initialState: [],
    reducers: {
        getApprovedProducts: (state, action) => {
            return action.payload;
        }
    }
});

// Export actions
export const { getApprovedProducts } = approvedProductsSlice.actions;

// Export reducer
export default approvedProductsSlice.reducer;
