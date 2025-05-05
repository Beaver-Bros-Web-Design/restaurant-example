import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Menu() {
  const zoomPluginInstance = zoomPlugin();
  const { zoomTo } = zoomPluginInstance;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Menu</h1>

      <div style={{ height: "80vh", maxWidth: "630px", border: "1px solid rgba(0, 0, 0, 0.3)" }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl="/Cocktail Party Sample Menu.pdf"
            plugins={[zoomPluginInstance]}
            onDocumentLoad={() => {
            
              zoomTo(0.75);
            }}
          />
        </Worker>
      </div>
    </div>
  );
}

export default Menu;
