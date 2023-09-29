import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealsids, setFavoriteMealstIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealstIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealstIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealsids,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
