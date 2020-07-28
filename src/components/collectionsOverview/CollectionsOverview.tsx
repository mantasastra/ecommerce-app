import React from "react";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collectionPreview/CollectionPreview";
import { RootState, ShopCollections } from "custom-types";
import { selectShopCollections } from "../../store/selectors/selectors";

const Overview = styled.div`
  display: flex;
  flex-direction: column;
`;

interface CollectionsOverviewSelectors {
  collections: ShopCollections;
}

const mapStateToProps = createStructuredSelector<
  RootState,
  CollectionsOverviewSelectors
>({
  collections: selectShopCollections,
});

const connector = connect(mapStateToProps);

type CollectionsOverviewProps = ConnectedProps<typeof connector>;

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({
  collections,
}) => (
  <Overview>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview {...collectionProps} key={id as number} />
    ))}
  </Overview>
);

export default connector(CollectionsOverview);
