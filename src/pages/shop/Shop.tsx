import React, { Component } from "react";
import { ShopProps, ShopState, ShopCollections } from "custom-types";
import SHOP_DATA from "../../data/shopData";

class ShopPage extends Component<ShopProps, ShopState> {
  state = {
    collections: SHOP_DATA as ShopCollections,
  } as ShopState;

  render() {
    return <div>Shop Page</div>;
  }
}

export default ShopPage;
