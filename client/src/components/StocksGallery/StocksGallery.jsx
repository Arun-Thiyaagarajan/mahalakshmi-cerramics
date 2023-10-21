import React, { useEffect } from 'react'
import './StocksGallery.css'
import SingleStock from './SingleStock'

const StocksGallery = ({ filteredCards }) => {

    return (
        <>
            <section className="stocks-container">
                {filteredCards.map((tileCard) => {
                    const { id } = tileCard

                    return <SingleStock key={id} {...tileCard} />
                })}
            </section>
        </>
    )
}

export default StocksGallery