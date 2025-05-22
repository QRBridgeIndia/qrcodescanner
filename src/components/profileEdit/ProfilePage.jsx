import React, { useEffect, useState } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { EmergencyContact } from "./EmergencyContact";
import { AddressSection } from "./AddressSection";
import { FormButtons } from "./FormButtons";
import { Header } from "../loginForm/Header";
import apiClient from "../../api/apiClient";
import { useCustomNavigate } from "../../functions/navigate";
import { useQueryData } from "../../functions/useQueryData";

export default function ProfilePage() {
  const navigate = useCustomNavigate();
  const { data } = useQueryData();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    blood_group: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergency_contacts: [{ name: "", phone: "", relationship: "" }],
    image: null,
  });

  // State to track validation errors for emergency contact
  const [errors, setErrors] = useState({
    emergency_contacts: [{ name: "", phone: "", relationship: "" }],
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name ?? "",
        dob: data.dob ?? "",
        blood_group: data.blood_group ?? "",
        address: data.address ?? "",
        city: data.city ?? "",
        state: data.state ?? "",
        pincode: data.pincode ?? "",
        emergency_contacts:
          data.emergency_contacts?.length > 0
            ? data.emergency_contacts
            : [{ name: "", phone: "", relationship: "" }],
        image: data.image || null,
      });
    }
  }, [data]);

  const handleInputChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedContacts = [...prev.emergency_contacts];
      updatedContacts[index][field] = value;
      return { ...prev, emergency_contacts: updatedContacts };
    });

    // Clear error for the field being updated
    setErrors((prev) => {
      const updatedErrors = [...prev.emergency_contacts];
      updatedErrors[index] = { ...updatedErrors[index], [field]: "" };
      return { ...prev, emergency_contacts: updatedErrors };
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    } else {
      alert("Please select a valid image file.");
    }
  };

  const validateEmergencyContact = () => {
    const newErrors = formData.emergency_contacts.map((contact) => {
      const contactErrors = {};
      if (!contact.name.trim()) {
        contactErrors.name = "Name is required";
      }
      if (!contact.phone.trim()) {
        contactErrors.phone = "Phone number is required";
      }
      if (!contact.relationship.trim()) {
        contactErrors.relationship = "Relationship is required";
      }
      return contactErrors;
    });

    setErrors({ emergency_contacts: newErrors });
    return newErrors.every(
      (error) => Object.keys(error).length === 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate emergency contact fields
    const isValid = validateEmergencyContact();
    if (!isValid) {
      alert("Please fill in all required emergency contact fields.");
      return;
    }

    try {
      const profileData = new FormData();
      profileData.append("name", formData.name);
      profileData.append("dob", formData.dob);
      profileData.append("blood_group", formData.blood_group);
      profileData.append("address", formData.address);
      profileData.append("city", formData.city);
      profileData.append("state", formData.state);
      profileData.append("pincode", formData.pincode);
      if (formData.image instanceof File) {
        profileData.append("image", formData.image);
      }

      await apiClient.patch("/auth/edit-profile/", profileData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const emergency = formData?.emergency_contacts[0];

      if (data.emergency_contacts.length > 0 && data.emergency_contacts[0]?.id) {
        // Update existing emergency contact (PUT request)
        await apiClient.put(
          `/auth/emergency-contact/${data.emergency_contacts[0].id}/`,
          emergency
        );
      } else {
        // Create new emergency contact (POST request)
        await apiClient.post(`/auth/emergency-contact/`, formData.emergency_contacts);
      }

      navigate("/profile");
    } catch (err) {
      console.error("Error updating profile or contacts:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white max-md:max-w-full overflow-auto">
      <Header title="Profile" />
      <form
        className="flex flex-col px-5 mt-5 w-full text-zinc-500 max-md:max-w-full pb-20"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <PersonalInfo
          data={formData}
          onInputChange={(field, value) => setFormData({ ...formData, [field]: value })}
        />

        {/* Image Upload Section */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
        </div>

        <EmergencyContact
          contacts={formData.emergency_contacts}
          onInputChange={handleInputChange}
          errors={errors.emergency_contacts}
        />
        <AddressSection
          data={formData}
          onInputChange={(field, value) => setFormData({ ...formData, [field]: value })}
        />
        <FormButtons />
      </form>
    </div>
  );
}