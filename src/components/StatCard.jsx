import React from 'react'

const StatCard = () => {

    const statData = [
        {
            name: "Users",
            count: "90",
            url: "/images/stat-icon-1.svg"
        },
        {
            name: "Locations",
            count: "30",
            url: "/images/stat-icon-2.svg"
        },
        {
            name: "Servers",
            count: "50",
            url: "/images/stat-icon-3.svg"
        }
    ];
    
    const statItem = (statItem, index) => {
        const borderClass = index === statData.length - 1 ? "" : "stat-border-right";
    
        return (
            <div key={statItem.name} className="col-sm-4">
                <div className={`d-flex align-items-center justify-content-center py-4 py-sm-2 py-md-4 gap-4 ${borderClass}`}>
                    <div className='rounded-circle stat-icon p-1'>
                        <img src={statItem.url} alt="user icon" />
                    </div>
                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <p className='mb-0 fw-bold text-type-2 color-2'>{statItem.count}+</p>
                        <p className='mb-0 fw-regular text-type-3 color-1'>{statItem.name}</p>
                    </div>
                </div>
            </div>
        );
    }

    const statItemRender = () => {
        return statData.map((stat, index) => statItem(stat, index));
    }

  return (
    <section>
        <div className='container-md py-3 py-lg-5'>
            <div className="bg-white rounded-2 statCard p-3 p-md-4">
                <div className="row">
                    {statItemRender()}
                </div>
            </div>
        </div>
    </section>
  )
}

export default StatCard
