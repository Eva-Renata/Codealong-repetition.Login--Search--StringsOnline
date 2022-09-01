import { Routes, Route } from "react-router-dom";
import { Ekstranet } from "../../Pages/Ekstranet/Ekstranet";
import { Home } from "../../Pages/Home/Home";
import { Login } from "../../Pages/Login/Login";
import { ProductDetails } from "../../Pages/Products/ProductDetails";
import { ProductList } from "../../Pages/Products/ProductList";
import { Products } from "../../Pages/Products/Products";
import { Search } from "../../Pages/Search/Search";

// Function Component til router
export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/products">
        <Route index element={<Products />}></Route>
        <Route path=":group_id">
          {/* automatisk går den på listen, medmindre du har clisket en id, så
          viser en stk detaljer, efter id  */}
          <Route index element={<ProductList />}></Route>
          <Route path=":product_id" element={<ProductDetails />}></Route>
        </Route>
      </Route>
      <Route path="/ekstranet" element={<Ekstranet />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
};
