import { Link } from "react-router-dom";
import banner1 from "../assets/banner-1-m.jpg";
import banner2 from "../assets/banner-2-min.jpg";
import banner3 from "../assets/banner-3-min.jpg";
import banner4 from "../assets/banner-4.jpg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg ">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={banner1}
                    className="w-full h-[400px] object-cover brightness-50"
                />
                <div className="absolute top-1/2 left-1/2 md:left-[35%] -translate-x-1/2 -translate-y-1/2 transform text-white space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        <Typewriter
                            words={["Small Contributions", "Big Impact"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    <p className="text-gray-300 font-medium">
                        Join hands to create a ripple of change. <br />
                        Every donation makes a difference.
                    </p>
                    <Link to="/all-campaigns">
                        <button className="btn bg-gradient-to-r from-amber-600 to-yellow-500 border-none text-white mt-4">
                            See Campaigns
                        </button>
                    </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full h-[400px] object-cover brightness-50"
                />
                <div className="absolute top-1/2 left-1/2 md:left-[35%] -translate-x-1/2 -translate-y-1/2 transform text-white space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        <Typewriter
                            words={["Together", "We Can Achieve More"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    <p className="text-gray-300 font-medium">
                        Support meaningful causes and <br />
                        be a part of transformative stories.
                    </p>
                    <Link to="/all-campaigns">
                        <button className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white mt-4">
                            See Campaigns
                        </button>
                    </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner3}
                    className="w-full h-[400px] object-cover brightness-50"
                />
                <div className="absolute top-1/2 left-1/2 md:left-[35%] -translate-x-1/2 -translate-y-1/2 transform text-white space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        <Typewriter
                            words={["Empower Dreams", "One Donation at a Time"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    <p className="text-gray-300 font-medium">
                        Help campaigns reach their goals <br />
                        and turn dreams into reality.
                    </p>
                    <Link to="/all-campaigns">
                        <button className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white mt-4">
                            See Campaigns
                        </button>
                    </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={banner4}
                    className="w-full h-[400px] object-cover brightness-50"
                />
                <div className="absolute top-1/2 left-1/2 md:left-[35%] -translate-x-1/2 -translate-y-1/2 transform text-white space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        <Typewriter
                            words={["Your Support", "Can Change Lives"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    <p className="text-gray-300 font-medium">
                        Donate today and be the spark <br />
                        that ignites hope and opportunity.
                    </p>
                    <Link to="/all-campaigns">
                        <button className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white mt-4">
                            See Campaigns
                        </button>
                    </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
