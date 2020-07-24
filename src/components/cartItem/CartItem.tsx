import React from "react";
import styled from "@emotion/styled";
import { ShopItem } from "custom-types";

const Item = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 30%;
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const CartItem = ({
  item: { name, price, imageUrl, quantity },
}: {
  item: ShopItem;
}) => (
  <Item>
    <Image src={imageUrl} alt="product" />
    <ItemDetails>
      <Name>{name}</Name>
      <span>
        {quantity} x {price}&euro;
      </span>
    </ItemDetails>
  </Item>
);

export default CartItem;
