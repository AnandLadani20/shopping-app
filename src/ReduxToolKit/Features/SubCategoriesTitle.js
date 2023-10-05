import { createSlice } from "@reduxjs/toolkit";

const SubCategoriesTitleSlice = createSlice({
    name:"SubCategoriesTitle",
    initialState:null,
    reducers:{
        setSubCategoriesTitlePath: (state, action) => action.payload,
    }
})
export const {setSubCategoriesTitlePath} = SubCategoriesTitleSlice.actions
export default SubCategoriesTitleSlice.reducer