import '../../assets/styles/CardsProduct.scss'

const CardsProduct = ({ item, handleClick, minutes, seconds }) => {
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
        onClick={() => handleClick(item)}
      >
        View Detail
      </button>
    </div>
  )
}

export default CardsProduct
