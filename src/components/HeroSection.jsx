import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const HeroSection = () => {
  return (
    <section>
        <div className='container-md py-3 py-lg-5'>
            <div className="row justify-content-center align-items-center flex-row-reverse g-4">
                <div className="col-10 col-md-6">
                    <div>
                        <img src='public/hero-image.svg' className='img-fluid' alt='a person using laptop with vpn protection' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h2 className='hd-type-1 fw-medium mb-2 mb-md-3 color-2'>Want anything to be easy with <span className='fw-bold'>LaslesVPN.</span></h2>
                        <p className='text-type-1 fw-regular mb-3 mb-md-4 color-1'>Provide a network for all your needs with ease and fun using <span className='fw-medium'>LaslesVPN</span> discover interesting features from us.</p>
                        <ButtonPrimary btnName="Get Started"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
