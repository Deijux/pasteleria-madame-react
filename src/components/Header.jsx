import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="https://res.cloudinary.com/dh3ixolct/image/upload/v1689869082/others/n8mehsst5nvhq3aobxhd.webp" alt='Logo Madame Image' />
      </Link>
      <div className={styles.headright}>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/login">
          <img src="https://res.cloudinary.com/dh3ixolct/image/upload/v1689869082/others/lvrfquiidtgvxe3wgw3f.webp" alt='Logo Usuario Image' />
        </Link>
      </div>
    </header>
  )
}

export default Header