import Header from './components/header';
import HeroSection from './components/heroSection';
import ReclaimSection from './components/reclaimSection';
import './style.css'
import './layout.css'
import AboutSection from './components/aboutSection';
import CommunitySection from './components/communitySection';
import FaqSection from './components/faqSection';
import NewsLetterSection from './components/newsletter';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className='bg-[linear-gradient(to_bottom,_#141416,_#0E0E11)] m-0 min-h-screen'>
        <Header />
        <HeroSection/>
        <ReclaimSection/>
        <AboutSection/>
        <CommunitySection/>
        <FaqSection/>
        <NewsLetterSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App;


