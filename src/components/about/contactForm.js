import React, { useState } from "react"
import { Form } from './styles'

const ContactForm = () => {

    const [activeInput, setActiveInput] = useState(0)

    return (
        <Form>
            <h5>Contact form</h5>
            <p>If You have any questions feel free to contacting me at any time.</p>
            <form action="https://formspree.io/f/mbjpzgep" method="POST">
                <div className='input' onClick={e => setActiveInput(1)} onBlur={e => setActiveInput(0)}>
                    <input placeholder='Your name' type='text' name='name' required autocomplete='off'/>
                    <span style={{ left: activeInput == 1 ? `0` : `-100%` }} />
                </div>
                <div className='input' onClick={e => setActiveInput(2)} onBlur={e => setActiveInput(0)}>
                    <input placeholder='Email' type='email' name='_replyto' required autocomplete='off'/>
                    <span style={{ left: activeInput == 2 ? `0` : `-100%` }} />
                </div>
                <div className='input' onClick={e => setActiveInput(3)} onBlur={e => setActiveInput(0)}>
                    <textarea placeholder='Message' rows='5' name='message' required />
                    <span style={{ left: activeInput == 3 ? `0` : `-100%` }} />
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </Form>
    )
}

export default ContactForm