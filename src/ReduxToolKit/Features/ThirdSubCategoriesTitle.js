import { createSlice } from "@reduxjs/toolkit";

const ThirdSubCategoriesTitleSlice = createSlice({
    name:"ThirdSubCategoriesTitle",
    initialState:null,
    reducers:{
        setThirdSubCategoriesTitlePath:(state,action) => action.payload
    }
})
export const {setThirdSubCategoriesTitlePath} = ThirdSubCategoriesTitleSlice.actions
export default ThirdSubCategoriesTitleSlice.reducer