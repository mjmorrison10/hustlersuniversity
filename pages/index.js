import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "./api/about";
import Faq from "./faq";
import Introduction from "./Introduction";
import Success from "./success";

export default function Home() {
  const content = {
    head: {
      title: `Hustler's University`,
      meta: {
        name: `Hustler's University`,
        content: `This is a community where I and dozens of hand-picked War Room members will teach you everything we know about money. Full resources, full lesson plans, everything you need to get rich and it all starts with you making your first money TODAY.`,
      },
    },
  };

  const containerStyles = {
    component: "main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Box sx={containerStyles} component={containerStyles.component}>
      <Head>
        <title>{content.head.title}</title>
        <meta
          name={content.head.meta.name}
          content={content.head.meta.content}
        />

        <link rel="icon" href="/images/icon.jpg" />
      </Head>

      <Introduction />

      <About />

      <Success />

      <Faq />
    </Box>
  );
}
