
import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default'
import { FormInput,CheckUpload } from './form-components';
import {NoCheck} from './data'
import {  emailValidator,gstnumberValidator,CheckUploadValidator } from './validators';
export const Dashbord = <div>
    
    <Field key={'email'} id={'email'} name={'email'} label={'Email'} hint={'Hint: Enter your personal email address.'} type={'email'} component={FormInput} validator={emailValidator} />
    <Field key={'gstNumber'} id={'gstNumber'} name={'gstNumber'} label={'Enter GST Number'} component={FormInput} validator={gstnumberValidator} />
    <Field key={'Check'} id={'Check'} name={'Check'} label={'Upload Check'} component={CheckUpload} data={NoCheck}  validator={CheckUploadValidator}/>
    <p className='mt-5'>Complete Your Profile...Inspector waiting to arrive at your doorstep</p>
  </div>;