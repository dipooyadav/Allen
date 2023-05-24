// import React, { useState } from 'react';
// import { Button, Card, CardContent, TextField, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
// import * as Yup from 'yup';

// const schema = Yup.object().shape({
//   file: Yup.mixed()
//     .required('Please select a file')
//     .test('fileFormat', 'Invalid file format. Only text, CSV, and JPEG files are allowed.', (value) => {
//         if (!value) return false;
//         const allowedFormats = ['text/plain', 'application/vnd.ms-excel', 'image/jpeg'];
//         if (!allowedFormats.includes(value.type)) {
//           return false;
//         }
//         if (value.type === 'image/jpeg') {
//           return value.name.endsWith('.jpg') || value.name.endsWith('.jpeg');
//         }
//         return true;

//       }),
// });

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [checkData, setCheckData] = useState([]);
//   const [submittedData, setSubmittedData] = useState([]);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     schema
//       .validate({ file: selectedFile })
//       .then(() => {
//         setError(null);
//         setFile(selectedFile);
//       })
//       .catch((err) => setError(err.message));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = () => {
//       const contents = reader.result;
//       const lines = contents.trim().split('\n');
//       const data = lines.map((line) => line.trim().split('\t'));
//       const json = data.map(([accountno, signature, signaturecbs, date]) => ({
//         accountno,
//         signature,
//         signaturecbs,
//         date,
//       }));
//       setCheckData(json);
//     };
//     reader.readAsText(file);
//   };

//   const handleTableSubmit = () => {
//     setSubmittedData(checkData);
//     setCheckData([]);
//     console.log(checkData);
//   };

//   return (
//     <Card style={{ maxWidth: 600, margin: 'auto', marginTop: 20 }}>
//       <CardContent>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             type="file"
//             onChange={handleFileChange}
//             variant="outlined"
//             fullWidth
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Upload
//           </Button>
//         </form>
//         {checkData.length > 0 && (
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Account No</TableCell>
//                 <TableCell>Signature</TableCell>
//                 <TableCell>Signature From CBS</TableCell>
//                 <TableCell>Date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {checkData.map((check) => (
//                 <TableRow key={check.accountno}>
//                   <TableCell>{check.accountno}</TableCell>
//                   <TableCell>{check.signature}</TableCell>
//                   <TableCell>{check.signaturecbs}</TableCell>
//                   <TableCell>{check.date}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//         {submittedData.length > 0 && (
//           <Table style={{marginTop:'10px'}}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Account No</TableCell>
//                 <TableCell>Signature </TableCell>
//                 <TableCell>Signature From CBS</TableCell>
//                 <TableCell>Date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {submittedData.map((check) => (
//                 <TableRow key={check.accountno}>
//                   <TableCell>{check.accountno}</TableCell>
//                   <TableCell>{check.signature}</TableCell>
//                   <TableCell>{check.signaturecbs}</TableCell>
//                   <TableCell>{check.date}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//         {checkData.length > 0 && (
//           <Button type="submit" variant="contained" color="primary" onClick={handleTableSubmit} fullWidth>
//             Submit Table Data
//           </Button>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default FileUpload;

///////new  code

// import React, { useState } from "react";
// import {
//   Button,
//   CardContent,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Card,
// } from "@material-ui/core";
// // import { Alert } from '@material-ui/lab';
// import { Alert, Stack } from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   file: Yup.mixed()
//     .test(
//       "fileType",
//       "Only .txt files are allowed",
//       (value) => value && value.type === "text/plain"
//     )
//     .test(
//       "fileSize",
//       "File size must be less than 5KB",
//       (value) => value && value.size <= 5000
//     ),
// });

// const useStyles = makeStyles({
//   container: {
//     maxWidth: 600,
//     margin: "0 auto",
//     padding: "2rem",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   error: {
//     marginTop: "1rem",
//   },
//   input: {
//     display: "none",
//   },
//   uploadButton: {
//     marginTop: "1rem",
//   },
//   tableContainer: {
//     marginTop: "2rem",
//   },
// });

// const FileUpload = () => {
//   const classes = useStyles();
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState(null);
//   const [fileContent, setFileContent] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];

//     if (
//       selectedFile &&
//       selectedFile.type === "text/plain" &&
//       selectedFile.size <= 5000
//     ) {
//       setFile(selectedFile);
//       setErrorMessage(null);
//       setFileName(selectedFile.name); // add this line to set the file name state
//     } else {
//       setFile(null);
//       setFileName(null); // reset file name state if file is invalid
//       setErrorMessage(
//         "Please choose a valid file (less than 5KB in size and of .txt format)"
//       );
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await validationSchema.validate({ file }, { context: { fileName } });
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFileContent(reader.result);
//       };
//       reader.readAsText(file);
//       setErrorMessage(null);
//     } catch (error) {
//     //   setErrorMessage(error.message);
//  setErrorMessage("Please  Select Txt File");
    
//     }
//   };

//   return (
//     <div className={classes.container}>
//       <Card>
//         <CardContent>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept=".txt"
//             className={classes.input}
//             id="file-input"
//           />
//           <label htmlFor="file-input">
//             <Button
//               variant="contained"
//               color="primary"
//               component="span"
//               className={classes.uploadButton}
//             >
//               Choose File
//             </Button>
//           </label>

//           <Button onClick={handleSubmit} className={classes.uploadButton}>
//             Upload
//           </Button>
//           {fileName && <Stack>{fileName}</Stack>}
//           <Stack>
//             {errorMessage && (
//               <Alert severity="error" className={classes.error}>
//                 {errorMessage}
//               </Alert>
//             )}
//           </Stack>
//           {fileContent && (
//             <TableContainer className={classes.tableContainer}>
//               <Table>
//                 <TableHead> 
//                   <TableRow>
//                     <TableCell>Account Number</TableCell>
//                     <TableCell>Signature</TableCell>
//                     <TableCell>Signature from CBS</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {fileContent.split("\n").map((line, index) => {
//                     const [accountNumber, signature, signatureFromCBS] = line
//                       .trim()
//                       .split("|");
//                     return (
//                       <TableRow key={index}>
//                         <TableCell>{accountNumber}</TableCell>
//                         <TableCell>{signature}</TableCell>
//                         <TableCell>{signatureFromCBS}</TableCell>
//                       </TableRow>
//                     );
//                   })} 
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default FileUpload;



  /////File Path Code in React js 

//   import React, { useState } from "react";
// import {
//   Button,
//   CardContent,
//   Card,
//   Typography,
//   Input,
//   makeStyles,
// } from "@material-ui/core";

// const useStyles = makeStyles({
//   container: {
//     maxWidth: 600,
//     margin: "0 auto",
//     padding: "2rem",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   input: {
//     display: "none",
//   },
//   fileInput: {
//     marginTop: "1rem",
//   },
// });

// const FileUpload = () => {
//   const classes = useStyles();
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedFilePath, setSelectedFilePath] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setSelectedFilePath(event.target.value);
//   };

//   const handleFileSubmit = () => {
//     // Do something with the selected file path (e.g. post to server)
//     console.log("Selected file path: ", selectedFilePath);
//   };

  
// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleFileSubmit = () => {
// //     const formData = new FormData();
// //     formData.append("file", selectedFile);
// //     axios
// //       .post("/api/upload", formData)
// //       .then((response) => {
// //         console.log(response.data);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };
//   return (
//     <div className={classes.container}>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="h2" align="center">
//             Select a .txt file
//           </Typography>
//           <input
//             type="file"
//             accept=".txt"
//             onChange={handleFileChange}
//             className={classes.input}
//             id="file-input"
//           />
//           <label htmlFor="file-input">
//             <Button
//               variant="contained"
//               color="primary"
//               component="span"
//               className={classes.fileInput}
//             >
//               Choose File
//             </Button>
//           </label>
//           {selectedFile && (
//             <Typography variant="body1" align="center">
//               Selected file: {selectedFile.name}
//             </Typography>
//           )}
//           <Input
//             value={selectedFilePath}
//             placeholder="File path"
//             fullWidth
//             disabled={!selectedFile}
//             inputProps={{
//               "aria-label": "File path",
//             }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleFileSubmit}
//             disabled={!selectedFile}
//             className={classes.fileInput}
//           >
//             Submit
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   ); 
// };

// export default FileUpload;

  
  
  
  


///NEW VALDATION CODE 

import React, { useState } from "react";
import {
  Button,
  CardContent,
  Card,
  Typography,
  Input,
  makeStyles,
} from "@material-ui/core";
import * as Yup from 'yup';

const useStyles = makeStyles({
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    display: "none",
  },
  fileInput: {
    marginTop: "1rem",
  },
});

const FileUpload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilePath, setSelectedFilePath] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // Use Yup to validate the file type and size
    const fileSchema = Yup.object().shape({
      file: Yup
        .mixed()
        .test(
          "fileType",
          "Please choose a text file (.txt)",
          (value) => value && value.type === "text/plain"
        )
        .test(
          "fileSize",
          "File size should be less than 5KB",
          (value) => value && value.size / 1024 <= 5
        )
    });

    try {
      await fileSchema.validate({ file });
      setSelectedFile(file);
      setSelectedFilePath(event.target.value);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFileSubmit = () => {
    // Do something with the selected file path (e.g. post to server)
    console.log("Selected file path: ", selectedFilePath);
  };

  return (
    <div className={classes.container}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h6" align="center">
            Select a .txt file 
          </Typography>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className={classes.input}
            id="file-input"
          />
          <label htmlFor="file-input">
            <Button
              variant="contained"
              color="primary"
              component="span"
              className={classes.fileInput}
            >
              Choose File
            </Button>
          </label>
          {selectedFile && (
            <Typography variant="body1" align="center">
              Selected file: {selectedFile.name}
            </Typography>
          )}
          <Input
            value={selectedFilePath}
            placeholder="File path"
            fullWidth
            disabled={!selectedFile}
            inputProps={{
              "aria-label": "File path",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleFileSubmit}
            disabled={!selectedFile}
            className={classes.fileInput}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileUpload;
