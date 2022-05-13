import { Container, Typography } from "@mui/material";
import React from "react";

function AboutUs() {
  return (
    <div>
      <header
        style={{
          background: "#17a2b8",
          height: "200px",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          paddingBottom: "3rem",
          paddingTop: "3rem",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "white",
            position: "relative",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          About Us
        </h1>
      </header>
      <Container>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ p: "30px" }}>
            Our Story
          </Typography>
          <Typography variant="body1">
            Oner was founded in 2022. Our goal is to distribute the benefits of
            AI to the world. We build software with the philosophy that it has
            to be very easy to use while providing state-of-the-art performance.
            This is to maximize AI accessiblity for everyone in preparation to
            the upcoming AI revolution.We want to distribute AI to wider
            audiences by providing no-code AI platform for everyone. Our no-code
            OCR service is launching in May, 2022 for customers aiming to apply
            OCR technology to their specific use cases.
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
