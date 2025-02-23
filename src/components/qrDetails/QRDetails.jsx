import * as React from "react";
import { ImageGallery } from "./ImageGallery";
import Skeleton from "react-loading-skeleton";
import { InfoField } from "./InfoField";
import { ActionButton } from "./ActionButton";
import { Header } from "../loginForm/Header";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { convertToHumanReadable } from "../../utils/dateUtils";
import RewardForm from '../rewardForm/RewardForm';

export function QRDetails({setHideFooter}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);
  const [error, seterror] = React.useState(null);
  const [qr, setQr] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getQrListData = async (productId) => {
      try {
        setLoading(true);
        const response = await apiClient.get(`/api/products/${productId}`);
        console.log(response, "hii")
        setQr(response.data?.qr_code_details?.qr_image);
        setProductDetails(response.data);
      } catch (err) {
        seterror(err);
      } finally {
        setLoading(false);
      }
    };
    getQrListData(id);
  }, [id, refresh]);

  React.useEffect(() => {
    setHideFooter(showForm);
  }, [showForm, setHideFooter]);

  if (error?.message) return <div>Server Error: {error.message}</div>;

  const infoFields = [
    { label: "QR Name", value: productDetails?.name },
    { label: "Category", value: productDetails?.category_name },
    { label: "Owner Name", value: productDetails?.owner_name },
    { label: "Description", value: productDetails?.description },
    {
      label: "Date Registered",
      value: convertToHumanReadable(productDetails?.created_at),
    },
  ];

  const handleReward = () => {
    setShowForm(true);
  };

  const handleEdit = () => {
    navigate(`/edit-qrdetails/${id}`);
  }

  const handleToggleStatus = async () => {
    try {
      const newStatus = !productDetails?.is_active;
      const formData = new FormData();
      formData.append("is_active", newStatus);
      formData.append("name", productDetails?.name);
      formData.append("qr_code_id", productDetails?.qr_code_details.qr_code_id);

      const response = await apiClient.put(`/api/products/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(`Product ${newStatus ? "Activated" : "Deactivated"}:`, response.data);
      alert(`Product ${newStatus ? "Activated" : "Deactivated"} Successfully!`);

      setProductDetails((prev) => ({
        ...prev,
        is_active: newStatus,
      }));
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update product status. Please try again.");
    }
  };

  const updateRewardDetails = (newReward, newNote) => {
    if (newNote.length > 100) {
      alert("Note cannot exceed 100 characters.");
      return;
    }
    setProductDetails((prev) => ({
      ...prev,
      bounty_amount: newReward,
      note: newNote,
    }));
    setRefresh((prev) => !prev);
    setShowForm(false);
  };

  return (
    <div className="flex flex-col px-5 pt-3 pb-52 w-full bg-white max-md:max-w-full relative h-screen">
      <Header title="Details" />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        {/* Image Gallery with Skeleton */}
        {loading ? (
          <Skeleton height={200} width={"100%"} />
        ) : (
          <ImageGallery qr={qr} product={productDetails?.image} />
        )}
        {/* Info Fields with Skeleton */}
        <div className="flex flex-col items-start mt-6 ml-5 max-w-full font-medium w-[161px] max-md:ml-2.5">
          {infoFields.map((field, index) => (
            <div key={index} className={`${index > 0 ? "mt-6" : ""}`}>
              {loading ? (
                <Skeleton width={200} height={20} />
              ) : (
                <InfoField label={field.label} value={field.value} />
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons with Skeleton */}
        <div className="flex gap-5 self-center mt-5 max-w-full text-sm font-medium tracking-normal leading-snug text-center whitespace-nowrap w-[268px]">
          {loading ? (
            <>
              <Skeleton width={100} height={40} />
              <Skeleton width={100} height={40} />
            </>
          ) : (
            <>
              <ActionButton
                text="Edit"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6a99887ded36492dec48b6e64278fff68195da252e2ebf0f065f5f1198c76ea7?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
                bgColor="bg-blue-500"
                onClick={handleEdit}
              />
              <ActionButton
                text={productDetails?.is_active ? "Deactivate" : "Activate"}
                icon={
                  productDetails?.is_active
                    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/8eededb5b6b9e79fb644e3f175e530dd6475687d43eb9875ca51044af72a5c92?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
                    : "https://cdn-icons-png.flaticon.com/512/190/190411.png"
                }
                bgColor={productDetails?.is_active ? "bg-red-600" : "bg-green-600"}
                onClick={handleToggleStatus}
              />
            </>
          )}
        </div>

        {/* Reward and Note with Skeleton */}
        {loading ? (
          <Skeleton height={50} width={"100%"} />
        ) : (
          <div className="mt-3 border rounded bg-white shadow">
            {/* Reward Section */}
            {productDetails?.bounty_amount > 0 && (
              <div className="p-2 text-center border-b">
                <p className="text-sm text-gray-500">Reward</p>
                <p className="text-lg font-semibold">₹ {productDetails.bounty_amount}</p>
              </div>
            )}

            {/* Note Section */}
            {productDetails?.note?.trim() !== "" && (
              <div className="p-2 text-center">
                <p className="text-sm text-gray-500">Note</p>
                <p className="text-base font-semibold">{productDetails.note}</p>
              </div>
            )}
          </div>)}

        {showForm && (
          <RewardForm
            onClose={() => setShowForm(false)}
            id={id}
            reward={productDetails?.bounty_amount}
            note={productDetails?.note}
            is_missing={productDetails?.is_missing}
            onUpdate={updateRewardDetails}
          />
        )}

        {productDetails?.is_missing ? (
          <div className="flex flex-col gap-4 mt-5 w-full max-w-[560px]">
            <button
              onClick={handleReward}
              className="flex overflow-hidden gap-2 justify-center items-center px-6 py-4 w-full text-sm font-medium tracking-normal leading-snug text-center text-white bg-yellow-500 rounded min-h-[48px] max-md:px-5"
            >
              <div className="flex gap-2 items-center">
                <span>Cancel/Edit Reward</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>
            </button>
          </div>
        ) : (

          <div className="flex flex-col gap-4 mt-5 w-full max-w-[560px]">
            <button
              onClick={handleReward}
              className="flex overflow-hidden gap-2 justify-center items-center px-6 py-4 w-full text-sm font-medium tracking-normal leading-snug text-center text-white bg-yellow-500 rounded min-h-[48px] max-md:px-5"
            >
              <div className="flex gap-2 items-center self-stretch my-auto">
                <span className="self-stretch my-auto">Report as Lost</span>
                <img
                  loading="lazy"
                  src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
                  alt="Report Icon"
                  className="object-contain shrink-0 w-4 aspect-square"
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
