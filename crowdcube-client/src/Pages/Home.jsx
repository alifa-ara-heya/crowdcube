import { useLoaderData } from "react-router-dom";
// import CampaignCard from "../components/CampaignCard";
import Banner from "../components/Banner";

import RunningCampaigns from "../components/RunningCampaigns";
import JoinUs from "../components/JoinUs";
import ToggleTheme from "../components/toggleTheme";


const Home = () => {
    const campaigns = useLoaderData();
    // console.log(campaigns);

    return (
        <div className="w-11/12 mx-auto max-w-[1440px]">

            <div className="md:hidden">
                <ToggleTheme />
            </div>
            <div className="max-w-[1550px]">
                <Banner />
            </div>



            <JoinUs />

            {/* running campaigns */}
            <RunningCampaigns campaigns={campaigns} />




        </div>
    );
};

export default Home;