import React from 'react'

const BrandAbstract = ({ pos, brandImg, brand }) => {
  return (
    <>
        <div className="brand-o-circle" style={ pos }>
            <div className="brand-i-circle">
                <img src={ brandImg } alt={ brand } className="brand-img" />
            </div>
        </div>
    </>
  )
}

export default BrandAbstract