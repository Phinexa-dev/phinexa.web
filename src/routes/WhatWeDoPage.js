import React, {useEffect} from 'react'
import LeadingTech from "../components/LeadingTech/LeadingTech";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Helmet } from 'react-helmet'
function WhatWeDoPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
        <Helmet>
        <title>What We Do - Phinexa</title>
        <meta
          name="description"
          content="Discover how Phinexa innovates with tailored IT solutions, simplifying complexities through DevOps, blockchain, cybersecurity, data analysis, IoT, and more."
        />
        <link rel="canonical" href="https://www.phinexa.com/what-we-do" />
      </Helmet>
            <WhatWeDo/>
            <LeadingTech/>
        </>
    )

}
export default WhatWeDoPage
