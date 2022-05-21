import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { useFavoritesList } from "hooks/useFavoritesList";
import FavoritesList from "components/FavoritesList";
import Title from "components/Title";
import Layout from "components/Layout";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavoritesList();

  return (
    <Layout>
      <Title>Your Favorites</Title>
      <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />
    </Layout>
  );
};

export default Favorites;
