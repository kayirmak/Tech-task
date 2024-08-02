import Profile from "./features/profile/ui";
import RepositoriesList from "./features/repositories-list/ui";
import Pagination from "./shared/pagination";
import Header from "./widgets/header";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[1fr_2fr] gap-x-[85px] px-14 mt-7">
        <div className="justify-self-end">
          <Profile />
        </div>
        <div className="flex flex-col justify-self-start gap-y-6 items-end">
          <RepositoriesList />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default App;
