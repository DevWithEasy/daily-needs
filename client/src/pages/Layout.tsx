import { Outlet } from "react-router-dom";
import {Header,Footer} from '../components/Index'

const Layout = () => {
  return <>
    {/* <Header/> */}
    <div
      className='w-11/12 mx-auto'
    >
      <Outlet/>
    </div>
    {/* <Footer/> */}
  </>;
};

export default Layout;
