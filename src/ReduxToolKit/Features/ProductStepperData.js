import { createSlice } from "@reduxjs/toolkit";

const ProductStepperSlice = createSlice({
    name: 'ProductStepper',
    initialState:null,
    reducers:{
        setProductStepperData: (state, action) => action.payload,
    }
})
export const { setProductStepperData } = ProductStepperSlice.actions;
export default ProductStepperSlice.reducer;