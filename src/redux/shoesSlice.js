import { createSlice } from '@reduxjs/toolkit'

export const shoesSlice = createSlice({
    name: 'shoes',
    initialState: {
        selectedCategory: "All Type"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})


export const getSelectedCategory = state => state.shoes.selectedCategory;
export const { filterCategory } = shoesSlice.actions;
export default shoesSlice.reducer;