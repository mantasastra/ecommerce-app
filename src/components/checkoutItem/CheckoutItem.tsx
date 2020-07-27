import React from "react";
import styled from "@emotion/styled";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { CartActionTypes, ShopItem } from "custom-types";

import theme from "../../Theme/theme";
import {
  clearItemFromCart,
  addCartItem,
  removeCartItem,
} from "../../store/actions/cart";

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

const Quantity = styled.div`
  width: 23%;
  display: flex;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Value = styled.span`
  margin: 0 10px;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  clearItem: (item: ShopItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: ShopItem) => dispatch(addCartItem(item)),
  removeItem: (item: ShopItem) => dispatch(removeCartItem(item)),
});

const connector = connect(null, mapDispatchToProps);

type CheckoutItemProps = ConnectedProps<typeof connector> & {
  key: number;
  cartItem: ShopItem;
};

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem,
  addItem,
  removeItem,
  clearItem,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <Item>
      <ImageContainer>
        <Image src={imageUrl} alt="product" />
      </ImageContainer>
      <Column>{name}</Column>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Column>{price}</Column>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </Item>
  );
};

export default connector(CheckoutItem);
