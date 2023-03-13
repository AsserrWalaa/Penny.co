import React from 'react'

import img1 from '../img/Hero-image-3-1-1536x814.png'
import img2 from '../img/1.png'
import img3 from '../img/r2.png'
import img4 from '../img/r3.png'
import img5 from '../img/r4.png'
import img6 from '../img/r5.png'
import img7 from '../img/r6.png'
import img8 from '../img/sec3.png'
import img9 from '../img/sec4.png' 
import img10 from '../img/Group-12449.png' 

function Body () {
    return (
        <div className='pt-5'> 
            <h1 className="text-center pt-5">Procurement Software so easy</h1>
            <h1 className="text-center">that everyone in your team loves to use</h1>
            <h5 className="text-center pt-5">What modules would you like to choose for your company?</h5>
            <div className="container text-center Modules">
            </div>
            <div className="text-center pt-5 pb-3">
                <button class="free-trial">Get Started</button>
            </div><p className="text-center pt-3">No credit card needed</p><section className="one container text-center">
                <img src={img1} alt='' className='img-1 pt-5 pb-5' />
            </section><section className="two d-flex pt-5">
                <div className="container text-center">
                    <h5 className="pb-3">Trusted by leading brands globally</h5>
                    <div className="row">
                        <div className="text-center">
                            <img src={img2} alt="" className="sec-2" />
                            <img src={img3} alt="" className="sec-2" />
                            <img src={img4} alt="" className="sec-2" />
                            <img src={img5} alt="" className="sec-2" />
                            <img src={img6} alt="" className="sec-2" />
                            <img src={img7} alt="" className="sec-2" />
                        </div>
                    </div>
                </div>
            </section><section className="three container text-center pt-5">
                <h2>Featured in ProcureTech & Kearny Consulting</h2>
                <h1>Top 100 Solutions</h1>
                <img src={img8} alt="" className="p-5 sec-3" />
            </section><section className="four container text-center pt-5">
                <h1>Reimagine Procurement</h1>
                <h6>With Our Products</h6>
                <img src={img9} alt="" className="p-3 img-1" />
                <h2 className="four-h2">Request-to-Pay procurement system with spend management.</h2>
                <h2 className="pb-5">A tool to manage all your procurement in one place</h2>
                <div className="text-center">
                    <button class="free-trial">Learn More</button>
                </div>
                <div className="pt-5">
                    <h1>Our Partners</h1>
                    <div className="row">
                        <div className="text-center">
                            <img src={img2} alt="" className="sec-2" />
                            <img src={img3} alt="" className="sec-2" />
                            <img src={img4} alt="" className="sec-2" />
                            <img src={img5} alt="" className="sec-2" />
                        </div>
                    </div>
                </div>
            </section><section className="five text-center text-light pt-5 pb-5">
                <h1 className="">Procure to pay, and everything in between.
                </h1>
                <h5>Purchase Request ...
                    Approved! ...
                    Source it ...
                    Purchase Quote ...
                    Purchase Order ...
                    Receive Receipt ...
                    Bill ...
                    Pay</h5>
            </section><section className="seven pt-5 text-center">
                <h1 className="pt-5">We help you unlock</h1>
                <p className="p-form pb-2">better Sourcing and Spend Management</p>
                <h3>Get in touch with our procurement experts</h3>
            </section><section className="form  container pt-5">
                <div>
                    <form className="d-flex">
                        <div className='Form-right '>
                <label for='name'>Name *</label>
                <label for='mail'>Work Email * </label>
                <label for='co'>Company Name * </label>
                <label for='phone'>Phone *  </label>
            </div> <div className='Form-left'>
                            <input type="text" id='name' className="input-name" placeholder="First Name" />
                            <input type="text"  className="input-name-2" placeholder="Last Name" />                                              
                            <input type="text" id='mail' className="input-mail" />
                            <input type="text" id='co' className="input-CO " />
                            <input type="number" id='phone' className="input-Phone " />
</div>
                    </form>
                        <div className="text-center pt-5 pb-5">
                            <button class="free-trial text-center " type="submit">Submit</button>
                        </div>
                </div>
            </section><section className="last text-center pt-5 pb-5 container">
                <img src={img10} alt="" width={200} />
                <h1 className="pt-5">need Some Help</h1>
                <a href="#!"> Go To Help Center</a>
            </section>
            </div>
)
}
export default Body