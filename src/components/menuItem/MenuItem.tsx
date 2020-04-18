import React from "react";
import styled from "@emotion/styled";
import { MenuItemProps } from "custom-types";

const Item = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  /* Background image pop up effect on hover */
  &:hover {
    cursor: pointer;

    & div:first-of-type {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.96);
    }

    & div:nth-of-type(2) {
      opacity: 0.9;
    }
  }

  &:first-of-type {
    margin-right: 7.5px;
  }

  &:last-of-type {
    margin-left: 7.5px;
  }

  &.large {
    height: 380px;
  }

  @media screen and (max-width: 680px) {
    flex: 1 1 auto;

    &.large {
      height: 240px;
    }
  }
`;

const ItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const ItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  background-color: #ffffff;
  opacity: 0.7;
  position: absolute;
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
  imageUrl,
  size,
}: MenuItemProps) => {
  return (
    <Item className={`${size}`}>
      <ItemBackground
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ItemContent>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ItemContent>
    </Item>
  );
};

export default MenuItem;
