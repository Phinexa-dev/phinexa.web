import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactCard.scss';
import '../../App.css';

function ContactCard() {
    const form = useRef(); // useRef hook to access the form element
    const [formData, setFormData] = useState({
        from_name: '',
        from_company: '',
        message: '',
        reply_to: '',
    });
    const [message, setMessage] = useState(''); // State to store feedback messages
    const [messageType, setMessageType] = useState(''); // State to store the type of message (success or error)

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Use emailjs to send the form data
        emailjs.sendForm('service_kh0k1uo', 'template_vqsts7a', form.current, '506kOM8R-RsmpqddF')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setMessage('Your message has been sent successfully!');
                    setMessageType('success');
                    // Clear form fields after successful submission
                    setFormData({
                        from_name: '',
                        from_company: '',
                        message: '',
                        reply_to: '',
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessage('Failed to send message. Please try again later.');
                    setMessageType('error');
                },
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form ref={form} className="card-c" onSubmit={sendEmail}>
            <div>Hey, Phinexa team!</div>
            <div className='second-row'>
                <div className='second-row-sub'>
                    <div>
                        <span className='myname'>I'm</span>
                        <input
                            type="text"
                            name="from_name"
                            placeholder='Your Name'
                            value={formData.from_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span className="companynm">from</span>
                        <input 
                            type="text"
                            name="from_company"
                            placeholder='Your website or company'
                            value={formData.from_company}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <span className="iliketo">I'd like to </span>
                    <input
                        type="text"
                        name="message"
                        placeholder='Discuss a software development...'
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='third-row'>
                <span className="reachme">reach me at</span>
                <input
                    type="text"
                    name="reply_to"
                    placeholder='Your Email'
                    value={formData.reply_to}
                    onChange={handleChange}
                />
            </div>
            <div className='button'>
                <button type="submit">Submit</button>
            </div>
            {message && (
                <div className={`message ${messageType === 'error' ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
        </form>
    );
}

export default ContactCard;
