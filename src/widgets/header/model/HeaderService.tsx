import { useDispatch } from "react-redux";
import { useLazyGetProfileByUsernameQuery } from "../../../features/profile/api";
import {
  clearFields,
  searchUserTerm,
  getSearchUserStart,
  getSearchUserSuccess,
  getSearchUserFailure,
} from "../api/searchSlice";
import { useEffect } from "react";
import { transformSearchTerm } from "../../../shared/helpers/deleteSymbolTerm";

function HeaderService() {
  const [trigger, { data, isError }] = useLazyGetProfileByUsernameQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getSearchUserSuccess(data));
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      dispatch(getSearchUserFailure(isError));
    }
  }, [isError]);

  const handleSearchInput = async (e: any) => {
    try {
      if (e.code === "Enter" && e.target.value !== "") {
        dispatch(getSearchUserStart());
        await trigger(transformSearchTerm(e.target.value));
      }
      if (e.target.value === "") {
        dispatch(clearFields());
      }
    } catch (error) {}
  };

  const changeSearchInput = (e: any) =>
    dispatch(searchUserTerm(e.target.value));

  const keyUp = { onKeyUp: handleSearchInput, onChange: changeSearchInput };

  return { keyUp, data };
}

export default HeaderService;
