import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./../Pdf.css";

function Menu() {
  const zoomPluginInstance = zoomPlugin();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
        backgroundImage: "url(/images/rest_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem 0",
      }}
    >

      {/* PDF viewer container */}
        
        <div
          className="pdf-container"
          style={{
            width: "100%",
            height: "80vh", // Increased height
            overflow: "hidden", // Changed to auto from hidden
            zIndex: 2,
          }}
        >
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl="/Cocktail Party Sample Menu.pdf"
              plugins={[zoomPluginInstance]}
            />
          </Worker>
        </div>
      </div>
    
  );
}

export default Menu;
