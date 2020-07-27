import React from "react";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { RootState, Sections } from "custom-types";

import MenuItem from "../menuItem/MenuItem";
import { selectDirectorySection } from "../../store/selectors/selectors";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface DirectorySelectors {
  sections: Sections;
}

const mapStateToProps = createStructuredSelector<RootState, DirectorySelectors>(
  {
    sections: selectDirectorySection,
  }
);

const connector = connect(mapStateToProps);

type DirectoryProps = ConnectedProps<typeof connector>;

const Directory: React.FC<DirectoryProps> = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenu>
  );
};

export default connector(Directory);
