import styles from "./App.module.css";
import Header from "./components/Header";
import pasteles from "./data/pasteles";
import adornos from "./data/adornos";
import Card from "./components/Card";
import FormOrder from "./components/FormOrder";
import Footer from "./components/Footer";

function App() {
  const pastelList = pasteles.map((pastel) => (
    <Card
      name={pastel.name}
      img={pastel.img}
      price={pastel.price}
      key={pastel.id}
    />
  ));
  const adornosList = adornos.map((adornos) => (
    <Card
      name={adornos.name}
      img={adornos.img}
      price={adornos.price}
      key={adornos.id}
    />
  ));
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.bienvenida}>
        <h1>
          ¿Que pastel <br /> quieres hoy?
        </h1>
        <img
          src="https://res.cloudinary.com/dh3ixolct/image/upload/v1689869082/others/gsstbvrw3h0q4syufpyu.webp"
          alt="Pastel Inicio"
        />
      </div>
      <div className={styles.txtcatalogo}>
        <h2>Este es nuestro catalogo</h2>
      </div>
      <div className={styles.filas}>
        <section>
          <div className={styles.headSect}>
            <p>Sabores</p>
            <i className="fi fi-br-angle-down"></i>
          </div>
          <div className={styles.content}>{pastelList}</div>
        </section>
        <section>
          <div className={styles.headSect}>
            <p>Adornos o cubierta</p>
            <i className="fi fi-br-angle-down"></i>
          </div>
          <div className={styles.content}>{adornosList}</div>
        </section>
      </div>
      <FormOrder />
      <Footer />
      <div className={styles.barraInfo}>
        <div className={styles.barraText}>
          <p>Esto es un proyecto personal</p>
          <i className="fi fi-rr-info"></i>
        </div>
        <div className={styles.wrapper}>
          <img
            src="https://res.cloudinary.com/dh3ixolct/image/upload/v1689869081/others/inkumhaugftil2nrs0bg.webp"
            alt="Picture Creator"
          />
          <div className={styles.textCreator}>
            <p>Creado por @iamdeijux </p>
            <div className={styles.iconsLinks}>
              <a
                href="https://www.instagram.com/iamdeijux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fi fi-brands-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/juan-david-aguiar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fi fi-brands-linkedin"></i>
              </a>
              <a
                href="https://github.com/Deijux"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fi fi-brands-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
