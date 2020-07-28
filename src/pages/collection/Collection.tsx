import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "@emotion/styled";

import CollectionItem from "../../components/collectionItem/CollectionItem";

const Collection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Item = styled.div`
  margin-bottom: 30px;
`;

const CollectionPage: React.FC<any> = ({ match }) => {
  console.log(match);
  return (
    <Collection>
      <Title>CATEGORY PAGE</Title>
    </Collection>
  );
};

export default CollectionPage;
