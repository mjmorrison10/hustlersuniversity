import { Button } from "@mui/material";
import React from "react";

function EnrollBtn() {
  const content = {
    btn: `Enroll NOW!`,
    link: `https://bit.ly/HU2-ss2`,
  };

  return (
    <Button variant={"contained"} color={"error"} href={content.link}>
      {content.btn}
    </Button>
  );
}

export default EnrollBtn;
