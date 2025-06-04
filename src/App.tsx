import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SendPage from "./pages/SendPage";
import GiftPage from "./pages/GiftPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/gift/:giftId" element={<GiftPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
