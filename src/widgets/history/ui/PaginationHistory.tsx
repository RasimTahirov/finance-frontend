import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

interface PaginationHistoryProps {
  currentPage: number
  totalPage: number
  onChangePage: (page: number) => void
}

const PaginationHistory: React.FC<PaginationHistoryProps> = ({
  currentPage,
  totalPage,
  onChangePage,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex justify-center items-center gap-2.5">
      <button
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
        className="pagination"
      >
        <ChevronLeftIcon className="w-6" />
      </button>
      {pageNumbers.map((page) => (
        <button
          disabled={currentPage === page}
          key={page}
          onClick={() => onChangePage(page)}
          className="!text-lg pagination"
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPage}
        onClick={() => onChangePage(currentPage + 1)}
        className="pagination"
      >
        <ChevronRightIcon className="w-6" />
      </button>
    </div>
  )
}

export default PaginationHistory
