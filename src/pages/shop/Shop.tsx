import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ShopCollections, RootState } from "custom-types";

import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import { selectShopCollections } from "../../store/selectors/selectors";

interface ShopSelectors {
  collections: ShopCollections;
}

const mapStateToProps = createStructuredSelector<RootState, ShopSelectors>({
  collections: selectShopCollections,
});

const connector = connect(mapStateToProps);

type ShopProps = ConnectedProps<typeof connector>;

const ShopPage: React.FC<ShopProps> = ({ collections }) => (
  <div>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview {...collectionProps} key={id as number} />
    ))}
  </div>
);

export default connector(ShopPage);
