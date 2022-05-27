import { RiEmotionSadLine, RiTimerLine } from 'react-icons/ri'
import PropTypes from 'prop-types'
import useCountdown from '../../store/useCountdown'
import '../../assets/styles/CardsProduct.scss'

const CardsProduct = ({ item, handleClick }) => {
  const initDate = new Date().getTime()
  const endTime = initDate + 60000 * (Math.round(Math.random() * 5) + 1)
  const [timeLeft] = useCountdown(endTime)
  const minutes = `0${Math.floor(timeLeft / 60000) % 60}`.slice(-2)
  const seconds = `0${Math.floor(timeLeft / 1000) % 60}`.slice(-2)
  return (
    <div className="card-product">
      <p className="time-product">
        <RiTimerLine /> {`${minutes}:${seconds}`}
      </p>
      <figure className="container-image">
        <img className="image-product" src={item.image} alt={item.title} />
      </figure>
      <p className="name-product">{item.title}</p>
      <p className="product-price">$ {item.price}</p>
      {minutes === '00' && seconds === '00' ? (
        <p className="p-finished-time">
          Se termino su tiempo <RiEmotionSadLine />
        </p>
      ) : (
        <button
          className="button-buy"
          type="button"
          onClick={() =>
            handleClick({
              id: item.id,
              title: item.title,
              image: item.image,
              price: item.price,
              description: item.description,
              category: item.category,
              timeCount: timeLeft,
              initDate,
            })
          }
        >
          View Detail
        </button>
      )}
    </div>
  )
}

CardsProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default CardsProduct
