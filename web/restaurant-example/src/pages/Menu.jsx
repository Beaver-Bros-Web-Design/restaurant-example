import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './../Pdf.css'; // Add this line to import the custom CSS override

function Menu() {
  const zoomPluginInstance = zoomPlugin();

  return (
    <div style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    

      <div className="pdf-container">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl="/Cocktail Party Sample Menu.pdf"
            plugins={[zoomPluginInstance]}
            defaultScale={0.75}
          />
        </Worker>
      </div>
    </div>
  );
}

export default Menu;
