import React, {useEffect} from 'react'
import LeadingTech from "../components/LeadingTech/LeadingTech";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
function WhatWeDoPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
            <WhatWeDo/>
            <LeadingTech/>
        </>
    )

}
export default WhatWeDoPage
