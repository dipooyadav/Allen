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
import { Delete, Edit } from "@mui/icons-material";
import { Formik, Field, Form } from "formik";

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
  const classes = useStyles();
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", age: 30, email: "jane.doe@example.com" },
    { id: 3, name: "Bob Smith", age: 40, email: "bob.smith@example.com" },
    { id: 4, name: "Alice Johnson", age: 20, email: "alice.johnson@example.com" },
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

  const handleEditRow = (id) => {
    setEditRow(id);
  };

  useEffect(() => {
    if (editRow) {
      const editedRow = rows.find((row) => row.id === editRow);
      console.log("Edited Row Data:", editedRow); // log the edited row data to the console
    }
  }, [editRow, rows]);

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
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
    <div>
      <TextField
        label="Search"
        variant="outlined"
        className={classes.searchBox} value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddRow}
        className={classes.addButton}
      >
        Add Row
      </Button>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow className={classes.header}>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                {editRow === row.id ? (
                  <Formik
                    initialValues={row}
                    onSubmit={(values) => {
                      setRows(
                        rows.map((r) => (r.id === row.id ? values : r))
                      );
                      setEditRow(null);
                    }}
                  >
                    {({ values }) => (
                      <Form>
                        <TableCell>
                          <Field
                            name="name"
                            as={TextField}
                            onChange={(e) => handleRowChange(e, row.id, "name")}
                            autoFocus
                          />
                        </TableCell>
                        <TableCell>
                          <Field
                            name="age"
                            as={TextField}
                            onChange={(e) => handleRowChange(e, row.id, "age")}
                          />
                        </TableCell>
                        <TableCell>
                          <Field
                            name="email"
                            as={TextField}
                            onChange={(e) =>
                              handleRowChange(e, row.id, "email")
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton type="submit">
                            <Edit />
                          </IconButton>
                        </TableCell>
                      </Form>
                    )}
                  </Formik>
                ) : (
              <div>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEditRow(row.id)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDeleteRow(row.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
          
              </div>
                   
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
    </div>
    );
};

export default DataTable;