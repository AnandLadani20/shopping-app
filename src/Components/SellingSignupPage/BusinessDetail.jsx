
import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default'
import { FormInput, FormRadioGroup ,SignatureDraw,FormsignatureUpload,CheckUpload} from './form-components';
import {nogst,NoCheck} from './data'
import { requiredValidator, gstnumberValidator,businessNameValidator ,pannumberValidator,businessTypeValidator,businessAddressValidator,drawValidator,signatureUploadValidator,accountHolderNameValidator,accountHolderNumberValidator,ifscCodeValidator,BankNameValidator,BranchNameValidator,BankCityValidator,BankStateValidator,CheckUploadValidator } from './validators';

export const BusinessDetail = <div>

        <Field key={'gstNumber'} id={'gstNumber'} name={'gstNumber'} label={'Enter GST Number'} component={FormInput} validator={gstnumberValidator} />
        <Field key={'nogst'} id={'nogst'} name={'nogst'} label={'GST'} layout={'horizontal'} component={FormRadioGroup} data={nogst} validator={requiredValidator} />
        <Field key={'businessName'} id={'businessName'} name={'businessName'} label={'Business Name'} component={FormInput} validator={businessNameValidator} />
        <Field key={'panNumber'} id={'panNumber'} name={'panNumber'} label={'PAN Number'} component={FormInput} validator={pannumberValidator} />
        <Field key={'businessType'} id={'businessType'} name={'businessType'} label={'Business Type'} component={FormInput} validator={businessTypeValidator} />
        <Field key={'businessAddress'} id={'businessAddress'} name={'businessAddress'} label={'Business Address'} component={FormInput} validator={businessAddressValidator} />
        <Field key={'signatureDraw'} id={'signatureDraw'} name={'signatureDraw'} label={'Signature Draw'} component={SignatureDraw} validator={drawValidator}/>
        <Field key={'signatureUpload'} id={'signatureUpload'} name={'signatureUpload'} label={'Signature Upload'} component={FormsignatureUpload} validator={signatureUploadValidator}/>
        <Field key={'accountHolderName'} id={'accountHolderName'} name={'accountHolderName'} label={'Account Holder Name'} component={FormInput} validator={accountHolderNameValidator} />
        <Field key={'accountHolderNumber'} id={'accountHolderNumber'} name={'accountHolderNumber'} label={'Account Holder Number'} component={FormInput} validator={accountHolderNumberValidator} />
        <Field key={'IFSCcode'} id={'IFSCcode'} name={'IFSCcode'} label={'IFSC Code'} component={FormInput} validator={ifscCodeValidator} />
        <Field key={'BankName'} id={'BankName'} name={'BankName'} label={'Bank Name'} component={FormInput} validator={BankNameValidator} />
        <Field key={'BranchName'} id={'BranchName'} name={'BranchName'} label={'Branch Name'} component={FormInput} validator={BranchNameValidator} />
        <Field key={'BankCity'} id={'BankCity'} name={'BankCity'} label={'City'} component={FormInput} validator={BankCityValidator} />
        <Field key={'BankState'} id={'BankState'} name={'BankState'} label={'State'} component={FormInput} validator={BankStateValidator} />
        <Field key={'NoCheck'} id={'NoCheck'} name={'NoCheck'} label={'Cancel Check'} layout={'horizontal'} component={FormRadioGroup} data={NoCheck}  />
        <Field key={'Check'} id={'Check'} name={'Check'} label={'Upload Check'} component={CheckUpload} data={NoCheck}  validator={CheckUploadValidator}/>
       



</div>;