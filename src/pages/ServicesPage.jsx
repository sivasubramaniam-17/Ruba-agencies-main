import BookingForm from "../components/bookslot"
import Footer from "../components/footer"

import ResponsiveNavBar from "../components/navbar"
import HomeAppliancesSection from "../components/partnerlogo"
import ScrollingText from "../components/scrollingtext"
import ServicesSection from "../components/servicedetails"

import ServiceHeader from "../components/serviceheader"
import ServicesCard from "../components/services"
import useScrollTransition from "../useScrollTransition"


function ServicesPage() {
  useScrollTransition()
  return (
    <>
    <ResponsiveNavBar/>
    <ServiceHeader/>
    <ScrollingText/>
    <HomeAppliancesSection/>
  
    <ServicesCard/>
    <ServicesSection/>
    <BookingForm/>
  
   
    <Footer/>
    </>
  )
}

export default ServicesPage