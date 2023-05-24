// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Button,
//   IconButton,
//   TablePagination,
//   InputAdornment,
//   Modal,
//   Backdrop,
//   Fade,
//   FormControl,
//   InputLabel,
//   Input,
//   makeStyles,
// } from "@material-ui/core";
// import {
//   Add as AddIcon,
//   Search as SearchIcon,
//   Edit as EditIcon,
//   Save as SaveIcon,
// } from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   tableContainer: {
//     maxHeight: 400,
//     width: 1000,

//     [theme.breakpoints.down("sm")]: {
//       maxHeight: "none",
//     },
//   },
//   searchInput: {
//     marginRight: 80,
//     margin: 5,
//     width: theme.spacing(30),
//     justifyContent: "right",
//     alignItems: "center",
//     [theme.breakpoints.down("sm")]: {
//       marginBottom: theme.spacing(2),
//     },
//   },
//   addButton: {
//     position: "absolute",
//     top: 30,
//     bottom: 5,
//     right: 100,
//     margin: theme.spacing(1),
//     [theme.breakpoints.down("sm")]: {
//       position: "static",
//       marginBottom: theme.spacing(4),
//     },
//   },
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "right",
//     marginRight: "50px",
//   },
//   modalPaper: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     width: "70%",
//     maxWidth: 200,
//     [theme.breakpoints.up("md")]: {
//       width: "50%",
//     },
//   },
//   modalFormControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// const initialData = [
//   { id: 1, name: "John Doe", age: 30 },
//   { id: 2, name: "Jane Doe", age: 25 },
//   { id: 3, name: "Bob Smith", age: 45 },
//   { id: 4, name: "Alice Johnson", age: 35 },
//   { id: 5, name: "Mike Brown", age: 50 },
//   { id: 6, name: "Sara Lee", age: 28 },
//   { id: 7, name: "Tom Wilson", age: 33 },
//   { id: 8, name: "Emily Davis", age: 29 },
// ];

// const DataTable = () => {
//   const classes = useStyles();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchText, setSearchText] = useState("");
//   const [data, setData] = useState(initialData);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [newData, setNewData] = useState({ id: "", name: "", age: "" });

//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const handleSearchTextChange = (event) => setSearchText(event.target.value);

//   const handleModalOpen = () => setModalOpen(true);
//   const handleModalClose = () => {
//     setModalOpen(false);
//     setNewData({ id: "", name: "", age: "" });
//   };
//   const handleNewDataChange = (event) =>
//     setNewData({ ...newData, [event.target.name]: event.target.value });

//   const handleAddNewData = () => {
//     const newId = data[data.length - 1].id + 1;
//     setData([...data, { ...newData, id: newId }]);
//     handleModalClose();
//     console.log("New data added:", [...initialData, { ...newData, id: newId }]);
//   };

//   const filteredData = data.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchText.toLowerCase()) ||
//       item.age.toString().includes(searchText)
//   );

//   const paginatedData = filteredData.slice(
//     page * rowsPerPage,
//     (page + 1) * rowsPerPage
//   );

//   return (
//     <div>
//       <Paper>
//         <div className={classes.addButton}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddIcon />}
//             onClick={handleModalOpen}
//           >
//             Add New
//           </Button>
//         </div>
//         <TableContainer className={classes.tableContainer}>
//           <TextField
//             variant="outlined"
//             size="small"
//             className={classes.searchInput}
//             value={searchText}
//             onChange={handleSearchTextChange}
//             placeholder="Search by name or age"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Age</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.age}</TableCell>
//                   <TableCell>
//                     <Button
//                       startIcon={<EditIcon />}
//                       onClick={() => handleEditModalOpen(row.id)}
//                     ></Button>
//                     <Button onClick={() => handleDeleteData(row.id)}></Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <Modal
//         className={classes.modal}
//         open={modalOpen}
//         onClose={handleModalClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{ timeout: 500 }}
//       >
//         <Fade in={modalOpen}>
//           <div className={classes.modalPaper}>
//             <FormControl className={classes.modalFormControl}>
//               <InputLabel htmlFor="new-id">ID</InputLabel>
//               <Input
//                 id="new-id"
//                 name="id"
//                 value={newData.id}
//                 onChange={handleNewDataChange}
//               />
//             </FormControl>
//             <FormControl className={classes.modalFormControl}>
//               <InputLabel htmlFor="new-name">Name</InputLabel>
//               <Input
//                 id="new-name"
//                 name="name"
//                 value={newData.name}
//                 onChange={handleNewDataChange}
//               />
//             </FormControl>
//             <FormControl className={classes.modalFormControl}>
//               <InputLabel htmlFor="new-age">Age</InputLabel>
//               <Input
//                 id="new-age"
//                 name="age"
//                 value={newData.age}
//                 onChange={handleNewDataChange}
//               />
//             </FormControl>
//             <div style={{ textAlign: "center" }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleAddNewData}
//               >
//                 Add
//               </Button>
//               <Button variant="contained" onClick={handleModalClose}>
//                 Cancel
//               </Button>
//             </div>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// };

// export default DataTable;

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TablePagination,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@material-ui/core";
// import {
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Add as AddIcon,
// } from "@mui/icons-material";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 800,
//   },
//   addButton: {
//     marginLeft: 400,
//     marginRight: 6,

//     margin: 3,
//   },
//   dialogContent: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 16,
//   },
// });

// function DataTable() {
//   const classes = useStyles();
//   const [data, setData] = useState([
//     { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
//     { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
//     { id: 3, name: "Bob Johnson", age: 40, email: "bob.johnson@example.com" },
//     { id: 4, name: "Sarah Lee", age: 35, email: "sarah.lee@example.com" },
//     { id: 5, name: "Tom Jackson", age: 28, email: "tom.jackson@example.com" },
//     { id: 6, name: "Lisa Nguyen", age: 22, email: "lisa.nguyen@example.com" },
//     { id: 7, name: "Sarah Lee", age: 35, email: "sarah.lee@example.com" },
//     { id: 8, name: "Tom Jackson", age: 28, email: "tom.jackson@example.com" },
//     { id: 9, name: "Lisa Nguyen", age: 22, email: "lisa.nguyen@example.com" },
//   ]);
//   const [openAddDialog, setOpenAddDialog] = useState(false);
//   const [editingData, setEditingData] = useState("hiii");
//   const [filter, setFilter] = useState("");
//   const [page, setPage] = useState(0);

//   const rowsPerPage = 5;

//   const handleSubmit = (event) => {
//     event.preventDefault(); // prevent form refresh
//     if (editingData) {
//       handleSaveData(editingData);
//     } else {
//       handleSaveNewData();
//     }
//     setOpenAddDialog(false); // close the dialog
//     setEditingData(null); // reset editing data
//   };

//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleOpenAddDialog = () => {

//     setEditingData(true);
//     setOpenAddDialog(true);
//   };

//   //Edit Data Function
//   const handleEditData = (data) => {
//     setEditingData(data);
//     setOpenAddDialog(true);
//   };

// const handleAddNewData = () => {
//     const newId = data[data.length - 1].id + 1;
//     setData([...data, { ...data, id: newId }]);

//     console.log("New data added:", [...data, { ...newData, id: newId }]);
//   };
//   //Delete Data Function
//   const handleDeleteData = (id) => {
//     const deletedItem = data.find((item) => item.id === id);
//     setData(data.filter((item) => item.id !== id));
//     console.log("Deleted item:", deletedItem);
//   };

//   //Function For New Data Add
//   const handleSaveNewData = () => {
//     const newData = {

//       name: editingData.name,
//       age: editingData.age,
//       email: editingData.email,
//     };
//     setData([...data, newData]); // add the new data to the existing data array
//     setOpenAddDialog(false); // close the dialog box
//   };

//   //Save Edit Data Function
//   const handleSaveData = (formData) => {
//     if (editingData) {
//       setData(
//         data.map((item) =>
//           item.id === editingData.id ? { ...item, ...formData } : item
//         )
//       );
//       console.log("Edited Data: ", editingData);
//     } else {
//       setData([...data, { id: Date.now(), ...formData }]);
//     }
//     setOpenAddDialog(false);
//   };

//   const filteredData = data.filter(
//     (item) =>
//       item.name.toLowerCase().includes(filter.toLowerCase()) ||
//       item.email.toLowerCase().includes(filter.toLowerCase())
//   );

//   const paginatedData = filteredData.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (

//     <TableContainer component={Paper}>
//       <form onSubmit={handleSubmit}>
//         <div
//           style={{ alignItems: "center", marginTop: "10px", marginLeft: "10" }}
//         >
//           <TextField
//             label="Search"
//             variant="outlined"
//             size="small"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddIcon />}
//             className={classes.addButton}
//             onClick={handleOpenAddDialog}
//           >
//             Add
//           </Button>
//         </div>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Age</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedData.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>{item.id}</TableCell>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>{item.age}</TableCell>
//                 <TableCell>{item.email}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => handleEditData(item)}>
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeleteData(item.id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//         />
//         <Dialog
//           open={openAddDialog}
//           onClose={() => setOpenAddDialog(false)}
//           aria-labelledby="form-dialog-title"
//         >
//           <form
//             onSubmit={
//               editingData
//                 ? () => handleSaveData(editingData)
//                 : handleSaveNewData
//             }
//           >
//             <DialogTitle id="form-dialog-title">
//               {editingData ? "Edit Data" : "Add Data"}
//             </DialogTitle>
//             <DialogContent className={classes.dialogContent}>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 label="Name"
//                 type="text"
//                 fullWidth
//                 defaultValue={editingData ? editingData.name : "newData"}
//                 onChange={(e) =>
//                   setEditingData({
//                     ...editingData,
//                     name: e.target.value,
//                   })
//                 }
//               />
//               <TextField
//                 margin="dense"
//                 label="Age"
//                 type="number"
//                 fullWidth
//                 defaultValue={editingData ? editingData.age : "newData"}
//                 onChange={(e) =>
//                   setEditingData({
//                     ...editingData,
//                     age: e.target.value,
//                   })
//                 }
//               />
//               <TextField
//                 margin="dense"
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 defaultValue={editingData ? editingData.email : "newData"}
//                 onChange={(e) =>
//                   setEditingData({
//                     ...editingData,
//                     email: e.target.value,
//                   })
//                 }
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
//               <Button
//                 type="submit"
//                 color="primary"
//                 disabled={
//                   !editingData ||
//                   !editingData.name ||
//                   !editingData.age ||
//                   !editingData.email
//                 }
//                 onClick={() => setOpenAddDialog(true)}
//               >
//                 {editingData ? "Save" : "Add"}
//               </Button>
//             </DialogActions>
//           </form>
//         </Dialog>
//       </form>
//     </TableContainer>
//   );
// }
// export default DataTable;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
  TablePagination,
} from "@material-ui/core";
import { Delete, Edit, Save } from "@mui/icons-material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    maxHeight: 440,
  },
  header: {
    backgroundColor: "#f5f5f5",
  },
  addButton: {
    marginBottom: 10,
    marginRight: 10,
  },
  searchBox: {
    marginBottom: 10,
    marginRight: 350,
  },
});

const DataTable = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.number()
      .required("usercode is required")
      .min(4, "name must be at least 4 characters"),
    age: Yup.string()
      .required("branchcode is required")
      .min(5, "age must be at least   characters"),
    email: Yup.string()
      .min(8, "email must be at least 8 characters")
      .required("Password is required"),
  });

  const classes = useStyles();
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", age: 30, email: "jane.doe@example.com" },
    { id: 3, name: "Bob Smith", age: 40, email: "bob.smith@example.com" },
    {
      id: 4,
      name: "Alice Johnson",
      age: 20,
      email: "alice.johnson@example.com",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editRow, setEditRow] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddRow = () => {
    const newId = rows.length + 1;
    setRows([...rows, { id: newId, name: "", age: "", email: "" }]);
    setEditRow(newId);
    console.log(rows);
  };
  const handleSaveRow = (id) => {
    const index = rows.findIndex((row) => row.id === id);
    if (index !== -1) {
      const updatedRows = [...rows];
      const editedRow = updatedRows[index];
      if (!editedRow.name || !editedRow.age || !editedRow.email) {
        // alert user that all fields are required
        alert("Please enter values for all fields");
        return;
      } 
      setEditRow(null);
      setRows(updatedRows);
    }
  };

  const handleEditRow = (id) => {
    setEditRow(id);
    console.log();
  };

  useEffect(() => {
    if (editRow) {
      const editedRow = rows.find((row) => row.id === editRow);
      console.log("Edited Row Data:", editedRow); // log the edited row data to the console
    }
  }, [editRow, rows]);
  const handleDeleteRow = (id) => {
    const deletedRow = rows.find((row) => row.id === id);
    setRows(rows.filter((row) => row.id !== id));
    console.log("Deleted row:", deletedRow);
  };
  const handleRowChange = (event, id, field) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Formik
      initialValues={{ name: "", age: "", email: "" }}
      validationSchema={{ validationSchema }}
    >

   
      <Form onSubmit={handleAddRow}>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.addButton}
            type="submit"
          >
            Add Row
          </Button>
        </div>

        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} stickyHeader>
            <TableHead>
              <TableRow className={classes.header}>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    {editRow === row.id ? (
                      <TextField
                        label="Name"
                        variant="outlined"
                        value={row.name}
                        onChange={(event) =>
                          handleRowChange(event, row.id, "name")
                        }
                      />
                    ) : (
                      row.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editRow === row.id ? (
                      <TextField
                        label="Age"
                        variant="outlined"
                        type="number"
                        value={row.age}
                        onChange={(event) =>
                          handleRowChange(event, row.id, "age")
                        }
                      />
                    ) : (
                      row.age
                    )}
                  </TableCell>
                  <TableCell>
                    {editRow === row.id ? (
                      <TextField
                        label="Email"
                        variant="outlined"
                        value={row.email}
                        onChange={(event) =>
                          handleRowChange(event, row.id, "email")
                        }
                      />
                    ) : (
                      row.email
                    )}
                  </TableCell>
                  <TableCell>
                    {editRow === row.id ? (
                      <div>
                        <IconButton onClick={() => setEditRow(null)}>
                          <Delete />
                        </IconButton>
                        <IconButton onClick={() => setEditRow(null)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleSaveRow(row.id)}>
                          <Save />
                        </IconButton>
                      </div>
                    ) : (
                      <div>
                        <IconButton onClick={() => handleDeleteRow(row.id)}>
                          <Delete />
                        </IconButton>
                        <IconButton onClick={() => handleEditRow(row.id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleSaveRow(row.id)}>
                          <Save />
                        </IconButton>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
          />
        </TableContainer>
      </Form>
  
    </Formik>
    
  );
};

export default DataTable;
