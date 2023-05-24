// import React, { useState } from "react";
// import { Stepper, Step, StepLabel, Button, Typography, Container } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";


// import ItemDetails from "./ItemDetails";
// import OtherDetails from "./OtherDetails";
// import PurchaseOrder from "./PurchaseOrder";

// const StepForm = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = ["General Details", "Item Details", "Other Details"];

//   const formik = useFormik({
//     initialValues: {
//       generalDetails: {
//         quatationno: "",
//         quatationdate: "",
//         ponumber: "",
//         podate: "",
//         purchaseord: "",
//         sgstno: "",
//         agstno: "",
//         bgstno: "",
//         spincode: "",
//         apincode: "",
//         bpincode: "",
//         saddress: "",
//         aaddress: "",
//         baddress: "",
//         sstate: "",
//         astate: "",
//         bstate: "",
//         scity: "",
//         acity: "",
//         bcity: "",
//         suppliername: "",
//         agentname: "",
//         location: "",
//         transportername: "",
//         couriername: "",
//         businessgroup: "",
//       },
//       itemDetails: {
//         itemName: "",
//         itemDescription: "",
//         itemPrice: 0,
//         // Add other fields from item details
//       },
//       otherDetails: {
//         name: "",
//         email: "",
//         phone: "",
//         // Add other fields from other details
//       },
//     },
//     validationSchema: Yup.object({
//       // Define validation schema for each step's fields
//       generalDetails: Yup.object({
//         sgstno: Yup.string().required("SGstno No is required"),
//         agstno: Yup.string().required("AGstno Date is required"),
//         bgstno: Yup.string().required("BGstno Number is required"),
//         spincode: Yup.string().required("Spincode Date is required"),
//         apincode: Yup.string().required("Apincode Order is required"),
//         bpincode: Yup.string().required("Bpincode No is required"),
//         saddress: Yup.string().required("Saddress is required"),
//         aaddress: Yup.string().required("Aaddress Address is required"),
//         baddress: Yup.string().required("Baddress is required"),
//         sstate: Yup.string().required("sstate is required"),
//         astate: Yup.string().required("Transporter Name is required"),
//         bstate: Yup.string().required("bstate No is required"),
//         scity: Yup.string().required("scity Date is required"),
//         acity: Yup.string().required("acity is required"),
//         bcity: Yup.string().required("bcity Date is required"),
//         suppliername: Yup.string().required("suppliername is required"),
//         agentname: Yup.string().required("agentname No is required"),
//         location: Yup.string().required("Billing Supplier is required"),
//         transportername: Yup.string().required("transportername is required"),
//         couriername: Yup.string().required("couriername is required"),
//         businessgroup: Yup.string().required("businessgroup is required"),
//       }),
//       itemDetails: Yup.object({
//         itemName: Yup.string().required("Item name is required"),
//         itemDescription: Yup.string().required("Item description is required"),
//         itemPrice: Yup.number().required("Item price is required"),
//         // Add other validations for item details fields
//       }),
//       otherDetails: Yup.object({
//         name: Yup.string().required("Name is required"),
//         email: Yup.string().email("Invalid email address").required("Email is required"),
//         phone: Yup.string().required("Phone number is required"),
//         // Add other validations for other details fields
//       }),
//     }),
//     onSubmit: (values) => {
//       // Handle form submission
//       console.log(values);
//     },
//   });

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <PurchaseOrder formik={formik} />;
//       case 1:
//         return <ItemDetails formik={formik} />;
//       case 2:
//         return <OtherDetails formik={formik} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Container>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Typography variant="h5" align="center" gutterBottom>
//         {steps[activeStep]}
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         {renderStepContent(activeStep)}
//         <div
//           style={{
//             marginTop: "1rem",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//         {activeStep > 0 && (
//           <Button variant="outlined" onClick={handleBack}>
//           Back
//           </Button>
//           )}
//           <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           style={{
//           marginLeft: "1rem",
//           alignSelf: activeStep === steps.length - 1 ? "flex-end" : "auto",
//           }}
//           >
//           {activeStep === steps.length - 1 ? "Submit" : "Next"}
//           </Button>
//           </div>
//           </form>
//           </Container>
//           );
//           };
          
//           export default StepForm;





import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Container,
  Grid,
} from "@mui/material";
import { Margin } from "@mui/icons-material";
import ItemDetails from "./ItemDetails";
import OtherDetails from "./OtherDetails";
import PurchaseOrder from "./PurchaseOrder";

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    generalDetails: {
      quatationno: "",
      quatationdate: "",
      ponumber: "",
      podate: "",
      purchaseord: "",
      sgstno: "",
      agstno: "",
      bgstno: "",
      spincode: "",
      apincode: "",
      bpincode: "",
      saddress: "",
      aaddress: "",
      baddress: "",
      sstate: "",
      astate: "",
      bstate: "",
      scity: "",
      acity: "",
      bcity: "",
      suppliername: "",
      agentname: "",
      location: "",
      transportername: "",
      couriername: "", 
      businessgroup: "",
    },
    itemDetails: {
      itemName: "",
      itemDescription: "",
      itemPrice: 0,
    },
    otherDetails: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [errors, setErrors] = useState({});

  const steps = ["General Details", "Item Details", "Other Details "];

  const handleNext = () => {
    const isValid = validateForm();

    if (isValid) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { generalDetails, itemDetails, otherDetails } = formValues;
    const generalDetailsErrors = {};
    const itemDetailsErrors = {};
    const otherDetailsErrors = {};

    if (activeStep === 0) {
      if (generalDetails.quatationno.trim() === "") {
        generalDetailsErrors.quatationno = "Quotation number is required";
      }
      // Add validation for other generalDetails fields
    }

    if (activeStep === 1) {
      if (itemDetails.itemName.trim() === "") {
        itemDetailsErrors.itemName = "Item name is required";
      }
      // Add validation for other itemDetails fields
    }

    if (activeStep === 2) {
      if (otherDetails.name.trim() === "") {
        otherDetailsErrors.name = "Name is required";
      }
      // Add validation for other otherDetails fields
    }

    setErrors({
      generalDetails: generalDetailsErrors,
      itemDetails: itemDetailsErrors,
      otherDetails: otherDetailsErrors,
    });

    return (
      Object.keys(generalDetailsErrors).length === 0 &&
      Object.keys(itemDetailsErrors).length === 0 &&
      Object.keys(otherDetailsErrors).length === 0
    );
  };

  const renderStepContent = (step) => {
    const { generalDetails, itemDetails, otherDetails } = formValues;

    switch (step) {
      case 0:
        return (
          <PurchaseOrder
          formValues={itemDetails}
          setFormValues={(values) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              itemDetails: values,
            }))
          }
          errors={errors.itemDetails}
        />
      );
      case 1:
        return (
        <ItemDetails
          formValues={generalDetails}
          setFormValues={(values) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              generalDetails: values,
            }))
          }
          errors={errors.generalDetails}
        />
      );
      case 2:
        return (
        <OtherDetails
          formValues={otherDetails}
          setFormValues={(values) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              otherDetails: values,
            }))
          }
          errors={errors.otherDetails}
        />
      );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="h5" align="center" gutterBottom>
        {steps[activeStep]}
      </Typography>
      <form>
        {renderStepContent(activeStep)}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {activeStep > 0 && (
            <Button
              variant="outlined"
              onClick={handleBack}
              style={{ alignSelf: "flex-start" }}
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{
              marginLeft: "1rem",
              alignSelf: activeStep === 0 ? "flex-end" : "auto",
            }}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default StepForm;

