import His from '../img/Historia.png';
import '../css/about.css'; // Importa los estilos CSS

const AboutUs = () => {
  return (
    <div className="container">
      <div className="section">
        <img src={His} alt="Nuestra Historia" className="section-image" />
        <h2 className="section-text">Nuestra Historia</h2>
      </div>

      <div className="section">
        <h2 className="section-text">Misión</h2>
        <p className="section-border">
          En LOS GONZALES, nuestra misión es crear experiencias gastronómicas excepcionales que deleiten a los paladares más exigentes. Nos esforzamos por ofrecer productos de calidad artesanal, utilizando ingredientes frescos y locales siempre que sea posible. Queremos ser el lugar donde la comunidad universitaria se reúne para disfrutar de momentos deliciosos y compartir risas, creando recuerdos que perduran más allá de la última migaja.
        </p>
      </div>

      <div className="section">
        <p className="section-border">
          Nuestra visión es ser el referente culinario en la Universidad Surcolombiana y más allá, destacando por nuestra dedicación a la calidad, la innovación y el compromiso con la comunidad. Nos vemos como un lugar donde la tradición y la modernidad convergen para crear un oasis gastronómico que inspire a todos a disfrutar de la vida a través de la comida.
        </p>
        <h2 className="section-text">Visión</h2>
      </div>
    </div>
  );
}

export default AboutUs;
