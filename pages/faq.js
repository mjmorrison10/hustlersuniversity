import React from "react";
import { Box, Typography } from "@mui/material";
import EnrollBtn from "../components/enrollBtn";

function Faq() {
  const content = {
    q01: `Q) Will these methods work even if I don't have a lot of time?`,
    a01: `Yes, of course. Our methods work for anybody, regardless of your current personal situation. As long as you have internet access, and an hour a day, you'll make money with them.`,
    q02: `2) I heard the price is going to increase, is that true?`,
    a02: `The price may increase in the future. Therefore I highly recommend you to get in while it's still this low. If you join at the current price, you'll be grandfathered to the price you subscribed with.`,
    q03: `3) Does work if my English isn't very good?`,
    a03: `If you managed to read these words, the answer is: Yes.`,
    btn: <EnrollBtn />,
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      bgcolor: "black",
      color: "white",
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      py: 10,
    },
    body: {
      maxWidth: "85ch",
    },
  };

  return (
    <Box sx={styles.container}>
      {Object.entries(content).map((e, i) => (
        <Typography key={i} variant={"h6"} component={"body1"} sx={styles.body}>
          {e[1]}
        </Typography>
      ))}
    </Box>
  );
}

export default Faq;
