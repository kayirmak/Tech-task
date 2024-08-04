import TextField from "../../shared/textfield";
import github_icon from "./assets/github_icon.svg";
import HeaderService from "./model/HeaderService";

function Header() {
  const { keyUp } = HeaderService();

  return (
    <div className="flex gap-x-6 bg-[#0064EB] py-4 pl-10">
      <img src={github_icon} alt="github" />
      <TextField classname="w-125" {...keyUp} />
    </div>
  );
}

export default Header;
