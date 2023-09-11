import showOneForm from './AddProductFormShow';
import showSecondForm from './showSecondForm ';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    showOneForm,
    showSecondForm
})
export default rootReducer;