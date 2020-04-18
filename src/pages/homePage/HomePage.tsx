import React from "react";
import styled from "@emotion/styled";

import DirectoryMenu from "../../components/directory/Directory";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage: React.FunctionComponent<Object> = () => {
  return (
    <Home>
      <DirectoryMenu />
    </Home>
  );
};

export default HomePage;
