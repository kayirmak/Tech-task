import { useDispatch } from "react-redux";
import { useLazyGetProfileByUsernameQuery } from "../../../features/profile/api";
import { clearFields, setUser, setUserError } from "../api/searchSlice";
import { useEffect } from "react";

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
      trigger(e.target.value);
    }
    if (e.target.value === "") {
      dispatch(clearFields());
    }
  };

  const keyUp = { onKeyUp: handleSearchInput };

  return { keyUp, data };
}

export default HeaderService;
