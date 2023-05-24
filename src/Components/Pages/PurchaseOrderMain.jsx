import * as React from "react";
import { useRef } from "react";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ItemTable from "./Stepper";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress, // Import CircularProgress for loader
} from "@mui/material";

import data from "./data.json"; // Import the JSON file

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "650",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  mt: 0,
  p: 4,
};

function PurchaseOrderMain() {
  const [open, setOpen] = React.useState(false);
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");
  const [tableData, setTableData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false); // Add loading state
  const tableRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNew = () => {
    handleOpen();
  };

  const handlePrint = () => {
    const tableContainer = document.getElementById("table-container");
    // Implement printing logic here
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true

    // Simulate asynchronous data fetching
    setTimeout(() => {
      // Set the tableData state with the data from the JSON file
      setTableData(data);
      setIsLoading(false); // Set loading state to false after data is fetched
    }, 2000);
  };

  return (
    <React.Fragment>
      <Container sx={{ padding: "20px", margin: "20px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography
              style={{
                color: "black",
                marginTop: 10,
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Purchase Order
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleNew}
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              New
            </Button>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                label="Supplier Name"
                name="supplierName"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextField
                type="date"
                name="fromdate"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={fromDate}
                onChange={handleFromDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                type="date"
                name="todate"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={toDate}
                onChange={handleToDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                type="text"
                label="System Order No"
                name="systemOrderNo"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                label="Purchase Order"
                name="purchaseOrder"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                label="Purchase Order"
                name="purchaseOrder"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
              />
            </Grid>
          </Grid>
          <Button type="submit">Submit</Button>
        </form>

        {isLoading ? ( // Render loader when isLoading is true
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer
            component={Paper}
            style={{ marginTop: 20 }}
            ref={tableRef}
            id="table-container"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Client Name</TableCell>
                  <TableCell>System Order No</TableCell>
                  <TableCell> Party Order No</TableCell>
                  <TableCell> Rate</TableCell>
                  <TableCell> Order Po No</TableCell>
                  <TableCell> Order Inv No</TableCell>
                  {/* Add other table headers as needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.clientname}</TableCell>
                    <TableCell>{row.systemorderno}</TableCell>
                    <TableCell>{row.partyorderno}</TableCell>
                    <TableCell>{row.rate}</TableCell>
                    <TableCell>{row.Orderpono}</TableCell>
                    <TableCell>{row.Orderinvno}</TableCell>
                    {/* Add other table cells based on data structure */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Container sx={{ backgroundColor: "#fff", width: "100%", marginTop: "20px", paddingLeft: "10%", paddingRight: "10%" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4} sm={4} md={4} lg={3}>
              <Button
                variant="contained"
                onClick={handlePrint}
                size="large"
                sx={{
                  height: "100%",
                  "@media (min-width: 1280px)": {
                    fontSize: "0.75rem",
                  },
                }}
              >
                Print
              </Button>
            </Grid>
          </Grid>
        </Container>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ItemTable handleClose={handleClose} />
          </Box>
        </Modal>
      </Container>
    </React.Fragment>
  );
}

export default PurchaseOrderMain;
