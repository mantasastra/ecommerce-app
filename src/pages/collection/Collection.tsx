import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "@emotion/styled";
import { Collection, RootState } from "custom-types";

import CollectionItem from "../../components/collectionItem/CollectionItem";
import { selectCollection } from "../../store/selectors/selectors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 2rem 30px 2rem;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  .collection-item {
    margin-bottom: 30px;
  }
`;

const mapStateToProps = (state: RootState, ownProps: CollectionProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const connector = connect(mapStateToProps);

interface CollectionProps {
  match: {
    params: {
      collectionId: Collection;
    };
  };
}

type CollectionPageProps = ConnectedProps<typeof connector> & CollectionProps;

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
  const { title, items } = collection!;
  return (
    <Container>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

export default connector(CollectionPage);
