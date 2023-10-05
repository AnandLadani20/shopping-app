// import { createSlice } from '@reduxjs/toolkit';

// // First slice
// export const AddProductFormSlice = createSlice({
//   name: 'addProductForm',
//   initialState: false,
//   reducers: {
//     setAddProductCategories: (state, action) => action.payload,
//   },
// });

// export const { setAddProductCategories } = AddProductFormSlice.actions;

// // Second slice
// export const desertForm = createSlice({
//   name: 'desertForm',
//   initialState: false,
//   reducers: {
//     setDesertCategories: (state, action) => action.payload,
//   },
// });

// export const { setDesertCategories } = desertForm.actions;


// AddProductFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AddProductFormSlice = createSlice({
  name: 'addProductForm',
  initialState: {
    selectedCategoryId: null, // Initially no category is selected
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { setSelectedCategory } = AddProductFormSlice.actions;
export default AddProductFormSlice.reducer;

// desertFormSlice.js (similar structure as above)

