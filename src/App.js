import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgeGate from "./pages/AgeGate";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default: if no path, show age gate */}
        <Route path="/" element={<AgeGate />} />

        {/* After age verification, user lands here */}
        <Route path="/home" element={<Home />} />

        {/* Terms and Privacy pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* For any other URL, redirect to "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
