import React from "react";
import styled from "@emotion/styled";
import { ShopCollections } from "custom-types";

import CollectionItem from "../../components/collectionItem/CollectionItem";

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 2rem 30px 2rem;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview: React.FunctionComponent<ShopCollections> = ({
  title,
  items,
}: ShopCollections) => {
  return (
    <Collection>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id as number} item={item} />
          ))}
      </Preview>
    </Collection>
  );
};

export default CollectionPreview;
