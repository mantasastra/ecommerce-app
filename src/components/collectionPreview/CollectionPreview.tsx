import React from "react";
import styled from "@emotion/styled";
import { ShopCollection } from "custom-types";

import CollectionItem from "../../components/collectionItem/CollectionItem";

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview: React.FunctionComponent<ShopCollection> = ({
  title,
  items,
}: ShopCollection) => {
  return (
    <Collection>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem {...itemProps} />
          ))}
      </Preview>
    </Collection>
  );
};

export default CollectionPreview;
