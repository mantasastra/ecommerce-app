import React, { Component } from "react";
import styled from "@emotion/styled";
import { DirectoryProps, DirectoryState, Sections } from "custom-types";

import MenuItem from "../menuItem/MenuItem";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Directory extends Component<DirectoryProps, DirectoryState> {
  constructor(props?: DirectoryProps) {
    super(props);

    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id: 2,
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id: 3,
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id: 4,
          title: "women's",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
        },
        {
          id: 5,
          title: "men's",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
        },
      ] as Sections,
    } as DirectoryState;
  }

  render() {
    return (
      <DirectoryMenu>
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem
            key={id as number}
            title={title as String}
            imageUrl={imageUrl as String}
            size={size}
          />
        ))}
      </DirectoryMenu>
    );
  }
}

export default Directory;
