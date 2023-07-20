import Header from "../components/Header"
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <form className={styles.form} action="/pedidos" method="post">
            <h1>Iniciar Sesión</h1>
            <div className={styles.credentials}>
              <div className={styles.inputs}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="ejemplo@dominio.com" autoFocus required />
              </div>
              <div className={styles.inputs}>
                <label htmlFor="id-trabajador">ID trabajador</label>
                <input type="password" name="id-trabajador" id="id-trabajador" placeholder="Ingresa el ID de trabajador" required />
              </div>
              <div className={styles.inputs}>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" required />
              </div>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
        <div className={styles.containerlogo}>
          <img src="https://res.cloudinary.com/dh3ixolct/image/upload/v1689869082/others/n8mehsst5nvhq3aobxhd.webp" srcSet="" />
          <p>Inicie sesión para administrar los pedidos de la pastelería Madame</p>
        </div>
      </section>
    </main>
  )
}

export default Login
