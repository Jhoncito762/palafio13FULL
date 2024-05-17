import styled from "@emotion/styled";

const EstilosAlerta = styled.div`
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: ${(props) =>
        props.tipo === "error" ? "#f44336" : "#4CAF50"};
    text-align: center;
    font-size: 1rem;
`;

const Alerta = ({ mensaje, tipo }) => {
    return (
        <EstilosAlerta tipo={tipo}>
            {mensaje}
        </EstilosAlerta>
    );
};

export default Alerta;