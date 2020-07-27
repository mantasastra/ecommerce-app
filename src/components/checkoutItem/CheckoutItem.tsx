import React from "react";
import styled from "@emotion/styled";
import theme from "../../Theme/theme";
import { ShopItem } from "custom-types";

const Item = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid ${theme.colors.darkGrey};
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Column = styled.div`
  width: 23%;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const CheckoutItem: React.FC<{ key: number; cartItem: ShopItem }> = ({
  cartItem: { imageUrl, name, quantity, price },
}) => (
  <Item>
    <ImageContainer>
      <Image src={imageUrl} alt="product" />
    </ImageContainer>
    <Column>{name}</Column>
    <Column style={{ paddingLeft: "20px" }}>{quantity}</Column>
    <Column>{price}</Column>
    <RemoveButton>&#10005;</RemoveButton>
  </Item>
);

export default CheckoutItem;
