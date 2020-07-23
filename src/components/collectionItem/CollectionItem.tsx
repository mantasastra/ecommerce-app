import React from "react";
import styled from "@emotion/styled";
import { ShopItem } from "custom-types";

import CustomButton from "../customButton/CustomButton";

const Item = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .btn {
      opacity: 0.5;
      display: flex;
    }
  }
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
  width: 15%;
`;

const Button = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
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
        className="image"
      />
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}&euro;</FooterPrice>
      </Footer>

      <Button className="btn" isGoogleSignIn={false} inverted>
        Add to cart
      </Button>
    </Item>
  );
};

export default CollectionItem;
