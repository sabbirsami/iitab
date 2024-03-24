import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import bannerImage01 from "../../../assets/banner-image/b1.png";
import bannerImage02 from "../../../assets/banner-image/b2.png";
import bannerImage03 from "../../../assets/banner-image/b3.png";
import bannerImage04 from "../../../assets/banner-image/b4.png";

const Hero = () => {
    return (
        <section className="py-32">
            <div className="">
                <div className="grid grid-cols-8">
                    <div className="col-span-6">
                        <span className="rounded-full px-3 text-sm py-1 border">
                            Start your way to success
                        </span>
                        <h2 className="text-8xl font-light mt-6 mb-4">
                            We Help Turn On <br /> Your Business
                        </h2>
                    </div>
                    <div className="col-span-2 flex items-end mb-4">
                        <div className="">
                            <p className="flex items-center  gap-3">
                                <span className="font-semibold">
                                    Get Promotion
                                </span>
                                <span className="bg-primary/30 p-2 rounded-full">
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </span>
                            </p>
                            <p className="mt-6 opacity-55">
                                Up the performance of your business using proven
                                methods from our experts identify and reach your
                                target clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-[#242424] flex items-end justify-center gap-6 pt-16 mt-20 rounded-3xl">
                        <img src={bannerImage01} alt="" />
                        <img src={bannerImage02} alt="" />
                        <img src={bannerImage03} alt="" />
                        <img src={bannerImage04} alt="" />
                    </div>
                    <div className="w-16 h-16 bg-primaryBackground rounded-full absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 "></div>
                    <div className="w-16 h-16 bg-[#242424] rounded-full absolute top-1/2 -right-8 transform -translate-y-1/2 "></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
