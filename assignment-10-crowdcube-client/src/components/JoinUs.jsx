import Heading from "./Heading";
import donor from '../assets/donor.jpg'
import campaigner from '../assets/camper.jpg'
import { Link } from "react-router-dom";

const JoinUs = () => {
    return (
        <div className="w-11/12 mx-auto max-w-[1440px]">
            <Heading title={"Be a Part of the Change"} subtitle={" Join hands with us to support meaningful causes or start your own campaign to make a difference. Together, we can create a better tomorrow."} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                {/* Donor Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                    <img src={donor} alt="" className="h-[250px] object-cover" />
                    <h3 className="text-2xl font-semibold text-gray-800">As a Donor</h3>
                    <p className="text-gray-600 mt-4">
                        Support meaningful causes and make a difference.
                    </p>
                    <Link to='/all-campaigns'>
                        <button className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white  mt-6 hover:scale-90 transition duration-300 ease-in-out border-none">
                            Explore Campaigns
                        </button>
                    </Link>
                </div>

                {/* Campaigner Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                    <img src={campaigner} alt="" className="h-[250px] object-cover" />
                    <h3 className="text-2xl font-semibold text-gray-800">As a Campaigner</h3>
                    <p className="text-gray-600 mt-4">
                        Start your own campaign and bring your idea to life.
                    </p>
                    <Link to='/add-new-campaign'>
                        <button className="btn bg-gradient-to-r from-blue-600 to-cyan-500 text-white mt-6 hover:scale-90 transition duration-300 ease-in-out border-none">
                            Start a Campaign
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;