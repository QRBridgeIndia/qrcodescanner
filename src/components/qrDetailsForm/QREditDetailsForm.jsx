import * as React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { InputFieldAddItem } from "./InputFieldAddItem";
import { Header } from "../loginForm/Header";
import { useCustomNavigate } from "../../functions/navigate";
import apiClient from "../../api/apiClient";
import { useParams } from "react-router-dom";

const privacySettings = [
  { label: "Show Personal Information on QR Scan", id: "show_personal_info" },
  { label: "Show Emergency Contacts on QR Scan", id: "show_emergency_contacts" },
  { label: "Show Address on QR Scan", id: "show_address" },
];

function QREditForm() {
  const { id } = useParams();
  const navigate = useCustomNavigate();
  const [formValues, setFormValues] = React.useState({
    name: "",
    owner_name: "",
    description: "",
    id: '',
    qr_code_id: '',
    switches: {
      show_personal_info: false,
      show_emergency_contacts: false,
      show_address: false,
    },
  });
  const [photo, setPhoto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(`/api/products/${id}`);
        console.log(response.data, "response.data");

        const data = response.data;
        setFormValues({
          name: data.name,
          owner_name: data.owner_name,
          description: data.description,
          id: data.id,
          qr_code_id: data.qr_code_details?.qr_code_id || "",
          switches: {
            show_personal_info: data.show_personal_info,
            show_emergency_contacts: data.show_emergency_contacts,
            show_address: data.show_address,
          },
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("owner_name", formValues.owner_name);
    formData.append("description", formValues.description);
    formData.append("qr_code_id", formValues.qr_code_id);
    formData.append("id",formValues.id);
    formData.append("show_personal_info", formValues.switches.show_personal_info);
    formData.append("show_emergency_contacts", formValues.switches.show_emergency_contacts);
    formData.append("show_address", formValues.switches.show_address);
    // formData.append("is_active",true);
    // formData.append("is_missing",true);

    if (photo) {
      formData.append("image", photo);
    }
     const formDataObject = Object.fromEntries(formData.entries());
     console.log(formDataObject,"formDataObject");

    try {
      const response = await apiClient.put(`/api/products/${id}/`, formData);
      console.log(response,"response from edit form submission")
      navigate(`/qr-details/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    navigate(`/qr-details/${id}`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <form className="flex flex-col pb-5 w-full bg-white" onSubmit={handleSubmit}>
      <Header title="Edit QR Details" />
      <div className="flex flex-col px-5 mt-5 w-full">
        <InputFieldAddItem label="QR Name" value={formValues.name} id="name" onChange={handleInputChange} />
        <div className="self-start mt-5 text-xs font-medium text-zinc-500">Item Photo</div>
        <div className="flex flex-wrap gap-5 justify-between px-3.5 py-4 mt-2 border border-gray-200 rounded">
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="photo-upload" />
          <label htmlFor="photo-upload" className="text-gray-600 font-semibold cursor-pointer">Click to Upload a Photo</label>
          {photo && <img src={URL.createObjectURL(photo)} alt="Selected" className="max-w-[100px] h-auto rounded-lg shadow-md mt-3" />}
        </div>
        <InputFieldAddItem label="Owner Name" value={formValues.owner_name} id="owner_name" onChange={handleInputChange} />
        <InputFieldAddItem label="Description" value={formValues.description} id="description" multiline onChange={handleInputChange} />
        {privacySettings.map((setting) => (
          <ToggleSwitch key={setting.id} label={setting.label} id={setting.id} isChecked={formValues.switches[setting.id]} onChange={handleSwitchChange} />
        ))}
        <div className="flex mt-6 space-x-3">
          <button
            type="button"
            className="flex-1 px-6 py-5 text-sm font-medium border-2 border-blue-300 text-blue bg-white-500 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-5 text-sm font-medium text-white bg-blue-600 rounded"
          >
            Save Changes
          </button>
        </div>

      </div>
    </form>
  );
}

export default QREditForm;
