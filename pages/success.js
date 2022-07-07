import { Box, Typography } from "@mui/material";
import React from "react";
import EnrollBtn from "../components/enrollBtn";
import Image from "next/image";

function Success() {
  const content = {
    h2: `OUR SUCCESS STORIES`,
    img01: `/images/success01.jpg`,
    img02: `/images/success02.jpg`,
    img03: `/images/success03.jpg`,
    btn: <EnrollBtn />,
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      py: 10,
    },
    img: {
      component: "picture",
      height: 300,
      width: 300,
    },
  };

  return (
    <Box sx={styles.container}>
      {Object.entries(content).map((e, i) =>
        e[0].includes("img") ? (
          <Box sx={styles.img} component={styles.img.component}>
            <Image key={i} src={e[1]} height={styles.img.height} width={styles.img.width} />
          </Box>
        ) : (
          <Typography
            key={i}
            variant={"h6"}
            component={"body1"}
            sx={styles.body}
          >
            {e[1]}
          </Typography>
        )
      )}
    </Box>
  );
}

export default Success;
