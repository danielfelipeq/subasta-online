import '../../assets/styles/Page404.scss'
import Header from '../Layouts/Header'

const Page404 = () => {
  return (
    <div>
      <Header />
      <figure className="image-404">
        <img
          src="https://dam.muyinteresante.com.mx/wp-content/uploads/2020/04/error-404.jpg"
          alt="404"
        />
      </figure>
    </div>
  )
}

export default Page404
