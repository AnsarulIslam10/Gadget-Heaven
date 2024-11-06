import { useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      {pathname === "/dashboard" ? (
        <Cart></Cart>
      ) : pathname === "/dashboard/cart" ? (
        <Cart></Cart>
      ) : pathname === "/dashboard/wishlist" ? (
        <WishList></WishList>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
