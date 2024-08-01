import search_icon from "./assets/search_icon.svg";

function TextField({ width }: { width?: string }) {
  return (
    <div className="relative">
      <img className="absolute left-5 top-3" src={search_icon} />
      <input type="text" className={`w-[${width}px] h-10 pl-11 rounded-md`} />
    </div>
  );
}

export default TextField;