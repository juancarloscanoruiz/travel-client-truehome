import PropTypes from 'prop-types';
import styled from "styled-components";

const RowComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${({ justify }) => justify ? `justify-content: ${justify}` : "flex-start"}
`;

const Row = ({ justify, children }) => (
    <RowComponent justify={justify}>
        {children}
    </RowComponent>
)

Row.propTypes = {
    justify: PropTypes.string,
    children: PropTypes.node
}


export default Row;