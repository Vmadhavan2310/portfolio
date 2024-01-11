import React, {useState} from 'react'
import '../Styles/Contact.css';
import { AOSProps } from './Header';
function Contact(props:AOSProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showPopUp,setPopup] = useState(false)
    const [error, setError] = useState('')
  
    function onSubmit(e:any){
      e.preventDefault();
      e.stopPropagation();
  
      fetch("https://formcarry.com/s/Qy1br6u8r8", {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
            setPopup(true);
        }
        else if(response.code === 422){
          // Field validation failed
          setError(response.message)
        }
        else {
          // other error from formcarry
          setError(response.message)
        }
      })
      .catch(error => {
        // request related error.
        setError(error.message ? error.message : error);
      });
    }

    const closePopup=()=>{
        setPopup(false);
        setName('');
        setEmail('');
        setMessage('');
    }
  return (
    <>
    <div className={showPopUp? 'visible pop-up-section-wrapper' : 'pop-up-section-wrapper'}>
        <div className={showPopUp?'visible pop-up-container' : 'pop-up-container'}>
            <div className="icon">
                <img src="https://ik.imagekit.io/hs4gfzmpd/orange-check-mark-correct-tick-16239%20(2).png?updatedAt=1704100460571" alt="" />
            </div>
            <div className="pop-up-content-wrapper">
                <h4 className='heading'>Thank You</h4>
                <p className="msg">Your details has been successfully submitted</p>
            </div>
            <div className="btn">
                <button onClick={closePopup}>Close</button>
            </div>
            </div>
        </div>
    
    <section className="contact-section-wrapper" id='Contact'>
        <section className="contact-container" data-aos='fade-up' data-aos-duration={props.AOS_timing}>
            <div className="contact-heading-wrapper">
            <h3 className="contact-heading">Contact Me</h3>
            <h4 className='contact-sub-heading'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour,</h4>
            </div>
            <div className="address-form-wrapper">
                <div className="address-wrapper">
                    <div className="address-content">
                        <span className='title address-header'>Address _ </span>23 S 80 Road, Benedict,ne, 68316 United States
                    </div>
                    <div className="phone-content">
                    <span className='title phone-header'>Phone _ </span>+91 8904755705
                    </div>
                    <div className="mail-content">
                    <span className='title mail-header'>E mail_ </span>Vinodmad34@gmail.com
                    </div>
                    <div className="website-content">
                    <span className='title website-header'>Website_ </span>Vinoth.com
                    </div>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={(e) => onSubmit(e)}>
                    <input type="text" placeholder='Name' id='name'  value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
                    <textarea  placeholder='Message' id='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button className="form-btn">Button</button>
                    </form>
                </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default Contact