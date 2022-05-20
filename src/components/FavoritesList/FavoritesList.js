import React from "react";
import UserCard from "components/UserCard";
import * as S from "./style";

const FavoritesList = ({ favorites, toggleFavorite }) => {
  return (
    <S.UserList>
      <S.List>
        {favorites.length ? (
          favorites.map((user, index) => {
            return (
              <UserCard
                key={index}
                user={user}
                isFavorited
                onFavorite={() => toggleFavorite(user)}
              />
            );
          })
        ) : (
          <S.Empty>You don't have any favorites yet.</S.Empty>
        )}
      </S.List>
    </S.UserList>
  );
};

export default FavoritesList;
