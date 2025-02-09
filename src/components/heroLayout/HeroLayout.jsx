// import { useEffect, useRef, useState } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";
// import apiClient from "../../api/apiClient";
// import { useNavigate } from "react-router-dom";

// export default function QRScanner() {
//   const [scanResult, setScanResult] = useState("");
//   const [apiResponse, setApiResponse] = useState(null);
//   const scannerRef = useRef(null);
//   const navigate = useNavigate();
//   const errorTimeoutRef = useRef(null);

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("qr-reader", {
//       fps: 5,
//       qrbox: { width: 250, height: 250 },
//       disableStartScanButton: true,
//       disableFlip: false,
//       disableScanFromCamera: false,
//     },true);

//     function success(result) {
//       setScanResult(result);
//       fetchQrCodeData(result).finally(() => {
//         scanner.clear().catch((err) => console.warn("Error clearing scanner:", err));
//       });
//     }

//     function error(err) {
//       if (errorTimeoutRef.current) return;

//       console.warn("Scanner error:", err);
//       errorTimeoutRef.current = setTimeout(() => {
//         errorTimeoutRef.current = null;
//       }, 5000);
//     }

//     scanner.render(success, error);
//     scannerRef.current = scanner; // Store scanner reference

//     return () => {
//       if (scannerRef.current) {
//         scannerRef.current.clear().catch((err) => console.warn("Error clearing scanner on unmount:", err));
//         scannerRef.current = null;
//       }
//     };
//   }, []);

//   const fetchQrCodeData = async (scannedText) => {
//     try {
//       const qrCodeId = extractQrCodeId(scannedText);
//       if (!qrCodeId) return;

//       const response = await apiClient.get(`/api/qr-codes/${qrCodeId}/check-reg/`);
//       console.log("API Response:", response);
//       const data = await response.data;
//       setApiResponse(data);
//       scannerRef.current.clear();

//       if (data.is_registered) {
//         window.location.href = `https://api.qrbridge.in/public/scan?qr_code_id=${qrCodeId}`;
//       } else {
//         navigate(`/categories/${qrCodeId}`, { replace: true });
//       }
//     } catch (error) {
//       console.error("Error fetching QR code data:", error);
//     }
//   };

//   const extractQrCodeId = (text) => {
//     const match = text.match(/qr_code_id=([a-f0-9\-]+)/);
//     return match ? match[1] : text;
//   };


//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>

//       {!scanResult ? (
//         <div
//           id="qr-reader"
//           className="w-full  mx-auto border-4 border-blue-500 shadow-lg overflow-hidden"
//         ></div>
//       ) : (
//         <div className="mt-2 p-2 bg-white shadow rounded">
//           <p className="text-green-600 font-semibold">Scanned Successfully</p>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";

export default function QRScanner() {
  const [scanResult, setScanResult] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const scannerRef = useRef(null);
  const isScannerInitialized = useRef(false); 
  const navigate = useNavigate();
  const errorTimeoutRef = useRef(null);

  useEffect(() => {
    if (isScannerInitialized.current) return;
    isScannerInitialized.current = true;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 5,
        qrbox: { width: 250, height: 250 },
        disableStartScanButton: true,
        disableFlip: false,
        disableScanFromCamera: false,
      },
      false 
    );

    function success(result) {
      setScanResult(result);
      fetchQrCodeData(result).finally(() => {
        scanner.clear().catch((err) => console.warn("Error clearing scanner:", err));
      });
    }

    function error(err) {
      if (errorTimeoutRef.current) return;

      console.warn("Scanner error:", err);
      errorTimeoutRef.current = setTimeout(() => {
        errorTimeoutRef.current = null;
      }, 5000);
    }

    scanner.render(success, error);
    scannerRef.current = scanner; 

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((err) => console.warn("Error clearing scanner on unmount:", err));
        scannerRef.current = null;
      }
    };
  }, []);

  const fetchQrCodeData = async (scannedText) => {
    try {
      const qrCodeId = extractQrCodeId(scannedText);
      if (!qrCodeId) return;

      const response = await apiClient.get(`/api/qr-codes/${qrCodeId}/check-reg/`);
      console.log("API Response:", response);
      const data = await response.data;
      setApiResponse(data);
      scannerRef.current.clear();

      if (data.is_registered) {
        window.location.href = `https://api.qrbridge.in/public/scan?qr_code_id=${qrCodeId}`;
      } else {
        navigate(`/categories/${qrCodeId}`, { replace: true });
      }
    } catch (error) {
      console.error("Error fetching QR code data:", error);
    }
  };

  const extractQrCodeId = (text) => {
    const match = text.match(/qr_code_id=([a-f0-9\-]+)/);
    return match ? match[1] : text;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>

      {!scanResult ? (
        <div
          id="qr-reader"
          className="w-full mx-auto border-4 border-blue-500 shadow-lg overflow-hidden"
        ></div>
      ) : (
        <div className="mt-2 p-2 bg-white shadow rounded">
          <p className="text-green-600 font-semibold">Scanned Successfully</p>
        </div>
      )}
    </div>
  );
}