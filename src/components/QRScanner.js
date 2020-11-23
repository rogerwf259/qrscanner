import React, { useState } from "react";
import QrReader from "react-qr-reader";

export default function QRScanner() {
  const [result, setResult] = useState("");
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="ui segment" style={{ width: "50%" }}>
      <div className="card">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </div>
      {result && (
        <div className="ui segment">
          <h4>Info: {result}</h4>
        </div>
      )}
    </div>
  );
}
