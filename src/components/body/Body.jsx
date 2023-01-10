import './Body.css'
import React from 'react'
import image from '../images/images.jfif'
import img1 from '../images/img1.jfif'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.png'

const Body = () => {
  return (
    <div>
        <div className='cont1'>
            <div className='text'>
                <h2>WHO WE ARE</h2>
                <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
                <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
            </div>
            <div className='imgs'>
                <div className='boxx1'></div>
                <img src={image} alt='' className='boxx2'/>
                <div className='boxx3'></div>
            </div>
        </div>
        <div className='cont2'>
        <div className='cont2-1'>
            <h2>WHERE WE STARTED</h2>
            <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
            </div>
        </div>
        <div className='cont3'>
        <div className='cont3-0'>
            <h2>TECH FOR TENNS - A RUBIXE @ INITIATIVE</h2>
            <div className='cont3-1'>
                <div className='cont3-2'>
                    <div className='head1'></div>
                    <div className='num'>01</div>
                    <img src={img1} alt="" className='img1' height="80px" width="80px"/>
                    <h4 className='h3'>Initiative AI Build with Programming</h4>
                </div>
                <div className='cont3-3'>
                <h3 className='h2'>Initiative AI Build with Programming</h3>
                <img src={img2} alt="" className='img2' height="80px" width="80px"/>
                <div className='num2'>02</div>
                <div className='head2'></div>
                </div>
                <div className='cont3-4'>
                <div className='head3'></div>
                    <div className='num3'>03</div>
                    <img src={img3} alt="" className='img3' height="80px" width="80px"/>
                    <h3 className='h3'>Initiative AI Build with Programming</h3>
                </div>
                <div className='cont3-5'>
                <h3 className='h2'>Initiative AI Build with Programming</h3>
                <img src={img4} alt="" className='img4' height="80px" width="80px"/>
                <div className='num4'>04</div>
                <div className='head4'></div>
                </div>
                <div className='cont3-6'>
                <div className='head5'></div>
                    <div className='num5'>05</div>
                    <img src={img5} alt="" className='img5' height="80px" width="80px"/>
                    <h3 className='h3'>Initiative AI Build with Programming</h3>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Body