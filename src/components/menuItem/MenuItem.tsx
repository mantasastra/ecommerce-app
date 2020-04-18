import React from "react";
import styled from "@emotion/styled";
import { MenuItemProps } from "custom-types";

const Item = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 1.5px 15px;

  &:first-of-type {
    margin-right: 7.5px;
  }

  &:last-of-type {
    margin-left: 7.5px;
  }
`;

const ItemContent = styled.div`
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

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  title,
}: MenuItemProps) => {
  return (
    <Item>
      <ItemContent>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ItemContent>
    </Item>
  );
};

export default MenuItem;
