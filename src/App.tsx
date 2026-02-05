import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import ProductPage from "./pages/products";
import ChatApp from "./components/chat/ChatApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <ChatApp />
    </BrowserRouter>
  );
}

export default App;
