import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UserProvider from "./contexts/userContext";
import Dashboard from "./pages/dashboard";
import ProtectRoute from "./components/ProtectRoute";
import NotFound from "./pages/notFound";
import ErrorBoundry from "./components/ErrorBoundry";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <ErrorBoundry>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </ErrorBoundry>
    </Router>
  );
}

export default App;
