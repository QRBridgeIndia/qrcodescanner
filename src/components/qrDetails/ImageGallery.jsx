// import * as React from "react";

// export function ImageGallery({ product, qr }) {
//   const [loading,setLoading] = React.useState(true);

//   console.log(product);
//   return (
//     <div className="flex gap-5 self-center max-w-full w-[100px]">
//       <img
//         loading="lazy"
//         src={('https://api.qrbridge.in' + qr)||"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
//         }
//         alt="QR code preview"
//         className="object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24"
//       />
//        {/* Product Image with Loader */}
//       <div className="relative w-24 h-24">
//         {loading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded">
//             <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
//           </div>
//         )}
//         <img
//           loading="lazy"
//           src={
//             product ||
//             "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
//           }
//           alt="Item preview"
//           className={`object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24 ${
//             loading ? "hidden" : ""
//           }`}
//           onLoad={() => setLoading(false)}
//           onError={() => setLoading(false)}
//         />
//       </div>
//     </div>
//   );
// }

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
          src={
            qr
              ? "https://api.qrbridge.in" + qr
              : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
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