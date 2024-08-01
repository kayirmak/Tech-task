import TextField from "../../shared/textfield";
import github_icon from "./assets/github_icon.svg";

function Header() {
  return (
    <div className="flex gap-x-6 bg-[#0064EB] py-4 pl-10">
      <img src={github_icon} alt="github" />
      <TextField width="500" />
    </div>
  );
}

export default Header;
