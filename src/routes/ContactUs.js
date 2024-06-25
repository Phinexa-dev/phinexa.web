import React, {useEffect} from 'react'
import Top from "../components/ContactUs/Top";
import ContactCard from "../components/ContactUs/ContactCard";
import { Helmet } from 'react-helmet';
function ContactUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
          <Helmet>
                 <title>Contact Us - Phinexa</title>
                 <meta
                 name="description"
                content="Get in touch with Phinexa for priority access to our client engagement team. Discuss your software development needs and more. Contact us today!"
                />
                <link rel="canonical" href="https://www.phinexa.io/contact" />
            </Helmet>
            <Top/>
            <ContactCard/>
        </>
    )

}
export default ContactUs
