import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const Root = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <h2 className="">Footer</h2>
        </main>
    );
};

export default Root;
