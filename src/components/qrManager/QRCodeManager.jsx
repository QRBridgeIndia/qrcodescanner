import * as React from "react";
import QRCodeItem from "./QRCodeItem";
import { Header } from "../loginForm/Header";
import apiClient from "../../api/apiClient";

export default function QRCodeManager() {
  const [qrCodeItems, setQrCodeItems] = React.useState([]);
  const [error, seterror] = React.useState(null);
  React.useEffect(() => {
    const getQrListData = async () => {
      try {
        const response = await apiClient.get("/api/products/");
        console.log(response,"response in qr code manager")
        setQrCodeItems(response.data);
      } catch (err) {
        seterror(err);
      }
    };

    getQrListData();
  }, []);
  if (error) return <div>Server Error</div>;

  return (
    <div className="flex flex-col items-center w-full bg-white min-h-screen overflow-auto">
      <Header title="Manage QR Codes" />
      <div className="w-full max-w-4xl p-4 space-y-4">

      {qrCodeItems.map((item, index) => (
        <QRCodeItem
          key={index}
          id={item.id}
          image={
            item.image ||
            "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
          }
          title={item.name}
          category={item.category_name}
        />
      ))}
          </div>
    </div>
  );
}
