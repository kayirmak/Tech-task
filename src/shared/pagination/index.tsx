import arrow_icon from "./assets/arrow-right.svg";

function Pagination() {
  return (
    <div className="flex text-[#808080] gap-x-6 items-center">
      <div>
        <span>5-8</span> of <span>249</span> items
      </div>
      <div className="flex gap-x-[26px] items-center">
        <img className="rotate-180" src={arrow_icon} />
        <div className="flex gap-x-4 items-center">
          <span>1</span>
          <span className="py-1 px-[6px] text-white rounded-[3px] bg-[#0064EB]">
            2
          </span>
          <span>3</span>
          <span>...</span>
          <span>10</span>
        </div>
        <img className="" src={arrow_icon} />
      </div>
    </div>
  );
}

export default Pagination;
