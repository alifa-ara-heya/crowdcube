import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { FaDonate, FaTable } from "react-icons/fa";
import { PiCardsFill } from "react-icons/pi";
import thanks from '../assets/thanks.jpg';
import 'animate.css';

const MyDonation = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);
    const [isCardLayout, setIsCardLayout] = useState(false); // Default is table layout

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-10-crowdcube-server.vercel.app/myDonations?email=${user.email}`)
                .then(res => res.json())
                .then(data => setDonations(data))
                .catch(err => console.log("Error fetching campaigns:", err));
        }
    }, [user.email]);

    // Toggle Layout Function
    const toggleLayout = () => {
        setIsCardLayout(!isCardLayout);
    };

    return (
        <div className="w-11/12 mx-auto my-10 min-h-screen max-w-[1440px]">
            <Heading
                title={'My Donations'}
                subtitle={
                    "Whether you're supporting a personal cause, launching a startup, or driving social change, we’re here to help you achieve your goals while building a community of changemakers. We really appreciate your donations."
                }
            />

            <h3 className="text-xl font-medium my-8 flex items-center gap-3 justify-center">
                <FaDonate /> To Donate, Please Take a Look at{" "}
                <Link className="text-tertiary underline cursor-pointer" to="/all-campaigns">
                    Our Running Campaigns.
                </Link>
            </h3>

            {/* Layout Toggle Button */}
            <div className="flex justify-end mb-6">
                <button
                    className="btn bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center gap-2"
                    onClick={toggleLayout}
                >
                    {isCardLayout ? (
                        <>
                            Switch to Table View <FaTable size={20} />
                        </>
                    ) : (
                        <>
                            Switch to Card View <PiCardsFill size={20} />
                        </>
                    )}
                </button>
            </div>

            {/* Conditional Layout Rendering */}
            {donations.length > 0 ? (
                isCardLayout ? (
                    // Card Layout
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {donations.map((donation, idx) => {
                            const { title, photo, type, goal, minimum, description } = donation;
                            return (
                                <div key={donation._id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={photo} alt={title} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title mb-5">
                                            <div className="badge badge-secondary">{idx + 1}</div>
                                            {title}
                                        </h2>
                                        <p className="font-medium">
                                            Type: <span className="text-gray-400">{type}</span>
                                        </p>
                                        <p className="font-medium">
                                            Goal: <span className="text-gray-400">${goal}</span>
                                        </p>
                                        <p className="font-medium">
                                            Minimum Donation: <span className="text-gray-400">${minimum}</span>
                                        </p>
                                        <p className="font-medium">
                                            Description: <span className="text-gray-400">{description}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // Table Layout
                    <div className="overflow-x-auto">
                        <table className="table table-md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Goal</th>
                                    <th>Minimum Donation</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.map((donation, idx) => {
                                    const { title, type, goal, minimum, description } = donation;
                                    return (
                                        <tr key={donation._id}>
                                            <th>{idx + 1}</th>
                                            <td>{title}</td>
                                            <td>{type}</td>
                                            <td>${goal}</td>
                                            <td>${minimum}</td>
                                            <td>{description.slice(0, 50)}...</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            ) : (
                <p>No donations available.</p>
            )}

            <div className="flex items-center justify-center animate__animated animate__pulse animate__infinite my-6">
                <img src={thanks} alt="Thank You" className="h-[500px]" />
            </div>
        </div>
    );
};

export default MyDonation;
