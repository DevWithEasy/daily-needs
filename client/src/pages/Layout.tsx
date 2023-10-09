import { Outlet } from "react-router-dom";
import {Header,Footer} from '../components/Index'

const Layout = () => {
  return <div>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>;
};

export default Layout;
