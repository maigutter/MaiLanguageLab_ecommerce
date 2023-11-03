import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralTitle from "./Components/GeneralTitle";
import CoursesDetail from "./layouts/CoursesDetail";
import Home from "./layouts/Home";
import CoursesShop from "./layouts/CoursesShop";
import Checkout from "./layouts/Checkout";
import Register from "./layouts/Register";
import Cart from "./layouts/Cart";
import Category from "./layouts/Category";
import Teacher from "./layouts/Teacher";
import NavbarChakra from "./Components/Navbar/NavbarChakra";

function App() {
  return (
    <BrowserRouter>
      <NavbarChakra />
      <GeneralTitle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coursesShop" element={<CoursesShop />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:category" element={<Category />} />
        <Route exact path="/teacher/:teacher" element={<Teacher />} />

        <Route
          exact
          path="/coursesShop/:courseDetail"
          element={<CoursesDetail />}
        />

        <Route
          path="*"
          element={
            <h2>¡Lo sentimos! No pudimos encontrar lo que estás buscando.</h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
