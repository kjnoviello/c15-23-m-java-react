import { styled } from 'styled-components';
import { titleFont, textFont } from '../../styles/GlobalStyles';

const ContainerVolver = styled.div`
    max-width: 100%;
    margin: 40px;
    background-color: #D9D9D9;
    color: black;
    padding-inline:40px;
    @media (max-width: 576px) {
        margin-inline: 0px
    }
`;

const Div = styled.div`
    height: 80px;
    display: flex;
    font-size: 2rem;
    font-family: ${titleFont};
    align-items: center;
    @media (max-width: 576px) {
        justify-content: center
    }
`;

const Button = styled.button`
    display: flex;
    background-color: #D9D9D9;
    color: black;
    padding-inline: 0px;
    cursor:pointer;
    p{
        padding-inline: 15px;
        font-family: ${textFont};
    }
    &:hover{
        border-color: black;
    }
`;

export { ContainerVolver, Div, Button}