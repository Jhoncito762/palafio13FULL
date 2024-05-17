
import styled from '@emotion/styled'
import "../css/Intro.css"


const Texto = styled.h1 `
   
    color: #000000;
    margin: 50px 120px;
    font-size:70px;

    @media screen and (max-width: 1160px) {

    }
    @media screen and (max-width: 950px) {

    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin: 20px 20px;
    }
`



export const Intro = () => {
  return (

    <section className='contenedor'>
           <Texto>LA MEJOR OPCIÓN DE FRITOS</Texto>
           <h3>PARA SUBIR TUS TRIGLICÉRIDOS</h3>
    </section>   
    
  )
}
export default Intro