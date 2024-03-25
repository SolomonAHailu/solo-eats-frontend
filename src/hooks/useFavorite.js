// import React, { createContext, useContext, useEffect, useState } from "react";

// const FavoriteContext = createContext([]);
// const FAVORITE_KEY = "favorite";
// const EMPTY_FAVORITE = {
//   items: [],
//   totalCount: 0,
// };

// export default function FavoriteProvider({ children }) {
//   const initFavorite = getFavoriteFromLocalStorage();
//   const [favoriteItems, setFavoriteItems] = useState(initFavorite.items);
//   const [totalCount, setTotalCount] = useState(initFavorite.totalCount);

//   useEffect(() => {
//     setTotalCount();

//     localStorage.setItem(
//       FAVORITE_KEY,
//       JSON.stringify({ items: favoriteItems, totalCount: totalCount })
//     );
//   }, [favoriteItems]);

//   function getFavoriteFromLocalStorage() {
//     const storedFavorite = localStorage.getItem(FAVORITE_KEY);

//     return storedFavorite ? JSON.parse(storedFavorite) : EMPTY_FAVORITE;
//   }

//   const removeFromFavorite = (foodId) => {
//     const filteredFavoriteItems = favoriteItems.filter(
//       (item) => item.food.id !== foodId
//     );
//     setFavoriteItems(filteredFavoriteItems);
//     setTotalCount(totalCount - 1);
//   };

//   const addToFavorite = (food) => {
//     const favoriteItem = favoriteItems.find((item) => item.food.id === food.id);
//     if (favoriteItem) {
//       const updatedFavoriteItems = [...favoriteItems];
//       setFavoriteItems(updatedFavoriteItems);
//     } else {
//       setFavoriteItems([
//         ...favoriteItems,
//         { food, quantity: 1, price: food.price },
//       ]);
//     }
//   };

//   const clearFavorite = () => {
//     localStorage.removeItem(FAVORITE_KEY);
//     const { items } = EMPTY_FAVORITE;
//     setFavoriteItems(items);
//     setTotalCount(0);
//   };

//   return (
//     <FavoriteContext.Provider
//       value={{
//         favorite: { items: favoriteItems, totalCount: totalCount },
//         removeFromFavorite,
//         addToFavorite,
//         clearFavorite,
//       }}
//     >
//       {children}
//     </FavoriteContext.Provider>
//   );
// }

// export const useFavorite = () => useContext(FavoriteContext);

import React, { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext(null);
const FAVORITE_KEY = "favorite";
const EMPTY_FAVORITE = {
  items: [],
  totalCount: 0,
};

export default function FavoriteProvider({ children }) {
  const initFavorite = getFavoriteFromLocalStorage();
  const [favoriteItems, setFavoriteItems] = useState(initFavorite.items);
  const [totalCount, setTotalCount] = useState(initFavorite.totalCount);

  useEffect(() => {
    const totalCount = favoriteItems.length;
    setTotalCount(totalCount);

    localStorage.setItem(
      FAVORITE_KEY,
      JSON.stringify({ items: favoriteItems, totalCount })
    );
  }, [favoriteItems]);

  function getFavoriteFromLocalStorage() {
    const storedFavorite = localStorage.getItem(FAVORITE_KEY);

    return storedFavorite ? JSON.parse(storedFavorite) : EMPTY_FAVORITE;
  }

  const removeFromFavorite = (foodId) => {
    const filteredFavoriteItems = favoriteItems.filter(
      (item) => item.food.id !== foodId
    );
    setFavoriteItems(filteredFavoriteItems);
  };

  const addToFavorite = (food) => {
    const favoriteItem = favoriteItems.find((item) => item.food.id === food.id);
    if (!favoriteItem) {
      setFavoriteItems([
        ...favoriteItems,
        { food, quantity: 1, price: food.price },
      ]);
    }
  };

  const clearFavorite = () => {
    localStorage.removeItem(FAVORITE_KEY);
    const { items } = EMPTY_FAVORITE;
    setFavoriteItems(items);
    setTotalCount(0);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorite: { items: favoriteItems, totalCount: totalCount },
        removeFromFavorite,
        addToFavorite,
        clearFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);
