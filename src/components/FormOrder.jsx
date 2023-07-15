import { useForm } from "react-hook-form";
import styles from "./FormOrder.module.css";

function FormOrder() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <section className={styles.formulario}>
      <p>Haz tu pedido</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.filasform}>
          <div className={styles.filasform1}>
            <div className={styles.inputs}>
              <p>Nombre:</p>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Tu nombre aquí"
                required
                {...register("nombre")}
              />
            </div>
            <div className={styles.inputs}>
              <p>Teléfono:</p>
              <input
                type="text"
                name="telefono"
                id="telefono"
                placeholder="Tu teléfono aquí"
                required
                {...register("telefono")}
              />
            </div>
            <div className={styles.inputs}>
              <p>Correo electrónico:</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Tu correo aquí"
                required
                {...register("email")}
              />
            </div>
          </div>
          <div className={styles.filasform2}>
            <div className={styles.inputs}>
              <p>Selección:</p>
              <div className={styles.seleccion}>
                <div className={styles.sabores}>
                  <p>Sabores</p>
                  <label>
                    <input type="radio" name="sabor" value="vainilla" {...register("sabor")} />
                    Vainilla
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="sabor" value="chocolate" {...register("sabor")} />
                    Chocolate
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="sabor" value="fresa" {...register("sabor")} /> Fresa
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="sabor" value="limón" {...register("sabor")} /> Limón
                  </label>
                </div>
                <div className={styles.cubierta}>
                  <p>Cubierta</p>
                  <input
                    type="checkbox"
                    name="caramelo"
                    id="caramelo"
                    value="caramelo"
                    {...register("cubierta")}
                  />
                  <label htmlFor="caramelo">Caramelo</label>
                  <br />
                  <input
                    type="checkbox"
                    name="frutas"
                    id="frutas"
                    value="frutas"
                    {...register("cubierta")}
                  />
                  <label htmlFor="frutas">Frutas</label>
                  <br />
                  <input
                    type="checkbox"
                    name="fondat"
                    id="fondat"
                    value="fondat"
                    {...register("cubierta")}
                  />
                  <label htmlFor="fondat">Fondat</label>
                  <br />
                  <input
                    type="checkbox"
                    name="chantilly"
                    id="chantilly"
                    value="chantilly"
                    {...register("cubierta")}
                  />
                  <label htmlFor="chantilly">Chantilly</label>
                  <br />
                  <input
                    type="checkbox"
                    name="merengue"
                    id="merengue"
                    value="merengue"
                    {...register("cubierta")}
                  />
                  <label htmlFor="merengue">Merengue</label>
                </div>
              </div>
            </div>
            <div className={styles.inputs}>
              <p>Descripción:</p>
              <textarea
                className="description"
                name="description"
                id="description"
                placeholder="Descripción del pastel"
                required
                {...register("description")}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit">Hacer pedido</button>
      </form>
    </section>
  );
}

export default FormOrder;
