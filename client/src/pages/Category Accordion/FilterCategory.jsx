import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { tileCards } from '../../data'
import Title from '../../components/Title'
import StocksGallery from '../../components/StocksGallery/StocksGallery'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/SearchBar/SearchBar'

const FilterCategory = () => {

    const { category, value } = useParams()

    const filteredCards = tileCards.filter((cards) => {
        return cards[category] === value
    })

    const modifiedCategory = category.includes('_') ? category.replace(/_/g, ' ') : category;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <>
            <Navbar />

            <Hero title={`CATEGORY - ${modifiedCategory.toUpperCase()}`} height='40vh' />

            <section className="container pd-inline">

                <Title title1={`${modifiedCategory} -`} title2={value} />

                <SearchBar />

                <StocksGallery filteredCards={filteredCards} />

            </section>

            <Footer />
        </>
    )
}

export default FilterCategory