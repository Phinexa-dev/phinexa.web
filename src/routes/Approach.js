import React, { useEffect } from 'react'
import './Approach.scss';
import { motion } from "framer-motion"
import IterativeSDLC from '../components/IterativeSDLC';
import { Helmet } from 'react-helmet';

const gridContainerVariant = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.15
        }
    }
}

const gridElementVariant = {
    hidden: {opacity: 0, y: "50px"},
    show: {opacity: 1, y: "0px"}
}


function Approach() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
      

  return (
    <>
    <Helmet>
        <title>Our Approach  - Phinexa</title>
        <meta
          name="description"
          content="Discover how Phinexa simplifies IT complexity with a streamlined software development process. Learn about our agile approach, scalability, quality, and tailored solutions."
        />
        <link rel="canonical" href="https://www.phinexa.io/our-approach" />
      </Helmet>
    <div className='hero approach'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left">
            <p>Our Approach</p>
            <p>and Collaboration Process</p>
        </motion.div>
        <motion.div 
        variants={{
          hidden: {x: "50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="right">
            <img src={process.env.PUBLIC_URL + '/images/approach-hero.svg'} alt="hero" />
        </motion.div>
    </div>

    <section id='benefits'>
        <div className="top">
            <div className="pros">
                <p className="title">How we simplify IT complexity</p>
                <p className='description'>Understanding that IT complexity can be a major pain point for businesses. We are dedicated to providing our clients with a streamlined and efficient software development process that takes the complexity out of IT.</p>
                <div className="images">
                    <div className="image">
                        <p className="img-title">Agile Approach</p>
                        <img src={process.env.PUBLIC_URL + '/images/agile-approach.svg'} alt="" />
                    </div>
                    <div className="image">
                        <p className="img-title">Scalability and Quality</p>
                        <img src={process.env.PUBLIC_URL + '/images/scalability.svg'} alt="" />
                    </div>
                </div>
            </div>
            <div className="pros">
                <p className="title">Benefits of our approach</p>
                <p className='description'>Our process is scalable, hence can accommodate projects of all sizes. We have a committment to delivering high-quality software that is reliable, secure, and maintainable.</p>
                <div className="images">
                    <div className="image">
                        <p className="img-title">Reduced complexity &
increased efficiency</p>
                        <img src={process.env.PUBLIC_URL + '/images/efficiency.svg'} alt="" />
                    </div>
                    <div className="image">
                        <p className="img-title">High-quality software</p>
                        <img src={process.env.PUBLIC_URL + '/images/quality.svg'} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <p className="paragraph">If you're looking for an IT solution company that can help you simplify IT complexity, contact us today. We'd be happy to discuss your project and how we can help you achieve your goals.</p>
    </section>

    <section className='approach'>
        <p className="section-header">Collaboration Process</p>
        <IterativeSDLC/>
    </section>

    <section className='client-benefits'>
        <p className="section-header">Client Benefits</p>
        <motion.div 
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid">
            <motion.div variants={gridElementVariant} className="benefit">
                <p className="title">Efficient Communication</p>
                <p className="description">Your insights shape the solutions, ensuring relevance and effectiveness.</p>
            </motion.div>
            <motion.div variants={gridElementVariant} className="benefit">
                <p className="title">Continuous Support</p>
                <p className="description">Ongoing support post-project completion to address any concerns.</p>
            </motion.div>
            <motion.div variants={gridElementVariant} className="benefit">
                <p className="title">Measurable Results</p>
                <p className="description">Tangible, measurable outcomes that align with your business objectives.</p>
            </motion.div>
            <motion.div variants={gridElementVariant} className="benefit">
                <p className="title">Timely Delivery</p>
                <p className="description">Strict adherence to timelines for project delivery.</p>
            </motion.div>
            <motion.div variants={gridElementVariant} className="img">
            <svg width="331" height="197" viewBox="0 0 331 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                animate={["initial"]}
                whileHover={["grow"]}
                variants={{
                  grow: {
                    scale: 1.1
                  },
                  rotate: {
                    rotate: [null, -5, 5, 0],
                    transition: {
                      duration: 10
                    }
                  },
                  initial: {
                    y: [-40, 40],
                    x: [40, -40],
                    rotate: 0,
                    transition: {
                      delay: 0.2,
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }
                }}
                d="M16.6404 50.3496L110.038 2.13621L203.435 50.3496V146.423L110.038 194.637L16.6404 146.423V50.3496Z" stroke="#005F6A" stroke-width="3.79641"/>
                <motion.path 
                animate={["initial"]}
                variants={{
                  rotate: {
                    rotate: [null, -5, 5, 0],
                    transition: {
                      duration: 10
                    }
                  },
                  initial: {
                    y: [-40, 40],
                    x: [-40, 40],
                    rotate: 0,
                    transition: {
                      delay: 1,
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }
                }}
                d="M126.734 50.3496L220.131 2.13621L313.528 50.3496V146.423L220.131 194.637L126.734 146.423V50.3496Z" stroke="#E6A134" stroke-width="3.79641"/>
            </svg>
                {/* <img src={process.env.PUBLIC_URL + '/images/symbol-1.svg'} alt="" /> */}
            </motion.div>
            <motion.div variants={gridElementVariant} className="benefit">
                <p className="title">Tailored Solutions</p>
                <p className="description">Customized approaches that address your specific needs.</p>
            </motion.div>
        </motion.div>
    </section>
    </>
  )
}

export default Approach