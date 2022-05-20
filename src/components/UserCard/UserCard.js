import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Text from "components/Text";
import * as S from "./style";

const UserCard = ({ user, onFavorite, isFavorited }) => {
  return (
    <S.User>
      <S.UserPicture src={user?.picture.large} alt="" />
      <S.UserInfo>
        <Text size="22px" bold>
          {user?.name.title} {user?.name.first} {user?.name.last}
        </Text>
        <Text size="14px">{user?.email}</Text>
        <Text size="14px">
          {user?.location.street.number} {user?.location.street.name}
        </Text>
        <Text size="14px">Country: {user?.location.country}</Text>
      </S.UserInfo>
      <S.IconButtonWrapper isVisible={isFavorited}>
        <IconButton onClick={onFavorite}>
          <FavoriteIcon color="error" />
        </IconButton>
      </S.IconButtonWrapper>
    </S.User>
  );
};

export default UserCard;
