// const initialValue = false;

// const showOneForm = (state = initialValue, action) =>{
//     switch(action.type){
//         case "FirstProduct": return state(true)
//         case "SecondProduct": return state(true)
//         default: return state;
//     }
// }
// export default showOneForm;

// showOneForm.js

const initialValue = false;

const showOneForm = (state = initialValue, action) => {
    switch (action.type) {
        case "FirstProduct":
        case "SecondProduct":
            return true; // Set to true for both actions
        default:
            return state;
    }
};

export default showOneForm;
