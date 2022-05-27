import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateData } from '../../store/FakeStoreContex'
import useCountdown from '../../store/useCountdown'
import '../../assets/styles/ProductDetail.scss'

const ProductDetail = () => {
  const { productDetail } = useStateData()
  const endTime = productDetail.timeCount + productDetail.initDate

  const [timeLeft] = useCountdown(endTime)
  const minutes = Math.floor(timeLeft / 60000) % 60
  const seconds = Math.floor(timeLeft / 1000) % 60

  const navigate = useNavigate()
  useEffect(() => {}, [productDetail])
  return (
    <div className="detail-container-product">
      <button
        className="button-return"
        type="button"
        onClick={() => {
          navigate(-1)
        }}
      >
        Regresar
      </button>
      <div className="line" />
      <h1 className="product-title">{`${minutes}:${seconds}`}</h1>
      <div className="detail-card-product">
        <div className="detail-body">
          <h1 className="product-title">{productDetail.title}</h1>
          <figure className="container-image">
            <img
              className="detail-product-image"
              src={productDetail.image}
              alt={productDetail.title}
            />
          </figure>
          <p className="product-price">{productDetail.price}</p>
        </div>
        <div className="container-detail">
          <h2>Categoría</h2>
          <p>{productDetail.category}</p>
          <div className="line" />
          <h2>Descripción</h2>
          <p className="product-description">{productDetail.description}</p>
          <div className="line" />
          <button className="button-buy" type="button" disabled>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail
