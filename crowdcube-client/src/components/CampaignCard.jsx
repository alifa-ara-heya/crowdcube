import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaCalendarDay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


const CampaignCard = ({ campaign }) => {
    // console.log(campaign);
    const { _id, title, photo, description, deadline } = campaign;
    // console.log(typeof deadline);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    alt={title}
                    className="rounded-xl w-full md:h-[150px] lg:h-[200px] object-cover" />
            </figure>
            <div className="card-body">

                <h2 className="card-title">{title}</h2>
                {/* <p>{description.slice(0, 100)}...</p> */}
                <div className="flex items-center gap-3">
                    <FaCalendarDay className="text-gray-500" />
                    <p className="text-sm font-medium text-gray-400">Deadline: {deadline}</p>
                </div>

                {/* <p className="">{description.split('.')[0]}...</p> */}
                <p className="">{description.slice(0, 80)}...</p>

                <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className="btn bg-gradient-to-r from-primary to-tertiary hover:scale-90 transition duration-300 ease-in-out text-white">See More <FaArrowRight />
                    </button></Link>
                </div>
            </div>
        </div>

    );
};


CampaignCard.propTypes = {
    campaign: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
    deadline: PropTypes.string,
};


export default CampaignCard;