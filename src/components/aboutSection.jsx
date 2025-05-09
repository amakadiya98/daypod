const AboutSection = () => {
    const steps = [
      {
        image: "/images/step1.svg",
        alt: "step1",
        title: "Select",
        description:
          "your trusted sources and priority topics in our 60-second setup wizard.",
      },
      {
        image: "/images/step2.svg",
        alt: "step2",
        title: "Schedule",
        description:
          "your ideal delivery time, whether it's during your morning commute or evening workout.",
      },
      {
        image: "/images/step3.svg",
        alt: "step3",
        title: "Listen",
        description:
          "and absorb only what matters, with zero fluff and 100% relevance to your interests.",
      },
    ];
  
    return (
      <section className="md:py-[80px] sm:py-[60px] py-[40px] about-section">
        <div className="max-w-[960px] mx-auto w-[90%] container">
          <h3 className="font-medium text-white lg:text-[50px] sm:text-4xl text-2xl font-geist-medium text-center">
            How Daypod1 Works
          </h3>
          <div className="flex gap-[20px] sm:mt-[60px] mt-[30px] justify-center lg:flex-nowrap flex-wrap">
            {steps.map((step, index) => (
              <div className="lg:w-full sm:w-[48%] w-full" key={index}>
                <div className="md:rounded-[50px] sm:rounded-[40px] rounded-[30px]  border border-[#FFFFFF0A] w-full">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-full rounded-[50px]"
                  />
                </div>
                <p className="lg:mt-[40px] sm:mt-[20px] mt-[16px] text-white-50 md:text-lg sm:text-base text-sm font-normal font-inter-regular lg:w-[90%] w-full">
                  <span className="font-medium font-inter-medium text-white">
                    {step.title}
                  </span>{" "}
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  