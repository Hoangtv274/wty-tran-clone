import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import ChatApp from "./components/chat/ChatApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ChatApp />
    </BrowserRouter>
  );
}

export default App;
