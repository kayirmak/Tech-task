import { useDispatch } from "react-redux";
import { useLazyGetProfileByUsernameQuery } from "../../../features/profile/api";
import {
  clearFields,
  searchUserTerm,
  setUser,
  setUserError,
} from "../api/searchSlice";
import { useEffect } from "react";
import { transformSearchTerm } from "../../../shared/helpers/deleteSymbolTerm";

function HeaderService() {
  const [trigger, { data, isError }] = useLazyGetProfileByUsernameQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      dispatch(setUserError(isError));
    }
  }, [isError]);

  const handleSearchInput = (e: any) => {
    if (e.code === "Enter" && e.target.value !== "") {
      trigger(transformSearchTerm(e.target.value));
    }
    if (e.target.value === "") {
      dispatch(clearFields());
    }
  };

  const changeSearchInput = (e: any) =>
    dispatch(searchUserTerm(e.target.value));

  const keyUp = { onKeyUp: handleSearchInput, onChange: changeSearchInput };

  return { keyUp, data };
}

export default HeaderService;
