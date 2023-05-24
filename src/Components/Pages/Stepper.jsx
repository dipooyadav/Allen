import React from "react";
import App from "./App";
import { useState } from "react";
// import ItemDetail from "./ItemDetail";
// import ViewRow from './ViewRow';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Stack,
  TextField,
  Grid,
  Divider,
} from "@mui/material";
import ItemDetails from "./PurchaseOrder/ItemDetails";
import StepHeadings from "./StepHeading";
import ViewRow from "./ViewRow";
import ItemDetailStep from "./ItemDetailStep";
// import { Divider } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ItemTable({ handleClose }) {
  const steps = ["General Details", "Item Details", "Other Details"];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    supplierName: "",
    gstNo: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
    transporterName: "",
    courierName: "",
    businessGroup: "",
    agentName: "",
    agstNo: "",
    apincode: "",
    aaddress: "",
    astate: "",
    acity: "",
    location: "",
    bgstno: "",
    bstate: "",
    bcity: "",
    baddress: "",
    bpincode: "",
    quatationno: "",
    quatationdate: "",
    ponumner: "",
    podate: "",
    purchaseorder: "",
  });
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    console.log(formData);
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    handleClose();
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <br />
            <StepHeadings activeStep={step} />
            <Grid style={{ marginLeft: "70.5%" }} item xs={2}></Grid>
            <br />
            <Grid container rowSpacing={2}>
              <Grid item xs={12}></Grid>
            </Grid>
            <br />
            <Divider></Divider>

            <App formData={formData} setFormData={setFormData}/>
          </Box>
        );
      case 1:
        return (
          <Box style={{height:200 , marginBottom:10}}>
            <br />
            <StepHeadings activeStep={step} />
            <Grid style={{ marginLeft: "70.5%" }} item xs={2}>
            <ItemDetailStep cartItems={cartItems} setCartItems={setCartItems}/></Grid>
            
            <br />
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <br />
            <Divider></Divider>
            <ViewRow cartItems={cartItems} setCartItems={setCartItems}/>
          </Box>
        );
      case 2:
        return (
          <Box>
            <br />
            <StepHeadings activeStep={step} />
            <Grid style={{ marginLeft: "70.5%" }} item xs={2}></Grid>
            <br />
            <Grid container rowSpacing={2}>
              <Grid item xs={12}></Grid>
            </Grid>
            <br />
            <Divider></Divider>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      direction="row"
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        py: 75,
        // minHeight: 150,
        height: 180,
        minWidth: 650,
        marginLeft: 10,
        marginRight: 10,
        display: "flex",
        flexDirection: "column",
        marginTop: 52,
        marginBottom: 13,
        paddingTop: 5,
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mr: 1 }}>
            <Box sx={{ flex: "2 2 auto" }} />
            <Button variant="contained" sx={{ mr: 0 }} onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
           
            <Button
              color="inherit"
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ ml: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 2 auto" }} />
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={
                activeStep === steps.length - 1 ? handleReset : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ItemTable;
