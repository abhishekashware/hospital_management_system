
import styled from "styled-components/dist/styled-components.js"

const Input = styled.input`
    background: ${props => props.error ? "#FF9494" : "#4DADBD"}1A;
    border-radius: 10px;
    outline: none;
    width: ${props => props.fluid ? "100%" : 'initial'};
    padding: 20px;
    height: 60px;
    &:focus {
        box-shadow: 0 0 0 2pt ${props => props.error ? "#FF9494" :"#4DADBD"};
    }
    &:disabled {
      background: #f7f3f3;
    }
`
export default Input;

