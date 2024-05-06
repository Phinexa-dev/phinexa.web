import React, {useEffect} from 'react'
import { motion } from "framer-motion"
import './Industries.scss'

function Industries() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='hero industries'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        className="left">
            <p>Delve into our,</p>
            <p>customized solutions for specific industries</p>
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
            <img src={process.env.PUBLIC_URL + '/images/industries-hero.svg'} alt="hero" />
        </motion.div>
    </div>

    {/* What our industries section */}
    <section id='offerings' className='industries'>
      {/* <p className="section-header">What we offer</p> */}
      <div
      className="grid">
        {industries.map((industry, index) => (
          <motion.div
          initial= {{opacity: 0, y: "20%"}}
          whileInView={{
            opacity: 1, 
            y: "0%"
          }}
          viewport={{ once: true }}
          transition={{ type: 'spring'}}
          className="offer" 
          key={index}>
            <p className="title">{industry.title}</p>
            <p className="description">{industry.description}</p>
            <img src={process.env.PUBLIC_URL + `/images/industries/industries-${index+1}.svg`} alt="" />
          </motion.div>
        ))}
      </div>
    </section>
    </>
  )
}

const industries = [
    {
        title: 'Medical & Healthcare',
        description: 'AI-driven electronic health record systems. Telemedicine platforms with integrated AI chatbots.'
    },
    {
        title: 'Regtech solutions',
        description: 'AI-driven compliance monitoring tools. Blockchain technology for immutable audit trails.'
    },
    {
        title: 'Real estate',
        description: 'AI-powered property valuation models. Virtual reality (vr) property tours.'
    },
    {
        title: 'Fintech & Banking',
        description: 'Blockchain-based smart contracts for secure financial transactions. AI-powered chatbots for personalized customer service.'
    },
    {
        title: 'Insurance',
        description: 'Predictive analytics for accurate risk assessment. Blockchain for transparent claims processing.'
    },
    {
        title: 'Manufacturing & supply chain',
        description: 'Iot-enabled predictive maintenance systems. Blockchain for transparent supply chain management.'
    },
    {
        title: 'Events solutions',
        description: 'Virtual event platforms with ai-powered networking tools. Blockchain for secure ticketing and registration.'
    },
    {
        title: 'Government & public sector',
        description: 'Citizen-centric digital platforms. Blockchain for secure record-keeping.'
    },
    {
        title: 'Education technology',
        description: 'AI-powered adaptive learning platforms. Blockchain for credential verification.'
    },
    {
        title: 'Transport & logistics',
        description: 'Iot-enabled tracking and monitoring systems. AI algorithms for predictive maintenance.'
    },
    {
        title: 'Green energy and utilities',
        description: 'Iot sensors and ai analytics for energy optimization. Blockchain for peer-to-peer energy trading.'
    },
    {
        title: 'Technology and software development',
        description: 'Devops  practices and cloud-based infrastructure. AI for code analysis and testing.'
    },
    {
        title: 'Marketplaces, e-commerce & retail',
        description: 'AI-driven recommendation engines. Iot sensors for inventory management.'
    },
]

export default Industries