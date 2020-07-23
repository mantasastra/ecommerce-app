import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "custom-types";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const Logo = styled(LogoSVG)`
  margin-top: -5px;
  width: 40px;
  height: 40px;
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Option = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}: RootState) => ({
  currentUser,
  hidden,
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

const Header = ({ currentUser, hidden }: HeaderProps) => (
  <Nav>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <Option onClick={() => auth.signOut()}>SIGN OUT</Option>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </Options>
    {hidden ? null : <CartDropdown />}
  </Nav>
);

export default connector(Header);
