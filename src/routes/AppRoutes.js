import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import SideNavigation from "../components/SideNavigation";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login/index";
import Signup from "../pages/Signup";
import EmployeeSignup from "../pages/Signup/EmployeeSignup";
import EmployerSignup from "../pages/Signup/EmployerSignup";
import MyRequests from "../pages/MyRequests";
import RequestAdvance from "../pages/RequestAdvance/index";
import ProfileSettings from "../pages/ProfileSettings/index";
import TermsAndConditions from "../pages/TermsAndConditions/index";
import PrivacyPolicy from "../pages/PrivacyPolicy/index";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/employee-signup"
          element={
            <Layout>
              <EmployeeSignup />
            </Layout>
          }
        />
        <Route
          path="/employer-signup"
          element={
            <Layout>
              <EmployerSignup />
            </Layout>
          }
        />
        <Route
          path="/my-requests"
          element={
            <ProtectedRoutes>
              <Layout>
                <SideNavigation>
                  <MyRequests />
                </SideNavigation>
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/request-advance"
          element={
            <ProtectedRoutes>
              <Layout>
                <SideNavigation>
                  <RequestAdvance />
                </SideNavigation>
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile-settings"
          element={
            <ProtectedRoutes>
              <Layout>
                <SideNavigation>
                  <ProfileSettings />
                </SideNavigation>
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <ProtectedRoutes>
              <Layout>
                <SideNavigation>
                  <TermsAndConditions />
                </SideNavigation>
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <ProtectedRoutes>
              <Layout>
                <SideNavigation>
                  <PrivacyPolicy />
                </SideNavigation>
              </Layout>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
}
