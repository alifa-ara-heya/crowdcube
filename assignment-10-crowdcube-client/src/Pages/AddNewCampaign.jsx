import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddNewCampaign = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const name = user?.displayName;
    const email = user?.email;

    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const minimum = form.minimum.value;
        const deadline = form.deadline.value;
        const goal = form.goal.value;
        const description = form.description.value;

        const newCampaign = { title, photo, type, minimum, deadline, goal, description, email };
        // console.log(newCampaign);

        // send data to the server
        fetch('https://assignment-10-crowdcube-server.vercel.app/campaigns', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully added the campaign!",
                        icon: "success",
                        confirmButtonText: 'Ok'
                    });
                    navigate('/my-campaign')
                }
            })
    }

    return (
        <div className="bg-primary/10 p-10 md:px-40 md:pt-20 md:pb-40 min-h-screen flex justify-center items-center">

            <div>
                <div className="text-center">
                    <h1 className="text-3xl font-medium  mb-5">Add New Campaign</h1>
                </div>
                <div className="card bg-primary/20 mx-auto   shadow-2xl md:w-[500px] lg:w-[900px]">
                    <form onSubmit={handleAdd} className="card-body md:px-20 p-10">
                        {/* form-row-1 */}
                        <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
                            {/* campaign title */}
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Campaign Title</span>
                                </label>
                                <input type="text" placeholder="Title"
                                    name="title"
                                    className="input input-bordered " required />
                            </div>
                            {/* photo url */}
                            <div className="form-control w-full md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Campaign Image URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
                            </div>
                        </div>
                        {/* form row-2 */}
                        <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
                            {/* campaign type */}
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Campaign Type</span>
                                </label>
                                <select name="type" className="select select-bordered text-gray-400 text-base capitalize" required>
                                    <option selected className="">Choose from below</option>
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
                                    className="input input-bordered " required />
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
                                    className="input input-bordered text-gray-400" required />
                            </div>
                            {/* gaol amount */}
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Goal Amount (in USD)</span>
                                </label>
                                <input type="number"
                                    name="goal" placeholder="e.g. 2000" className="input input-bordered " required />
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
                                    className="input input-bordered text-gray-400" readOnly required />
                            </div>
                            {/* email */}
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"

                                    value={email} className="input input-bordered text-gray-400" required readOnly />
                            </div>
                        </div>
                        {/* description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-md textarea-bordered text-base" placeholder="Short Description About Your Campaign" required name="description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary hover:bg-primary/60 border-none text-white mb-4">Add</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddNewCampaign;