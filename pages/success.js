import { Box, Typography } from "@mui/material";
import React from "react";
import EnrollBtn from "../components/enrollBtn";

function Success() {
  const content = {
    h2: `OUR SUCCESS STORIES`,
    img01: `img`,
    img02: `img`,
    img03: `img`,
    btn: <EnrollBtn />,
  };
  const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 1,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        py: 10,
    }
  }
  
  return (
    <Box sx={styles.container}>
      {Object.entries(content).map((e) => (
        <Typography variant={"h6"} component={"body1"} sx={styles.body}>
          {e[1]}
        </Typography>
      ))}
    </Box>
  );
}

export default Success;
