import "../css/Form.css"
import Maps from "./Maps" 




const Contact = () => {
  return (
    <>
   
      <div className="text-contact">
        <br />
        <h1>ESCRÍBENOS</h1>
        <br />
        <p>Completa el formulario con tus datos</p>
      </div>
      <div className="container4">
        <div className="content">
          <form action="" method="POST">
              <div className="input-box">
                <input type="text" required name="nombre"></input>
                <label>Nombre</label>
              </div>
              <div className="input-box">
                <input type="text" required name="apellidos"></input>
                <label>Apellidos</label>
              </div>
              <div className="input-box">
                <input type="text" name="correo" required></input>
                <label>Correo</label>
              </div>
              <div className="input-box">
                <input type="texto" name="telefono" required></input>
                <label>Teléfono</label>
              </div>
              <div className="message-box" >
                <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
                <label>Mensaje</label>
              </div>
              <div className="input-box">
                <input type="submit" value="Enviar Mensaje"></input>
              </div>
          </form>
        </div>
      </div>
      <div className="location">
        <br />
        <h1>¿Dónde nos encontramos?</h1>
      </div>
      <div className="container7">
        <div className="mapa">
          <Maps />
        </div>
        <p>Nos encontramos en el vibrante campus de la Universidad Surcolombiana, siendo el punto de encuentro para los amantes de la buena comida y la comunidad universitaria. Consulta nuestro mapa en la página para encontrar fácilmente nuestro rincón gastronómico. ¡Estamos emocionados de compartir nuestro sabor contigo en LOS GONZALES!</p>
      </div>
      
    </>
  )
}
export default Contact