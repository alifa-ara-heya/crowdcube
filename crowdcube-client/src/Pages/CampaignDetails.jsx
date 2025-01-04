import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
    const { title, photo, description, deadline, goal, minimum, type } = useLoaderData();

    const { user } = useContext(AuthContext);

    const name = user?.displayName;
    const email = user?.email;

    const newDonation = { title, photo, description, deadline, goal, minimum, type, name, email };
    // console.log(deadline);
    // console.log(typeof deadline);


    const handleDonate = () => {
        // console.log('donate btn clicked');

        // Check if the deadline has passed
        const currentDate = new Date();
        const campaignDeadline = new Date(deadline);

        if (campaignDeadline < currentDate) {
            Swal.fire({
                title: "Deadline Passed",
                text: "You can't donate to this campaign as the deadline has already passed.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return; // Exit the function without sending the request
        }

        // send data to the server
        fetch('https://assignment-10-crowdcube-server.vercel.app/donations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDonation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully Donated into the Campaign!",
                        icon: "success",
                        confirmButtonText: 'Ok'
                    });
                }
            })
    }

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <p className="text-sm text-gray-500 mt-2">Campaign Type: <span className="font-semibold">{type}</span></p>
            </div>

            {/* Image Section */}
            <div className="mb-6">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>

            {/* Details Section */}
            <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{description}</p>

                <div className="grid grid-cols-2 gap-6 mt-6">
                    {/* Goal Amount */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Goal Amount</p>
                        <p className="text-lg font-semibold">${goal}</p>
                    </div>

                    {/* Minimum Donation */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Minimum Donation</p>
                        <p className="text-lg font-semibold">${minimum}</p>
                    </div>

                    {/* Deadline */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Deadline</p>
                        <p className="text-lg font-semibold">{deadline}</p>
                    </div>
                </div>
            </div>

            {/* Action Section */}
            <div className="mt-8 flex justify-center">
                <button
                    onClick={handleDonate}
                    className="btn btn-primary text-white px-6 py-2 rounded-lg">
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default CampaignDetails;
