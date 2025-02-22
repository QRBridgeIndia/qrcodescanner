import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm/LoginForm";
import AccountSetup from "./components/accountSetup/AccountSetup";
import NumberVerification from "./components/numberVerification/NumberVerification";
import QrDashboard from "./components/qrDashboard/QrDashboard";
import { RegistrationPage } from "./components/registrationForm/RegistrationPage";
import QRScanner from "./components/heroLayout/HeroLayout";
import CategoryList from "./components/category/CategoryList";
import QRDetailsForm from "./components/qrDetailsForm/QRDetailsForm";
import QRCodeManager from "./components/qrManager/QRCodeManager";
import { QRDetails } from "./components/qrDetails/QRDetails";
import Profile from "./components/profile/Profile";
import ProfilePage from "./components/profileEdit/ProfilePage";
import { Navigation } from "./components/navigation/Navigation";
import SettingsLayout from "./components/settings/SettingsLayout";
import DeleteAccountForm from "./components/deleteAccount/DeleteAccountForm";
import QREditForm from "./components/qrDetailsForm/QREditDetailsForm";
import FloatingHeader from "./components/headerTop/FloatingHeader";
import ProtectedRoute from '../src/components/utility/ProtectedRoute';
import PublicRoute from '../src/components/utility/PublicRoute';
import { useState } from "react";
import TermsAndConditions from "./components/Terms&Policy/Terms";
import PrivacyPolicy from "./components/Terms&Policy/Policy";
import NewQRScanner from "./components/heroLayout/HeroLayoutNew";

function AppLayout({ children,hideFooter }) {
  const location = useLocation(); 
  const hideFooterRoutes = ["/", "/account-setup", "/number-verification"];

  return (
    <div className="app-container">
      <FloatingHeader/>
      <main className="app-content mt-3">{children}</main>
      {!(hideFooterRoutes.includes(location.pathname) || hideFooter) && (
        <footer className="app-footer w-full px-10">
          <Navigation />
        </footer>
      )}
    </div>
  );
}

function App() {
  const [hideFooter, setHideFooter] = useState(false);
 
  return (
    <Router>
      <AppLayout hideFooter={hideFooter}>
        <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/terms" element={<TermsAndConditions/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path="/account-setup" element={<AccountSetup />} />
          <Route path="/number-verification" element={<NumberVerification />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<QrDashboard />} />
          <Route path="/scan-qr" element={<QRScanner />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/scan-newqr" element={<NewQRScanner />} />
          <Route path="/categories/:qrCodeId" element={<CategoryList />} />
          <Route path="/qr-details-form" element={<QRDetailsForm />} />
          <Route path="/qr-manager" element={<QRCodeManager />} />
          <Route
              path="/qr-details/:id"
              element={<QRDetails setHideFooter={setHideFooter} />}
            />
          <Route path="/edit-qrdetails/:id" element={<QREditForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-edit" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsLayout />} />
          <Route path="/delete-account" element={<DeleteAccountForm />} />
        </Route>
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;