import React, {useEffect} from 'react'
import Top from "../components/ContactUs/Top";
import ContactCard from "../components/ContactUs/ContactCard";
function ContactUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Top/>
            <ContactCard/>
        </>
    )

}
export default ContactUs
