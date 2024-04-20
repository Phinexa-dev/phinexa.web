import React, { useEffect } from 'react'
import './Solutions.scss';
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SolutionsBackground from '../components/SolutionsBackground';

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
    <div className='hero-solutions'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
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
        <div className='my-swiper'>
        <Swiper 
        breakpoints={{
          0: { slidesPerView: 1},
          1248: { slidesPerView: 2},
          500: {
            pagination: {
              dynamicBullets: true,}
          }
        }}
        // slidesPerView={2}
        spaceBetween={80}
        modules={[Navigation, Scrollbar, Pagination, A11y]} 
        navigation={{ nextEl: ".next-arrow", prevEl: ".prev-arrow" }}
        scrollbar={{ draggable: true }}
        pagination={{
          dynamicBullets: true,
        }}
        className="project-slider"
        >
          <SwiperSlide>
            <div className="project-card">
              <img className='reference' src={process.env.PUBLIC_URL + '/images/project-reference-1.png'} alt="" />
              <img className='content-img mobile' src={process.env.PUBLIC_URL + '/images/symbol-2.svg'} alt="" />
              <p className="title">IT Automation</p>
              <div className="description">
                <p className="content">Streamline tasks, enhance operational efficiency, reduce human error. Leverage automation tools for infrastructure provisioning, configuration management, software deployment, and monitoring. Drive consistency, scalability, and cost savings.</p>
                <img  src={process.env.PUBLIC_URL + '/images/symbol-2.svg'} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <img className='reference' src={process.env.PUBLIC_URL + '/images/project-reference-2.png'} alt="" />
              <img className='content-img mobile' src={process.env.PUBLIC_URL + '/images/symbol-3.svg'} alt="" />
              <p className="title">Software Development</p>
              <div className="description">
                <p className="content">Holistic SDLC approach, agile methodologies, diverse technologies. Build scalable, high-performance solutions for unique challenges, ensuring businesses stay ahead in the digital landscape.</p>
                <img  src={process.env.PUBLIC_URL + '/images/symbol-3.svg'} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <img className='reference' src={process.env.PUBLIC_URL + '/images/project-reference-1.png'} alt="" />
              <img className='content-img mobile' src={process.env.PUBLIC_URL + '/images/symbol-2.svg'} alt="" />
              <p className="title">IT Automation</p>
              <div className="description">
                <p className="content">Streamline tasks, enhance operational efficiency, reduce human error. Leverage automation tools for infrastructure provisioning, configuration management, software deployment, and monitoring. Drive consistency, scalability, and cost savings.</p>
                <img  src={process.env.PUBLIC_URL + '/images/symbol-2.svg'} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <img className='reference' src={process.env.PUBLIC_URL + '/images/project-reference-2.png'} alt="" />
              <img className='content-img mobile' src={process.env.PUBLIC_URL + '/images/symbol-3.svg'} alt="" />
              <p className="title">Software Development</p>
              <div className="description">
                <p className="content">Holistic SDLC approach, agile methodologies, diverse technologies. Build scalable, high-performance solutions for unique challenges, ensuring businesses stay ahead in the digital landscape.</p>
                <img  src={process.env.PUBLIC_URL + '/images/symbol-3.svg'} alt="" />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperButtons/> */}
        </Swiper>
        <div className="swiper-nav-btns">
          <div className="prev-arrow">
            <img src={process.env.PUBLIC_URL + '/images/arrow-prev.svg'} alt="hero" />
          </div>
          <div className="next-arrow">
            <img src={process.env.PUBLIC_URL + '/images/arrow-next.svg'} alt="hero" />
          </div>
        </div>
        <div className="swiper-nav-scrollbar"></div>
        </div>
    </section>

    <section id='blank'>
      <p className="content">
      Phinexa adapts to your unique needs, no matter your sector. We partner with diverse industries, crafting elegant and effective IT solutions that drive your growth. We're ready to unlock your technological potential and fuel your success.
    </p>
    </section>

    <section id='industries'>
      <p className="section-header">Industries</p>
      <p className="content">
      Medical & Healthcare, Finetech, Regtech, Banking & Insurance, Real Estate, Marketplaces & E-Commerce & Retail, Events, Transport & Logistics, Government and Public Sector, Green Energy and Utilities, Education Technology, Technology and Software Development, Telecommunication, Manufacturing and Supply chain
      </p>
    </section>
    </>
  )
}

export default Solution