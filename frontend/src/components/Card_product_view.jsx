import React from 'react';
import styled from '@emotion/styled';
import '../css/Product_view.css';

const ProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  margin: 0 auto;
  width: 800px;
`;

const ProductPhoto = styled.div`
  flex: 1;
`;

const PhotoContainer = styled.div`
  position: relative;
`;

const PhotoMain = styled.div`
  position: relative;
`;

const Controls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
`;

const PhotoAlbum = styled.div`
  margin-top: 10px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin-right: 5px;
    }
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.div`
  margin-bottom: 10px;

  h1 {
    margin: 0;
  }
`;

const Price2 = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Variant = styled.div`
  margin-bottom: 10px;

  h3 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin-right: 5px;
    }
  }
`;

const Description = styled.div`
  margin-bottom: 10px;

  h3 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;

const CardProductView = (props) => {
  const increaseQuantity = () => {
    props.setQuantity(props.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (props.quantity > 1) {
      props.setQuantity(props.quantity - 1);
    }
  };

  return (
    <ProductSection className="product">
      <ProductPhoto className="product__photo">
        <PhotoContainer className="photo-container">
          <PhotoMain className="photo-main">
            <Controls className="controls">
              {/* Puedes agregar controles adicionales aquí si es necesario */}
            </Controls>
            <img src={'http://localhost:7777' + props.imagen} />
          </PhotoMain>
          <PhotoAlbum className="photo-album">
            <h5 className="text-center">Aplica términos y condiciones</h5>
          </PhotoAlbum>
        </PhotoContainer>
      </ProductPhoto>
      <ProductInfo className="product__info">
        <Title className="title">
          <h1>{props.title}</h1>
        </Title>
        <Price2 className="price2">
          $ <span>{props.price}</span>
        </Price2>

        <Description className="description">
          <h4>Contiene</h4>
          <ul>
            <h6>{props.description}</h6>
          </ul>
        </Description>
        <br />
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{props.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <br />
        <a onClick={props.modal} className="buy--btn">
          COMPRAR
        </a>
      </ProductInfo>
    </ProductSection>
  );
};

export default CardProductView;
