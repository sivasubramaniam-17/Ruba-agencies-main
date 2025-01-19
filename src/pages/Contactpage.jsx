import ContactForm from "../components/contactdetails"
import ContactHeader from "../components/contactheader"
import Footer from "../components/footer"
import ResponsiveNavBar from "../components/navbar"
import ScrollingText from "../components/scrollingtext"
import useScrollTransition from "../useScrollTransition"


function Contactpage() {
  useScrollTransition()
  return (
    <>
    <ResponsiveNavBar/>
    <ContactHeader/>
    <ScrollingText/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contactpage