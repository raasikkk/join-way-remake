import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Main from "./pages/Main";
import ClientDetails from "./pages/ClientDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/client/:id" element={<ClientDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
