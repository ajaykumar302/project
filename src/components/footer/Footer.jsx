import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='head'>
        <div className='con1'>
            <h4>ABOUT US</h4>
            <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
        </div>
        <div className='con1'>
            
            <ul type="none">
                <li><h4>MENUS</h4></li>
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>Career</li>
            </ul>
        </div>
        <div className='con1'>
            
            <ul type="none">
                <li><h4>LEARN MORE</h4></li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='con1'>
            <h4>ADDRESS</h4>
            <p>
            Novel Tech Park, 1st Floor, Hosur Rd,<br/>
            Kudlu gate, Bengaluru, Karnataka 560068<br/>
            Phone: 0804-717-8999<br/>
            Email: hi@rubixe.com
           </p>
        </div>
    </div>
    <div className='footer'>
    <h3>© Copyright  2023 | KAVA AJAY | All Rights Reserved</h3>
    </div>
    
    </div>
  )
}

export default Footer