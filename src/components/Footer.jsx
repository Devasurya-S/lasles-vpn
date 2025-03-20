import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const Footer = () => {
    const footerUrls = [
        {
            title: "Products",
            urls: [
                {
                    name: "Download",
                    url: "#"
                },
                {
                    name: "Pricing",
                    url: "#"
                },
                {
                    name: "Locations",
                    url: "#"
                },
                {
                    name: "Server",
                    url: "#"
                },
                {
                    name: "Countries",
                    url: "#"
                },
                {
                    name: "Blog",
                    url: "#"
                },
            ]
        },
        {
            title: "Engage",
            urls: [
                {
                    name: "LaslesVPN ?",
                    url: "#"
                },                
                {
                    name: "FAQ",
                    url: "#"
                },
                {
                    name: "Tutorials",
                    url: "#"
                },
                {
                    name: "About Us",
                    url: "#"
                },
                {
                    name: "Privacy Policy",
                    url: "#"
                },
                {
                    name: "Terms of Service",
                    url: "#"
                },
            ]
        },
        {
            title: "Earn Money",
            urls: [
                {
                    name: "Affiliate",
                    url: "#"
                },
                {
                    name: "Become Partner",
                    url: "#"
                }
            ]
        }
    ]

    const urlRender = (urlList) => {
        const urlItem = urlList.map((urlObj, index) => {
            return (
                <li key={index} className='nav-item mb-2'><a className='color-1 text-type-1' href={urlObj.url}>{urlObj.name}</a></li>
            )
        })
        return urlItem;
    }

    const footerUrlRender = () => {
        const item = footerUrls.map((footerUrl, index)=>{
            return (
                <div className="col-4" key={index}>
                    <h4 className='fw-meduim text-type-3 color-2 mb-3'>{footerUrl.title}</h4>
                    <nav>
                        <ul className='navbar-nav'>
                            {urlRender(footerUrl.urls)}
                        </ul>
                    </nav>
                </div>
            )
        })
        return item;
    }

  return (
    <footer className='bg-color-1 cstm-mt-1'>
        <div className="container position-relative cstm-pt-1">
            <div className='p-4 p-md-5 bg-white rounded-3 position-absolute top-0 start-50 translate-middle w-100 sub-card'>
                <div className="row align-items-center g-0">
                    <div className='col-sm-7 col-md-8'>
                        <h2 className='hd-type-2 fw-medium mb-2 mb-md-3 color-2'>Subscribe Now for <br/> Get Special Features!</h2>
                        <p className='text-type-1 mb-0 fw-regular color-1'>Let's subscribe with us and find the fun.</p>   
                    </div>
                    <div className="col-sm-5 col-md-4">
                        <div className="d-flex justify-content-sm-end mt-3 mt-sm-0">
                            <ButtonPrimary btnName="Subscribe Now"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-lg">
            <div className="row flex-column-reverse flex-md-row g-4">
                <div className="col-md-6">
                    <a className="navbar-brand" href="#">
                        <span className='d-flex align-items-center gap-2'>
                            <img src="/lasles-logo.svg" alt="logo" className='img-fluid' />
                            <p className='mb-0 text-type-3 fw-meduim'>Lasles<strong>VPN</strong></p>
                        </span>
                    </a>
                    <p className='my-3 text-type-1 fw-regular color-1'> <strong>LaslesVPN</strong> is a private virtual network that <br/> has unique features and has high security.</p>
                    <div className='d-flex'>
                        <span></span>
                    </div>
                    <p className='text-type-1 fw-regular color-1'>©2025LaslesVPN</p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        {footerUrlRender()}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
