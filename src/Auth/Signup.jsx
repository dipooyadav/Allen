// import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Typography, Box } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import CTSLOGO from "../assets/CTSLOGO.png";

// const initialValues = {
//   usercode: "",
//   branchcode: "",
//   password: "",
// };

// const validationSchema = Yup.object().shape({
//   usercode: Yup.string().required("Required"),
//   branchcode: Yup.string().required("Required"),
//   password: Yup.string().required("Required"),
// });

// const Signup = () => {
//   // const classes = useStyles();
//   const [error, setError] = useState(null);

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       const tokenResponse = await fetch(
//         "http://192.168.1.113:8080/nkss/quetoken",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: "nkssapp",
//             password: "password",
//           }),
//         }
//       );
//       const tokenData = await tokenResponse.json();
//       if (!tokenResponse.ok) {
//         throw new Error(tokenData.message);
//       }

//       const response = await fetch("http://192.168.1.113:8080/nkss/userlogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${tokenData.token}`,
//         },
//         body: JSON.stringify({
//           branchCode: values.branchcode, // Use user input for branchCode
//           userCode: values.usercode, // Use user input for userCode
//           password: values.password, // Use user input for password
//         }),
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message);
//       } else if (response.ok) {
//         throw new Error("User Successfully login");
//         resetForm();
//       }
//       localStorage.setItem("token", data.token);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//       resetForm();
//     }
//     setSubmitting(false);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             borderRadius: "8px",
//             boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
//             padding: "30px 30px  30px  30px",
//             width: "100%",
//           }}
//         >
//           <Typography variant="h5" component="h1">
//             <img src={CTSLOGO} alt="Logo" style={{ width: "30%" }} />
//           </Typography>
//           <Box width={1} my={5} style={{ marginBottom: "8px", height: "10%" }}>
//             <Field
//               as={TextField}
//               name="usercode"
//               label="Usercode"
//               variant="outlined"
//               fullWidth
//             />
//           </Box>
//           <Box width={1} my={2} style={{ marginBottom: "8px" }}>
//             <Field
//               as={TextField}
//               name="branchcode"
//               label="Branchcode"
//               variant="outlined"
//               fullWidth
//             />
//           </Box>
//           <Box width={1} my={2} style={{ marginBottom: "10px" }}>
//             <Field

//               as={TextField}
//               name="password"
//               label="Password"
//               variant="outlined"
//               type="password"
//               fullWidth
//             />
//           </Box>
//           {error && (
//             <Typography variant="subtitle1" color="error">
//               {error}
//             </Typography>
//           )}
//           <Button

//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={isSubmitting}
//           >
//             Login
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CTSLOGO from "../assets/CTSLOGO.png";

const Signup = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    try {
      // Perform desired actions with user input values
      console.log(values);

      setError(null);
      resetForm();
      alert("Form submitted successfully");
    } catch (error) {
      setError(error.message);
      resetForm();
    }
    setSubmitting(false);
  };

  const initialValues = {
    usercode: "",
    branchcode: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    usercode: Yup.number()
      .required("usercode is required")
      .min(4, "Usercode must be at least 4 characters"),
    branchcode: Yup.string()
      .required("branchcode is required")
      .min(5, "branchcode must be at least   characters"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form
          className="formik-form"
          style={{
            display: "flex",

            flexDirection: "column",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            padding: "30px 30px  30px  30px",
            width: "100%",
          }}
        >
          <Typography component="h1">
            <img src={CTSLOGO} alt="Logo" style={{ width: "30%" }} />
          </Typography>
          <Box style={{ marginBottom: "8px", height: "10%" }}>
            <Field
              as={TextField}
              name="usercode"
              label="Usercode"
              variant="outlined"
              type="number"
              fullWidth
              error={touched.usercode && !!errors.usercode}
              helperText={touched.usercode && errors.usercode}
            />
          </Box>
          <Box style={{ marginBottom: "8px" }}>
            <Field
              as={TextField}
              name="branchcode"
              label="Branchcode"
              variant="outlined"
              fullWidth
              error={touched.branchcode && !!errors.branchcode}
              helperText={touched.branchcode && errors.branchcode}
            />
          </Box>
          <Box style={{ marginBottom: "10px" }}>
            <Field
              as={TextField}
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
