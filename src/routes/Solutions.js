import React, { useEffect } from 'react'
import './Solutions.scss';
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Navigation, Scrollbar } from 'swiper/modules';
import SolutionsBackground from '../components/SolutionsBackground';
import { Helmet } from 'react-helmet';
function Solution() {

    useEffect(() => {
      window.scrollTo(0, 0)
      const scrollAndDelay = () => {
        const targetElement = document.querySelector('.hero-solutions');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      };

      const timeoutId = setTimeout(scrollAndDelay, 2000);

      return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <Helmet>
        <title>Solutions - Phinexa</title>
        <meta
          name="description"
          content="Experience excellence with Phinexa's IT automation, container orchestration, DevOps as a service, software development, cybersecurity, and cloud migration solutions."
        />
        <link rel="canonical" href="https://www.phinexa.io/solutions" />
      </Helmet>
    <div className='hero-solutions'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left">
            <p>Experience</p>
            <p>the excellence of our...</p>
        </motion.div>
        <div className='background-pattern'>
            <SolutionsBackground/>
            {/* <img src={process.env.PUBLIC_URL + '/images/solutions-background.svg'} alt="hero" /> */}
        </div>
    </div>

    <section id='animated-projects'>
        <p className="header">If your project is just a glint in your eye, fully scoped, or a project you want to take to the next level.
Worry no more! We've got you covered.</p>
        <div 
        className='my-swiper'
        >
        <Swiper 
        spaceBetween={80}
        breakpoints={{
          0: {
            slidesPerView: 1,
            scrollbar: {
              el: '.swiper-scrollbar',
              enabled: true,
              hide: false,
            }
          },
          1248: { 
            slidesPerView: 2,
          },
          500: {
            scrollbar: {
              enabled: false,
            }
          }
        }}
        modules={[Navigation, Scrollbar]} 
        navigation={{ nextEl: ".next-arrow", prevEl: ".prev-arrow" }}
        className="project-slider"
        style={{
          overflowY: "visible"
        }}
        >
          {solutions.map((solution, index) => (
            <SwiperSlide>
              <div className="project-card">
                <div className="image">
                  <img className='reference' src={process.env.PUBLIC_URL + '/images/' + solution.reference} alt="" />
                </div>
                <img className='content-img mobile' src={process.env.PUBLIC_URL + '/images/' + solution.symbol} alt="" />
                <p className="title">{solution.title}</p>
                <div className="description">
                  <p className="content">{solution.description}</p>
                  <img  src={process.env.PUBLIC_URL + '/images/' + solution.symbol} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nav-btns">
          <div className="prev-arrow">
            <img src={process.env.PUBLIC_URL + '/images/arrow-prev.svg'} alt="hero" />
          </div>
          <div className="next-arrow">
            <img src={process.env.PUBLIC_URL + '/images/arrow-next.svg'} alt="hero" />
          </div>
        </div>

        <div className="swiper-scrollbar"
        style={{bottom: -14, height: 6}}
        ></div>
        </div>
    </section>

    <section id='blank'>
      <p className="content">
      Phinexa adapts to your unique needs, no matter your sector. We partner with diverse industries, crafting elegant and effective IT solutions that drive your growth. We're ready to unlock your technological potential and fuel your success.
    </p>
    </section>

    {/* <section id='industries'>
      <p className="section-header">Industries</p>
      <p className="content">
      Medical & Healthcare, Finetech, Regtech, Banking & Insurance, Real Estate, Marketplaces & E-Commerce & Retail, Events, Transport & Logistics, Government and Public Sector, Green Energy and Utilities, Education Technology, Technology and Software Development, Telecommunication, Manufacturing and Supply chain
      </p>
    </section> */}
    </>
  )
}

const solutions = [
  {
    title: 'IT Automation',
    description: 'Streamline tasks, enhance operational efficiency, reduce human error. Leverage automation tools for infrastructure provisioning, configuration management, software deployment, and monitoring. Drive consistency, scalability, and cost savings.',
    reference: 'project-reference-1.svg',
    symbol: 'symbol-2.svg',
  },
  {
    title: 'Software Development',
    description: 'Holistic SDLC approach, agile methodologies, diverse technologies. Build scalable, high-performance solutions for unique challenges, ensuring businesses stay ahead in the digital landscape.',
    reference: 'project-reference-2.svg',
    symbol: 'symbol-3.svg',
  },
  {
    title: 'Cyber Security and Compliance',
    description: 'Prioritize system and data security. Implement robust cybersecurity measures, proactive threat detection, and compliance with industry standards. Build trust and confidence by safeguarding against internal and external threats.',
    reference: 'project-reference-3.svg',
    symbol: 'symbol-2.svg',
  },
  {
    title: 'Cloud Migration and Management',
    description: 'Enable enhanced scalability, cost-effectiveness, and resilience through cloud technology. Structured methodology for seamless migrations, minimizing downtime and mitigating risks. Leverage cloud architecture, deployment models, and services for business objectives.',
    reference: 'project-reference-4.svg',
    symbol: 'symbol-3.svg',
  },
  {
    title: 'DevOps as a Service (DaaS)',
    description: 'Streamline collaboration, automate workflows, and accelerate software delivery. Achieve faster time-to-market, improved quality, and operational efficiency through CI/CD and IaC.',
    reference: 'project-reference-5.svg',
    symbol: 'symbol-2.svg',
  },
  {
    title: 'Container Orchestration',
    description: 'Specialize in managing and automating containerized applications. Utilize platforms like Kubernetes to abstract infrastructure complexities. Standardize deployment processes for greater efficiency, agility, and reliability in software delivery. Embrace modern application architectures and drive innovation at scale.',
    reference: 'project-reference-6.svg',
    symbol: 'symbol-3.svg',
  },
]

export default Solution