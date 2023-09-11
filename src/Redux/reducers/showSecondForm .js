// showSecondForm.js

const initialValue = false;

const showSecondForm = (state = initialValue, action) => {
    switch (action.type) {
        case "FirstProduct":
        case "SecondProduct":
            return true; // Set to true for both actions
        default:
            return state;
    }
};

export default showSecondForm;
