import Header from "../components/Header";
import styles from "./SobreNosotros.module.css";

function SobreNosotros() {
  return (
    <>
      <Header />
      <h1 className={styles.bienvenida}>Sobre nosotros</h1>
      <div className={styles.info}>
        <img
          src="https://res.cloudinary.com/dh3ixolct/image/upload/v1689869082/others/lm1qmvj15q2m4y4muapk.webp"
          alt="Sobre nosotros img"
        />
        <p>
          Somos una nueva pastelería con una meta clara, ofrecer el mejor
          servicio y calidad posible para nuestros clientes con nuestros
          productos y servicios. <br />
          Todos nuestros productos cuentan con la mejor garantía, si algo no le
          gusta con mucho gusto lo arreglamos.
          <br />
          Siéntase libre de adquirir alguno de nuestros pasteles, con toda la
          calidad que se merecen nuestros clientes.
        </p>
      </div>
    </>
  );
}

export default SobreNosotros;
