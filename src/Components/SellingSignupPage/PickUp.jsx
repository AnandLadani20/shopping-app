import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default'
import { FormInput, FormUpload } from './form-components';
import { pincodeValidator ,addressValidator} from './validators';
export const PickUp = <div>
    <Field key={'profession'} id={'profession'} name={'profession'} label={'Select Profession'} component={FormUpload}  />
    <Field key={'categories'} id={'categories'} name={'categories'} label={'Select Categories'} component={FormUpload}  />
    <Field key={'pincode'} id={'pincode'} name={'pincode'} label={'Pin Code'} component={FormInput} validator={pincodeValidator} />
    <Field key={'address'} id={'address'} name={'address'} label={'Address'} component={FormInput} validator={addressValidator} />
  
  </div>;