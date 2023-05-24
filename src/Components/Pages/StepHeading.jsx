import React from "react";
import Typography from "@mui/material/Typography";

const StepHeadings = ({ activeStep }) => {
  const headings = ["General Details", "Item Details", "Other Details"];

  return (
    <Typography
      style={{
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginLeft: 70,
      }}
    >
      {headings[activeStep]}
    </Typography>
  );
};

export default StepHeadings;
