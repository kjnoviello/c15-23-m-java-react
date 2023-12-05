import { styled } from 'styled-components';
import { titleFont, textFont } from '../../styles/GlobalStyles';

const ContainerVolver = styled.div`

  max-width: 100%;
  margin: 40px;
  background-color: #d9d9d9;
  color: black;
  padding-inline: 40px;
  @media (max-width: 576px) {
    margin-inline: 0px;
    padding-inline: 20px;
  }
`;

const DivVolver = styled.div`
  height: 80px;
  display: flex;
  font-size: 2rem;
  font-family: ${titleFont};
  align-items: center;
`;

const DivTitulo = styled.div`
    height: 80px;
    display: flex;
    font-family: ${titleFont};
    align-items: center;
    & h2{
        font-size: 44px;
    }
    @media (max-width: 576px) {
        justify-content: center
    }
`;

export { ContainerVolver, DivVolver, DivTitulo }
