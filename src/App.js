import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import CustomText from "./CustomText";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./styles.css";
import { Tooltip, Typography } from "@mui/material";
import DownloadResume from "./DownloadResume";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProjectList from "./Projects";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const linkstyle = {
  color: "#ffbaf6",
};
function App() {
  return (
    <>
      <Home />
      <Router>
        <div className="outlet">
          <ButtonGroup>
            <Button color="primary" startIcon={<PersonIcon />}>
              {" "}
              <Link to="/about" style={linkstyle}>
                <Typography fontSize={12}> About Me </Typography>
              </Link>{" "}
            </Button>
            <Button color="primary" startIcon={<ReceiptLongIcon />}>
              {" "}
              <Link to="/projects" style={linkstyle}>
                <Typography fontSize={12}>Projects</Typography>
              </Link>{" "}
            </Button>
            <Button color="primary" startIcon={<ContactPageIcon />}>
              {" "}
              <Link to="/contact" style={linkstyle}>
                <Typography fontSize={12}>Contact</Typography>
              </Link>{" "}
            </Button>
            <Button color="primary" startIcon={<ArrowUpwardIcon />}>
              {" "}
              <Link to="/" style={linkstyle}>
                <Typography fontSize={12}> Hide </Typography>
              </Link>{" "}
            </Button>
          </ButtonGroup>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <div className="container">
        <Typography color="#2c387e">
          <h1>Hi👋🏻 ,I'm Sai Chandan</h1>
          <p>I'm a Web Developer!</p>
        </Typography>
        <CustomText />
        <DownloadResume />
        <div className="hublinks">
          <ButtonGroup variant="outline">
            <Router>
              <Link to="https://github.com/Saichandan37" style={linkstyle}>
                <Tooltip title="Github">
                  <Button endIcon={<GitHubIcon />} />
                </Tooltip>
              </Link>
              <Link
                to="https://www.linkedin.com/in/sai-chandan-singh-pattipati-530a44289"
                style={linkstyle}
              >
                <Tooltip title="LinkedIn">
                  <Button endIcon={<LinkedInIcon />} />
                </Tooltip>
              </Link>
            </Router>
          </ButtonGroup>
        </div>
        <Outlet />
      </div>
    </>
  );
}
