import React from 'react';
import { Formik, Form } from 'formik';
import { FormikInput, FormikRadio, FormikCheckbox, FormikSelect } from '../shared/formikAdapters';
import { UserFormSchema } from '../utils/validation-schemas';
import { Button, Col, Row } from 'react-bootstrap';

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
        <Col md={{ span: 4, offset: 4 }}>
          <Form>
            <Row>
              <Col>
                <FormikInput name='firstname' label='First Name' />
              </Col>
              <Col>
                <FormikInput name='lastname' label='Last Name' />
              </Col>
            </Row>
            <FormikInput name='username' label='Username' />
            <FormikInput name='address1' label='Address1' />
            <FormikInput name='address2' label='Address2' />
            <FormikInput name='email' label='Email' />
            <Row>
              <Col>
                <FormikSelect name='country' label='Country' />
              </Col>
              <Col>
                <FormikInput name='state' label='State' />
              </Col>
              <Col>
                <FormikInput name='zip' label='Zip' />
              </Col>
            </Row>
            <hr />
            <FormikCheckbox name='sameAddress' label='Shipping address is the same as my billing address' />
            <FormikCheckbox name='save' label='Save this information for next time' />
            <hr />
            <h5>Payment</h5>
            <FormikRadio name='payment' value='1' label='Credit Card' />
            <FormikRadio name='payment' value='2' label='Debit Card' />
            <FormikRadio name='payment' value='3' label='PayPal' />
            <hr />
            <Button variant='primary' type='submit' size='lg' block>
              Send
            </Button>
          </Form>
        </Col>
      </Formik>
    </div>
  );
}

export default BillingForm;
