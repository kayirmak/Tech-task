import Profile from "../../../features/profile/ui";
import RepositoriesList from "../../../features/repositories-list/ui";
import Pagination from "../../../shared/pagination";
import NotFound from "../../../shared/not-found";
import InitialSearch from "../../../shared/initial-search";
import EmptyList from "../../../shared/empty-list";
import { profilePageService } from "../model";
import Spinner from "../../../shared/spinner";

function ProfilePage() {
  const {
    repos,
    isErrorRepos,
    isFetching,
    user,
    isErrorSearchUser,
    isLoadingSearchUser,
    currentPage,
    setCurrentPage,
    limitPerPage,
  } = profilePageService();

  if (isErrorSearchUser) return <NotFound />;
  if (isLoadingSearchUser) return <Spinner />;
  if (!user && !isErrorSearchUser) return <InitialSearch />;

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-x-[85px] px-14 mt-7">
      <div className="justify-self-end">
        <Profile user={user} />
      </div>
      <div className="relative min-w-[877px] w-full flex flex-col justify-self-start gap-y-6 items-end">
        {isFetching ? (
          <Spinner />
        ) : isErrorRepos || !repos?.length ? (
          <EmptyList />
        ) : (
          <>
            <RepositoriesList repos={repos} reposLength={user?.public_repos} />
            <Pagination
              totalPages={Math.ceil(user?.public_repos! / 4)}
              itemsLimit={limitPerPage}
              itemsPerPage={repos?.length}
              itemsLength={user?.public_repos}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
