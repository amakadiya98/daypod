const HeroSection = () => {
    return (
        <section className="relative rounded-t-[60px] overflow-hidden sm:py-[80px] py-[60px] before:content-[''] before:absolute before:z-[0] before:bg-[linear-gradient(0deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0.12)),_linear-gradient(148.41deg,_rgba(86,_114,_255,_0.7)_-47.06%,_rgba(170,_24,_255,_0.7)_105.54%)] before:h-[500px] before:w-[430px] before:rounded-full md:before:top-[-260px] before:top-[-400px] md:before:left-[-210px] before:left-[-300px] before:blur-[120px] after:content-[''] after:absolute after:z-[0] after:bg-[linear-gradient(0deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0.12)),_linear-gradient(148.41deg,_rgba(86,_114,_255,_0.7)_-47.06%,_rgba(170,_24,_255,_0.7)_105.54%)] after:h-[500px] after:w-[430px] after:rounded-full md:after:top-[-260px] after:top-[-400px]  md:after:right-[-210px] after:right-[-300px] after:blur-[120px]">
            <div className="max-w-[864px] mx-auto w-[90%] flex flex-col items-center relative z-[2] sm:gap-[20px] gap-[16px]">
                <div className="py-[10px] px-[15px] bg-white-8 flex gap-[10px] items-center backdrop-blur-[44px] w-fit mx-auto rounded-[40px]">
                    <img src="/images/audio-icon.svg" alt="audio-icon" className="w-[20px] h-[16px]" />
                    <p className="sm:text-base text-sm font-normal text-white font-inter-regular"> Your Personalized Audio News Briefing</p>
                </div>
                <div>
                    <h2 className="lg:text-6xl sm:text-4xl text-[28px] font-geist-semibold text-white flex sm:gap-[20px] gap-[10px] items-center sm:flex-nowrap flex-wrap justify-center">Never Waste Another
                        <span className="flex gap-[10px] items-center bg-white lg:py-[14px] py-[5px] lg:px-[16px] px-[12px] w-fit rounded-[55px] ">
                            <img src="/images/clock-icon.svg" alt="clock-icon" className="lg:w-[36px] sm:w-[24px] w-[20px] lg:h-[36px] sm:h-[24px] h-[20px]" />
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(148.41deg,_rgba(86,_114,_255,_0.9)_-47.06%,_rgba(170,_24,_255,_0.9)_105.54%)] font-semibold font-geist-semibold lg:text-[42px] sm:text-[24px] text-[20px]">Minute</span>
                        </span>
                    </h2>
                    <h2 className="lg:text-6xl sm:text-4xl text-[28px] font-geist-semibold text-white text-center lg:mt-[16px] mt-[8px]">on Irrelevant News Again</h2>
                </div>
                <p className="lg:text-xl sm:text-lg text-base text-white-50 font-inter-regular text-center max-w-[426px] mx-auto ">Only the news that matters to you, delivered in audio from the sources you choose.</p>
                <form  className="max-w-[460px] mx-auto flex gap-[10px]">
                    <input type="email" name="email" placeholder="Your email address" className="sm:py-[12px] py-[10px] sm:px-[20px] px-[16px] bg-white-10 rounded-[40px] border-0 w-full placeholder-text-50 sm:text-base text-sm font-normal font-inter-regular  text-white focus:border-0 focus:outline-0"/>
                    <button className="sm:text-base text-sm text-white font-inter-medium sm:py-[12px] py-[10px] sm:px-[20px] px-[16px] rounded-[40px] bg-[linear-gradient(148.41deg,_rgba(86,_114,_255,_0.9)_-47.06%,_rgba(170,_24,_255,_0.9)_105.54%)] whitespace-nowrap hover:bg-[linear-gradient(148.41deg,_rgba(170,_24,_255,_0.9)_-47.06%,_rgba(86,_114,_255,_0.9)_105.54%)] transition duration-300 ease-in-out">Join the Waitlist</button>
                </form>
                <div className="w-full overflow-hidden bg-[linear-gradient(112.86deg,rgba(255,255,255,0.06)_-6.68%,rgba(255,255,255,0.018)_45.63%,rgba(255,255,255,0.06)_103.45%)] sm:p-[32px] p-[12px] sm:rounded-[30px] rounded-[16px] border border-[#FFFFFF0A] flex justify-between sm:gap-2 gap-[4px] items-center sm:mt-[20px] mt-[4px] relative before:content-[''] before:w-[500px] before:h-[136px] before:absolute before:left-[-150px] before:top-[-40px] before:rounded-full before:bg-white-8 before:blur-[50px] before:pointer-events-none after:content-[''] after:w-[500px] after:h-[136px] after:absolute after:right-[-180px] after:bottom-[-40px] after:rounded-full after:bg-white-8 after:blur-[50px] after:pointer-events-none">
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
            <img src="/images/hero-section-img.png" alt="hero-section-img" className="mx-auto w-[90%] max-w-[1014px] md:mt-[-64px] sm:mt-[-24px] mt-[-10px]"/>
        </section>
    )
}

export default HeroSection;