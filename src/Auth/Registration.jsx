import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',firstName: '',
  lastName: '',
  email: '',
};

const Registration = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            
            fieldSize="field-large"
            value={values.firstName}
            onChange={handleChange}
          
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
          
          />
          <FormInput
            label="Email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
           
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
      
    </Formik>
    
  );
};

export default Registration;
