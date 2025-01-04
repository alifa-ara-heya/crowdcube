import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const MyCampaign = () => {
    // const data = useLoaderData();
    // console.log(data);
    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-10-crowdcube-server.vercel.app/myCampaigns?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCampaigns(data))
                .catch(err => console.log("Error fetching campaigns:", err))
        }
    }, [user.email])

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // console.log('delete confirmed');
                fetch(`https://assignment-10-crowdcube-server.vercel.app/campaigns/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });

                            const remainingCampaigns = campaigns.filter(camp => camp._id !== _id);
                            setCampaigns(remainingCampaigns);
                        }
                    })
            }
        });
    }

    return (
        <div className="w-3/4 mx-auto my-8 min-h-screen">
            <Heading title={'My Campaigns'} subtitle={'Your support matters. Whether you’re starting a campaign or contributing to one, CrowdCube provides the tools, support, and community to make a lasting difference. Join us on this journey of hope, empowerment, and impact'} />
            <span className="divider"></span>
            <h1 className="text-2xl font-bold mb-4">My Campaigns: {campaigns.length} </h1>
            {campaigns.length === 0 ? (
                <p>No campaigns found.</p>
            ) : (
                <table className="table-auto table w-full border border-gray-300 rounded-xl">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Goal</th>
                            <th>Minimum Donation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="*:border *:px-4 *:py-2 *:font-medium capitalize *:rounded-xl">
                                <td>{campaign.title}</td>
                                <td>{campaign.type}</td>
                                <td>${campaign.goal}</td>
                                <td>${campaign.minimum}</td>
                                <td className="">
                                    <Link to={`/update-campaign/${campaign._id}`}><button className="btn btn-primary mr-2">Update</button></Link>
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
                                        className="btn btn-warning bg-red-500 text-white">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyCampaign;