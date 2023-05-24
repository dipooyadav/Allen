import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';

 
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  selectvalue: Yup.string().required('selectvalue name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});
 
const initialValues = {
  firstName: '',
  selectvalue: '',
  email: '',
};

const mystyle = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: "8px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      padding: "30px 30px  30px  30px",
      width: "100%",
    },
    input: {
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '10px 24px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      marginTop: '20px',
      cursor: 'pointer',
    },
  };

const Contaxt = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const genderOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, handleChange, isSubmitting }) => (
        <Form style={mystyle.container}>
          <FormInput
          style={mystyle.input}
            label="First Name"
            name="firstName"
            type="text"
            variant="outlined"
            fieldSize="field-large"
            value={values.firstName}
            onChange={handleChange}
           
          />
          <FormInput
           fullWidth
            name="selectvalue"
            
            id="outlined-select-currency"
            type="select"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            style={mystyle.input}
            options={genderOptions}
         
          />
          <FormInput
            label="Email"
            name="email"
          
        
            value={values.email}
            variant="outlined"
            onChange={handleChange}
            style={mystyle.input}
           
          />
         
          <button
          style={mystyle.button}
           type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Contaxt;







///New code 

// import React from 'react';
// import { Formik, Form } from 'formik';
// import FormInput from './FormInput';

// const initialValues = {
//   name: '',
//   email: '',
//   gender: '',
//   fruit: '',
// };

// const genders = [
//   { value: 'male', label: 'Male' },
//   { value: 'female', label: 'Female' },
//   { value: 'other', label: 'Other' },
// ];

// const fruits = [
//   { value: 'apple', label: 'Apple' },
//   { value: 'banana', label: 'Banana' },
//   { value: 'orange', label: 'Orange' },
// ];

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'Name is required';
//   }

//   if (!values.email) {
//     errors.email = 'Email is required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!values.gender) {
//     errors.gender = 'Gender is required';
//   }

//   if (!values.fruit) {
//     errors.fruit = 'Fruit is required';
//   }

//   return errors;
// };

// const Contaxt = () => {
//   return (
//     <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)} validate={validate}>
//       {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
//         <Form>
//           <FormInput label="Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} error={touched.name && errors.name} helperText={touched.name && errors.name} />
//           <FormInput label="Email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} error={touched.email && errors.email} helperText={touched.email && errors.email} />
//           <FormInput label="Gender" name="gender" type="select" options={genders} value={values.gender} onChange={handleChange} onBlur={handleBlur} error={touched.gender && errors.gender} helperText={touched.gender && errors.gender} />
//           <FormInput label="Fruit" name="fruit" type="select" options={fruits} value={values.fruit} onChange={handleChange} onBlur={handleBlur} error={touched.fruit && errors.fruit} helperText={touched.fruit && errors.fruit} />
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Contaxt;
