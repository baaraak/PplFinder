import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Chip,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import Spinner from "components/Spinner";
import UserCard from "components/UserCard";
import { Countries } from "services/countries";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";
import * as S from "./style";

const UserList = ({
  users,
  isLoading,
  fetchUsers,
  resetUsers,
  favorites,
  toggleFavorite,
}) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [infiniteRef] = useInfiniteScroll({
    loading: isLoading,
    onLoadMore: () => fetchUsers(selectedCountries),
  });

  const handleOnClickCountry = (event) => {
    const { value } = event.target;

    setSelectedCountries(value);
    resetUsers();
  };

  useEffect(() => {
    fetchUsers(selectedCountries);
  }, [selectedCountries]);

  return (
    <S.UserList>
      <CountriesSelect
        selectedCountries={selectedCountries}
        onChange={handleOnClickCountry}
      />
      <S.List>
        {users.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            isFavorited={!!favorites.find((d) => d.email === user.email)}
            onFavorite={() => toggleFavorite(user)}
          />
        ))}
        <S.SpinnerWrapper ref={infiniteRef}>
          <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
        </S.SpinnerWrapper>
      </S.List>
    </S.UserList>
  );
};

const CountriesSelect = ({ selectedCountries, onChange }) => {
  return (
    <S.FormControlStyled>
      <InputLabel id="demo-simple-select-label">Filter by country</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        multiple
        placeholder="Select Countries"
        value={selectedCountries}
        onChange={onChange}
        input={<Input />}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={Countries.find((c) => c.code === value).name} />
            ))}
          </div>
        )}
      >
        {Countries.map((name) => (
          <MenuItem key={name.code} value={name.code}>
            <Checkbox checked={selectedCountries.includes(name.code)} />
            <ListItemText primary={name.name} />
          </MenuItem>
        ))}
      </Select>
    </S.FormControlStyled>
  );
};

export default UserList;
