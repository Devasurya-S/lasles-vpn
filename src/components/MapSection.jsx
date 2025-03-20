import React from 'react'

const MapSection = () => {

    const brandImg = [
        "public/images/brand-img-1.svg",
        "public/images/brand-img-2.svg",
        "public/images/brand-img-3.svg",
        "public/images/brand-img-4.svg",
        "public/images/brand-img-5.svg"
    ]

    const urlRender = () => {
        
    }

    const brandLogoRender = () => {
        const item = brandImg.map((brand, index) => {
            return (
                <div key={index} className="col-4 col-md-2">
                    <div className='brand-container'>
                        <img src={brand} className='w-100' alt="logo of partner brand" />
                    </div>
                </div>
            )
        })
        return item
    }
  return (
    <section className='bg-color-1'>
        <div className='container-md py-3 py-lg-5'>
            <h2 className='hd-type-2 fw-medium mb-2 mb-md-3 color-2 text-center'>Huge Global Network <br/> of Fast VPN</h2>
            <p className='text-type-1 fw-regular mb-3 mb-md-4 color-1 text-center mb-4 mb-md-5'>See LaslesVPN everywhere to make it easier for you when you move <br/> locations.</p>
            <div className='text-center'>
                <img src="public/images/map-img-1.svg" className='img-fluid' alt="image of world map with all the server locations" />
            </div>
            <div className="row align-items-center justify-content-center">
                {brandLogoRender()}
            </div>
        </div>
    </section>
  )
}

export default MapSection
