import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FakeStoreProvider, useStateData } from '../../store/FakeStoreContex'
import Header from '../Layouts/Header'
import CardsProduct from '../Layouts/CardsProduct'
import axios from '../../utils/axios'
import '../../assets/styles/Product.scss'

const Product = () => {
  const { product, loading, setProduct, setProductDetail, setLoading } =
    useStateData()
  const navigate = useNavigate()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('products')
        setProduct(res.data)
        setLoading(false)
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
          {loading ? (
            <h1>cargando</h1>
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
