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
        disableScanFromFile: true, 
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
      console.warn("Scanner error:", err);
    }
  
    scanner.render(success, error);
    scannerRef.current = scanner;
  
    setTimeout(() => {
      const scanImageLink = document.querySelector("#qr-reader a");
      if (scanImageLink) {
        scanImageLink.style.display = "none";
      }
    }, 1000);
  
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
      const data = await response.data;
      setApiResponse(data);
      scannerRef.current.clear();

      if (data.is_registered) {
        window.location.href = `https://api.qrbridge.in/public/scan?qr_code_id=${qrCodeId}`;
      } else {
        alert('InValid QR, Register QR');
        navigate(`/register`, { replace: true });
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
    <div className="flex flex-col items-center justify-start bg-white p-4 mt-10">
      <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>

      {!scanResult ? (
        <>
        <div
          id="qr-reader"
          className="w-full mx-auto border-4 border-blue-500 shadow-lg overflow-hidden"
        ></div>
        </>
      ) : (
        <div className="mt-2 p-2 bg-white shadow rounded">
          <p className="text-green-600 font-semibold">Scanned Successfully</p>
        </div>
      )}
    </div>
  );
}