import arrow_icon from "./assets/arrow-right.svg";

function Pagination({
  currentPage = 1,
  totalPages = 5,
  itemsLimit = 4,
  itemsLength = 20,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages?: number;
  itemsLimit?: number;
  itemsLength?: number;
  setCurrentPage: any;
}) {
  const changePage = (number: number | ((page: number) => void)) => {
    if (currentPage === number) return;
    setCurrentPage(number);
  };

  const onPageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    changePage((currentPage) => currentPage - 1);
  };

  const onNextPageClick = () => {
    changePage((currentPage) => currentPage + 1);
  };

  const generatePages = () => {
    let isPageNumberOutOfRange: boolean;

    const pageNumbers = [...new Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      const isPageNumberFirst = pageNumber === 1;
      const isPageNumberLast = pageNumber === totalPages;
      const isCurrentPageWithinTwoPageNumbers =
        Math.abs(pageNumber - currentPage) <= 1;

      if (
        isPageNumberFirst ||
        isPageNumberLast ||
        isCurrentPageWithinTwoPageNumbers
      ) {
        isPageNumberOutOfRange = false;
        return (
          <button
            key={pageNumber}
            className={`${
              pageNumber === currentPage && "bg-[#0064EB] text-white"
            } py-1 px-[6px] rounded-[3px]`}
            onClick={() => onPageNumberClick(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      }
      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return <div key={pageNumber}>...</div>;
      }

      return null;
    });
    return pageNumbers;
  };

  const itemsCount = () => {
    return currentPage === 1
      ? `1-${itemsLimit}`
      : `${(currentPage - 1) * itemsLimit + 1}-${
          (currentPage - 1) * itemsLimit + itemsLimit
        }`;
  };

  return (
    <div className="flex text-[#808080] gap-x-6 items-center">
      <div>
        <span>{itemsCount()}</span> of <span>{itemsLength}</span> items
      </div>
      <div className="flex gap-x-[26px] items-center">
        <button onClick={onPreviousPageClick} disabled={currentPage === 1}>
          <img className="rotate-180" src={arrow_icon} />
        </button>
        <div className="flex gap-x-4 items-center">{generatePages()}</div>
        <button onClick={onNextPageClick} disabled={currentPage === totalPages}>
          <img className="" src={arrow_icon} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
