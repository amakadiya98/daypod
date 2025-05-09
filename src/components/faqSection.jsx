import { useState } from "react";

const accordionData = [
    {
        title: "What About Important Updates?",
        content:
            "Our smart algorithms differentiate between new developments and repeated stories, ensuring you get crucial updates without redundant content",
    },
    {
        title: "Is It Really Worth The Time?",
        content:
            "Our smart algorithms differentiate between new developments and repeated stories, ensuring you get crucial updates without redundant content",
    },
    {
        title: "How Do I Know Sources Are Reliable?",
        content:
            "Our smart algorithms differentiate between new developments and repeated stories, ensuring you get crucial updates without redundant content",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="md:py-[80px] sm:py-[60px] py-[40px] faq-section bg-black-15">
            <div className="container ">
            <div className="bg-white-9 w-fit mx-auto text-white-50 font-inter-regular md:py-[6px] md:px-[16px] py-[6px] px-[10px] rounded-[50px] font-normal md:text-base sm:text-sm text-xs">
                    FAQ
                </div>
                <h3 className="text-white font-medium font-geist-medium lg:text-[50px] sm:text-4xl text-2xl text-center max-w-[628px] mx-auto lg:leading-[62px] sm:mt-[30px] mt-[16px]">
                    Got Questions? We got Answers
                </h3>
                <div className="sm:mt-[60px] mt-[30px]">
                    <div className="flex flex-col sm:gap-[20px] gap-[16px]">
                        {accordionData.map((item, index) => (
                            <div key={index} className="bg-[url('/images/accordion-item-bg.svg')] even:bg-[url('/images/accordion-even-item-bg.svg')] bg-center sm:px-[23px] px-[16px] rounded-[20px] border-[0.5px] border-[#FFFFFF0A] outline-0 bg-no-repeat bg-cover">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left sm:pt-[25px] pt-[16px] sm:pb-[25px] pb-[16px] flex justify-between items-start gap-2 text-white font-medium"
                                >
                                    <span className="text-white font-medium font-inter-medium lg:text-xl sm:text-lg text-base">{item.title}</span>
                                    <div>{openIndex === index ? <span className="text-xs">✖</span> : <span className="text-sm">🞣</span>}</div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 text-white-50 font-normal font-inter-regular lg:text-lg sm:text-base text-sm w-[94%] ${openIndex === index ? "max-h-40 mt-[-5px]" : "max-h-0 py-0"
                                        }`}
                                >
                                    <p className="sm:pb-[25px] pb-[16px]">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
