import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='box'>
    <div className='box1'>
        <h2>GET IN TOUCH</h2>
        <p>please Complete the form and we will get tough with you.</p>
    </div>
    <hr/>
    <div className='box2'>
        <form action="https://formspree.io/f/mnqrgqva" method="post">
            <label>Name<span>*</span></label><br/>
            <input type="text" name='Name' placeholder='Enter your name' required className='input'/><br/><br/>
            <label>Email<span>*</span></label><br/>
            <input type="email" name='Email' placeholder='id@gmail.com' required className='input'/><br/><br/>
            <label>Mobile Number<span>*</span></label><br/>
            <input type="number" name='Number' placeholder='Enter your Mobile Number' required className='input'/><br/><br/>
            <input type="submit" value="Register Now" className='btn'/>
        </form>
    </div>
    
    </div>
  )
}

export default Form