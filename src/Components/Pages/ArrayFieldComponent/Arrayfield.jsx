// // import React from 'react';
// // import { Formik, Form, FieldArray } from 'formik';
// // import * as Yup from 'yup';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import AddIcon from '@mui/icons-material/Add';
// // import { Button, IconButton, TextField, Tooltip } from '@mui/material';

// // const validationSchema = Yup.object().shape({
// //   items: Yup.array().of(
// //     Yup.object().shape({
// //       amount: Yup.number().required('Amount is required'),
// //       matchAmount: Yup.number()
// //         .required('Match amount is required')
// //         .test('match-amount', 'Match amount should match the amount', function (value) {
// //           const amount = this.parent.amount;
// //           return value === amount;
// //         }),
// //     })
// //   ),
// // });

// // const initialValues = {
// //   items: [{ amount: '', matchAmount: '' }],
// // };

// // const ArrayField = () => {
// //   const addItem = (push) => {
// //     push({ amount: '', matchAmount: '' });
// //   };

// //   return (
// //     <Formik
// //       initialValues={initialValues}
// //       validationSchema={validationSchema}
// //       onSubmit={(values) => {
// //         console.log(values);
// //       }}
// //     >
// //       {({ values, errors, touched }) => (
// //         <Form style={mystyle.container}>
         
// //           <FieldArray name="items">
// //             {({ insert, remove, push }) => (
              
// //               <div style={{ display: 'flex', flexDirection: 'column' }}>
// //               <div style={{ display: 'flex', justifyContent: 'flex-left', marginBottom: '20px' }}>
// //               <Button variant="" style={mystyle.label} startIcon={<AddIcon />} onClick={() => addItem(push)}>
// //                 Add Item
// //               </Button>
// //             </div>
// //                 {values.items.map((item, index) => (
// //                   <div key={index} style={{ display: 'flex', flexDirection: 'rows', marginRight: '20px' }}>
// //                     <div>
                     
// //                       <TextField
// //                         name={`items.${index}.amount`}
// //                         type="text"
// //                         id='textfield'
// //                         style={mystyle.input}
// //                         variant="outlined"
// //                         label="amount"
// //                         error={touched.amount && !!errors.amount}
// //                         helperText={touched.amount && errors.amount}
// //                       />
// //                     </div>
// //                     <div>
                    
// //                       <TextField
// //                         name={`items.${index}.matchAmount`} 
// //                         type="text"
// //                         style={mystyle.input}
// //                         variant="outlined"
// //                         label="matchamount"
// //                         error={touched.matchAmount && !!errors.matchAmount}
// //                         helperText={touched.matchAmount && errors.matchAmount}
// //                       />
// //                     </div>
// //                     {index > 0 && (
// //                       <Tooltip title="Delete">
// //                       <IconButton aria-label="delete" onClick={() => remove(index)}>
// //                         <DeleteIcon />
// //                       </IconButton>
// //                     </Tooltip>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </FieldArray>
// //           <Button type="submit" variant="contained" style={mystyle.button}>
// //             Submit
// //           </Button>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // };

// // const mystyle = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     borderRadius: '8px',
// //     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
// //     padding: '30px 30px 30px 30px',
// //     width: '100%',
// //   },
// //   input: {
// //     marginBottom: '20px',
// //     marginLeft:'10px'
// //   },
// //   button: {
// //     marginTop: '20px',
// //   },
// //   label: {
// //     marginRight: '20px',
// //     marginLeft: '10px',
// //     marginTop: '5x',
    
// //     fontSize: '1rem',
// //   },
// //   addButton: {
// //     position: 'absolute',
// //     top: '20px',
// //     right: '20px',
// //     backgroundColor: '#1976d2',
// //     color: '#fff',
// //     '&:hover': {
// //       backgroundColor: '#1565c0',
// //     },
// //   },
// // };

// // export default ArrayField;

// import React from 'react';
// import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import { Button, IconButton, Tooltip } from '@mui/material';
// import { TextField } from '@mui/material';

// const validationSchema = Yup.object().shape({
//   items: Yup.array().of(
//     Yup.object().shape({
//       amount: Yup.number().required('Amount is required'),
//       matchAmount: Yup.number()
//         .required('Match amount is required')
//         .test('match-amount', 'Match amount should match the amount', function (value) {
//           const amount = this.parent.amount;
//           return value === amount;
//         }),
//     })
//   ),
// });

// const initialValues = {
//   items: [{ amount: '', matchAmount: '' }],
// };

// const ArrayField = () => {
//   const addItem = (push) => {
//     push({ amount: '', matchAmount: '' });
//   };

//   const handleSubmit = (values) => {
//     console.log(values.items); // Log the FieldArray data to the console
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ values, errors, touched }) => (
//         <Form style={mystyle.container}>
//           <FieldArray name="items">
//             {({ insert, remove, push }) => (
//               <div style={{ display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ display: 'flex', justifyContent: 'flex-left', marginBottom: '20px' }}>
//                   <Button variant="" style={mystyle.label} startIcon={<AddIcon />} onClick={() => addItem(push)}>
//                     Add Item
//                   </Button>
//                 </div>
//                 {values.items.map((item, index) => (
//                   <div key={index} style={{ display: 'flex', flexDirection: 'rows', marginRight: '20px' }}>
//                     <div>
//                       <Field as={TextField} name={`items.${index}.amount`} type="text" style={mystyle.input} variant="outlined" label="amount" />
//                       <ErrorMessage name={`items.${index}.amount`} component="div" style={mystyle.error} />
//                     </div>
//                     <div>
//                       <Field as={TextField} name={`items.${index}.matchAmount`} type="text" style={mystyle.input} variant="outlined" label="matchamount" />
//                       <ErrorMessage name={`items.${index}.matchAmount`} component="div" style={mystyle.error} />
//                     </div>
//                     <Tooltip title="Delete">
//                       <IconButton aria-label="delete" onClick={() => remove(index)}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </Tooltip>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </FieldArray>
//         <div>
//         <Button type="submit" variant="contained" style={mystyle.button}>
//         Submit
//       </Button>
//         </div>
         
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const mystyle = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: '8px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
   
//     padding: '30px 30px 30px 30px',
//     width: '100%',
//   },
//   input: {
//     marginBottom: '20px',
//     marginLeft: '10px',
//   },
//   button: {
//     marginTop: '20px',
//   },
//   label: {
//     marginRight: '20px',
//     marginLeft: '10px',
//     marginTop: '5x',
//     fontSize: '1rem',
//   },
//   error: {
//     color: 'red',
//     fontSize: '0.8rem',
//     marginTop: '5px',
//   },
// };
// export default ArrayField;






// import React from 'react';
// import { Formik, Form, FieldArray } from 'formik';
// import * as Yup from 'yup';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import { Button, IconButton, TextField, Tooltip } from '@mui/material';

// const validationSchema = Yup.object().shape({
//   items: Yup.array().of(
//     Yup.object().shape({
//       amount: Yup.number().required('Amount is required'),
//       matchAmount: Yup.number()
//         .required('Match amount is required')
//         .test('match-amount', 'Match amount should match the amount', function (value) {
//           const amount = this.parent.amount;
//           return value === amount;
//         }),
//     })
//   ),
// });

// const initialValues = {
//   items: [{ amount: '', matchAmount: '' }],
// };

// const ArrayField = () => {
//   const addItem = (push) => {
//     push({ amount: '', matchAmount: '' });
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {({ values, errors, touched }) => (
//         <Form style={mystyle.container}>
         
//           <FieldArray name="items">
//             {({ insert, remove, push }) => (
              
//               <div style={{ display: 'flex', flexDirection: 'column' }}>
//               <div style={{ display: 'flex', justifyContent: 'flex-left', marginBottom: '20px' }}>
//               <Button variant="" style={mystyle.label} startIcon={<AddIcon />} onClick={() => addItem(push)}>
//                 Add Item
//               </Button>
//             </div>
//                 {values.items.map((item, index) => (
//                   <div key={index} style={{ display: 'flex', flexDirection: 'rows', marginRight: '20px' }}>
//                     <div>
                     
//                       <TextField
//                         name={`items.${index}.amount`}
//                         type="text"
//                         id='textfield'
//                         style={mystyle.input}
//                         variant="outlined"
//                         label="amount"
//                         error={touched.amount && !!errors.amount}
//                         helperText={touched.amount && errors.amount}
//                       />
//                     </div>
//                     <div>
                    
//                       <TextField
//                         name={`items.${index}.matchAmount`} 
//                         type="text"
//                         style={mystyle.input}
//                         variant="outlined"
//                         label="matchamount"
//                         error={touched.matchAmount && !!errors.matchAmount}
//                         helperText={touched.matchAmount && errors.matchAmount}
//                       />
//                     </div>
//                     {index > 0 && (
//                       <Tooltip title="Delete">
//                       <IconButton aria-label="delete" onClick={() => remove(index)}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </Tooltip>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </FieldArray>
//           <Button type="submit" variant="contained" style={mystyle.button}>
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const mystyle = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: '8px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
//     padding: '30px 30px 30px 30px',
//     width: '100%',
//   },
//   input: {
//     marginBottom: '20px',
//     marginLeft:'10px'
//   },
//   button: {
//     marginTop: '20px',
//   },
//   label: {
//     marginRight: '20px',
//     marginLeft: '10px',
//     marginTop: '5x',
    
//     fontSize: '1rem',
//   },
//   addButton: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#1565c0',
//     },
//   },
// };

// export default ArrayField;

import React from 'react';
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton, Tooltip } from '@mui/material';
import { TextField } from '@mui/material';

const validationSchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object().shape({
      amount: Yup.number().required('Amount is required'),
      matchAmount: Yup.number()
        .required('Match amount is required')
        .test('match-amount', 'Match amount should match the amount', function (value) {
          const amount = this.parent.amount;
          return value === amount;
        }),
    })
  ),
});

const initialValues = {
  items: [{ amount: '', matchAmount: '' }],
};

const ArrayField = () => {
  const addItem = (push) => {
    push({ amount: '', matchAmount: '' });
  };

  const handleSubmit = (values) => {
    console.log(values.items); // Log the FieldArray data to the console
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      style={mystyle.container}
    >
      {({ values, errors, touched }) => (
        <Form style={mystyle.container}>
          <FieldArray name="items">
            {({ insert, remove, push }) => (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-left', marginBottom: '20px' }}>
                  <Button variant="" style={mystyle.label} startIcon={<AddIcon />} onClick={() => addItem(push)}>
                    Add Item
                  </Button>
                </div>
                {values.items.map((item, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'rows', marginRight: '20px' }}>
                    <div>
                      <Field
                        as={TextField}
                        name={`items.${index}.amount`}
                        type="text"
                        style={mystyle.input}
                        variant="outlined"
                        label="amount"
                      />
                      <ErrorMessage name={`items.${index}.amount`} component="div" style={mystyle.error} />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        name={`items.${index}.matchAmount`}
                        type="text"
                        style={mystyle.input}
                        variant="outlined"
                        label="matchamount"
                      />
                      <ErrorMessage name={`items.${index}.matchAmount`} component="div" style={mystyle.error} />
                    </div>
                    {values.items.length > 1 && ( // Only render the delete icon button if there is more than one item
                      <Tooltip title="Delete">
                        <IconButton onClick={() => remove(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
          <div style={{ marginTop: '20px', marginLeft: '10px' }}>
            <Button type="submit" variant="contained" style={mystyle.button}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mystyle = {
  container: {
    
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    padding: '30px 30px 30px 30px',
    width: '100%',
  },
  input: {
    marginBottom: '20px',
    marginLeft: '10px',
  },
  button: {
    marginTop: '20px',
  },
  label: {
    marginRight: '20px',
    marginLeft: '10px',
    marginTop: '5x',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '5px',
  },
};
export default ArrayField;







