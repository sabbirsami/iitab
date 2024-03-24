import Container from "../container/Container";
import logo from "../../../assets/IITAB-02.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Container>
            <div className="flex justify-between items-center  py-4 ">
                <div className="">
                    <img className="h-12" src={logo} alt="IITAB logo" />
                </div>
                <div className="flex items-center gap-6">
                    <nav className="">
                        <ul className="flex rounded-full ">
                            <li>
                                <Link to={"/"} className="px-5">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={"/projects"} className="px-5">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to={"/team"} className="px-5">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"} className="px-5">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to={"/contact"} className="">
                        <button className=" px-8 py-2.5 bg-gradient-to-tl from-[#F05F03] to-primary text-black font-semibold rounded-full">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
