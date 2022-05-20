import React from "react";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import { useFavoritesList } from "hooks/useFavoritesList";
import Layout from "components/Layout";
import Header from "components/Header";

const Home = (props) => {
  const { users, isLoading, fetchUsers, resetUsers } = usePeopleFetch();
  const { favorites, toggleFavorite } = useFavoritesList();

  return (
    <Layout>
      <Header>PplFinder</Header>

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
