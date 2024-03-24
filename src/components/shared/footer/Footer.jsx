import Container from "../container/Container";
import logo from "../../../assets/IITAB-02.png";
import { Link } from "react-router-dom";
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedinIn,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <Container>
            <footer className="xl:mt-6 pb-16">
                <div className="">
                    <div className="grid md:grid-cols-4 gap-5">
                        <div className="">
                            <img
                                src={logo}
                                alt="iitab logo"
                                className="h-12 w-auto"
                            ></img>
                            <p className=" text-xs text-white/70 pt-6 ps-1">
                                © 2024 IITAB. All Rights Reserved.
                            </p>
                        </div>
                        <div className="pt-3">
                            <h4 className="text-xl pb-6">Our Service</h4>
                            <div className="text-sm opacity-70 space-y-2">
                                <p className="">
                                    <Link to={"/"}>Website Development</Link>
                                </p>
                                <p className="">
                                    <Link to={"/"}>Mobile App Development</Link>
                                </p>
                                <p className="">
                                    <Link to={"/"}>
                                        Ecommerce-site Development
                                    </Link>
                                </p>
                                <p className="">
                                    <Link to={"/"}>UI/UX Design & Dev</Link>
                                </p>
                                <p className="">
                                    <Link to={"/"}>API Integration</Link>
                                </p>
                                <p className="">
                                    <Link to={"/"}>Digital Marketing</Link>
                                </p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <h4 className="text-xl pb-6">Important Links</h4>
                            <div className="text-sm opacity-70 space-y-2">
                                <p className="">
                                    <Link to={"/about"}>About Us</Link>
                                </p>
                                <p className="">
                                    <Link to={"/terms"}>
                                        Terms and condition
                                    </Link>
                                </p>
                                <p className="">
                                    <Link to={"/contact"}>Contact Us</Link>
                                </p>
                                <p className="">
                                    <Link to={"/projects"}>Projects</Link>
                                </p>
                                <p className="">
                                    <Link to={"/career"}>
                                        Careers Opportunity
                                    </Link>
                                </p>
                                <p className="">
                                    <Link to={"/team"}>Our Team</Link>
                                </p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <h4 className="text-xl pb-6">Contact Info</h4>
                            <div className="text-sm opacity-70 space-y-2">
                                <p className="flex items-center gap-3">
                                    <FaEnvelope /> <span>info@iitab.com</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <FaPhoneAlt /> <span>+880 1970 706676</span>
                                </p>

                                <p className=" flex items-center gap-3 text-xl pt-3">
                                    <FaFacebook />
                                    <FaLinkedinIn />
                                    <FaTwitter />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;
