import React from 'react';

import './App.css';
import { Formik, Form } from 'formik';
import { FormikInput } from './shared/formikAdapters';
import { UserFormSchema } from './utils/validation-schemas';

interface UserFormsValues {
  firstname: string;
  lastname: string;
  email: string;
}

const defaultValues: UserFormsValues = {
  firstname: '',
  lastname: '',
  email: ''
};

function App() {
  return (
    <div className='App'>
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
          <FormikInput name='email' label='Email' />
          <button>Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
