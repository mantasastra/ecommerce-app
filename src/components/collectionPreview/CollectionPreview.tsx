import React from "react";
import styled from "@emotion/styled";
import { ShopCollection } from "custom-types";

const Collection = styled.div``;

const Title = styled.h1``;

const Preview = styled.div``;

const Item = styled.div``;

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
          .map((item) => (
            <Item key={item.id}>{item.name}</Item>
          ))}
      </Preview>
    </Collection>
  );
};

export default CollectionPreview;
