import React from "react";
import styled from "@emotion/styled";
import { MenuItemTitles } from "custom-types";

import MenuItem from "../../components/menuItem/MenuItem";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: "20px 80px";
`;

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HomePage: React.FunctionComponent = () => {
  const menuItems: MenuItemTitles = [
    "HATS",
    "JACKETS",
    "SNEAKERS",
    "WOMEN'S",
    "MEN'S",
  ];

  return (
    <Home>
      <DirectoryMenu>
        {menuItems.map((item, index) => (
          <MenuItem key={index} title={item} />
        ))}
      </DirectoryMenu>
    </Home>
  );
};

export default HomePage;
