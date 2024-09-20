// src/components/PaginationControls.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  setPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onNext,
  onPrev,
  hasPrev,
  setPageNumber,
}) => {
  return (
    <div className="flex justify-center mt-6 mb-2">
      <button
        disabled={currentPage === 0}
        onClick={() => setPageNumber(0)}
        className={`px-4 py-2 mx-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition
            ${!hasPrev ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Home
      </button>
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`px-4 py-2 mx-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${
          !hasPrev ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Prev
      </button>

      {currentPage > 2 && (
        <span
          onClick={() => setPageNumber(currentPage - 2)}
          className="cursor-pointer px-4 py-2 mx-2 text-black bg-gray-100 border"
        >
          {currentPage - 1}
        </span>
      )}
      {currentPage > 0 && (
        <span
          onClick={() => setPageNumber(currentPage - 1)}
          className="cursor-pointer px-4 py-2 mx-2 text-black bg-gray-100 border"
        >
          {currentPage}
        </span>
      )}
      <span
        onClick={() => setPageNumber(currentPage)}
        className="cursor-pointer px-4 py-2 mx-2 text-white bg-blue-500 border"
      >
        {currentPage + 1}
      </span>
      <span
        onClick={() => setPageNumber(currentPage + 1)}
        className="cursor-pointer px-4 py-2 mx-2 text-black bg-gray-100 border"
      >
        {currentPage + 2}
      </span>
      {!(currentPage > 2) && (
        <span
          onClick={() => setPageNumber(currentPage + 2)}
          className="cursor-pointer px-4 py-2 mx-2 text-black bg-gray-100 border"
        >
          {currentPage + 3}
        </span>
      )}

      {!(currentPage > 0) && (
        <span
          onClick={() => setPageNumber(currentPage + 3)}
          className="cursor-pointer px-4 py-2 mx-2 text-black bg-gray-100 border"
        >
          {currentPage + 4}
        </span>
      )}

      <button
        onClick={onNext}
        className="px-4 py-2 mx-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
