import { DirectoryActionTypes, DirectoryState } from "custom-types";

const initState: DirectoryState = {
  sections: [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers",
    },
    {
      id: 4,
      title: "women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      linkUrl: "shop/womens",
      size: "large",
    },
    {
      id: 5,
      title: "men's",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkUrl: "shop/mens",
      size: "large",
    },
  ],
};

const directoryReducer = (state = initState, action: DirectoryActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
