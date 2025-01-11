
import HomeApplianceComponent from "../components/aboutdetails"
import MissionComponent from "../components/aboutdetails2"
import Gallery from "../components/aboutgallery"
import HeaderComponent from "../components/aboutheader"
import BookingForm from "../components/bookslot"


import Footer from "../components/footer"
import ResponsiveNavBar from "../components/navbar"
import ScrollingText from "../components/scrollingtext"


function Aboutpage() {
  return (
    <>
    <ResponsiveNavBar/>
    <HeaderComponent/>
    <ScrollingText/>
    <HomeApplianceComponent/>
    <MissionComponent/>
    <Gallery/>
    <BookingForm/>
 
  

    <Footer/>
    </>
  )
}

export default Aboutpage