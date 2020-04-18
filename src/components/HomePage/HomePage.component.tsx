import React from "react";
import styled from "@emotion/styled";

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

const MenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 1.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

const HomePage: React.FunctionComponent = () => (
  <Home>
    <DirectoryMenu>
      <MenuItem>
        <MenuItemContent>
          <Title>HATS</Title>
          <Subtitle>SHOP NOW</Subtitle>
        </MenuItemContent>
      </MenuItem>

      <MenuItem>
        <MenuItemContent>
          <Title>JACKETS</Title>
          <Subtitle>SHOP NOW</Subtitle>
        </MenuItemContent>
      </MenuItem>

      <MenuItem>
        <MenuItemContent>
          <Title>SNEAKERS</Title>
          <Subtitle>SHOP NOW</Subtitle>
        </MenuItemContent>
      </MenuItem>

      <MenuItem>
        <MenuItemContent>
          <Title>WOMEN&apos;S</Title>
          <Subtitle>SHOP NOW</Subtitle>
        </MenuItemContent>
      </MenuItem>

      <MenuItem>
        <MenuItemContent>
          <Title>MEN&apos;S</Title>
          <Subtitle>SHOP NOW</Subtitle>
        </MenuItemContent>
      </MenuItem>
    </DirectoryMenu>
  </Home>
);

export default HomePage;
