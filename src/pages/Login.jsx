import Header from "../components/Header"
import './Login.css'

function Login() {
  return (
    <>
      <Header />
      <section className="sectionLG">
        <div className="container">
          <form className="formLG" action="/pedidos" method="post">
            <h1>Iniciar Sesión</h1>
            <div className="credentials">
              <div className="inputsLG">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="ejemplo@dominio.com" autoFocus required />
              </div>
              <div className="inputsLG id">
                <label htmlFor="id-trabajador">ID trabajador</label>
                <input type="password" name="id-trabajador" id="id-trabajador" placeholder="Ingresa el ID de trabajador" required />
              </div>
              <div className="inputsLG password">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" required />
              </div>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
        <div className="containerlogo">
          <img src="https://raw.githubusercontent.com/Deijux/pasteleria-madame/main/img/logoHeader.webp" srcSet="" />
          <p>Inicie sesión para administrar los pedidos de la pastelería Madame</p>
        </div>
      </section>
    </>
  )
}

export default Login
