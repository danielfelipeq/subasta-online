import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Product from './components/pages/Product'
import ProductDetail from './components/pages/ProductDetail'
import Page404 from './components/pages/Page404'
import { FakeStoreProvider } from './store/FakeStoreContex'

const App = () => {
  return (
    <BrowserRouter>
      <FakeStoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FakeStoreProvider>
    </BrowserRouter>
  )
}

export default App
