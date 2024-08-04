import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store/types";
import { useLazyGetReposListQuery } from "../../../features/repositories-list/api";
import { transformSearchTerm } from "../../../shared/helpers/deleteSymbolTerm";

export function profilePageService() {
  const limitPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const user = useSelector((state: RootState) => state.searchUser.user);
  const userSearchTerm = useSelector(
    (state: RootState) => state.searchUser.searchUser
  );
  const isErrorSearchUser = useSelector(
    (state: RootState) => state.searchUser.isError
  );
  const isLoadingSearchUser = useSelector(
    (state: RootState) => state.searchUser.isLoading
  );

  const [
    fetchRepos,
    { data: repos, isError: isErrorRepos, isLoading, isFetching },
  ] = useLazyGetReposListQuery();

  useEffect(() => {
    setCurrentPage(1);
  }, [user]);

  useEffect(() => {
    if (userSearchTerm) {
      fetchRepos({
        username: transformSearchTerm(userSearchTerm),
        currentPage,
        perPage: limitPerPage,
      });
    }
  }, [user, currentPage]);

  return {
    fetchRepos,
    isLoading,
    isFetching,
    repos,
    isErrorRepos,
    user,
    isLoadingSearchUser,
    isErrorSearchUser,
    currentPage,
    setCurrentPage,
    limitPerPage,
  };
}
