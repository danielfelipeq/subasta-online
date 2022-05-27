import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FakeStoreProvider, useStateData } from '../../store/FakeStoreContex'
import Header from '../Layouts/Header'
import CardsProduct from '../Layouts/CardsProduct'
import axios from '../../utils/axios'
import '../../assets/styles/Product.scss'
import '../../assets/styles/Loading.scss'

const Product = () => {
  const { product, loading, setProduct, setProductDetail, setLoading } =
    useStateData()
  const navigate = useNavigate()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('products')
        setProduct(res.data)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      } catch (error) {
        // console.log(error)
      }
    }
    getProducts()
  }, [])
  const handleClick = async (element) => {
    navigate(`${element.id}`)
    setProductDetail(element)
  }
  return (
    <FakeStoreProvider>
      <Header />
      <section>
        <div className="container-cards">
          {loading ? (
            <div className="lds-roller">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          ) : (
            product
              .slice(0, 9)
              .map((element) => (
                <CardsProduct
                  key={element.id}
                  item={element}
                  handleClick={handleClick}
                />
              ))
          )}
        </div>
      </section>
    </FakeStoreProvider>
  )
}
export default Product
