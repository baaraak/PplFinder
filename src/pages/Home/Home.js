import React from "react";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import { useFavoritesList } from "hooks/useFavoritesList";
import Layout from "components/Layout";
import Title from "components/Title";

const Home = (props) => {
  const { users, isLoading, fetchUsers, resetUsers } = usePeopleFetch();
  const { favorites, toggleFavorite } = useFavoritesList();

  return (
    <Layout>
      <Title>PplFinder</Title>

      <UserList
        users={users}
        isLoading={isLoading}
        fetchUsers={fetchUsers}
        resetUsers={resetUsers}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </Layout>
  );
};

export default React.memo(Home);
