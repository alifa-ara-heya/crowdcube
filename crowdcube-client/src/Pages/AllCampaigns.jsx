import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";

const AllCampaigns = () => {
    const campaigns = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);

    // Handle sorting by minimum donation (ascending)
    const handleSortByMinimum = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => a.minimum - b.minimum);
        setSortedCampaigns(sorted);
    };

    return (

        <div className="w-11/12 mx-auto my-6">
            <Heading title={'All Campaigns'} subtitle={'Your support matters. Whether you’re starting a campaign or contributing to one, CrowdCube provides the tools, support, and community to make a lasting difference. Join us on this journey of hope, empowerment, and impact'} />
            <span className="divider"></span>
            <div className="flex justify-between items-center">
                <p>All campaigns: {sortedCampaigns?.length || 0}</p>
                <button
                    onClick={handleSortByMinimum}
                    className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white"
                >
                    Sort by Minimum Donation
                </button>
            </div>

            {sortedCampaigns && sortedCampaigns.length > 0 ? (
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
            ) : (
                <p>No campaigns available.</p>
            )}
        </div>
    );
};

export default AllCampaigns;
