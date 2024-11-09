import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar"
import Footer from './../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="h-[calc(100vh-338px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout