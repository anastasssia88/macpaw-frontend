import React, { useState, createContext } from "react";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [dogs, setDogs] = useState({});
  const [chunked, setChunked] = useState([]);

  // filters
  const [order, setOrder] = useState("rand");
  const [type, setType] = useState("static");
  const [currBreed, setCurrBreed] = useState({});
  const [limit, setLimit] = useState(5);

  // dynamic titles
  const [orderTitle, setOrderTitle] = useState("Random");
  const [typeTitle, setTypeTitle] = useState("Static");
  const [currBreedTitle, setCurrBreedTitle] = useState("None");
  const [limitTitle, setLimitTitle] = useState("5 items per page");

  return (
    <GalleryContext.Provider
      value={{
        orderTitleKey: [orderTitle, setOrderTitle],
        typeTitleKey: [typeTitle, setTypeTitle],
        currBreedTitleKey: [currBreedTitle, setCurrBreedTitle],
        limitTitleKey: [limitTitle, setLimitTitle],

        orderKey: [order, setOrder],
        typeKey: [type, setType],
        currBreedKey: [currBreed, setCurrBreed],
        limitKey: [limit, setLimit],

        dogsKey: [dogs, setDogs],
        chunkedKey: [chunked, setChunked],
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
