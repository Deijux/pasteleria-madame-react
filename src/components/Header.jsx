import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="https://raw.githubusercontent.com/Deijux/pasteleria-madame/main/img/logoHeader.webp" alt='Logo Madame Image' />
      </Link>
      <div className="headright">
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/login">
          <img src="https://raw.githubusercontent.com/Deijux/pasteleria-madame/main/img/Usuario.webp" alt='Logo Usuario Image' />
        </Link>
      </div>
    </header>
  )
}

export default Header