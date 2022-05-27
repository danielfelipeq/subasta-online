import { useNavigate } from 'react-router-dom'
import Header from '../Layouts/Header'
import '../../assets/styles/Home.scss'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <section className="container-home">
        <div className="offer">
          <h1 className="home-title">Ofertas de temporada</h1>
          <figure className="home-image">
            <img
              src="https://promociondescuentos.com/wp-content/uploads/2016/03/gran-venta-de-liquidacion-b-store.jpg"
              alt="promotion of the season"
            />
          </figure>
        </div>
        <button
          className="home-button"
          type="button"
          onClick={() => {
            navigate('/product')
          }}
        >
          Ver todos los productos
        </button>
      </section>
    </>
  )
}

export default Home
