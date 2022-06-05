import { LoginPage } from "./pages/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginProvider, sessionInfo } from "./provider/AuthProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // HashRouter,
} from "react-router-dom";
import { Home } from "./pages/Home.jsx";

function App() {
  const sessionInfoLocal = localStorage.getItem("sessionInfo");
  const parsedSessionInfo = JSON.parse(sessionInfoLocal);
  return (
    <LoginProvider initialValueSession={parsedSessionInfo ?? sessionInfo}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={redirect()} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}
function redirect() {
  const sessionInfoLocal = localStorage.getItem("sessionInfo");
  const parsedSessionInfo = JSON.parse(sessionInfoLocal);
  if (parsedSessionInfo && parsedSessionInfo.isLogged) {
    return "/home";
  }
  return "/login";
}

export default App;
