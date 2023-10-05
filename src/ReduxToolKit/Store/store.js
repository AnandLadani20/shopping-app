import { configureStore } from '@reduxjs/toolkit';
import addProductFormReducer  from '../Features/AddProductFormSlice';
import CategoriesTitleReducer from '../Features/CategoriesTitle'
import SubCategoriesTitleReducer from '../Features/SubCategoriesTitle'
import SubofSubCategoriesTitleReducer from '../Features/SubofSubCategoriesTitle'
import ThirdSubCategoriesTitleReducer from '../Features/ThirdSubCategoriesTitle'
import ProductStepperData from '../Features/ProductStepperData';

const store = configureStore({
  reducer: {
    addProductForm: addProductFormReducer,
    categoriesTitle:CategoriesTitleReducer,
    subCategoriesTitle:SubCategoriesTitleReducer,
    subofSubCategoriesTitle:SubofSubCategoriesTitleReducer,
    thirdSubCategoriesTitle:ThirdSubCategoriesTitleReducer,
    ProductStepperData:ProductStepperData
  },
});

export default store;
