import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const campaign = useLoaderData();
    // console.log(campaign);
    const { _id, title, photo, minimum, goal, description, type } = campaign;
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const minimum = form.minimum.value;
        const deadline = form.deadline.value;
        const goal = form.goal.value;
        const description = form.description.value;

        const updatedCampaign = { title, photo, type, minimum, deadline, goal, description };

        // send data to the server
        fetch(`https://assignment-10-crowdcube-server.vercel.app/campaigns/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCampaign)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Success!",
                            text: "Successfully updated the campaign!",
                            icon: "success",
                            confirmButtonText: 'Ok'
                        });
                        navigate('/my-campaign')
                    }
                }))
    }
    return (
        <div>
            <div className="bg-primary/10 p-10 md:px-40 md:pt-20 md:pb-40 min-h-screen flex justify-center items-center">

                <div>
                    <div className="text-center">
                        <h1 className="text-3xl font-medium text-primary mb-5">Update Campaign</h1>
                    </div>
                    <div className="card bg-primary/20 mx-auto   shadow-2xl md:w-[500px] lg:w-[900px]">
                        <form onSubmit={handleUpdate} className="card-body md:px-20 p-10">
                            {/* form-row-1 */}
                            <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
                                {/* campaign title */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Campaign Title</span>
                                    </label>
                                    <input type="text" placeholder="Title"
                                        defaultValue={title}
                                        name="title"
                                        className="input input-bordered " />
                                </div>
                                {/* photo url */}
                                <div className="form-control w-full md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text">Campaign Image URL</span>
                                    </label>
                                    <input type="text" name="photo"
                                        defaultValue={photo} placeholder="Photo URL" className="input input-bordered " />
                                </div>
                            </div>
                            {/* form row-2 */}
                            <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
                                {/* campaign type */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Campaign Type</span>
                                    </label>
                                    <select
                                        name="type" className="select select-bordered text-gray-400 text-base capitalize"
                                        defaultValue={type}
                                        required>
                                        <option  >Choose from below</option>
                                        <option>Personal Issue</option>
                                        <option>Startup</option>
                                        <option>Business</option>
                                        <option>Creative ideas</option>
                                    </select>
                                </div>
                                {/* minimum donation amount */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Minimum Donation Amount (in USD)</span>
                                    </label>
                                    <input type="number" placeholder="e.g. 10"
                                        name="minimum"
                                        defaultValue={minimum}
                                        className="input input-bordered " />
                                </div>
                            </div>
                            {/* form-row-3 */}
                            <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
                                {/* deadline */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Deadline</span>
                                    </label>
                                    <input type="date" placeholder="Deadline"
                                        name="deadline"
                                        className="input input-bordered text-gray-400" />
                                </div>
                                {/* gaol amount */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Goal Amount (in USD)</span>
                                    </label>
                                    <input type="number"
                                        name="goal"
                                        defaultValue={goal} placeholder="e.g. 2000" className="input input-bordered " />
                                </div>
                            </div>
                            {/* form-row-4 */}
                            <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
                                {/* user name */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text"
                                        value={name}
                                        className="input input-bordered text-gray-400" readOnly />
                                </div>
                                {/* email */}
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"

                                        value={email} className="input input-bordered text-gray-400" readOnly />
                                </div>
                            </div>
                            {/* description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-md textarea-bordered text-base" placeholder="Short Description About Your Campaign" required name="description" defaultValue={description}></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-primary hover:bg-primary/60 border-none text-white mb-4">Update</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateCampaign;