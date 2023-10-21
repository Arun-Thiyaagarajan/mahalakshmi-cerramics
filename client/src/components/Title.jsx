import React from 'react'

const Title = ({title1, title2}) => {

  return (
    <>
        <div>
            <h1 className="section-title title-case">{ title1 } <span className="highlight-text">{ title2 }</span></h1>
        </div>
    </>
  )
}

export default Title