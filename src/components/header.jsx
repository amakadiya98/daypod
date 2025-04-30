import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-[44px] flex justify-between items-center bg-daypod-black relative z-50">
      {/* Logo */}
      <div>
        <a href="#">
          <img src="/images/daypod-logo.svg" alt="brand-logo" className="max-w-[160px] md:max-w-[190px]" />
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-[40px]">
        <nav className="flex gap-[26px] items-center text-white font-inter-medium text-lg ">
          <a href="#" className='hover:text-primary'>Features</a>
          <a href="#" className='hover:text-primary'>Reviews</a>
          <a href="#" className='hover:text-primary'>Pricing</a>
          <a href="#" className='hover:text-primary'>FAQs</a>
        </nav>
        <button className="py-[12px] px-[22px] font-inter-bold text-base bg-white rounded-[12px] shadow-[0px_5px_10px_0px_#0000001A] hover:bg-[linear-gradient(148.41deg,_rgba(86,_114,_255,_0.9)_-47.06%,_rgba(170,_24,_255,_0.9)_105.54%)] hover:text-white text-black transition duration-300 ease-in-out">
          Get Daypod
        </button>
      </div>

      {/* Hamburger Menu */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-daypod-black py-4 px-6 flex flex-col gap-4 md:hidden">
          <nav className="flex flex-col gap-4 text-white font-inter-medium text-base">
            <a href="#">Features</a>
            <a href="#">Reviews</a>
            <a href="#">Pricing</a>
            <a href="#">FAQs</a>
          </nav>
          <button className="mt-2 py-3 px-4 w-full font-inter-bold text-sm bg-white text-black rounded-[12px] shadow-[0px_5px_10px_0px_#0000001A] mb-3">
            Get Daypod
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

