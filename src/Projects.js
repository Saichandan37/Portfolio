// src/components/ProjectList.js

import React from "react";
import "./project.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grow, Typography } from "@mui/material";

const Project = () => {
  const projects = [
    [
      {
        id: 1,
        title: "Cricket Info App",
        github_url: "https://github.com/Saichandan37/IndianCricketStats",
        src: "./indiancricket.jpg",
      },
      {
        id: 2,
        title: "GodsVSDevil",
        github_url: "https://github.com/Saichandan37/GodsVSDevil_game",
        src: "godvsdevil.png",
      },
      {
        id: 3,
        title: "ArcheryGame",
        github_url:
          "https://github.com/Saichandan37/My-projects/tree/main/ArcheryGame",
        src: "archery.jpg",
      },
    ],
    [
      {
        id: 4,
        title: "RickNMorty Info",
        github_url: "https://github.com/Saichandan37/rick-morty",
        src: "ricknmorty.jpg",
      },
      {
        id: 5,
        title: "Certificates",
        github_url: "https://github.com/Saichandan37/Certificates",
        src: "cert.png",
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
                <Link to={project.github_url}>
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<GitHubIcon size="small" />}
                    color="black"
                    sx={{ borderRadius: 10 }}
                  >
                    {" "}
                    <Typography fontSize={10}>Github</Typography>
                  </Button>
                </Link>
              </div>
            </Grow>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
