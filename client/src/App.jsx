import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "../src/styles/Loading/LoadingComponent";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Store from "./pages/Store";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loading" element={<LoadingComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
