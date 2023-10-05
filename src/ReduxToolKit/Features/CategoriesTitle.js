import { createSlice } from "@reduxjs/toolkit";

const CategoriesTitleSlice = createSlice({
    name: 'CategoriesTitle',
    initialState:null,
    reducers:{
        setCategoriesTitlePath: (state, action) => action.payload,
    }
})
export const { setCategoriesTitlePath } = CategoriesTitleSlice.actions;
export default CategoriesTitleSlice.reducer;