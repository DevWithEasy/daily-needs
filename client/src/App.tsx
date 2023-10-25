import { Route, Routes } from "react-router-dom";
import {
  UpdateCategory,
  AddCategory,
  AddProduct,
  AdminLayout,
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
  MyOders,
  Offers,
  Order,
  Orders,
  Outlet,
  Outlets,
  Product,
  Products,
  Profile,
  Protected,
  SignIn,
  SignUp,
  TrackOrder,
  UpdateProduct,
  UpdateProfile,
  UserLayout,
  Users,
  Verification,
  ProductsByCategory,
} from "./pages/Index";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <UserLayout>
              <SignUp />
            </UserLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <UserLayout>
              <SignIn />
            </UserLayout>
          }
        />
        <Route
          path="/verification"
          element={
            <UserLayout>
              <Verification />
            </UserLayout>
          }
        />
        <Route
          path="/find"
          element={
            <UserLayout>
              <Find />
            </UserLayout>
          }
        />
        <Route
          path="/forget"
          element={
            <UserLayout>
              <Forget />
            </UserLayout>
          }
        />
        <Route
          path="/products"
          element={
            <UserLayout>
              <Products />
            </UserLayout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <UserLayout>
              <Product />
            </UserLayout>
          }
        />
        <Route
          path="/category/:id"
          element={
            <UserLayout>
              <ProductsByCategory />
            </UserLayout>
          }
        />
        <Route
          path="/outlets"
          element={
            <UserLayout>
              <Outlets />
            </UserLayout>
          }
        />
        <Route
          path="/outlet/:id"
          element={
            <UserLayout>
              <Outlet />
            </UserLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <UserLayout>
              <Blogs />
            </UserLayout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <UserLayout>
              <Blog />
            </UserLayout>
          }
        />
        <Route
          path="/offers"
          element={
            <UserLayout>
              <Offers />
            </UserLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <UserLayout>
                <Profile />
              </UserLayout>
            </Protected>
          }
        />
        <Route
          path="/profile/update"
          element={
            <Protected>
              <UserLayout>
                <UpdateProfile />
              </UserLayout>
            </Protected>
          }
        />
        <Route
          path="/cart"
          element={
            <Protected>
              <UserLayout>
                <Cart />
              </UserLayout>
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected>
              <UserLayout>
                <CheckOut />
              </UserLayout>
            </Protected>
          }
        />
        <Route
          path="/myorders"
          element={
            <Protected>
              <UserLayout>
                <MyOders />
              </UserLayout>
            </Protected>
          }
        />
        <Route
          path="/order_status"
          element={
            <Protected>
              <UserLayout>
                <TrackOrder />
              </UserLayout>
            </Protected>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/orders"
          element={
            <Protected>
              <AdminLayout>
                <Orders />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/order/:id"
          element={
            <Protected>
              <AdminLayout>
                <Order />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/users"
          element={
            <Protected>
              <AdminLayout>
                <Users />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/products/all"
          element={
            <Protected>
              <AdminLayout>
                <AllProducts />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/products/add"
          element={
            <Protected>
              <AdminLayout>
                <AddProduct />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/products/update/:id"
          element={
            <Protected>
              <AdminLayout>
                <UpdateProduct />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/categories/"
          element={
            <Protected>
              <AdminLayout>
                <AllCategory />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/category/add"
          element={
            <Protected>
              <AdminLayout>
                <AddCategory />
              </AdminLayout>
            </Protected>
          }
        />
        <Route
          path="/category/update/:id"
          element={
            <Protected>
              <AdminLayout>
                <UpdateCategory />
              </AdminLayout>
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
