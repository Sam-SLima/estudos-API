import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateApi from "./keys/privateApi";
import Dashboard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateApi>
                {" "}
                <Dashboard />{" "}
              </PrivateApi>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
