import Profile from "./features/profile/ui";
import RepositoriesList from "./features/repositories-list/ui";
import Header from "./widgets/header";

function App() {
  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <div className="flex gap-x-[85px] justify-center mt-7">
        <Profile />
        <RepositoriesList />
      </div>
    </div>
  );
}

export default App;
