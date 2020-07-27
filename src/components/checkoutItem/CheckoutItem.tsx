import React from "react";
import styled from "@emotion/styled";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { CartActionTypes, ShopItem } from "custom-types";

import theme from "../../Theme/theme";
import { clearItemFromCart } from "../../store/actions/cart";

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

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  clearItem: (item: ShopItem) => dispatch(clearItemFromCart(item)),
});

const connector = connect(null, mapDispatchToProps);

type CheckoutItemProps = ConnectedProps<typeof connector> & {
  key: number;
  cartItem: ShopItem;
};

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <Item>
      <ImageContainer>
        <Image src={imageUrl} alt="product" />
      </ImageContainer>
      <Column>{name}</Column>
      <Column style={{ paddingLeft: "20px" }}>{quantity}</Column>
      <Column>{price}</Column>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </Item>
  );
};

export default connector(CheckoutItem);
