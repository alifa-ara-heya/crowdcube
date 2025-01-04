import { useLoaderData } from "react-router-dom";
// import CampaignCard from "../components/CampaignCard";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUS";
import RunningCampaigns from "../components/RunningCampaigns";
import JoinUs from "../components/JoinUs";
import ToggleTheme from "../components/toggleTheme";


const Home = () => {
    const campaigns = useLoaderData();
    // console.log(campaigns);

    return (
        <div className="w-11/12 mx-auto max-w-[1440px]">

            <ToggleTheme />
            <Banner />

            <AboutUs />

            <JoinUs />

            {/* running campaigns */}
            <RunningCampaigns campaigns={campaigns} />




        </div>
    );
};

export default Home;