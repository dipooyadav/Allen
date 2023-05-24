import React from "react";
import { useFormik } from "formik";
import { TextField, Grid } from "@mui/material";

const OtherDetails = ({ formValues, setFormValues , handleChange }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      setFormValues({
        ...formValues,
        name: values.name,
        email: values.email,
        phone: values.phone,
      });
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default OtherDetails;
