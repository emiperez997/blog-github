export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const onPageChange = (page) => {
    console.log("Pagination: ", page);

    setCurrentPage(page);
  };

  const styles = {
    active: "bg-blue-800 text-white",
    inactive: "cursor-not-allowed bg-gray-700 text-white",
    default: "p-2 rounded-lg",
  };

  return (
    <div class="w-80 sm:w-[550px] flex flex-row justify-between items-center py-3 mb-2">
      <button
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        class={`${currentPage === 1 ? styles.inactive : styles.active} ${
          styles.default
        }`}
      >
        Anterior
      </button>

      <span>
        {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        class={`${
          currentPage === totalPages ? styles.inactive : styles.active
        } ${styles.default}`}
      >
        Siguiente
      </button>
    </div>
  );
};
