import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CTSLOGO from "../assets/CTSLOGO.png";

const initialValues = {
  usercode: "Aadil6780",
  branchcode: "121",
  password: "5675689",
}; 

const validationSchema = Yup.object().shape({
  usercode: Yup.string().required("Required"),
  branchcode: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     marginTop:'15px',
//     alignItems: "center",
//     padding: theme.spacing(6),
//     borderRadius: theme.spacing(1),
//     boxShadow: theme.shadows[2],
//   },
//   logo: {
//     height: theme.spacing(8),
//     marginBottom: theme.spacing(4),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
//   Field:{
//     marginBottom:'8px'
//   }
// }));

const mystyle = {
  Form: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    padding: "30px 30px  30px  30px",
    width: "100%",
  },

  Field: {
    margin: "5px 0px 9px 0px",
    height: "60px",
  },

  logo: {
    width: "30%",
  },
  Button: {
    display: "flex",
    width: "40%",
    marginLeft: "80px",
  },
};

const Login = () => {
  // const classes = useStyles();
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const tokenResponse = await fetch(
        "http://192.168.1.113:8080/nkss/quetoken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "nkssapp",
            password: "password",
          }),
        }
      );
      const tokenData = await tokenResponse.json(); // Store the response in a variable

      if (!tokenResponse.ok) {
        throw new Error(tokenData.message);
      }

      const response = await fetch("http://192.168.1.113:8080/nkss/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify({
          branchCode: values.branchcode, // Use user input for branchCode
          userCode: values.usercode, // Use user input for userCode
          password: values.password, // Use user input for password
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert("loginapi error");
        throw new Error(data.message);
      } else if (response.ok) {
        throw new Error("User Successfully login");
        resetForm();
      }
      localStorage.setItem("token", data.token);
      setError(null);
    } catch (error) {
      setError(error.message);
      resetForm();
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={mystyle.Form}>
          <Typography variant="h5" component="h1">
            <img src={CTSLOGO} alt="Logo" style={mystyle.logo} />
          </Typography>
          <Box width={1} my={5}>
            <Field
              style={mystyle.Field}
              as={TextField}
              name="usercode"
              label="Usercode"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box width={1} my={2}>
            <Field
              style={mystyle.Field}
              as={TextField}
              name="branchcode"
              label="Branchcode"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box width={1} my={2}>
            <Field
              style={mystyle.Field}
              as={TextField}
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Box>
          {error && (
            <Typography variant="subtitle1" color="error">
              {error}
            </Typography>
          )}
          <Button
            style={mystyle.Button}
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

export default Login;
