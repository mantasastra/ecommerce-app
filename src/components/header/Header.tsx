import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

const Option = styled(Link)`
  padding: 10px 15px;
`;

const Header: React.FunctionComponent<Object> = () => (
  <Nav>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <Options>
      <Option to="/shop">SHOP</Option>
      <Option to="/contact">CONTACT</Option>
    </Options>
  </Nav>
);

export default Header;
