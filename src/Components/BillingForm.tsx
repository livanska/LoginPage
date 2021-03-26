import React from 'react';
import { Formik, Form } from 'formik';
import { FormikInput, FormikRadio, FormikCheckbox, FormikSelect } from '../shared/formikAdapters';
import { UserFormSchema } from '../utils/validation-schemas';

interface UserFormsValues {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  address1: string;
  address2: string;
  country: string;
  payment: string;
  state: string;
  zip: string;
  sameAddress: boolean;
  save: boolean;
}

const defaultValues: UserFormsValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  address1: '',
  address2: '',
  country: '',
  payment: '',
  state: '',
  zip: '',
  sameAddress: false,
  save: false
};

function BillingForm() {
  return (
    <div>
      <Formik<UserFormsValues> //optional
        initialValues={defaultValues}
        validationSchema={UserFormSchema}
        onSubmit={val => {
          console.log(val);
        }}
      >
        <Form>
          <FormikInput name='firstname' label='First Name' />
          <FormikInput name='lastname' label='Last Name' />
          <FormikInput name='username' label='Username' />
          <FormikInput name='address1' label='Address1' />
          <FormikInput name='address2' label='Address2' />
          <FormikInput name='email' label='Email' />
          <FormikSelect name='country' label='Country' />
          <FormikInput name='state' label='State' />
          <FormikInput name='zip' label='Zip' />
          <FormikCheckbox name='sameAddress' label='Shipping address is the same as my billing address' />
          <FormikCheckbox name='save' label='Save this information for next time' />
          <FormikRadio name='payment' value='1' label='Credit Card' />
          <FormikRadio name='payment' value='2' label='Debit Card' />
          <FormikRadio name='payment' value='3' label='PayPal' />
          <button>Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BillingForm;
