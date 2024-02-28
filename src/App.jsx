import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, ItemDetailContainer ,ItemListContainer } from "./components/pages";
import { Navbar } from "./components/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element ={<ItemDetailContainer/>}/>
          <Route path="/category/:category" element ={<ItemListContainer/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
