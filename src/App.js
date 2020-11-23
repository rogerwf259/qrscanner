import React, { useState } from "react";
import QRScanner from "./components/QRScanner";

function App() {
  const [showCamera, setShowCamera] = useState(false);
  return (
    <div
      className="ui container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <h3>QR Web Scanner Demo</h3>
      <h4>To start scanning press the button...</h4>
      <button onClick={() => setShowCamera(!showCamera)}>Start Scanning</button>
      {showCamera && <QRScanner />}
    </div>
  );
}

export default App;
