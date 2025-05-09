const ReclaimSection = () => {
    return (
        <>
            <section className="md:py-[80px] sm:py-[60px] py-[40px] claim-section">
            <div className="bg-white-9 w-fit mx-auto text-white-50 font-inter-regular md:py-[10px] md:px-[14px] py-[6px] px-[10px] rounded-[50px] font-normal md:text-base sm:text-sm text-xs">Hear Only What Matters, Nothing You Don't</div>
                <h3 className="max-w-[496px] w-[90%] mx-auto lg:text-[50px] sm:text-4xl text-2xl font-medium font-geist-medium text-white text-center sm:mt-[30px] mt-[16px] lg:leading-[62px]">Reclaim <span className="font-bold font-geist-bold">83%</span> of Your News Time</h3>
                <div className="sm:mt-[60px] mt-[30px] flex gap-[14px] max-w-[960px] mx-auto w-[90%] lg:flex-nowrap flex-wrap">
                    <div className="flex flex-col gap-[14px] lg:w-[55%] w-full ">
                        <div className="sm:p-[40px] p-[24px] bg-[url('/images/reclaim-card-1-bg.svg')] bg-cover bg-no-repeat bg-center  border border-[#FFFFFF0A] sm:rounded-[30px] rounded-[20px] shadow-[0px_8.91px_14.3px_0px_#00000040]">
                            <h6 className="text-white font-medium font-inter-medium md:text-xl sm:text-lg text-base">Zero Redundancy Guarantee</h6>
                            <p className="bg-gradient-to-b from-[rgba(255,255,255,0.76)] to-[rgba(255,255,255,0.304)] bg-clip-text text-transparent font-normal font-inter-regular sm:mt-[12px] mt-[4px] text-sm ">Our proprietary algorithm ensures you never hear the same story twice</p>
                            <div>
                                <img src="/images/reclaim-card-img-1.svg" alt="card img" className="mx-auto"/>
                            </div>
                            <div className="flex gap-[8px] items-start">
                                <img src="/images/info-icon.svg" about="info" className="mb-[-10px]" />
                                <p className="bg-gradient-to-b from-[rgba(255,255,255,0.76)] to-[rgba(255,255,255,0.304)] bg-clip-text text-transparent text-sm font-normal font-inter-regular">You saved 30 minutes by not listening the same news again.</p>
                            </div>
                        </div>
                        <div className="sm:p-[40px] p-[24px] bg-[url('/images/card2-bg.svg')] border border-[#FFFFFF0A] sm:rounded-[30px] rounded-[20px] bg-cover bg-no-repeat bg-center shadow-[0px_8.91px_14.3px_0px_#00000040]">
                            <h6 className="text-white font-medium font-inter-medium md:text-xl sm:text-lg text-base">Hands-Free Intelligence</h6>
                            <p className="bg-gradient-to-b from-[rgba(255,255,255,0.76)] to-[rgba(255,255,255,0.304)] bg-clip-text text-transparent font-normal font-inter-regular sm:mt-[12px] mt-[4px] text-sm mb-[224px]">Absorb critical information during commutes, workouts, or any downtime.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[14px] lg:w-[45%] w-full">
                        <div className="sm:p-[40px] p-[24px] bg-[url('/images/reclaim-card-2-bg.svg')] border border-[#FFFFFF0A] sm:rounded-[30px] rounded-[20px] bg-cover  bg-no-repeat bg-center w-full shadow-[0px_8.91px_14.3px_0px_#00000040]">
                            <h6 className="text-white font-medium font-inter-medium md:text-xl sm:text-lg text-base">Complete Source Control</h6>
                            <p className="bg-gradient-to-b from-[rgba(255,255,255,0.76)] to-[rgba(255,255,255,0.304)] bg-clip-text text-transparent font-normal font-inter-regular sm:mt-[12px] mt-[4px] text-sm ">Select exactly which publishers and outlets you trust - ignore the rest.</p>
                            <div className="my-[10px] mx-[-30px]">
                                <img src="/images/reclaim-card-img-2.svg" alt="card img" className="mb-[-50px] mx-auto"/>
                            </div>
                        </div>
                        <div className="sm:p-[40px] p-[24px] bg-[url('/images/card4-bg.png')] border border-[#FFFFFF0A] sm:rounded-[30px] rounded-[20px] bg-cover bg-no-repeat bg-bottom w-full h-full shadow-[0px_8.91px_14.3px_0px_#00000040]">
                            <h6 className="text-white font-medium font-inter-medium md:text-xl sm:text-lg text-base">Time-to-Value in 60 Seconds</h6>
                            <p className="bg-gradient-to-b from-[rgba(255,255,255,0.76)] to-[rgba(255,255,255,0.304)] bg-clip-text text-transparent font-normal font-inter-regular sm:mt-[12px] mt-[4px] text-sm lg:pb-0 pb-[200px]">Set up once, benefit forever with automatic daily updates.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReclaimSection;