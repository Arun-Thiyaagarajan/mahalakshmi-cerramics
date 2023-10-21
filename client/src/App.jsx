import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import AddStock from './pages/AddStock/AddStock'
import Stocks from './pages/Stocks/Stocks'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Categories from './pages/Category Accordion/Categories'
import { SkeletonTheme } from 'react-loading-skeleton'
import FilterCategory from './pages/Category Accordion/FilterCategory'

function App() {

  return (
    <>
      <SkeletonTheme baseColor='#cee3ce' highlightColor='#e2ebe2'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path='/home' element={<Home />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/category/:category/:value' element={<FilterCategory />} />
            <Route path='/stocks/:design' element={<Stocks />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  )
}

export default App
