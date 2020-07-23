import React, { Component } from "react";
import styled from "@emotion/styled";
import { ShopProps, ShopState, ShopCollections } from "custom-types";
import SHOP_DATA from "../../data/shopData";

import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

const Shop = styled.div``;

class ShopPage extends Component<ShopProps, ShopState> {
  state = {
    collections: SHOP_DATA as ShopCollections,
  } as ShopState;

  render() {
    const { collections } = this.state;
    return (
      <Shop>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview {...collectionProps} />
        ))}
      </Shop>
    );
  }
}

export default ShopPage;
