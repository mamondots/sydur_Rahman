import { Outlet } from "react-router-dom";
import Navbar from "../Page/Shared/Nav/Navbar";
import Home from "../Page/Home/Home";


const Main = () => {
    return (
        <div className="bg-gradient-to-r from-[#F4D3EE] to-[#D8F1EE] pb-40">
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;