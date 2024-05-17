import "../css/footer.css"
import styled from '@emotion/styled'
import Logo from "../img/logo.png"
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";


const Imagen = styled.img`
    width: 50%;
    margin: 30px 30px;
    border-radius: 50px;

    @media screen and (max-width: 1160px) {

    }
    @media screen and (max-width: 950px) {

    }
    @media screen and (max-width: 768px) {
        width: 80%;
    }

`


export const Footer = () => {
  return (
    <footer className="pie-pagina">
    <div className="grupo-1">
        <div className="box">
            <figure>
                <a href="#">
                <Imagen
                    src={Logo}
                />	
                </a>
            </figure>
        </div>
        <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>En el corazón de la Universidad Surcolombiana, nace LOS GONZALES, tu destino culinario para experiencias irresistibles. Somos más que una simple opción de comida rápida; somos artesanos apasionados que fusionan tradición y sabor para crear momentos inolvidables en cada bocado. En LOS GONZALES, creemos que la buena comida es una celebración, y cada pastel y empanada que creamos es una obra maestra de deleite.</p>
        </div>
        <div className="box">
            <h2>SIGUENOS</h2>
            <div className="red-social">
                <br />
                <a href="#"><BsFacebook/></a>
                <a href="#"><AiFillInstagram/></a>
                <a href="#"><BsWhatsapp/></a>
            </div>
        </div>
    </div>
    <div className="grupo-2">
        <small>&copy; 2023 <b>LOS GONZÁLEZ - EMPANADAS CASERAS</b> - Todos los Derechos Reservados.</small>
    </div>
</footer>

  )
}
export default Footer