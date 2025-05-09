const NewsLetterSection = () => {
    return (
        <section className="md:py-[80px] sm:py-[60px] py-[40px] bg-black-15">
            <div className="container">
                <div className="w-full bg-[url('images/newsletter-bg.svg')] border-[0.5px] border-[#FFFFFF0A] md:rounded-[50px] sm:rounded-[30px] rounded-[20px] md:p-[50px] sm:px-[28px] px-[12px] sm:py-[40px] py-[20px] bg-no-repeat bg-center xl:bg-[length:110%] bg-cover">
                    <h6 className="max-w-[564px] mx-auto font-geist-semibold font-semibold text-white lg:text-[50px] sm:text-3xl text-xl text-center lg:leading-[60px]">
                        Ready to Transform
                        Your News Experience?
                    </h6>
                    <p className="max-w-[350px] mx-auto text-white-60 sm:text-base text-sm text-center mt-[15px]">
                        Only the news that matters to you, delivered in audio from the sources you choose.
                    </p>
                    <form className="max-w-[440px] mx-auto flex gap-[10px] md:mt-[30px] sm:mt-[20px] mt-[16px]">
                        <input type="email" name="email" placeholder="Your email address" className="sm:py-[12px] py-[10px] sm:px-[20px] px-[16px] bg-white-10 rounded-[40px] border-0 w-full placeholder-text-50 sm:text-base text-sm font-normal font-inter-regular  text-white focus:border-0 focus:outline-0" />
                        <button className="sm:text-base text-sm text-white font-inter-medium sm:py-[12px] py-[10px] sm:px-[20px] px-[16px] rounded-[40px] bg-[linear-gradient(148.41deg,_rgba(86,_114,_255,_0.9)_-47.06%,_rgba(170,_24,_255,_0.9)_105.54%)] whitespace-nowrap hover:bg-[linear-gradient(148.41deg,_rgba(170,_24,_255,_0.9)_-47.06%,_rgba(86,_114,_255,_0.9)_105.54%)] transition duration-300 ease-in-out">Join the Waitlist</button>
                    </form>
                    <div className="md:mt-[50px] sm:mt-[30px] mt-[16px] w-full bg-[url('/images/discount-card-bg.svg')] md:py-[30px] sm:py-[16px] py-[10px] md:px-[45px] sm:px-[16px] px-[10px] border-[0.5px] border-[#FFFFFF0A] md:rounded-[30px] sm:rounded-[20px] rounded-[16px] flex justify-between items-center bg-no-repeat bg-center bg-cover">
                        <div>
                            <p className="text-white-50 lg:text-2xl sm:text-lg text-xs font-normal font-inter-regular">Reserve Your Premium Spot</p>
                            <p className="font-inter-semibold text-white font-semibold lg:text-[26px] sm:text-xl text-sm lg:mt-[6px] sm:mt-[4px] mt-[2px]">50% Lifetime Discount</p>
                        </div>
                        <div>
                            <div className="flex sm:gap-[6px] gap-[3px] items-center justify-end">
                                <img src="/images/avatar1.svg" alt="avtar" className="lg:h-[52px] sm:h-[36px] h-[24px] lg:w-[52px] sm:w-[36px] w-[24px] rounded-full" />
                                <img src="/images/avatar2.svg" alt="avtar" className="lg:h-[52px] sm:h-[36px] h-[24px] lg:w-[52px] sm:w-[36px] w-[24px] rounded-full" />
                                <img src="/images/avatar3.svg" alt="avtar" className="lg:h-[52px] sm:h-[36px] h-[24px] lg:w-[52px] sm:w-[36px] w-[24px] rounded-full" />
                                <img src="/images/avatar4.svg" alt="avtar" className="lg:h-[52px] sm:h-[36px] h-[24px] lg:w-[52px] sm:w-[36px] w-[24px] rounded-full" />
                            </div>
                            <p className="font-inter-regular lg:text-xl sm:text-lg text-xs font-normal text-white-50 text-right sm:mt-[10px] mt-[4px]">Only <span className="text-white font-semibold font-inter-semibold">1,000</span> Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterSection;