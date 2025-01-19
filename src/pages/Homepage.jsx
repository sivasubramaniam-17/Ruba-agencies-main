
import ResponsiveNavBar from '../components/navbar';
import Header from '../components/header';
import HomeApplianceInstallation from '../components/partnerlogo';

import Services from '../components/services';

import BookSlot from '../components/bookslot';

import MarketingComponent from '../components/marketing';

import HomeApplianceComponent from '../components/whychooseus';
import StepperComponent from '../components/stepper';
import Testimonials from '../components/reviews';
import Footer from '../components/footer';
import useScrollTransition from '../useScrollTransition';



const HomePage = () => {
  useScrollTransition()
  return (
    <>
   <ResponsiveNavBar/>
   <Header/>
   <HomeApplianceInstallation/>
   <HomeApplianceComponent/>
   {/* <AboutSection/> */}
   <MarketingComponent/>
   {/* <JobSearchComponent/> */}
   <Services/>
   {/* <StatsShowcase/> */}
   <StepperComponent/>
   
   
  <Testimonials/>
  
 
   <BookSlot/>
   
  <Footer/>


    </>
  );
};

export default HomePage;
