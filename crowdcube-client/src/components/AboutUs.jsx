import Heading from "./Heading";
import img1 from '../assets/illus-1.jpg'
import img2 from '../assets/illus-2.jpg'
import img3 from '../assets/illus-3.jpg'

const AboutUs = () => {
    return (
        <div className="mb-7">
            <Heading title={'About Us'} subtitle={'At Crowdcube, we believe in the power of collective generosity. Our platform empowers individuals, communities, and organizations to bring their dreams to life, one donation at a time.'} />

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
                {/* Card 1 */}
                <div className="card shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={img1}
                        alt="Our Mission"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold ">Community-Centric</h3>
                        <p className=" mt-2 ">
                            We are more than a platform; we are a community. At Crowdcube, we bring together people who care, collaborate, and contribute to meaningful campaigns.
                        </p>
                    </div>
                </div>
                {/* Every campaign tells a story, and every story deserves a chance to be heard. Join us in turning ambitions into achievements. */}

                {/* Card 2 */}
                <div className="card shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={img2}
                        alt="Our Vision"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold  ">Transparency and Trust</h3>
                        <p className=" mt-2 ">
                            At Crowdcube, trust is at the core of what we do. We ensure every campaign is authentic, every donation is secure, and every contributor knows they are making a real difference.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card  shadow-lg rounded-lg overflow-hidden  ">
                    <img
                        src={img3}
                        alt="Our Team"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold  ">Mission-Focused</h3>
                        <p className=" mt-2 ">
                            Our mission is to create a trusted platform where causes, and innovations thrive through crowdfunding. We empower individuals to achieve their goals, while fostering a community of changemakers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutUs;