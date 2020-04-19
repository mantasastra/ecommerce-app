import React from "react";
import styled from "@emotion/styled";
import { ShopItem } from "custom-types";

const Item = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const FooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const FooterPrice = styled.span`
  width: 10%;
`;

const CollectionItem: React.FunctionComponent<ShopItem> = ({
  id,
  name,
  price,
  imageUrl,
}: ShopItem) => {
  return (
    <Item>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </Footer>
    </Item>
  );
};

export default CollectionItem;
