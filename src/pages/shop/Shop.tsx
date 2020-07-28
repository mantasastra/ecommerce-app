import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/Collection";

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
