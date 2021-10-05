import { createGlobalStyle } from 'styled-components';
import { colors } from './utils/colors';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    

    body {
        font-size: 16px;
        font-family: 'Oxygen', sans-serif;
        background-color: ${colors.black100};
    }
`;