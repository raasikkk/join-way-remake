import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Main from "./pages/Main";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
