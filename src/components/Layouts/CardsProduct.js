import useCountdown from '../../store/useCountdown'
import '../../assets/styles/CardsProduct.scss'

const CardsProduct = ({ item, handleClick }) => {
  const initDate = new Date().getTime()
  const endTime = initDate + 60000 * (Math.round(Math.random() * 5) + 1)
  const [timeLeft] = useCountdown(endTime)
  const minutes = Math.floor(timeLeft / 60000) % 60
  const seconds = Math.floor(timeLeft / 1000) % 60
  return (
    <div className="card-product">
      <p className="time-product">{`${minutes}:${seconds}`}</p>
      <figure className="container-image">
        <img className="image-product" src={item.image} alt={item.title} />
      </figure>
      <p className="name-product">{item.title}</p>
      <p className="product-price">$ {item.price}</p>
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
        disabled={minutes === 0 && seconds === 0}
      >
        View Detail
      </button>
    </div>
  )
}

export default CardsProduct
