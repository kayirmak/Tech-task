import notFound_icon from "./assets/not-found_icon.svg";

function NotFound() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[#808080] text-[22px] leading-7 ">
      <img className="w-16 h-16" src={notFound_icon} />
      <p className="text-center mt-11">User not found</p>
    </div>
  );
}

export default NotFound;
