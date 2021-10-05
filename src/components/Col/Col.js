import PropTypes from 'prop-types';
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";


const getWidth = (span) => {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%`;
}

const ColComponent = styled.div`
    ${({ gap }) => gap ? `margin: ${gap}` : ""};
    ${({ xs }) => (xs ? getWidth(xs) : "width: 100%")};
    @media (min-width: ${breakpoints.md}px){
        ${({ md }) => md && getWidth(md)}
    };
    @media (min-width: ${breakpoints.lg}px){
        ${({ lg }) => lg && getWidth(lg)}
    };
    @media (min-width: ${breakpoints.xl}px){
        ${({ xl }) => xl && getWidth(xl)}
    };
`;

const Col = ({ xs, md, lg, xl, gap, children }) => (
    <ColComponent xs={xs} md={md} lg={lg} xl={xl} gap={gap}>
        {children}
    </ColComponent>
)


Col.propTypes = {
    xs: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    gap: PropTypes.number,
    children: PropTypes.node
}


export default Col;