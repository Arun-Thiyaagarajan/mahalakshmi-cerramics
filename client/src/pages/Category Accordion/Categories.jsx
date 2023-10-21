import React, { useEffect, useState } from 'react'
import { categories, tileCards } from '../../data';
import SingleCategory from './SingleCategory';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import './CategoryPage.css'
import Loader from '../../components/Loader/Loader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Categories = () => {

    const [category, setCategory] = useState(categories)
    const [activeId, setActiveId] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const toggleCategory = (id) => {
        const newActiveId = id === activeId ? null : id
        setActiveId(newActiveId)
    }

    return (
        <>
            <Navbar />

            <Hero title={`Choose Your Category`} height='40vh' />
            
            {isLoading ? <Loader /> 
                :
                <main>
                    <div className="pd-inline">

                        <section className="filter-page-container">
                            {category.map((cat) => {
                                return (
                                    <SingleCategory key={cat.id} {...cat}
                                        activeId={activeId}
                                        toggleCategory={toggleCategory}
                                    />
                                )
                            })}
                        </section>

                    </div>
                </main>
            }

            <Footer />
        </>
    )
}

export default Categories
