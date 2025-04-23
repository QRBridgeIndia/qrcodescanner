import * as React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { InputFieldAddItem } from "./InputFieldAddItem";
import { Header } from "../loginForm/Header";
import { useCustomNavigate } from "../../functions/navigate";
import { useQueryData } from "../../functions/useQueryData";
// import imageCompression from 'browser-image-compression';
import apiClient from "../../api/apiClient";

const privacySettings = [
  {
    label: "Show Personal Information on QR Scan",
    id: "show_personal_info",
  },
  {
    label: "Show Emergency Contacts on QR Scan",
    id: "show_emergency_contacts",
  },
  {
    label: "Show Address on QR Scan",
    id: "show_address",
  },
];

function QRDetailsForm() {
  const { qr_code_id, category_id } = useQueryData();
  const navigate = useCustomNavigate();
  const [formValues, setFormValues] = React.useState({
    name: "",
    owner_name: "",
    description: "",
    qr_code_id,
    category_id,
    switches: {
      show_personal_info: false,
      show_emergency_contacts: false,
      show_address: false,
    },
  });
  const [photo, setPhoto] = React.useState(null); 
  const [descriptionError, setDescriptionError] = React.useState("");


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "description") {
      if (value.length > 50) {
        setDescriptionError("Description cannot exceed 42 characters.");
      } else {
        setDescriptionError("");
      }
    }
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSwitchChange = (id, checked) => {
    setFormValues((prev) => ({
      ...prev,
      switches: { ...prev.switches, [id]: checked },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file); 
    }
  };

  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   if(!file)return;
  //   try {
  //     const options = {
  //       maxSizeMB: 1, 
  //       maxWidthOrHeight: 1024, 
  //       useWebWorker: true,
  //     };
  
  //     const compressedFile = await imageCompression(file, options);
  //     setPhoto(compressedFile);
  //     console.log('Original file size:', file.size / 1024, 'KB');
  //     console.log('Compressed file size:', compressedFile.size / 1024, 'KB');
  //   } catch (error) {
  //     console.error('Image compression error:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.description.length > 100) {
      setDescriptionError("Description cannot exceed 100 characters.");
      return;
    }
  
    console.log("Form Values Before Sending:", formValues);
  
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("qr_code_id", formValues.qr_code_id);
    formData.append("category_id", formValues.category_id);
    formData.append("description", formValues.description);
    formData.append("owner_name", " ");
    formData.append("show_personal_info", String(formValues.switches.show_personal_info));
    formData.append("show_emergency_contacts", String(formValues.switches.show_emergency_contacts));
    formData.append("show_address", String(formValues.switches.show_address));
  
    if (photo) {
      formData.append("image", photo);
      console.log("Photo added to FormData:", photo);
    } else {
      console.warn("Photo is missing!");
    }
  
    console.log("FormData Contents:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      const response = await apiClient.post("/api/products/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response);
      navigate("/qr-manager");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };  

  return (
    <form
      className="flex flex-col pb-5 w-full bg-white max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <Header title="Enter Details" />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <InputFieldAddItem
          label="QR Name"
          value={formValues.name}
          id="name"
          onChange={handleInputChange}
        />
        <div className="self-start mt-5 text-xs font-medium tracking-tight leading-relaxed text-gray-500">
          Item Photo
        </div>
        <div className="flex flex-wrap gap-5 justify-between px-3.5 py-4 mt-2 text-sm font-medium tracking-normal leading-snug text-gray-400 rounded border border-gray-200 border-solid bg-neutral-50 max-md:max-w-full">
          <div className="my-auto flex items-center justify-center w-full border-dashed border-2 border-gray-300 p-6 cursor-pointer rounded-lg">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="text-gray-600 font-semibold"
            >
              Click to Upload a Photo
            </label>
          </div>

          {photo && (
            <div className="flex flex-col items-center justify-center">
              <img
                src={URL.createObjectURL(photo)} 
                alt="Selected"
                className="object-contain max-w-[100px] h-auto rounded-lg shadow-md mt-3"
              />
              <div className="text-xs text-gray-500 mt-2">Preview</div>
            </div>
          )}
        </div>
        {/* <InputFieldAddItem
          label="Owner Name"
          value={formValues.owner_name}
          id="owner_name"
          onChange={handleInputChange}
        /> */}
        {/* <InputFieldAddItem
          label="Description"
          value={formValues.description}
          id="description"
          multiline
          onChange={handleInputChange}
        /> */}

        {/* Description Input with Validation */}
        <InputFieldAddItem
          label="Description"
          value={formValues.description}
          id="description"
          multiline
          onChange={handleInputChange}
          maxLength={100}
        />
        {descriptionError && <p className="text-red-500 text-xs mt-1">{descriptionError}</p>}

        {privacySettings.map((setting) => (
          <ToggleSwitch
            key={setting.id}
            label={setting.label}
            id={setting.id}
            isChecked={formValues.switches[setting.id]}
            onChange={handleSwitchChange}
          />
        ))}
        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-4 mb-4 text-sm font-medium tracking-normal leading-snug text-center text-white whitespace-nowrap bg-indigo-500 rounded min-h-[48px] max-md:px-5"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default QRDetailsForm;