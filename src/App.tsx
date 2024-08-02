import Profile from "./features/profile/ui";
import RepositoriesList from "./features/repositories-list/ui";
import Pagination from "./shared/pagination";
import Header from "./widgets/header";

function App() {
  return (
    <>
      <Header />
      <div className="flex gap-x-[85px] justify-center mt-7">
        <Profile />
        <div className="flex flex-col gap-y-6 items-end">
          <RepositoriesList />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default App;
