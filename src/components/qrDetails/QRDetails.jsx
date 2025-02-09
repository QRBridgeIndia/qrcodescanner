import * as React from "react";
import { ImageGallery } from "./ImageGallery";
import { InfoField } from "./InfoField";
import { ActionButton } from "./ActionButton";
import { Header } from "../loginForm/Header";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { convertToHumanReadable } from "../../utils/dateUtils";
import RewardForm from '../rewardForm/RewardForm'
import { ToggleButton } from "./ToggleButton";

export function QRDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);
  const [error, seterror] = React.useState(null);
  React.useEffect(() => {
    const getQrListData = async (productId) => {
      try {
        const response = await apiClient.get(`/api/products/${productId}`);
        console.log(response, "hii")
        setProductDetails(response.data);
      } catch (err) {
        seterror(err);
      }
    };
    getQrListData(id);
  }, [id, refresh]);
  console.log(productDetails);

  if (error) return <div>Server Error</div>;

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

  const privacySettings = [
    {
      label: "Show Personal Information on QR Scan",
      id: "show_personal_info",
      value: productDetails?.show_personal_info,
    },
    {
      label: "Show Emergency Contacts on QR Scan",
      id: "show_emergency_contacts",
      value: productDetails?.show_emergency_contacts,
    },
    {
      label: "Show Address on QR Scan",
      id: "show_address",
      value: productDetails?.show_address,
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

      // Create FormData object
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
    setProductDetails((prev) => ({
      ...prev,
      bounty_amount: newReward,
      note: newNote,
    }));
    setRefresh((prev) => !prev);
    setShowForm(false);
  };

  return (
    <div className="flex flex-col pb-5 w-full bg-white max-md:max-w-full relative">
      {/* {showForm && <RewardForm onClose={() => setShowForm(false)} />} */}
      <Header title="Details" />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <ImageGallery qr={productDetails?.qr_code_details?.qr_image} product={productDetails?.image} />
        <div className="flex flex-col items-start mt-6 ml-5 max-w-full font-medium w-[161px] max-md:ml-2.5">
          {infoFields.map((field, index) => (
            <div
              key={index}
              className={`${index > 0 ? "mt-6" : ""} ${field.label === "Description" ? "self-stretch w-full" : ""
                }`}
            >
              <InfoField label={field.label} value={field.value} />
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col items-start mt-6 ml-5 max-w-full font-medium w-[161px] max-md:ml-2.5">
          {privacySettings.map((setting, index) => (
            <div key={index} className={`${index > 0 ? "mt-6" : ""}`}>
              <ToggleButton
                label={setting.label}
                isChecked={setting.value === true}
              />
            </div>
          ))}
        </div> */}

        <div className="flex gap-5 self-center mt-5 max-w-full text-sm font-medium tracking-normal leading-snug text-center whitespace-nowrap w-[268px]">
          <ActionButton
            text="Edit"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6a99887ded36492dec48b6e64278fff68195da252e2ebf0f065f5f1198c76ea7?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            bgColor="bg-blue-500"
            onClick={handleEdit}
          />
          <ActionButton
            text={productDetails?.is_active ? "Deactivate" : "Activate"}
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8eededb5b6b9e79fb644e3f175e530dd6475687d43eb9875ca51044af72a5c92?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            bgColor={productDetails?.is_active ? "bg-red-600" : "bg-green-600"}
            onClick={handleToggleStatus}
          />
        </div>

        {(productDetails?.bounty_amount > 0 || (productDetails?.note && productDetails.note.trim() !== "")) && (
          <div className="mt-4 p-4 border rounded font-bold">
            {productDetails?.bounty_amount > 0 && <InfoField label="Reward" value={productDetails.bounty_amount} />}
            {productDetails?.note?.trim() !== "" && <InfoField label="Note" value={productDetails.note} />}
          </div>
        )}

        {showForm && (
          <RewardForm
            onClose={() => setShowForm(false)}
            id={id}
            reward={productDetails?.bounty_amount}
            note={productDetails?.note}
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
                <img loading="lazy" src="/path-to-report-icon.png" alt="" className="object-contain w-4 aspect-square" />
              </div>
            </button>
          </div>
        ) : (

          <div className="flex flex-col gap-4 mt-5 w-full max-w-[560px]">
            <button
              onClick={handleReward}
              className="flex overflow-hidden gap-2 justify-center items-center self-center px-6 py-4 mt-5 w-1/2 text-sm font-medium tracking-normal leading-snug text-center text-white bg-yellow-500 rounded max-w-[560px] min-h-[48px] max-md:px-5 max-md:max-w-full"
            >
              <div className="flex gap-2 items-center self-stretch my-auto">
                <span className="self-stretch my-auto">Report as Lost</span>
                <img loading="lazy" src="/path-to-report-icon.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
