import React from 'react'

const Feature = () => {

    const featureList = [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN",
        "No specific time limits."];

    const featureListRender = () => {
        const item = featureList.map((feature, index) => {
            return(
                <li key={index} className='d-flex align-items-center gap-2 mb-1 mb-md-3'>
                    <span>
                        <img src="/images/check-icon.svg" className='img-fulid' alt="check icon" />
                    </span>
                    <span>{feature}</span>
                </li>
            )
        })
        return item; 
    }

  return (
    <section>
        <div className='container-md py-3 py-lg-5'>
            <div className="row justify-content-center align-items-center g-4">
                <div className="col-10 col-md-6">
                    <div>
                        <img src='/images/feature-img.svg' className='img-fluid' alt='a person using laptop' />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div>
                        <h2 className='hd-type-2 fw-medium mb-2 mb-md-3 color-2'>We Provide Many Features You Can Use</h2>
                        <p className='text-type-1 fw-regular mb-3 mb-md-4 color-1'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                        <ul className='ps-0 fw-regular text-type-4 color-1'>
                            {featureListRender()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature
