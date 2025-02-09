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
import QRScanner, { HeroLayout } from "./components/heroLayout/HeroLayout";
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

function AppLayout({ children }) {
  const location = useLocation();
  const hideFooterRoutes = ["/", "/account-setup", "/number-verification"];

  return (
    <div className="app-container">
      {/* Add margin-top to prevent content from being under the fixed header */}
      <main className="app-content mt-4">{children}</main>

      {!hideFooterRoutes.includes(location.pathname) && (
        <div className="footer-container w-full max-w-screen-lg mx-auto flex justify-center items-center">
        <footer className="app-footer w-full mt-4">
          <Navigation />
        </footer>
      </div>      
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <FloatingHeader/>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/account-setup" element={<AccountSetup />} />
          <Route path="/number-verification" element={<NumberVerification />} />
          <Route path="/dashboard" element={<QrDashboard />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/scan-qr" element={<QRScanner />} />
          <Route path="/categories/:qrCodeId" element={<CategoryList />} />
          <Route path="/qr-details-form" element={<QRDetailsForm />} />
          <Route path="/qr-manager" element={<QRCodeManager />} />
          <Route path="/qr-details/:id" element={<QRDetails />} />
          <Route path="/edit-qrdetails/:id" element={<QREditForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-edit" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsLayout />} />
          <Route path="/delete-account" element={<DeleteAccountForm />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;