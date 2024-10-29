import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import { Button, Typography } from "@mui/material";

function About() {
  const optimization = [
    "React Lazy",
    "Transitions,Suspense",
    "Stale Clouser",
    "Debouncing",
    "Tree Shaking",
    "Dead Code Elimination",
  ];
  const udemycert = [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Nodejs",
    "MUI",
    "SCSS & SASS",
  ];
  const hackrankcert = ["Java", "JavaScript", "React"];
  const about = (
    <Paper sx={{ m: 1, width: 380, height: 130 }} elevation={4}>
      <Box>
        <Typography color="#2c387e" fontSize={14} sx={{ m: 2 }}>
          I am working as IT Analyst in TCS for 4.9 Years. I have more
          experience as a frondend developer than backend developer but would
          love to work on both. I create simple and eye-catching websites and
          applications.
        </Typography>
      </Box>
    </Paper>
  );
  const Adv_skills = (
    <Paper sx={{ m: 1, width: 500, height: 150 }} elevation={4}>
      <Box sx={{ p: 2 }}>
        <Typography color="#2c387e">Skills</Typography>
        <Button
          size="small"
          variant="contained"
          color="skyblue"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>JavaScript</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="skyblue"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>HTML</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="skyblue"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>CSS</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="skyblue"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>SCSS</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="skyblue"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>GIT</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>React</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>Redux</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>MUI</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>ReactThree</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>TypeScript</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="lightyellow"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>ReactNative</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="lightyellow"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>Paper</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="lightgreen"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>NodeJS</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="lightgreen"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>Mongoose</Typography>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="lightgreen"
          sx={{ borderRadius: 80, m: 0.7 }}
        >
          <Typography fontSize={10}>MongoDB</Typography>
        </Button>
      </Box>
    </Paper>
  );
  const cert = (
    <Paper sx={{ width: 180, height: 480 }} elevation={4}>
      <Box>
        <Typography color="#2c387e" sx={{ m: 2 }}>
          Certificates
        </Typography>
        <Typography color="#900C3F" sx={{ marginLeft: 2.7 }}>
          {" "}
          Udemy
        </Typography>
        <ul>
          {udemycert.map((item, index) => (
            <li key={index}>
              <Typography color="#2c387e" fontSize={13} sx={{ marginTop: 1.3 }}>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography color="#900C3F" sx={{ marginLeft: 2.7 }}>
          {" "}
          Hackerank
        </Typography>
        <ul>
          {hackrankcert.map((item, index) => (
            <li key={index}>
              <Typography color="#2c387e" fontSize={13} sx={{ marginTop: 1.3 }}>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Paper>
  );

  const skills = (
    <Paper sx={{ m: 1, width: 190, height: 320 }} elevation={4}>
      <Box>
        <Typography fontSize={15} color="#2c387e" sx={{ m: 2, paddingTop: 2 }}>
          Opimization Technique
        </Typography>
        <ul>
          {optimization.map((item, index) => (
            <li key={index}>
              <Typography
                color="#2c387e"
                fontSize={13}
                sx={{ paddingTop: 1.7 }}
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Paper>
  );

  return (
    <Box
      sx={{
        height: 650,
        width: 600,
        position: "relative",
        zIndex: 1,
        marginTop: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Slide
          timeout={1200}
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
        >
          {about}
        </Slide>
        <Slide
          timeout={1200}
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
        >
          {cert}
        </Slide>
        <div style={{ position: "relative", bottom: "350px" }}>
          <Slide
            timeout={1200}
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
          >
            {skills}
          </Slide>
        </div>
        <div style={{ position: "relative", bottom: "350px", left: "40px" }}>
          <Slide
            timeout={1200}
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
          >
            {Adv_skills}
          </Slide>
        </div>
      </div>
    </Box>
  );
}

export default About;
