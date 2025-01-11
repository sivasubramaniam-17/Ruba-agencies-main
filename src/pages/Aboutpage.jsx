
import HomeApplianceComponent from "../components/aboutdetails"
import MissionComponent from "../components/aboutdetails2"
import Gallery from "../components/aboutgallery"
import HeaderComponent from "../components/aboutheader"
import BookingForm from "../components/bookslot"


import Footer from "../components/footer"
import ResponsiveNavBar from "../components/navbar"


function Aboutpage() {
  return (
    <>
    <ResponsiveNavBar/>
    <HeaderComponent/>
    <HomeApplianceComponent/>
    <MissionComponent/>
    <Gallery/>
    <BookingForm/>
 
  

    <Footer/>
    </>
  )
}

export default Aboutpage