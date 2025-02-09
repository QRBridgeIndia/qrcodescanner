import React from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from "./components/logo/Logo";
import { Navigation } from "./components/navigation/Navigation";

function AppLayout({ children }) {
  const location = useLocation(); // Use the hook inside the Router context
  const token = Cookies.get('authToken'); // Check for token in cookies

  const hideFooterRoutes = ["/", "/account-setup", "/number-verification"];

  return (
    <div className="app-container">
      <header className="app-header">
        <Logo />
      </header>
      <main className="app-content">{children}</main>

      {/* Show footer only when the token is present and not in the hideFooterRoutes */}
      {token && !hideFooterRoutes.includes(location.pathname) && (
        <footer className="app-footer">
          <Navigation />
        </footer>
      )}
    </div>
  );
}

export default AppLayout;
