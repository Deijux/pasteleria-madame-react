import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer>
        <h2>Encuentranos</h2>
        <div className={styles.datos}>
          <p>Dirección: Ibagué - Tolima</p>
          <p>Teléfono: ##########</p>
          <p>Horario: Lun - Sab - 7:00 AM - 6:00 PM</p>
        </div>
      </footer>
  )
}

export default Footer