import { useLoaderData } from "react-router-dom";
// import CampaignCard from "../components/CampaignCard";
import Banner from "../components/Banner";

import RunningCampaigns from "../components/RunningCampaigns";
import JoinUs from "../components/JoinUs";
import ToggleTheme from "../components/toggleTheme";
import Newsletter from "../components/Newsletter";
import Accordion from "../components/Accordion";


const Home = () => {
    const campaigns = useLoaderData();
    // console.log(campaigns);

    return (
        <div className="w-11/12 mx-auto max-w-[1440px]">

            <div className="">
                <ToggleTheme />
            </div>

            <Banner />




            <JoinUs />

            {/* running campaigns */}
            <RunningCampaigns campaigns={campaigns} />
            <Accordion />

            <Newsletter />

        </div>
    );
};

export default Home;