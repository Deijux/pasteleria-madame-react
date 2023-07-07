import styles from './Card.module.css';
import PropTypes from 'prop-types';

function Card({name, price, img}) {
  return (
    <div className={styles.product}>
      <img src={img} alt={name + 'Image'} title={name} />
      <div className={styles.info}>
        <p>{name} <br /> Precio: ${price}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};

export default Card;