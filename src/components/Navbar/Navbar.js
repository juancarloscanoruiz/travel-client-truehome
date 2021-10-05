import styled from "styled-components"
import { fontSize, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { Link } from "react-router-dom";
import ShoppingIcon from '../../assets/img/shopping-icon.svg';
import HomeIcon from '../../assets/img/home-icon.svg';

const NavbarContainer = styled.nav`
    padding: ${spacing[48]};
    display: flex;
    justify-content: space-between;
`;

const NavbarTitle = styled.h1`
    font-size: ${fontSize.large};
    color: ${colors.white};
`;

const NavbarIcon = styled.img`
    width: 24px;
    margin-right: ${spacing[8]};
`;

const NavbarLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: ${fontSize.normal};
    color: ${colors.white};
    text-decoration: none;
    position: relative;
    padding: 0 ${spacing[16]};
    margin-left: ${spacing[8]};
    &::after {
        content: "";
        position: absolute;
        background: ${colors.green};
        height: 3px;
        transition: 0.4s;
        width: 0;
        left: 0;
        bottom: -${spacing[16]};
    }
    &:hover:after {
        width: 100%;
    }
`;

const NavbarLinkText = styled.p`
    margin-bottom: 0;
`

const NavbarLinksContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarTitle>
                Mi aerolinea
            </NavbarTitle>
            <NavbarLinksContainer>
                <NavbarLink to="/">
                    <NavbarIcon src={HomeIcon} alt="home cart"/>
                    <NavbarLinkText>Home</NavbarLinkText>
                </NavbarLink>
                <NavbarLink to="/">
                    <NavbarIcon src={ShoppingIcon} alt="shopping cart"/>
                    <NavbarLinkText>Cart</NavbarLinkText>
                </NavbarLink>
            </NavbarLinksContainer>
        </NavbarContainer>
    )
}

export default Navbar
