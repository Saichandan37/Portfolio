import { Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import "./styles.css";

function DownloadResume() {
  return (
    <div className="downloadbutton">
      <a href="/SaiChandan_resume.pdf" download>
        <Tooltip title="Download">
          <Button
            size="small"
            variant="contained"
            startIcon={
              <SystemUpdateAltIcon size="small" sx={{ borderRadius: 80 }} />
            }
          >
            <Typography fontSize={13}>Resume</Typography>
          </Button>
        </Tooltip>
      </a>
    </div>
  );
}

export default DownloadResume;
