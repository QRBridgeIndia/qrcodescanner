import * as React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ImageGallery({ product, qr }) {
  const [qrLoading, setQrLoading] = React.useState(true);
  const [productLoading, setProductLoading] = React.useState(true);

  return (
    <div className="flex gap-5 self-center max-w-full w-[100px]">
      {/* QR Code Image with Skeleton */}
      <div className="w-24 h-24 relative">
        {qrLoading && <Skeleton width={96} height={96} />}
        <img
        loading="lazy"
        src={qr||"https://api.qrbridge.in/media/qrcodes/qr_ddf26813-e7f2-4808-9c3e-010473256a88.png"
        }
          alt="QR code preview"
          className={`object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24 ${
            qrLoading ? "hidden" : ""
          }`}
          onLoad={() => setQrLoading(false)}
          onError={() => setQrLoading(false)}
        />
      </div>

      {/* Product Image with Skeleton */}
      <div className="w-24 h-24 relative">
        {productLoading && <Skeleton width={96} height={96} />}
        <img
          loading="lazy"
          src={
            product ||
            "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
          }
          alt="Item preview"
          className={`object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24 ${
            productLoading ? "hidden" : ""
          }`}
          onLoad={() => setProductLoading(false)}
          onError={() => setProductLoading(false)}
        />
      </div>
    </div>
  );
}