import './ContactCard.scss'
import '../../App.css'

function ContactCard() {
    return (
        <div className="card-c">
            <div>Hey, Phinexa team!</div>
            <div className='second-row'>
                <div className='second-row-sub'>
                    <div>
                        <span className='myname'>My name is</span>
                        <input type="text" placeholder='Your Name' />
                    </div>
                    <div>
                        <span>from</span>
                        <input type="text" placeholder='Your website or company' />
                    </div>
                </div>
                <div><span>I'd like to </span><input type="text" placeholder='Discuss a software development...' /></div>
            </div>
            <div className='third-row'> <span>and you can reach me at</span> <input type="text" placeholder='Your Email' /></div>
            <div className='button'><button>Submit</button></div>
        </div>
    )
}
export default ContactCard;