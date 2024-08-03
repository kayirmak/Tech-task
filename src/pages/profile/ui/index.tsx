import { useSelector } from "react-redux";
import Profile from "../../../features/profile/ui";
import RepositoriesList from "../../../features/repositories-list/ui";
import Pagination from "../../../shared/pagination";
import { RootState } from "../../../shared/store/types";
import NotFound from "../../../shared/not-found";
import InitialSearch from "../../../shared/initial-search";
import { useState } from "react";

function ProfilePage() {
  const user = useSelector((state: RootState) => state.searchUser.user);
  const isError = useSelector((state: RootState) => state.searchUser.isError);

  const [currentPage, setCurrentPage] = useState(1);

  if (isError) return <NotFound />;
  if (!user && !isError) return <InitialSearch />;

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-x-[85px] px-14 mt-7">
      <div className="justify-self-end">
        <Profile user={user} />
      </div>
      <div className="flex flex-col justify-self-start gap-y-6 items-end">
        <RepositoriesList />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default ProfilePage;
