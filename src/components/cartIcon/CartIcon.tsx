import React from "react";
import styled from "@emotion/styled";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { CartActionTypes, RootState } from "custom-types";

import { toggleCartHidden } from "../../store/actions/cart";
import { selectCartItemsCount } from "../../store/selectors/selectors";
import { ReactComponent as ShoppingBag } from "../../assets/images/shopping-bag.svg";

const Icon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIcon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

const mapStateToProps = (state: RootState) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CartProps = ConnectedProps<typeof connector>;

const CartIcon = ({ toggleCartHidden, itemCount }: CartProps) => (
  <Icon onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>{itemCount}</ItemCount>
  </Icon>
);

export default connector(CartIcon);
