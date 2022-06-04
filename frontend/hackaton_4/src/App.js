import { LoginPage } from "./pages/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginProvider, sessionInfo } from "./provider/AuthProvider";

function App() {
  return (
    <LoginProvider initialValueSession={sessionInfo}>
      <LoginPage />
    </LoginProvider>
  );
}

export default App;
