import { Outlet } from "react-router-dom";
import ShopNavbar from "../navbars/ShopNavbar";
//Layout for shop (Outler allows rendering the child elements)
const ShopLayout = () => {
  return (
    <>
      <ShopNavbar />
      <Outlet />
    </>
  );
};

export default ShopLayout;
