// src/components/ProjectList.js

import React from "react";
import "./project.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grow, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

const Project = () => {
  const projects = [
    [
      {
        id: 1,
        title: "Cricket Info App",
        github_url: "https://github.com/Saichandan37/IndianCricketStats",
        vercel_url: "https://indian-cricket-stats.vercel.app",
        src: "./indiancricket.jpg",
      },
      {
        id: 2,
        title: "GodsVSDevil",
        github_url: "https://github.com/Saichandan37/GodsVSDevil_game",
        vercel_url: "",
        src: "godvsdevil.png",
      },
      {
        id: 3,
        title: "ArcheryGame",
        github_url:
          "https://github.com/Saichandan37/My-projects/tree/main/ArcheryGame",
        vercel_url: "",
        src: "archery.jpg",
      },
    ],
    [
      {
        id: 4,
        title: "RickNMorty Info",
        github_url: "https://github.com/Saichandan37/rick-morty",
        vercel_url: "",
        src: "ricknmorty.jpg",
      },
      {
        id: 5,
        title: "Certificates",
        github_url: "https://github.com/Saichandan37/Certificates",
        vercel_url: "",
        src: "cert.png",
      },
      {
        id: 6,
        title: "NightsJourney",
        github_url: "https://github.com/Saichandan37/EndlessKnightsJourney.git",
        vercel_url: "https://endless-knights-journey-g5wv.vercel.app",
        src: "knight.jpg",
      },
    ],
  ];
  return (
    <div className="project-grid">
      {projects.map((row, rowIndex) => (
        <div key={rowIndex} className="project-row">
          {row.map((project) => (
            <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
              <div key={project.id} className="project-card">
                <img
                  src={project.src}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <h3>{project.title}</h3>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Link to={project.github_url}>
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<GitHubIcon size="small" />}
                      color="black"
                      sx={{ borderRadius: 10 }}
                    >
                      {" "}
                      <Typography fontSize={9}>Github</Typography>
                    </Button>
                  </Link>
                  <Link to={project.vercel_url}>
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<AppsIcon size="small" />}
                      color="black"
                      sx={{ borderRadius: 10 }}
                    >
                      {" "}
                      <Typography fontSize={9}>Vercel</Typography>
                    </Button>
                  </Link>
                </div>
              </div>
            </Grow>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
