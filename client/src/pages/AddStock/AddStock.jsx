import React from 'react'
import './AddStock.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const AddStock = () => {
  return (
    <>
        <main>
            <Navbar />
                <div className="add-stock-container">
                    <h1 className="pagetitle">Add Stocks</h1>
                </div>
            <Footer />
        </main>
    </>
  )
}

export default AddStock