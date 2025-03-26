import React from 'react'
import ButtonPill from './ButtonPill'

const PriceSection = () => {

  const planList = [
    {
      name: "Free",
      included: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices"
      ],
      price: 0
    },
    {
      name: "Standard",
      included: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware"
      ],
      price: 9
    },
    {
      name: "Premium",
      included: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features"
      ],
      price: 12
    }
  ];

  const featureListRender = (featureList) => {
    const item = featureList.map((feature, index) => {
        return(
            <li key={index} className='d-flex align-items-center gap-2 mb-1 mb-md-3'>
                <span>
                    <img src="/images/price-check-icon.svg" className='img-fulid' alt="check icon" />
                </span>
                <span className=''>{feature}</span>
            </li>
        )
    })
    return item; 
  }

  const planListRender = () => {
    return planList.map((plan, index) => (
      <div key={index} className="col-10 col-sm-5 col-md-4 col-xxl-3">
        <div className={`d-flex flex-column justify-content-between price-card h-100 rounded-2 py-3 py-md-5 px-lg-5 ${plan.name==='Premium'?'card-selected':''}`}>
          <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
            <div>
              <img src='/images/price-img-1.svg' alt="image of cardboard box opened" className='img-fluid' />
            </div>
            <h4 className='mb-0 fs-5 fw-medium'>{plan.name} Plan</h4>
            <ul className='ps-0 fw-regular text-type-4 color-1'>
              {featureListRender(plan.included)}
            </ul>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <h3 className='fw-medium'>{plan.price===0 ? "Free" : `$${plan.price}`} <span className={plan.price===0?'d-none':'d-inline color-1 fw-normal text-type-2'}>/mo</span></h3>
            <div>
              <ButtonPill styleType={plan.name==='Premium'?'fill':'outline'} btnName="Select" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className='bg-color-1'>
        <div className='container py-3 py-lg-5'>
          <h2 className='hd-type-2 fw-medium mb-2 mb-md-3 color-2 text-center'>Choose Your Plan</h2>
          <p className='text-type-1 fw-regular mb-3 mb-md-4 color-1 text-center mb-4 mb-md-5'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
          <div className="row justify-content-center gap-3 gap-md-0 g-md-3 g-lg-5">
            {planListRender()}
          </div>
        </div>
    </section>
  )
}

export default PriceSection
