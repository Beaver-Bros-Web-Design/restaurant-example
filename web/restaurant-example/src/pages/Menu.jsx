import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { Box } from "@mui/material"; // Import Box from Material UI
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./../Pdf.css";

function Menu() {
  const zoomPluginInstance = zoomPlugin();

  return (
    <div style={{ position: "relative", height: "auto" }}>

    

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
        backgroundImage: "url(/images/menu_background.png)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingY: "2rem",
      }}
    >




      <Box
        className="pdf-container"
        sx={{
          width: "100%",
          overflow: "hidden",
         
        }}
      >
        <Box sx={{}}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl="/nobumenu.pdf"
              plugins={[zoomPluginInstance]}
              renderError={(error) => (
                <div>Error loading PDF: {error.message}</div>
              )}
              renderLoader={() => <div>Loading...</div>}
              scrollMode="Vertical"
            />
          </Worker>
        </Box>
      </Box>
    </Box>
    </div>
  );
}

export default Menu;
