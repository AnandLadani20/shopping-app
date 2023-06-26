
import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default'
import { FormInput, FormRadioGroup ,SignatureDraw,FormsignatureUpload} from './form-components';
import {nogst} from './data'
import { requiredValidator, gstnumberValidator,businessNameValidator ,pannumberValidator,businessTypeValidator,businessAddressValidator,drawValidator,signatureUploadValidator } from './validators';

export const BusinessDetail = <div>

        <Field key={'gstNumber'} id={'gstNumber'} name={'gstNumber'} label={'Enter GST Number'} component={FormInput} validator={gstnumberValidator} />
        <Field key={'nogst'} id={'nogst'} name={'nogst'} label={'GST'} layout={'horizontal'} component={FormRadioGroup} data={nogst} validator={requiredValidator} />
        <Field key={'businessName'} id={'businessName'} name={'businessName'} label={'Business Name'} component={FormInput} validator={businessNameValidator} />
        <Field key={'panNumber'} id={'panNumber'} name={'panNumber'} label={'PAN Number'} component={FormInput} validator={pannumberValidator} />
        <Field key={'businessType'} id={'businessType'} name={'businessType'} label={'Business Type'} component={FormInput} validator={businessTypeValidator} />
        <Field key={'businessAddress'} id={'businessAddress'} name={'businessAddress'} label={'Business Address'} component={FormInput} validator={businessAddressValidator} />
        <Field key={'signatureDraw'} id={'signatureDraw'} name={'signatureDraw'} label={'Signature Draw'} component={SignatureDraw} validator={drawValidator}/>
        <Field key={'signatureUpload'} id={'signatureUpload'} name={'signatureUpload'} label={'Signature Upload'} component={FormsignatureUpload} validator={signatureUploadValidator}/>
       



</div>;