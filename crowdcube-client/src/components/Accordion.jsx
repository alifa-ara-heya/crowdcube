import { useState } from "react";
import Heading from "./Heading";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionData = [
        {
            title: "What is CrowdCube?",
            content:
                "CrowdCube is a crowdfunding platform where you can support or start campaigns for personal, social, or entrepreneurial causes. It provides the tools and community to make a lasting impact."
        },
        {
            title: "How can I start a campaign?",
            content:
                "Starting a campaign is easy! Simply sign up, click on 'Start a Campaign,' and follow the guided steps to set up your fundraising goals, description, and images."
        },
        {
            title: "How do I ensure my donations are secure?",
            content:
                "CrowdCube uses industry-standard encryption and secure payment gateways to protect your transactions. Your payment information is never stored on our servers, ensuring complete security for every donation you make."
        },
        {
            title: "How do I track my donations?",
            content:
                "You can view all your donations under the 'My Donations' section after logging in. You’ll find details of all campaigns you've contributed to and their progress."
        }
    ];

    return (
        <div className="w-11/12 mx-auto mb-16 max-w-[1440px]  shadow-lg rounded-lg p-6">
            {/*  <h2 className="text-3xl font-bold text-center text-amber-600 mb-6">
                Frequently Asked Questions
            </h2> */}
            <Heading title={'Frequently Asked Questions'} />
            <div className="space-y-4">
                {accordionData.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${activeIndex === index ? "border-amber-500" : "border-gray-300"
                            } rounded-lg overflow-hidden shadow-md`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            {item.title}
                            <span>
                                {activeIndex === index ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-amber-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 12H4"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-amber-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="px-6 py-4 text-gray-700 bg-gray-50">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
