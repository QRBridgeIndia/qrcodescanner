// import React from "react";
// import ProfileImage from "./ProfileImage";
// import InfoSection from "./InfoSection";
// import { Header } from "../loginForm/Header";
// import apiClient from "../../api/apiClient";

// function Profile() {
//   const [profileDetails, setProfileDetails] = React.useState();
//   const [error, seterror] = React.useState(null);

//   React.useEffect(() => {
//     const getProfileData = async (productId) => {
//       try {
//         const response = await apiClient.get(`/auth/profile/`);
//         console.log(response)
//         setProfileDetails(response.data);
//       } catch (err) {
//         seterror(err);
//       }
//     };
//     getProfileData();
//   }, []);

//   const personalInfo = [
//     { label: "Name", value: profileDetails?.name || "-- Not Provided --" },
//     {
//       label: "Date of Birth",
//       value: profileDetails?.dob || "-- Not Provided --",
//     },
//     {
//       label: "Blood Group",
//       value: profileDetails?.blood_group || "-- Not Provided --",
//     },
//   ];

//   const emergencyContacts = [
//     {
//       label: "Name",
//       value:
//         profileDetails?.emergency_contacts[0]?.name || "-- Not Provided --",
//     },
//     {
//       label: "Phone No",
//       value:
//         profileDetails?.emergency_contacts[0]?.phone || "-- Not Provided --",
//     },
//     {
//       label: "Relation",
//       value:
//         profileDetails?.emergency_contacts[0]?.relationship ||
//         "-- Not Provided --",
//     },
//   ];

//   const address = [
//     {
//       label: "Address",
//       value: profileDetails?.address || "-- Not Provided --",
//     },
//     { label: "City", value: profileDetails?.city || "-- Not Provided --" },
//     { label: "State", value: profileDetails?.state || "-- Not Provided --" },
//     {
//       label: "Zip / Pincode",
//       value: profileDetails?.pincode || "-- Not Provided --",
//     },
//   ];

//   if (error) return <div>Server Error</div>;
//   return (
//     <div className="flex flex-col items-center rounded-none max-w-[600px]">
//       <Header title="Profile" />
//       <ProfileImage data={profileDetails} />
//       <InfoSection title="Personal Information" items={personalInfo} />
//       <InfoSection
//         title="Emergency Contacts"
//         items={emergencyContacts || []}
//         // emergency={true}
//       />
//       <InfoSection title="Address" items={address} />
//     </div>
//   );
// }

// export default Profile;

import React from 'react';
import ProfileImage from './ProfileImage';
import InfoSection from './InfoSection';
import { Header } from '../loginForm/Header';
import apiClient from '../../api/apiClient';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Profile() {
  const [profileDetails, setProfileDetails] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await apiClient.get('/auth/profile/');
        setProfileDetails(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getProfileData();
  }, []);

  if (error) return <div>Server Error</div>;

  if (loading) {
    return (
      <div className="flex flex-col items-center rounded-none max-w-[600px]">
        <Header title="Profile" />
        <Skeleton circle={true} height={100} width={100} />
        <Skeleton height={30} width={`60%`} />
        <Skeleton height={20} width={`80%`} />
        <Skeleton height={20} width={`80%`} />
        <Skeleton height={20} width={`80%`} />
      </div>
    );
  }

  const personalInfo = [
    { label: 'Name', value: profileDetails?.name || '-- Not Provided --' },
    { label: 'Date of Birth', value: profileDetails?.dob || '-- Not Provided --' },
    { label: 'Blood Group', value: profileDetails?.blood_group || '-- Not Provided --' },
  ];

  const emergencyContacts = [
    {
      label: 'Name',
      value: profileDetails?.emergency_contacts[0]?.name || '-- Not Provided --',
    },
    {
      label: 'Phone No',
      value: profileDetails?.emergency_contacts[0]?.phone || '-- Not Provided --',
    },
    {
      label: 'Relation',
      value: profileDetails?.emergency_contacts[0]?.relationship || '-- Not Provided --',
    },
  ];

  const address = [
    { label: 'Address', value: profileDetails?.address || '-- Not Provided --' },
    { label: 'City', value: profileDetails?.city || '-- Not Provided --' },
    { label: 'State', value: profileDetails?.state || '-- Not Provided --' },
    { label: 'Zip / Pincode', value: profileDetails?.pincode || '-- Not Provided --' },
  ];

  return (
    <div className="flex flex-col items-center rounded-none max-w-[600px]">
      <Header title="Profile" />
      <ProfileImage data={profileDetails} />
      <InfoSection title="Personal Information" items={personalInfo} />
      <InfoSection title="Emergency Contacts" items={emergencyContacts} />
      <InfoSection title="Address" items={address} />
    </div>
  );
}

export default Profile;
