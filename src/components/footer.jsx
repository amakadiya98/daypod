const Footer = () => {
    return (
        <footer className="footer 2xl:pb-[340px] custom-lg:pb-[260px] md:pb-[220px] sm:pb-[180px] pb-[120px] md:pt-[70px] pt-[40px] relative before:content-[''] before:absolute before:bottom-0 before:w-full 2xl:before:h-[300px] custom-lg:before:h-[236px] sm:before:h-[150px] before:h-[100px]  before:bg-[url('images/DAYPOD1.svg')] before:bg-no-repeat before:bg-center before:bg-contain">
            <div className="container">
                <div className="flex justify-between gap-[40px] custom-lg:flex-nowrap flex-wrap">
                    <div className="custom-lg:max-w-[400px]">
                        <a href="#" >
                            <img src="/images/footer-logo.svg" alt="logo" />
                        </a>
                        <div className="text-white-40 font-semibold font-inter-semibold mt-[16px]">© 2025 DAYPOD1. All Rights Reserved.</div>
                        <p className="mt-[16px] text-xs text-white-50 font-normal font-inter-regular">Your time is precious. Daypod1 delivers a tailored audio briefing with only what you need to know—from the exact sources you choose</p>
                    </div>
                    <div className="flex lg:gap-[40px] custom-lg:gap-[20px] sm:gap-[40px] gap-[24px]">
                        <div>
                            <h6 className="text-white text-base font-semibold font-inter-semibold">Explore</h6>
                            <ul className="mt-[16px] flex flex-col lg:gap-[16px] sm:gap-[10px] gap-[2px]">
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Features</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Pricing</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Integrations</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Blog</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-white text-base font-semibold font-inter-semibold">Case Study</h6>
                            <ul className="mt-[16px] flex flex-col lg:gap-[16px] sm:gap-[10px] gap-[2px]">
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Case Study 1</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Case Study 2</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Case Study 3</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Case Study 4</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-white text-base font-semibold font-inter-semibold">Follow us</h6>
                            <ul className="mt-[16px] flex flex-col lg:gap-[16px] sm:gap-[10px] gap-[2px]">
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">X</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Instagram</a></li>
                                <li><a href="#" className="text-white-50 font-normal font-inter-regular hover:underline md:text-base text-sm">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;