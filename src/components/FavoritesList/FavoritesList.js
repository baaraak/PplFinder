import React from "react";
import UserCard from "components/UserCard";
import * as S from "./style";

const FavoritesList = ({ favorites, toggleFavorite }) => {
  return (
    <S.UserList>
      <S.List>
        {favorites.map((user, index) => {
          return (
            <UserCard
              key={index}
              user={user}
              isFavorited
              onFavorite={() => toggleFavorite(user)}
            />
          );
        })}
      </S.List>
    </S.UserList>
  );
};

export default FavoritesList;
