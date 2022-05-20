import { useState, useEffect } from "react";
import axios from "axios";
import { LocalStorage } from "services/localStorage";

export const useFavoritesList = () => {
  const [favorites, setFavorites] = useState(() => LocalStorage.get("favorited") || []);

  async function toggleFavorite(user) {
    const isExist = favorites.find((f) => f.id === user.id);
    if (isExist) {
      setFavorites(favorites.filter((f) => f.id !== user.id));
    } else {
      setFavorites([...favorites, user]);
    }
  }

  useEffect(() => {
    LocalStorage.set("favorited", favorites);
  }, [favorites]);

  return { favorites, toggleFavorite };
};
