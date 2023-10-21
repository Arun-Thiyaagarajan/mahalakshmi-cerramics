import React, { useEffect, useState } from 'react'
import './Home.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Navbar from '../../components/Navbar/Navbar'
import StocksGallery from '../../components/StocksGallery/StocksGallery'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Title from '../../components/Title'
import { tileCards } from '../../data'

const Home = () => {

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 2000);
      
      window.scrollTo(0, 0);
      
    }, []);   

  return (
    <>
        <Navbar />

        <Hero title='Mahalakshmi Cerramics' fs='2.7rem' content='Lorem ipsum dolor sit. Dolorum sapiente voluptatum, quidem doloremque deleniti porro optio incidunt!' />

        <section className="container pd-inline">
          
          <Title title1={'Search'} title2={'Stock'} />

          <SearchBar />
  
          <StocksGallery filteredCards={tileCards} />

        </section>

        <Footer />
    </>
  )
}

export default Home