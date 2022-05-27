import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { RiEmotionSadLine, RiTimerLine } from 'react-icons/ri'
import { useStateData } from '../../store/FakeStoreContex'
import useCountdown from '../../store/useCountdown'
import '../../assets/styles/ProductDetail.scss'

const ProductDetail = () => {
  const { productDetail } = useStateData()
  const endTime = productDetail.timeCount + productDetail.initDate

  const [timeLeft] = useCountdown(endTime)
  const minutes = `0${Math.floor(timeLeft / 60000) % 60}`.slice(-2)
  const seconds = `0${Math.floor(timeLeft / 1000) % 60}`.slice(-2)

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
        <BsArrowLeftSquareFill /> Regresar
      </button>
      <div className="line" />
      <h1 className="time-product">
        <RiTimerLine /> {`${minutes}:${seconds}`}
      </h1>
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
          <p className="product-price">$ {productDetail.price}</p>
        </div>
        <div className="container-detail">
          <h2>Categoría</h2>
          <p>{productDetail.category}</p>
          <div className="line" />
          <h2>Descripción</h2>
          <p className="product-description">{productDetail.description}</p>
          <div className="line" />
          {minutes === '00' && seconds === '00' ? (
            <p className="p-finished-time">
              Se termino su tiempo <RiEmotionSadLine />
            </p>
          ) : (
            <button className="button-buy" type="button">
              Comprar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductDetail
