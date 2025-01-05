import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import { FaTable } from "react-icons/fa";
import { PiCardsFill } from "react-icons/pi";

const AllCampaigns = () => {
    const campaigns = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
    const [isCardLayout, setIsCardLayout] = useState(true); // Default is card layout

    // Handle sorting by minimum donation (ascending)
    const handleSortByMinimum = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => a.minimum - b.minimum);
        setSortedCampaigns(sorted);
    };

    // Toggle layout
    const toggleLayout = () => {
        setIsCardLayout(!isCardLayout);
    };

    return (
        <div className="w-11/12 mx-auto my-6">
            <Heading
                title={"All Campaigns"}
                subtitle={
                    "Your support matters. Whether you’re starting a campaign or contributing to one, CrowdCube provides the tools, support, and community to make a lasting difference. Join us on this journey of hope, empowerment, and impact."
                }
            />
            <span className="divider"></span>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-6">
                <p>All campaigns: {sortedCampaigns?.length || 0}</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button
                        onClick={handleSortByMinimum}
                        className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white"
                    >
                        Sort by Minimum Donation
                    </button>
                    <button
                        className="btn bg-gradient-to-r from-red-500 to-pink-500 text-white"
                        onClick={toggleLayout}
                    >
                        {isCardLayout ? (
                            <>
                                Switch to Table View
                                <FaTable size={20} />
                            </>
                        ) : (
                            <>
                                Switch to Card View
                                <PiCardsFill size={20} />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {sortedCampaigns && sortedCampaigns.length > 0 ? (
                <div>
                    {isCardLayout ? (
                        // Card layout
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sortedCampaigns.map((campaign) => (
                                <div
                                    key={campaign._id}
                                    className="card bg-base-100 shadow-xl p-4"
                                >
                                    <figure>
                                        <img
                                            src={campaign.photo}
                                            alt={campaign.title}
                                            className="rounded-md  w-full md:h-[150px] lg:h-[200px] object-cover"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{campaign.title}</h2>
                                        <p>{`${campaign.description.slice(0, 50)}...`}</p>
                                        <span className="badge badge-ghost badge-sm bg-green-100 py-2">
                                            Goal: ${campaign.goal}
                                        </span>
                                        <p className="text-sm">
                                            Minimum Donation: ${campaign.minimum}
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/details/${campaign._id}`}>
                                                <button className="btn btn-sm bg-teal-500 text-white">
                                                    See More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Table layout
                        <div className="overflow-x-auto">
                            <table className="table table-md">
                                {/* Table Head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Minimum Donation</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedCampaigns.map((campaign, index) => (
                                        <tr key={campaign._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={campaign.photo}
                                                                alt={campaign.title}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{campaign.title}</div>
                                                        <div className="text-sm opacity-50">
                                                            {campaign.type}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="hidden md:block">
                                                    {`${campaign.description.split(".")[0]}.`}
                                                </p>
                                                <p className="md:hidden">
                                                    {`${campaign.description.slice(0, 50)}...`}
                                                </p>
                                                <br />
                                                <span className="badge badge-ghost badge-sm bg-green-100 py-2">
                                                    Goal: ${campaign.goal}
                                                </span>
                                            </td>
                                            <td className="text-center">${campaign.minimum}</td>
                                            <th>
                                                <Link to={`/details/${campaign._id}`}>
                                                    <button className="btn text-xs bg-teal-500 text-white">
                                                        See More
                                                    </button>
                                                </Link>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            ) : (
                <p>No campaigns available.</p>
            )}
        </div>
    );
};

export default AllCampaigns;
