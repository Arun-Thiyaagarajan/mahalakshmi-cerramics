import React from 'react'

const CircleLoader = () => {
    return (
        <>
            <div className="circle-loader">
                {/* <svg className='svg' viewBox="25 25 50 50">
                    <circle className='circle' r="20" cy="50" cx="50"></circle>
                </svg> */}
                <div className="line-wobble"></div>
            </div>
        </>
    )
}

export default CircleLoader