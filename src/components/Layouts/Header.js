import { Link } from 'react-router-dom'
import '../../assets/styles/Header.scss'

const Header = () => {
  return (
    <header className="container-header">
      <h1 className="header-title">CompraYa</h1>
      <div className="container-path">
        <ul className="container-list">
          <li className="list-link">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="list">
            <Link className="link" to="/product">
              PRODUCT
            </Link>
          </li>
          <li className="list">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
