import colors from "colors";
import { fonts } from "fonts";
import styled from "styled-components/dist/styled-components.js";


const Label = styled.label`
    color: ${colors.secondary}CC;
    margin-bottom: 10px;
    display: inline-block;
    font-weight: ${fonts.medium};
    font-size: 20px;
`

export default Label;