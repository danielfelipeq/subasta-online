import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FakeStoreProvider, useStateData } from '../../store/FakeStoreContex'
import useCountdown from '../../store/useCountdown'
import Header from '../Layouts/Header'
import CardsProduct from '../Layouts/CardsProduct'
import axios from '../../utils/axios'
import '../../assets/styles/Product.scss'

const Product = () => {
  const endTime =
    new Date().getTime() + 60000 * (Math.round(Math.random() * 5) + 1)
  const [timeLeft] = useCountdown(endTime)
  const minutes = Math.floor(timeLeft / 60000) % 60
  const seconds = Math.floor(timeLeft / 1000) % 60

  const { product, setProduct, setProductDetail } = useStateData()
  const navigate = useNavigate()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('products')
        setProduct(res.data)
        // console.log(res)
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
          {product.slice(0, 9).map((element) => (
            <CardsProduct
              key={element.id}
              item={element}
              minutes={minutes}
              seconds={seconds}
              handleClick={handleClick}
            />
          ))}
        </div>
      </section>
    </FakeStoreProvider>
  )
}
export default Product
