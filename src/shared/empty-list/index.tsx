import emptyList_icon from "./assets/empty-list_icon.svg";

function EmptyList() {
  return (
    <div className="justify-self-center min-w-[877px] flex flex-col items-center m-auto text-[#808080] text-[22px] leading-7 ">
      <img className="w-16 h-16" src={emptyList_icon} />
      <p className="text-center mt-11">Repository list is empty</p>
    </div>
  );
}

export default EmptyList;
