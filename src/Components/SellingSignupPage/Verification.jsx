
import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default'
import { FormInput, FormUpload } from './form-components';
import { numberValidator, emailValidator, passwordValidator,confirmpasswordValidator } from './validators';
export const Verification = <div>
     <Field key={'mobileNumber'} id={'mobileNumber'} name={'mobileNumber'} label={'Mobile Number'} component={FormInput} validator={numberValidator} />
    <Field key={'email'} id={'email'} name={'email'} label={'Email'} hint={'Hint: Enter your personal email address.'} type={'email'} component={FormInput} validator={emailValidator} />
    <Field key={'password'} id={'password'} name={'password'} label={'Password'} type={'password'} component={FormInput} validator={passwordValidator} />
    <Field key={'confirmpassword'} id={'confirmpassword'} name={'confirmpassword'} label={'Confirm Password'} type={'password'} component={FormInput} validator={confirmpasswordValidator} />
    <Field key={'avatar'} id={'avatar'} name={'avatar'} label={'Face Verification'} optional={true} hint={'Hint: Upload your avatar picture'} component={FormUpload} />
  </div>;