import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EnrollBtn from "../components/enrollBtn";
import VideoAd from "../components/videoAd";

function Introduction() {
  const content = {
    h1: `Hustler's University 2.0`,
    video: <VideoAd />,
    body: `This is a community where I and dozens of hand-picked War Room members will teach you everything we know about money. Full resources, full lesson plans, everything you need to get rich and it all starts with you making your first money TODAY.`,
    btn: <EnrollBtn />,
  };

  const styles = {
    containerStyles: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      py: 10,
    },
    h1: {
      variant: "h2",
      component: "h1",
    },
    video: {
      width: "75vw",
      aspectRatio: "16/9",
    },
    body: {
      variant: `h5`,
      component: `body1`,
      maxWidth: "85ch",
    },
  };

  return (
    <Box sx={styles.containerStyles}>
      <Typography
        variant={styles.h1.variant}
        component={styles.h1.component}
        sx={styles.h1}
      >
        {content.h1}
      </Typography>
      <Box sx={styles.video}>{content.video}</Box>
      <Typography
        variant={styles.body.variant}
        component={styles.body.component}
        sx={styles.body}
      >
        {content.body}
      </Typography>
      {content.btn}
    </Box>
  );
}

export default Introduction;
