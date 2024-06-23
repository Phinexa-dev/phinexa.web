import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import Button from '../components/Button';
import './Contact.scss';

const formBoxVariant = {
    hidden: {opacity: 0, y: "50%"},
    show: {
      opacity: 1, 
      y: "0%",
      transition: {
        duration: 1,
        type: "spring", 
        bounce: 0.5
      }
    }
}

function Contact() {

    const [name, setName] = useState('Your name');
  const [company, setCompany] = useState('Your website or company');
  const [project, setProject] = useState('discuss a software development project');
  const [email, setEmail] = useState('Your email');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='hero about contact'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left">
            <p>Hi,</p>
            <p>Nice to meet you</p>
            <p className="description">To receive priority access to our client engagement team, simply provide your details. We look forward to being in touch with you soon.</p>
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
            <img src={process.env.PUBLIC_URL + '/images/greeting.svg'} alt="hero" />
        </motion.div>
    </div>

    <section className='contact-form' id='quotation'>
      <motion.div  
      variants={formBoxVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="form-box">
        {/* <div className="top">
          <p className="title">Request a Quote</p>
          <p className="description">Leave your details below and we will be in touch.</p>
        </div>
        <div className="hr-line"></div> */}
        <div className="bottom">
          <div className="note">
          <img src={process.env.PUBLIC_URL + '/images/writing.svg'} alt="hero" />
            {/* <p>To receive priority access to our client engagement team, simply provide your details.</p> */}
            {/* <p>We look forward to being in touch with you.</p> */}
          </div>
          <form action="">
            <p className="greeting">Hey, Phinexa team!</p>
              <div className="body">
      <span>My name is </span>
      <span
        className='editable-span'
        contentEditable={true}
        data-placeholder='Your name'
        onChange={(event) => setName(event.target.value)}
      ></span>
      <span> from </span>
      <span
        contentEditable={true}
        data-placeholder='Your website or company'
        className='editable-span'
        onChange={(event) => setCompany(event.target.value)}
      ></span>
      <span>. I'd like to </span>
      <span
        contentEditable={true}
        data-placeholder='discuss a software development project'
        className='editable-span'
        onChange={(event) => setProject(event.target.value)}
      ></span>
      <span> and you can reach me at </span>
      <span
        contentEditable={true}
        data-placeholder='Your email'
        className='editable-span'
        onChange={(event) => setEmail(event.target.value)}
      ></span>
      <span>.</span>
    </div>
    <div className="button-box">
          <Button text={"Submit"} rightIcon={<i class="far fa-paper-plane"></i>
}/>
        </div>
          </form>
        </div>
        {/* <div className="button-box">
          <Button text={"Submit"} rightIcon={<i class="far fa-paper-plane"></i>
}/>
        </div> */}
      </motion.div>
    </section>
    </>
  )
}

export default Contact