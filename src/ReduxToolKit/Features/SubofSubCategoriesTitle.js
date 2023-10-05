import { createSlice } from "@reduxjs/toolkit";

const SubofSubCategoriesTitleSlice = createSlice({
    name:"SubofSubCategoriesTitle",
    initialState:null,
    reducers:{
        setSubofSubCategoriesTitlePath:(state,action) => action.payload
    }
})
export const {setSubofSubCategoriesTitlePath} = SubofSubCategoriesTitleSlice.actions
export default SubofSubCategoriesTitleSlice.reducer