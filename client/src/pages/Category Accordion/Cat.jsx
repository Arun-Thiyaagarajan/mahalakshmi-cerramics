import React, { useEffect, useState } from 'react'
import { categories, filterCategories, tileCards } from '../../data';
import SingleCategory from './SingleCategory';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import './CategoryPage.css'
import Loader from '../../components/Loader/Loader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Categories = () => {

    const [category, setCategory] = useState(filterCategories)
    const [activeId, setActiveId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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
                            {filterCategories.map((category) => {
                                return (
                                    <SingleCategory key={category.id}
                                        cat={Object.keys(category)[1]}
                                        activeId={activeId}
                                        toggleCategory={toggleCategory}
                                        values={category[Object.keys(category)[1]]}
                                    />
                                );
                            })}
                            {/* {category.map((cat) => {
                                return (
                                )
                            })} */}
                        </section>

                    </div>
                </main>
            }

            <Footer />
        </>
    )
}

export default Categories