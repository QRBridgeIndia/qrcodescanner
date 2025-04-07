import * as React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ImageGallery({ product, qr }) {
  const [qrLoading, setQrLoading] = React.useState(true);
  const [productLoading, setProductLoading] = React.useState(true);

  return (
    <div className="flex gap-5 self-center max-w-full w-[100px]">
      {/* QR Code Image with Skeleton */}
      <div className="w-24 h-24 relative overflow-hidden rounded">
        {qrLoading && <Skeleton width={96} height={96} />}
        <img
        loading="lazy"
        src={qr||"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
        }
          alt="QR code preview"
          className={`w-full h-full object-contain ${qrLoading ? "hidden" : ""}`}
          onLoad={() => setQrLoading(false)}
          onError={() => setQrLoading(false)}
        />
      </div>

      {/* Product Image with Skeleton */}
      <div className="w-24 h-24 relative overflow-hidden rounded">
        {productLoading && <Skeleton width={96} height={96} />}
        <img
          loading="lazy"
          src={
            product ||
            "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
          }
          alt="Item preview"
          className={`w-full h-full object-cover ${productLoading ? "hidden" : ""}`}
          onLoad={() => setProductLoading(false)}
          onError={() => setProductLoading(false)}
        />
      </div>
    </div>
  );
}