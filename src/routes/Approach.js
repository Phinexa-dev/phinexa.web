import React from 'react'
import './Approach.scss';
import { motion } from "framer-motion"
import IterativeSDLC from '../components/IterativeSDLC';

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
  return (
    <>
    <div className='hero approach'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
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
        <p className="section-title">Collaboration Process</p>
        <IterativeSDLC/>
    </section>

    <section className='approach'>
        <p className="section-title">Client Benefits</p>
        <motion.div 
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="show"
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
                <img src={process.env.PUBLIC_URL + '/images/symbol-1.svg'} alt="" />
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