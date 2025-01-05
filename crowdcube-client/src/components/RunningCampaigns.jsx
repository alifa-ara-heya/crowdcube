import PropTypes from 'prop-types';
import CampaignCard from "../components/CampaignCard";
import Heading from './Heading';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const RunningCampaigns = ({ campaigns }) => {
    // console.log(campaigns);

    return (
        <div className='mt-10'>
            <Heading title={'Running Campaigns'} subtitle={"Since our founding, CrowdCube has helped raise for campaigns ranging from personal emergencies to groundbreaking innovations. Our commitment is to enable everyone to make a difference, no matter how small or large the cause."} />

            {/* <h3 className='text-center text-gray-400 text-xl'>Running Campaigns: {campaigns?.length} </h3> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    campaigns.slice(0, 4).map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='all-campaigns'>
                    <button className='px-4 py-4 mt-10 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg hover:scale-90 transition duration-300 ease-in-out font-medium'>
                        <p className=''>Total Campaigns: {campaigns?.length}</p>
                        <div className='flex items-center gap-4'>
                            <p>View All</p>
                            <FaArrowRight />
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

RunningCampaigns.propTypes = {
    campaigns: PropTypes.array
};

export default RunningCampaigns;