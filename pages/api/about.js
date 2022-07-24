import { Box, Typography } from "@mui/material";
import React from "react";
import EnrollBtn from "../../components/enrollBtn";
import Image from "next/image";

function About() {
  const content = {
    h2bold: <Box>never</Box>,
    h2: `You were  this close to becoming rich.`,
    body01: `Enrollment will give you exclusive access to:`,
    body02: `Stock analysis, Options plays, Crypto analysis, DeFi, E-commerce, Copywriting, Freelancing, Flipping, Financial planning, Business management, and MORE.`,
    img01: `/images/about01.jpg`,
    img02: `/images/about02.jpg`,
    img03: `/images/about03.jpg`,
    body03: `Every professor is verified by me personally. Each one of them is making anywhere from 10k to 500k a month in their select field.`,
    body04: `I chose fields that`,
    body05: `ANYONE ANYWHERE can do NOW to get rich.`,
    body06: `No wishy-washy ideas, no fluff, just hard-hitting lessons in making money.`,
    body07: `Full resources, full lesson plans, everything you need to get rich and it all starts with you making your first money TODAY.`,
    body08: `And, it's $49 to enroll TODAY.`,
    body09: `You have no more excuses. I just took them all away.`,
    body10: `Buckle up.`,
    body11: `It's time to get rich.`,
    body12: `Welcome to Hustler's University 2.0`,
    btn: <EnrollBtn />,
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      textAlign: "center",
      alignItems: "center",
      bgcolor: "black",
      color: "white",
      width: "100%",
      py: 10,
    },
    body: {
      maxWidth: "85ch",
    },
    img: {
      component: "picture",
      height: 300,
      width: 300,
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant={"h1"} component={"h2"}>
        You were{" "}
        <Box component={"span"} sx={{ fontWeight: "bold" }}>
          never
        </Box>{" "}
        <Box component={"span"} sx={{ textDecoration: "underline" }}>
          this
        </Box>{" "}
        close to becoming rich.
      </Typography>
      <Typography
        variant={"h4"}
        component={"body1"}
        fontWeight={"bold"}
        sx={styles.body}
      >
        {content.body01}
      </Typography>
      <Typography variant={"h4"} component={"body1"} sx={styles.body}>
        Stock analysis, Options plays, Crypto analysis, DeFi, E-commerce,
        Copywriting, Freelancing, Flipping, Financial planning, Affiliate
        Marketing, Business management,{" "}
        <Box component={"span"} fontWeight={"bold"}>
          and MORE
        </Box>
        .
      </Typography>

      <Box sx={styles.img} component={styles.img.component}>
        <Image
          src={content.img01}
          height={styles.img.height}
          width={styles.img.width}
        />
      </Box>
      <Box sx={styles.img} component={styles.img.component}>
        <Image
          src={content.img02}
          height={styles.img.height}
          width={styles.img.width}
        />
      </Box>
      <Box sx={styles.img} component={styles.img.component}>
        <Image
          src={content.img03}
          height={styles.img.height}
          width={styles.img.width}
        />
      </Box>

      {Object.entries(content).map((e, i) =>
        i > 6 && i < Object.entries(content).length - 1 ? (
          <Typography
            key={i}
            variant={"h6"}
            component={"body1"}
            sx={styles.body}
          >
            {e[1]}
          </Typography>
        ) : null
      )}

      {content.btn}
    </Box>
  );
}

export default About;
