import React from "react";
import styled from "@emotion/styled";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { CartActionTypes, ShopItem } from "custom-types";

import CustomButton from "../customButton/CustomButton";
import { addCartItem } from "../../store/actions/cart";

const Item = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      transition: 0.2s ease-in;
      opacity: 0.8;
    }

    .btn {
      transition: 0.2s ease-in;
      opacity: 0.7;
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
  transition: 0.2s ease-out;
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

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  addCartItem: (item: ShopItem) => dispatch(addCartItem(item)),
});

const connector = connect(null, mapDispatchToProps);

type CollectionItemProps = ConnectedProps<typeof connector> & {
  item: ShopItem;
};

const CollectionItem: React.FC<CollectionItemProps> = ({
  item,
  addCartItem,
}) => {
  const { name, price, imageUrl } = item;
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

      <Button
        onClick={() => addCartItem(item)}
        className="btn"
        isGoogleSignIn={false}
        inverted
      >
        Add to cart
      </Button>
    </Item>
  );
};

export default connector(CollectionItem);
