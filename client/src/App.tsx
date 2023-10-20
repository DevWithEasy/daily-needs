import { useRoutes } from "react-router-dom";
import {
  AddProduct,
  AllCategory,
  AllProducts,
  Blog,
  Blogs,
  Cart,
  CheckOut,
  Dashboard,
  Find,
  Forget,
  Home,
  Layout,
  MyOders,
  Offers,
  Order,
  Orders,
  Outlet,
  Outlets,
  Product,
  Products,
  Profile,
  SignIn,
  SignUp,
  TrackOrder,
  UpdateProduct,
  UpdateProfile,
  Users,
  Verification,
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
          path: "/orders/track/:id",
          element: <TrackOrder />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/orders/:id",
          element: <Order />,
        },
        {
          path: "/product/add",
          element: <AddProduct />,
        },
        {
          path: "/product/update/:id",
          element: <UpdateProduct />,
        },
        {
          path: "/product/all",
          element: <AllProducts />,
        },
        {
          path: "/category/all",
          element: <AllCategory />,
        },
      ]
    },
  ]);
  return routes;
}

export default App;
