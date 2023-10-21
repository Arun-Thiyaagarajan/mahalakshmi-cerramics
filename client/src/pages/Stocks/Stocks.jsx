import React, { useEffect, useState } from 'react'
import './Stocks.css'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { tileCards } from '../../data'
import Title from '../../components/Title'
import StocksGallery from '../../components/StocksGallery/StocksGallery'
import Footer from '../../components/Footer/Footer'
import BrandAbstract from '../../components/BrandAbstract'
import BottomLine from '../../components/BottomLine'
import Loader from '../../components/Loader/Loader'
import DotAnime from '../../components/DotAnime'
import SimilarStocks from '../../components/SimilarStocks'

const Stocks = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    // For What type of Similar Stock
    // const [subtitle, setSubtitle] = useState('')

    // const handleSubtitle = (subtitle) => {
    //     const modifiedSubtitle = subtitle.includes('_') ? subtitle.replace(/_/g, ' ') : subtitle;
    //     setSubtitle(modifiedSubtitle)
    // }

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 400); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const { design } = useParams()
    const tileCard = tileCards.find((c) => c.design === design)

    const { id, src, size, brand, brandImg, type, sqft_rate, tile_category, noOfBoxes, pcsPerBox, boxRate, sqft_area } = tileCard

    let availStatus = noOfBoxes > 0
    noOfBoxes <= 0 ? availStatus = false : availStatus = true;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [design]);

    return (
        <>
            <Navbar />
            <main>
                {isLoading ? (<Loader />) : (

                    <div className="pd-inline">

                        <div className="card-detail-container">

                            <div className="image-container">
                                <img src={src} className='image' alt={design} />
                                <p className="hover-text">{design}</p>
                            </div>

                            <div className="info-container">

                                {/* Brand Circle Abstract */}
                                {isMobileView ? (
                                    <BrandAbstract pos={{ top: '-8.5%', right: '32.5%', transform: 'translate(-3%, -3%)' }} brand={brand} brandImg={brandImg} />
                                ) :
                                    <BrandAbstract pos={{ top: '1rem' }} brand={brand} brandImg={brandImg} />
                                }

                                <h2 className="design-title flex-wrap">{design}</h2>
                                <BottomLine width={'95%'} marginblock={'0.5rem'} />

                                <div className="flex-container">
                                    <p className="tile-id">ID: {id}</p>
                                    {availStatus ? (
                                        <p className={`avail-status avail`} id='avail-status'>Available</p>
                                    ) : (
                                        <p className={`avail-status not-avail`} id='avail-status'>Out of Stock</p>
                                    )}
                                </div>

                                <div className="border-box">
                                    <div className="brand-name info-flex">
                                        <span className="bold label">Brand</span>:
                                        <span className='info-value'>{brand.toUpperCase()}</span>
                                    </div>

                                    <div className="info-flex">
                                        <span className="bold label">Type</span>:
                                        <span className='info-value'>{type}</span>
                                    </div>

                                    <div className="info-flex">
                                        <span className="bold label">Tile Category</span>:
                                        <span className='info-value'>{tile_category}</span>
                                    </div>

                                    <div className="tileSize info-flex">
                                        <span className="bold label">Size</span>:
                                        <span className='info-value'>{size}</span>
                                    </div>

                                    <div className="info-flex">
                                        <span className="bold label">Boxe Qty.</span>:
                                        <span className='info-value'>{noOfBoxes}</span>
                                    </div>

                                    <div className="info-flex">
                                        <span className="bold label">Qty. Per Box</span>:
                                        <span className='info-value'>{pcsPerBox}</span>
                                    </div>

                                    <div className="info-flex">
                                        <span className="bold label">Sqft. Area</span>:
                                        <span className='info-value'>{sqft_area} sqft.</span>
                                    </div>
                                </div>

                                <div className="rate-container">
                                    <div className="price-box">
                                        <div>
                                            <span className="pb-label">Box Rate</span>:
                                            <span className='pb-info-value'>Rs.{boxRate}</span>
                                        </div>
                                        <DotAnime />
                                    </div>

                                    <div className="price-box">
                                        <div>
                                            <span className="pb-label">Sqft. Rate</span>:
                                            <span className='pb-info-value'>Rs.{sqft_rate}</span>
                                        </div>
                                        <DotAnime />
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* <Title title1={'Similar Stocks in '} title2={`${subtitle} Tiles`} /> */}
                        <Title title1={'Similar'} title2={'Stocks'} />

                        <SimilarStocks tileCard={tileCard} />
                    </div>

                )}
            </main>
            <Footer />
        </>
    )
}

export default Stocks