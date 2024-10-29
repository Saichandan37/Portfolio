import { Avatar, Fade, TextField, Typography, Zoom } from "@mui/material";
import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  return (
    <Zoom in={true} timeout={1000}>
      <section style={{ marginTop: "80px" }}>
        <img
          src={"./SaiChandan-bg.jpg"}
          style={{ borderRadius: "40px", width: "180px", height: "180px" }}
        />

        <div style={{ position: "relative", left: "215px", bottom: "190px" }}>
          <Typography color="#2c387e">
            <h2>Contact Me</h2>
            <p
              style={{
                display: "flex",
                direction: "row",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <AttachEmailIcon sx={{ marginRight: "10px" }} />
              saichandansingh001@gmail.com
            </p>
            <p
              style={{
                display: "flex",
                direction: "row",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <PhoneIcon sx={{ marginRight: "10px" }} />
              +91 8790578758
            </p>
            <p
              style={{
                display: "flex",
                direction: "row",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <LocationOnIcon sx={{ marginRight: "10px" }} />
              Hyderabad,India.
            </p>
          </Typography>
        </div>
      </section>
    </Zoom>
  );
}

export default Contact;
