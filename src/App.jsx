import styles from './App.module.css'
import Header from './components/Header'
import pasteles from './data/pasteles'
import adornos from './data/adornos'
import Card from './components/Card'

function App() {
    const pastelList = pasteles.map((pastel) => (
        <Card name={pastel.name} img={pastel.img} price={pastel.price} key={pastel.id} />
    ));
    const adornosList = adornos.map((adornos) => (
        <Card name={adornos.name} img={adornos.img} price={adornos.price} key={adornos.id} />
    ));
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.bienvenida}>
                <h1>¿Que pastel <br /> quieres hoy?</h1>
                <img src="https://raw.githubusercontent.com/Deijux/pasteleria-madame/main/img/PastelInicioPage.webp" alt="Pastel Inicio" />
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
                    <div className={styles.content}>
                        {pastelList}
                    </div>
                </section>
                <section>
                    <div className={styles.headSect}>
                        <p>Adornos o cubierta</p>
                        <i className="fi fi-br-angle-down"></i>
                    </div>
                    <div className={styles.content}>
                        {adornosList}
                    </div>
                </section>
            </div>
            <section className={styles.formulario}>
                <p>Haz tu pedido</p>
                <form action="#" method="post">
                    <div className={styles.filasform}>
                        <div className={styles.filasform1}>
                            <div className={styles.inputs}>
                                <p>Nombre:</p>
                                <input type="text" name="nombre" id="nombre" placeholder="Tu nombre aquí" required />
                            </div>
                            <div className={styles.inputs}>
                                <p>Teléfono:</p>
                                <input type="text" name='telefono' id='telefono' placeholder='Tu teléfono aquí' required />
                            </div>
                            <div className={styles.inputs}>
                                <p>Correo electrónico:</p>
                                <input type="email" name='email' id='email' placeholder='Tu correo aquí' required />
                            </div>
                        </div>
                        <div className={styles.filasform2}>
                            <div className={styles.inputs}>
                                <p>Selección:</p>
                                <div className={styles.seleccion}>
                                    <div className={styles.sabores}>
                                        <p>Sabores</p>
                                        <label>
                                            <input type="radio" name="sabor" value="vainilla" /> Vainilla
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="sabor" value="chocolate" /> Chocolate
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="sabor" value="fresa" /> Fresa
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="sabor" value="limón" /> Limón
                                        </label>
                                    </div>
                                    <div className={styles.cubierta}>
                                        <p>Cubierta</p>
                                        <input type="checkbox" name="caramelo" id="caramelo" value="caramelo" />
                                        <label htmlFor="caramelo">Caramelo</label>
                                        <br />
                                        <input type="checkbox" name="frutas" id="frutas" value="frutas" />
                                        <label htmlFor="frutas">Frutas</label>
                                        <br />
                                        <input type="checkbox" name="fondat" id="fondat" value="fondat" />
                                        <label htmlFor="fondat">Fondat</label>
                                        <br />
                                        <input type="checkbox" name="chantilly" id="chantilly" value="chantilly" />
                                        <label htmlFor="chantilly">Chantilly</label>
                                        <br />
                                        <input type="checkbox" name="merengue" id="merengue" value="merengue" />
                                        <label htmlFor="merengue">Merengue</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inputs}>
                                <p>Descripción:</p>
                                <textarea className="description" name="description" id="description"
                                    placeholder="Descripción del pastel" required></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Hacer pedido</button>
                </form>
            </section>
            <footer>
                <h2>Encuentranos</h2>
                <div className={styles.datos}>
                    <p>Dirección: Ibagué - Tolima</p>
                    <p>Teléfono: ##########</p>
                    <p>Horario: Lun - Sab - 7:00 AM - 6:00 PM</p>
                </div>
            </footer>
            <div className={styles.barraInfo}>
                <div className={styles.barraText}>
                    <p>Esto es un proyecto personal</p>
                    <i className="fi fi-rr-info"></i>
                </div>
                <div className={styles.wrapper}>
                    <img src="https://raw.githubusercontent.com/Deijux/pasteleria-madame/main/img/PicCreator.webp" alt="Picture Creator" />
                    <div className={styles.textCreator}>
                        <p>Creado por @iamdeijux </p>
                        <div className={styles.iconsLinks}>
                            <a href="https://www.instagram.com/iamdeijux/" target="_blank" rel="noopener noreferrer">
                                <i className="fi fi-brands-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/juan-david-aguiar/" target="_blank" rel="noopener noreferrer">
                                <i className="fi fi-brands-linkedin"></i>
                            </a>
                            <a href="https://github.com/Deijux" target="_blank" rel="noopener noreferrer">
                                <i className="fi fi-brands-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
