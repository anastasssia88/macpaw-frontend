import { useContext } from "react";
import { DogContext } from "./DogContext";

const HandleVote = () => {
  const getTime = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    let time = h + ":" + m;
    return time;
  };

  const { likeKey, favKey, disKey, logKey, activeKey } = useContext(DogContext); 
  const [ liked, addToLiked] = likeKey;
  const [favorites, addToFav] = favKey;
  const [ disliked, addToDisliked] = disKey;
  const [ log , setLog] = logKey;
  const [ active, setActive] = activeKey;

  const handleClick = (type, randomDog) => {
    let time = getTime();
    if (type === "like") {
      addToLiked((prevLiked) => [...prevLiked, randomDog]);
      setLog((prevLog) => [
        ...prevLog,
        {
          id: randomDog.id,
          content: "was added to Likes",
          type: "like",
          time: time,
        },
      ]);
    } else if (type === "dis") {
      addToDisliked((prevLog) => [...prevLog, randomDog]);
      setLog((prevLog) => [
        ...prevLog,
        {
          id: randomDog.id,
          content: "was added to Dislikes",
          type: "dis",
          time: time,
        },
      ]);
    } else {
      if (favorites.indexOf(randomDog) === -1) {
        setActive(true);
        addToFav((prevFavorites) => [...prevFavorites, randomDog]);
        setLog((prevLog) => [
          ...prevLog,
          {
            id: randomDog.id,
            content: "was added to Favorites",
            type: "fav",
            time: time,
          },
        ]);
      } else {
        setActive(false);
        favorites.pop();
        setLog((prevLog) => [
          ...prevLog,
          {
            id: randomDog.id,
            content: "was removed from Favourites",
            type: "",
            time: time,
          },
        ]);
      }
    }
  };

  const favFromGallery = (dog) => {
    if (favorites.indexOf(dog) === -1) {
      setActive(true);
      addToFav((prevFavorites) => [...prevFavorites, dog]);
      console.log("Added to Favs");
    } else {
      setActive(false);
      let index = favorites.indexOf(dog);
      let newFav = [...favorites];
      newFav.splice(index, 1);
      addToFav(newFav);
      console.log("Removed from Favs");
    }
  };

  return { handleClick, getTime, favFromGallery };
};

export default HandleVote;
