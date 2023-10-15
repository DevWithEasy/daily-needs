import { useRoutes } from "react-router-dom";
import {
  Forget,
  Blog,
  Blogs,
  Cart,
  CheckOut,
  Dashboard,
  Home,
  Layout,
  MyOders,
  Offers,
  Order,
  OrderStatus,
  Orders,
  Outlet,
  Outlets,
  Product,
  Products,
  Profile,
  SignIn,
  SignUp,
  TrackOrder,
  UpdateProfile,
  Users,
  Verification,
  Find
} from "./pages/Index";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/find",
          element: <Find />,
        },
        {
          path: "/forget/:token/:code",
          element: <Forget />,
        },
        {
          path: "/verification",
          element: <Verification />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
        {
          path: "/order_status",
          element: <OrderStatus />,
        },
        {
          path: "/outlets",
          element: <Outlets />,
        },
        {
          path: "/outlets/:id",
          element: <Outlet />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blogs/:id",
          element: <Blog />,
        },
        {
          path: "/offers",
          element: <Offers />,
        },
        {
          path: "/account/:id",
          element: <Profile />,
        },
        {
          path: "/account/update/:id",
          element: <UpdateProfile />,
        },
        {
          path: "/account/orders",
          element: <MyOders />,
        },
        {
          path: "/account/orders/track/:id",
          element: <TrackOrder />,
        },
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/users",
          element: <Users />,
        },
        {
          path: "/admin/orders",
          element: <Orders />,
        },
        {
          path: "/admin/orders/:id",
          element: <Order />,
        }
      ]
    },
  ]);
  return routes;
}

export default App;
