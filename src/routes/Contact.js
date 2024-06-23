import React, {useState, useEffect, useRef} from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
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

  const form = useRef();
    const [name, setName] = useState('Your name');
  const [company, setCompany] = useState('Your website or company');
  const [project, setProject] = useState('discuss a software development project');
  const [email, setEmail] = useState('Your email');
  const [message, setMessage] = useState(''); // State to store feedback messages
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleContentChange = (setter, event) => {
    const content = event.target.textContent.trim();
    console.log(content);
    setter(content);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted"); // Debugging log

    const formData = {
      from_name: name,
      from_company: company,
      message: project,
      reply_to: email,
    };

    // Use emailjs to send the form data
    emailjs.send('service_kh0k1uo', 'template_vqsts7a', formData, '506kOM8R-RsmpqddF')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessage('Your message has been sent successfully!');
          setMessageType('success');
          // Clear form fields after successful submission
          setName('');
          setCompany('');
          setProject('');
          setEmail('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send message. Please try again later.');
          setMessageType('error');
        }
      );
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <p className="greeting">Hey, Phinexa team!</p>
              <div className="body">
      <span>My name is </span>
      <span
        className='editable-span'
        contentEditable={true}
        data-placeholder='Your name'
        onBlur={(event) => handleContentChange(setName, event)}
      ></span>
      <span> from </span>
      <span
        contentEditable={true}
        data-placeholder='Your website or company'
        className='editable-span'
        onBlur={(event) => handleContentChange(setCompany, event)}
      ></span>
      <span>. I'd like to </span>
      <span
        contentEditable={true}
        data-placeholder='discuss a software development project'
        className='editable-span'
        onBlur={(event) => handleContentChange(setProject, event)}
      ></span>
      <span> and you can reach me at </span>
      <span
        contentEditable={true}
        data-placeholder='Your email'
        className='editable-span'
        onBlur={(event) => handleContentChange(setEmail, event)}
      ></span>
      <span>.</span>
    </div>
    <div className="button-box">
          <Button text={"Submit"} rightIcon={<i className="far fa-paper-plane" type='submit'></i>
}/>
        </div>
          </form>
        </div>
        <div className={`message ${messageType === 'error' ? 'error' : 'success'}`}>
              {message}
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