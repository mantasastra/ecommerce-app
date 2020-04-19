import React, { Component } from "react";
import styled from "@emotion/styled";
import { DirectoryProps, DirectoryState, Sections } from "custom-types";
import DirectoryData from "../../data/directoryData";

import MenuItem from "../menuItem/MenuItem";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Directory extends Component<DirectoryProps, DirectoryState> {
  state = {
    sections: DirectoryData as Sections,
  } as DirectoryState;

  render() {
    return (
      <DirectoryMenu>
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id as number} {...sectionProps} />
        ))}
      </DirectoryMenu>
    );
  }
}

export default Directory;
