import { DirectoryState } from "custom-types";

const initState: DirectoryState = {
  sections: [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "sneakers",
    },
    {
      id: 4,
      title: "women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      linkUrl: "womens",
      size: "large",
    },
    {
      id: 5,
      title: "men's",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkUrl: "mens",
      size: "large",
    },
  ],
};

const directoryReducer = (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
