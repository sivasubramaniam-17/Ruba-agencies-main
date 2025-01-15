import BookingForm from "../components/bookslot"
import Footer from "../components/footer"

import ResponsiveNavBar from "../components/navbar"
import HomeAppliancesSection from "../components/partnerlogo"
import ScrollingText from "../components/scrollingtext"
import ServicesSection from "../components/servicedetails"
import HomeApplianceServices from "../components/servicegallery"
import ServiceHeader from "../components/serviceheader"
import ServicesCard from "../components/services"


function ServicesPage() {
  return (
    <>
    <ResponsiveNavBar/>
    <ServiceHeader/>
    <ScrollingText/>
    <HomeAppliancesSection/>
    <HomeApplianceServices/>
    <ServicesCard/>
    <ServicesSection/>
    <BookingForm/>
  
   
    <Footer/>
    </>
  )
}

export default ServicesPage