import search_icon from "./assets/search_icon.svg";

function InitialSearch() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[#808080] text-[22px] leading-7 ">
      <img className="w-16 h-16" src={search_icon} />
      <p className="text-center mt-11">
        Start with searching <br /> a GitHub user
      </p>
    </div>
  );
}

export default InitialSearch;
