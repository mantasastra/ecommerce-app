import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState, User } from "custom-types";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import {
  selectCurrentUser,
  selectCartHidden,
} from "../../store/selectors/selectors";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-right: 1.5rem;
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

interface HeaderSelectors {
  currentUser: User;
  hidden: boolean;
}

const mapStateToProps = createStructuredSelector<RootState, HeaderSelectors>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
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
