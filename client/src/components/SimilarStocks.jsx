import React, { useEffect } from 'react'
import { tileCards } from '../data';
import StocksGallery from './StocksGallery/StocksGallery';

const SimilarStocks = ({ tileCard }) => {

    const includedKeys = ['size', 'brand', 'type', 'tile_category', 'design'];
    const filteredPairs = Object.entries(tileCard).filter(([key]) => includedKeys.includes(key));
    const randomIndex = Math.floor(Math.random() * filteredPairs.length);
    const [randomKey, randomValue] = filteredPairs[randomIndex];
    const result = { [randomKey]: randomValue };
    console.log(result);

    const similarStocks = tileCards.filter((cards) => {
        return cards[randomKey] === randomValue
    })
    console.log(similarStocks);

    return (
        <>
            <StocksGallery filteredCards={similarStocks} />
        </>
    )
}

export default SimilarStocks