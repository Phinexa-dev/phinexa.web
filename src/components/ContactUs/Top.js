import image from "./Contactus.png"
import './Top.scss'

function ContactUs() {
    return (
        <div className="main-ct">
            <div className="left-ct">
                <span>Hi,</span>
                <span>Nice to meet you</span>
                <span>To receive priority access to our client engagement team, simply provide your details.</span>
                <span>We look forward to being in touch with you soon.</span>
            </div>
            <div className="right-ct">
                <img src={image} alt="" />
            </div>

        </div>
    )
}
export default ContactUs;