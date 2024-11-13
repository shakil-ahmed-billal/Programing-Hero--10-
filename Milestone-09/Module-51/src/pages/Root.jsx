import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Root = () => {
  return (
    <div>
        <Header></Header>
        <div className="">
            <Outlet></Outlet>
        </div>
        {/* <Footer></Footer> */}
    </div>
  )
}

export default Root