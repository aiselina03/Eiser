import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket></Basket>}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
