import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers(countries = [], reset = false) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?results=15&page=${page}^=&nat=${countries.join(",")}`
    );
    setIsLoading(false);
    setUsers(users.concat(response.data.results));
    setPage(page + 1);
  }

  const reset = () => {
    setUsers([]);
    setPage(1);
  };

  return { users, isLoading, fetchUsers, resetUsers: reset };
};
