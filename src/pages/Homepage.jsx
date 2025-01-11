
import ResponsiveNavBar from '../components/navbar';
import Header from '../components/header';
import HomeApplianceInstallation from '../components/partnerlogo';

import Services from '../components/services';
import AboutSection from '../components/aboutus';
import BookSlot from '../components/bookslot';
import StatsShowcase from '../components/statusabout';
import MarketingComponent from '../components/marketing';
import JobSearchComponent from '../components/jobserach';
import HomeApplianceComponent from '../components/whychooseus';
import StepperComponent from '../components/stepper';
import Testimonials from '../components/reviews';
import Footer from '../components/footer';



const HomePage = () => {
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
