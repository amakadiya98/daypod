const testimonials = [
  [
    {
      quote:
        "“I've reclaimed 5.2 hours weekly by replacing my news browsing habit with Daypod1. My commute now delivers the same insights in a fraction of the time”",
      image: "/images/user-1.jpg",
      name: "Sarah T",
      position: "Managing Partner at Elevation Ventures",
    },
    {
      quote: "Our team productivity has skyrocketed since switching to Aligno!",
      image: "/images/user-2.jpg",
      name: "Rachel Kim",
      position: "DevSync",
    },
  ],
  [
    {
      quote:
        "“The ROI is undeniable. I save $12,000 worth of my time annually while actually being better informed than colleagues who spend hours reading news”",
      image: "/images/user-3.jpg",
      name: "Priya M",
      position: "Principal Investment Strategist",
    },
    {
      quote:
        "Aligno’s user-friendly interface helped our team get started quickly, no learning curve!",
      image: "/images/user-4.jpg",
      name: "Olivia Turner",
      position: "DesignHub",
    },
  ],
  [
    {
      quote:
        "“After 3 weeks with Daypod1, I've tracked a 34% increase in relevant conversation starters with clients. This translated directly to faster deal closings”",
      image: "/images/user-5.jpg",
      name: "Michael W",
      position: "VP of Enterprise Sales, CloudTech",
    },
    {
      quote:
        "Aligno's sprint management tools made tracking our progress effortless!",
      image: "/images/user-6.jpg",
      name: "Liam Cooper",
      position: "InnovateX",
    },
  ],
];

const CommunitySection = () => {
  return (
    <section className="md:py-[80px] sm:py-[60px] py-[40px] community-section bg-black-15">
      <div className="max-w-[896px] w-[90%] mx-auto">
        <div className="bg-white-9 w-fit mx-auto text-white-50 font-inter-regular md:py-[6px] md:px-[16px] py-[6px] px-[10px] rounded-[50px] font-normal md:text-base sm:text-sm text-xs">
          OUR COMMUNITY
        </div>
        <h3 className="text-white font-medium font-geist-medium lg:text-[50px] sm:text-4xl text-2xl text-center max-w-[628px] mx-auto lg:leading-[62px] md:mt-[30px] mt-[16px]">
          Hear Why Listeners Are Switching to Daypod1
        </h3>
        <div className="sm:mt-[60px] mt-[30px] custom-lg:flex hidden gap-[16px] w-full flex-nowrap flex-wrap">
          {testimonials.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[16px] w-full">
              {column.map((testimonial, index) => (
                <div
                  key={index}
                  className="pt-[25px] pb-[28px] px-[23px] rounded-[36px] border border-[#FFFFFF0A] w-full community-card"
                >
                  <p className="font-normal font-inter-regular text-white-54  w-[99%] text-base">
                    {testimonial.quote}
                  </p>
                  <div className="mt-[24px] flex gap-[20px] items-center">
                    <img
                      src={testimonial.image}
                      alt="user"
                      className="h-[42px] w-[42px] min-h-[42px] min-w-[42px] rounded-full object-cover border-[2px] border-white"
                    />
                    <div>
                      <h6 className="font-medium font-inter-medium text-white sm:text-lg text-base">
                        {testimonial.name}
                      </h6>
                      <p className="font-normal font-inter-regular text-white opacity-[0.44] text-[13px] w-[90%]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="sm:mt-[60px] mt-[30px] custom-lg:hidden grid sm:grid-cols-2 gap-[16px]">
          {testimonials.flat().map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:pt-[25px] sm:pb-[28px] sm:px-[23px] p-[20px] md:rounded-[36px] rounded-[24px] border border-[#FFFFFF0A] community-card flex flex-col"
            >
              <p className="font-normal font-inter-regular text-white-54 w-[99%] flex-grow sm:text-base text-sm">
                {testimonial.quote}
              </p>
              <div className="sm:mt-[24px] mt-[16px] flex gap-[20px] items-center">
                <img
                  src={testimonial.image}
                  alt="user"
                  className="h-[42px] w-[42px] min-h-[42px] min-w-[42px] rounded-full object-cover border-[2px] border-white"
                />
                <div className="w-full">
                  <h6 className="font-medium font-inter-medium text-white sm:text-lg text-base">
                    {testimonial.name}
                  </h6>
                  <p className="font-normal font-inter-regular text-white opacity-[0.44] text-[13px] w-[90%]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;

