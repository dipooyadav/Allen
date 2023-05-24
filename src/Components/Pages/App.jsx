// // import React, { useState } from "react";
// // import { TextField, Button, Container, Grid } from "@mui/material";
// // import userData from "./userData.json"; // Import JSON data

// // const MyForm = () => {
// //   const [formData, setFormData] = useState({
// //     supplierName: "",
// //     gstNo: "",
// //     pincode: "",
// //     address: "",
// //     city: "",
// //     state: "",
// //     transporterName: "",
// //     courierName: "",
// //     businessGroup: "",
// //   });

// //   const handleNameChange = (event) => {
// //     const name = event.target.value;

// //     // Find the user in the imported JSON data based on the entered name
// //     const user = userData.suppliers.find(
// //       (supplier) => supplier.name === name
// //     );

// //     // Set the form fields with the user's data or empty if user not found
// //     setFormData({
// //       supplierName: name,
// //       gstNo: user ? user.gstNo : "",
// //       pincode: user ? user.pincode : "",
// //       address: user ? user.address : "",
// //       city: user ? user.city : "",
// //       state: user ? user.state : "",
// //       transporterName: user ? user.transporterName : "",
// //       courierName: user ? user.courierName : "",
// //       businessGroup: user ? user.businessGroup : "",
// //     });
// //   };

// //   const handleAgentNameChange = (event) => {
// //     const agentName = event.target.value;

// //     // Find the agent in the imported JSON data based on the entered name
// //     const agent = userData.agents.find((agent) => agent.name === agentName);

// //     // Set the agent fields with the agent's data or empty if agent not found
// //     setFormData({
// //       ...formData,
// //       agentName,
// //       agstNo: agent ? agent.gstNo : "",
// //       apincode: agent ? agent.apincode : "",
// //       aaddress: agent ? agent.aaddress:"",
// //       astate: agent ? agent.astate:"",
// //       acity:agent ? agent.acity:""
// //     });
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Handle form submission
// //     console.log(formData);
// //   };

// //   return (
// //     <Container maxWidth="sm">
// //       <form onSubmit={handleSubmit}>
// //         <Grid container spacing={2}>
// //         <Grid item xs={4}>
// //         <TextField
// //           label="Supplier Name"
// //           name="supplierName"
// //           value={formData.supplierName}
// //           onChange={handleNameChange}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="GST No"
// //           name="gstNo"
// //           value={formData.gstNo}
// //           onChange={(e) => setFormData({ ...formData, gstNo: e.target.value })}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="Pincode"
// //           name="pincode"
// //           value={formData.pincode}
// //           onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="Address"
// //           name="address"
// //           value={formData.address}
// //           onChange={(e) => setFormData({ ...formData, address: e.target.value })}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="City"
// //           name="city"
// //           value={formData.city}
// //           onChange={(e) => setFormData({ ...formData, city: e.target.value })}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="State"
// //           name="state"
// //           value={formData.state}
// //           onChange={(e) => setFormData({ ...formData, state: e.target.value })}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="Transporter Name"
// //           name="transporterName"
// //           value={formData.transporterName}
// //           onChange={(e) => setFormData({ ...formData, transporterName: e.target.value })}
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //         <TextField
// //           label="Courier Name"
// //           name="courierName"
// //           value={formData.courierName}
// //           onChange={(e) => setFormData({ ...formData, courierName: e.target.value })}
// //           fullWidth
// //           />
// //           </Grid>
// //           <Grid item xs={4}>
// //           <TextField
// //             label="businessGroup"
// //             name="businessGroup"
// //             value={formData.courierName}
// //             onChange={(e) => setFormData({ ...formData, businessGroup: e.target.value })}
// //             fullWidth
// //             />
// //             </Grid>
// //           <Grid item xs={4}>
// //             <TextField
// //               label="Agent Name"
// //               name="agentName"
// //               value={formData.agentName}
// //               onChange={handleAgentNameChange}
// //               fullWidth
// //             />
// //           </Grid>
// //           <Grid item xs={4}>
// //             <TextField
// //               label="Agent GST No"
// //               name="agstNo"
// //               value={formData.agstNo}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, agstNo: e.target.value })
// //               }
// //               fullWidth
// //             />
// //           </Grid>
// //           <Grid item xs={4}>
// //             <TextField
// //               label="Agent Pincode"
// //               name="apincode"
// //               value={formData.apincode}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, apincode: e.target.value })
// //               }
// //               fullWidth
// //             />
// //           </Grid>
// //           <Grid item xs={4}>
// //           <TextField
// //             label="Agent Pincode"
// //             name="aaddress"
// //             value={formData.aaddress}
// //             onChange={(e) =>
// //               setFormData({ ...formData, aaddress: e.target.value })
// //             }
// //             fullWidth
// //           />
// //         </Grid>
// //         <Grid item xs={4}>
// //         <TextField
// //           label="Agent Pincode"
// //           name="astate"
// //           value={formData.astate}
// //           onChange={(e) =>
// //             setFormData({ ...formData, astate: e.target.value })
// //           }
// //           fullWidth
// //         />
// //       </Grid>
// //       <Grid item xs={4}>
// //       <TextField
// //         label="Agent Pincode"
// //         name="acity"
// //         value={formData.acity}
// //         onChange={(e) =>
// //           setFormData({ ...formData, acity: e.target.value })
// //         }
// //         fullWidth
// //       />
// //     </Grid>

// //         </Grid>
// //         <Button type="submit" variant="contained" color="primary">
// //           Submit
// //         </Button>
// //         </form>
// //         </Container>
// //   )}
// //   export default MyForm

import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import userData from "./userData.json"; // Import JSON data
import { makeStyles } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import * as yup from "yup"; // Import Yup library
import { Formik, Form } from "formik";
// import FormInput from "./Auth/FormInput";

const validationSchema = yup.object({
  supplierName: yup.string().required("Supplier Name is required"),
  gstNo: yup.string().required("GST No is required"),
  pincode: yup.string().required("Pincode is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  transporterName: yup.string().required("Transporter Name is required"),
  courierName: yup.string().required("Courier Name is required"),
  businessGroup: yup.string().required("Business Group is required"),
  agentName: yup.string().required("Agent Name is required"),
  agstNo: yup.string().required("Agent GST No is required"),
  apincode: yup.string().required("Agent Pincode is required"),
  aaddress: yup.string().required("Agent Address is required"),
  astate: yup.string().required("Agent State is required"),
  acity: yup.string().required("Agent City is required"),
  location: yup.string().required("Location is required"),
});

const useStyles = makeStyles((theme) => ({
  // Define custom styles
  formContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    marginLeft: "10%",
    marginRight: "10%",
    height: "100",
    paddingTop: 0,
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  textField: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
  save: {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "none",
  },
}));
const MyForm = ({formData, setFormData}) => {
  const [suppliers, setSuppliers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [agents, setAgents] = useState([]);
  const [locations, setLocations] = useState([]);
  const classes = useStyles(); // Retrieve the custom styles

  const initialValues = {
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
  };

  // useEffect(() => {
  //   const uniqueSuppliers = [
  //     ...new Set(userData.suppliers.map((product) => product.name)),
  //   ];
  //   setSuppliers(uniqueSuppliers);
  // }, []);
  // console.log(suppliers);

  useEffect(() => {
    const uniqueSuppliers = [
      ...new Set(userData.suppliers.map((product) => product.name)),
    ];
    setSuppliers(uniqueSuppliers);

    const uniqueAgents = [
      ...new Set(userData.agents.map((agent) => agent.name)),
    ];
    setAgents(uniqueAgents);

    const uniqueBillis = [
      ...new Set(userData.locations.map((product) => product.location)),
    ];
    setLocations(uniqueBillis);
  }, []);

  // const handleNameChange = (event) => {
  //   const name = event.target.value;

  //   // Find the user in the imported JSON data based on the entered name
  //   const user = userData.suppliers.find((supplier) => supplier.name === name);

  //   // Set the form fields with the user's data or empty if user not found
  //   setFormData({
  //     supplierName: name,
  //     gstNo: user ? user.gstNo : "",
  //     pincode: user ? user.pincode : "",
  //     address: user ? user.address : "",
  //     city: user ? user.city : "",
  //     state: user ? user.state : "",
  //     transporterName: user ? user.transporterName : "",
  //     courierName: user ? user.courierName : "",
  //     businessGroup: user ? user.businessGroup : "",
  //     agentName: formData.agentName,
  //     agstNo: formData.agstNo,
  //     apincode: formData.apincode,
  //     aaddress: formData.aaddress,
  //     astate: formData.astate,
  //     acity: formData.acity,
  //   });
  // };

  const handleNameChange = (event) => {
    const name = event.target.value;
    const selectedSupplier = userData.suppliers.find(
      (supplier) => supplier.name === name
    );

    if (selectedSupplier) {
      setFormData({
        supplierName: name,
        gstNo: selectedSupplier.gstNo,
        pincode: selectedSupplier.pincode,
        address: selectedSupplier.address,
        city: selectedSupplier.city,
        state: selectedSupplier.state,
        transporterName: selectedSupplier.transporterName,
        courierName: selectedSupplier.courierName,
        businessGroup: selectedSupplier.businessGroup,
      });
      setEditMode(true);
    } else {
      setFormData({
        supplierName: name,
        gstNo: "",
        pincode: "",
        address: "",
        city: "",
        state: "",
        transporterName: "",
        courierName: "",
        businessGroup: "",
      });
      setEditMode(false);
    }
  };

  const handleAgentNameChange = (event) => {
    const agentName = event.target.value;

    // Find the agent in the imported JSON data based on the entered name
    const agent = userData.agents.find((agent) => agent.name === agentName);

    // Set the agent fields with the agent's data or empty if agent not found
    setFormData({
      ...formData,
      agentName,
      agstNo: agent ? agent.gstNo : "",
      apincode: agent ? agent.apincode : "",
      aaddress: agent ? agent.aaddress : "",
      astate: agent ? agent.astate : "",
      acity: agent ? agent.acity : "",
    });
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;

    // Find the location in the imported JSON data based on the entered location
    const locationData = userData.locations.find(
      (locationData) => locationData.location === location
    );

    // Set the billing details with the location data or empty if location not found
    setFormData({
      ...formData,
      bgstno: locationData ? locationData.bgstno : "",
      bstate: locationData ? locationData.bstate : "",
      bcity: locationData ? locationData.bcity : "",
      baddress: locationData ? locationData.baddress : "",
      bpincode: locationData ? locationData.bpincode : "",
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the supplier details in the state or perform any necessary actions
    // Here, we will just log the edited data in the console
    console.log(formData);
    const updatedJson = {};

    // Reset the form fields and edit mode
    setFormData({
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

    setEditMode(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form className={classes.formContainer} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                label="Quatation No "
                name="quatationno"
                variant="outlined"
                fullWidth
                value={formData.quatationno}
                size="small"
                autocomplete="off"
              />
              <TextField
                type="date"
                variant="outlined"
                name="quatationdate"
                fullWidth
                value={formData.quatationdate}
                size="small"
                autocomplete="off"
              />
              <TextField
                label="Po Number"
                variant="outlined"
                name="ponumner"
                fullWidth
                value={formData.ponumner}
                size="small"
                autoComplete="off"
              />
              <TextField
                type="date"
                variant="outlined"
                name="podate"
                fullWidth
                value={formData.podate}
                size="small"
                autocomplete="off"
              />
              <TextField
                label="Purchase Order"
                variant="outlined"
                name="purchaseorder"
                fullWidth
                value={formData.purchaseorder}
                size="small"
                autocomplete="off"
              />
            </div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  className={classes.title}
                >
                  Supplier Information
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Autocomplete
                  options={suppliers}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Supplier Name"
                      name="supplierName"
                      value={formData.supplierName}
                      onChange={handleNameChange}
                      size="small"
                      type="text"
                      autocomplete="off"
                      fullWidth
                    />
                  )}
                  onInputChange={(event, value) => {
                    const changeEvent = {
                      target: {
                        name: "supplierName",
                        value: value,
                      },
                    };
                    handleNameChange(changeEvent);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="GST No"
                  name="gstNo"
                  value={formData.gstNo}
                  onChange={(e) =>
                    setFormData({ ...formData, gstNo: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Transporter Name"
                  name="transporterName"
                  variant="outlined"
                  value={formData.transporterName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transporterName: e.target.value,
                    })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Courier Name"
                  name="courierName"
                  value={formData.courierName}
                  onChange={(e) =>
                    setFormData({ ...formData, courierName: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Business Group"
                  name="businessGroup"
                  value={formData.businessGroup}
                  onChange={(e) =>
                    setFormData({ ...formData, businessGroup: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
            >
              <Grid item xs={12}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Agent Information
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Autocomplete
                  options={agents}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Agent Name"
                      name="agentName"
                      value={formData.agentName}
                      onChange={handleAgentNameChange}
                      size="small"
                      type="text"
                      fullWidth
                    />
                  )}
                  onInputChange={(event, value) => {
                    const changeEvent = {
                      target: {
                        name: "supplierName",
                        value: value,
                      },
                    };
                    handleAgentNameChange(changeEvent);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Agent GST No"
                  name="agstNo"
                  value={formData.agstNo}
                  onChange={(e) =>
                    setFormData({ ...formData, agstNo: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Agent Pincode"
                  name="apincode"
                  value={formData.apincode}
                  onChange={(e) =>
                    setFormData({ ...formData, apincode: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Agent Address"
                  name="aaddress"
                  value={formData.aaddress}
                  onChange={(e) =>
                    setFormData({ ...formData, aaddress: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Agent State"
                  name="astate"
                  value={formData.astate}
                  onChange={(e) =>
                    setFormData({ ...formData, astate: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autocomplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Agent City"
                  name="acity"
                  value={formData.acity}
                  onChange={(e) =>
                    setFormData({ ...formData, acity: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
            >
              <Grid item xs={12}>
                <Typography variant="h6" component="h6" gutterBottom>
                  Billing Details
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Autocomplete
                  options={locations}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleLocationChange}
                      fullWidth
                      size="small"
                      autoComplete="off"
                    />
                  )}
                  onInputChange={(event, value) => {
                    const changeEvent = {
                      target: {
                        name: "location",
                        value: value,
                      },
                    };
                    handleLocationChange(changeEvent);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Bill GstNo"
                  name="bgstno"
                  value={formData.bgstno}
                  onChange={(e) =>
                    setFormData({ ...formData, bgstno: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Bill Pincode"
                  name="bpincode"
                  value={formData.bpincode}
                  onChange={(e) =>
                    setFormData({ ...formData, bpincode: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Bill Address"
                  name="aaddress"
                  value={formData.baddress}
                  onChange={(e) =>
                    setFormData({ ...formData, baddress: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Bill State"
                  name="astate"
                  value={formData.bstate}
                  onChange={(e) =>
                    setFormData({ ...formData, bstate: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Bill City"
                  name="acity"
                  value={formData.bcity}
                  onChange={(e) =>
                    setFormData({ ...formData, bcity: e.target.value })
                  }
                  fullWidth
                  size="small"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
          </Grid>
         
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
