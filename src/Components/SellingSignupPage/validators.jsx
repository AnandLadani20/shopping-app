import { getter } from '@progress/kendo-react-common';
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const ccardRegex = new RegExp(/^[0-9-]+$/);
const cvcRegex = new RegExp(/^[0-9]+$/);
const gstRegex = new RegExp(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);
const panRegex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
const accountNumberRegex = new RegExp(/^[0-9]{9,18}$/);
const ifscCodeRegex = new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/);
export const termsValidator = value => value ? "" : "It's required to agree with Terms and Conditions.";
export const emailValidator = value => !value ? "Email field is required." : emailRegex.test(value) ? "" : "Email is not in a valid format.";
export const signatureUploadValidator = value => !value ? "Signature upload is required" : "";
export const CheckUploadValidator = value => !value ? "Check upload is required" : "";
export const gstnumberValidator = value => !value ? "GST number is required." : gstRegex.test(value) ? "" : "GST number is not valid format.";
export const pannumberValidator = value => !value ? "PAN number is required." : panRegex.test(value) ? "" : "PAN number is not valid format.";
export const accountHolderNumberValidator = value => !value ? "Account number is required." : accountNumberRegex.test(value) ? "" : "Account number is not valid format.";
export const ifscCodeValidator = value => !value ? "IFSC code is required." : ifscCodeRegex.test(value) ? "" : "IFSC code is not valid format.";
export const nameValidator = value => !value ? "Full Name is required" : value.length < 7 ? "Full Name should be at least 7 characters long." : "";
export const BankNameValidator = value => !value ? "Bank Name is required" : "";
export const BranchNameValidator = value => !value ? "Branch Name is required" : "";
export const BankCityValidator = value => !value ? "Bank City is required" : "";
export const BankStateValidator = value => !value ? "Bank State is required" : "";
export const drawValidator = value => !value ? "Signature required" :"";
export const userNameValidator = value => !value ? "User Name is required" : value.length < 5 ? "User name should be at least 5 characters long." : "";
export const accountHolderNameValidator = value => !value ? "Account holder name is required" : value.length <2 ? "Account holder name should be at least 2 characters long." : "";
export const businessNameValidator = value => !value ? "Business Name is required" : value.length <3 ? "Business Name should be at least 3 characters long." : ""; 
export const businessTypeValidator = value => !value ? "Business Type is required" : value.length <3 ? "Business Type should be at least 3 characters long." : ""; 
export const businessAddressValidator = value => !value ? "Business Address is required" : value.length <5 ? "Business Address should be at least 5 characters long." : ""; 
export const numberValidator = value =>!value ? "Mobile Number is required":value.length <10 ? "Mobile number shoulde be at least 10 letters":"";
export const phoneValidator = value => !value ? "Phone number is required." : phoneRegex.test(value) ? "" : "Not a valid phone number.";
export const cardValidator = value => !value ? "Credit card number is required. " : ccardRegex.test(value) ? "" : "Not a valid credit card number format.";
export const cvcValidator = value => !value ? "CVC code is required," : cvcRegex.test(value) || value.length !== 3 ? "" : "Not a valid CVC code format.";
export const guestsValidator = value => !value ? "Number of guests is required" : value < 5 ? "" : "Maximum 5 guests";
export const pincodeValidator = value => !value ? "Pin Code is required" : value.length !== 6 ? "Pin code should be at least 6 characters":"";
export const nightsValidator = value => value ? "" : "Number of Nights is required.";
export const arrivalDateValidator = value => value ? "" : "Arrival Date is required.";
export const colorValidator = value => value ? "" : "Color is required.";
export const requiredValidator = value => value ? "" : "Error: This field is required.";
export const passwordValidator = value => value && value.length > 8 ? '' : 'Password must be at least 8 symbols.';
export const confirmpasswordValidator = value => value === value && value.length > 8 ? '' : 'Confirm Password should be match with password';

export const addressValidator = value => value ? "" : "Address is required.";
const userNameGetter = getter('username');
const emailGetter = getter('email');
export const formValidator = values => {
  const userName = userNameGetter(values);
  const emailValue = emailGetter(values);
  if (userName && emailValue && emailRegex.test(emailValue)) {
    return {};
  }
  return {
    VALIDATION_SUMMARY: 'Please fill in the following fields.',
    ['username']: !userName ? 'User Name is required.' : '',
    ['email']: emailValue && emailRegex.test(emailValue) ? '' : 'Email is required and should be in a valid format.'
  };
};