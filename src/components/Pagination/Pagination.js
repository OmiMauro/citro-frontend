import ReactPaginate from 'react-paginate'

const Pagination = ({
	handlePageChange,
	pages = 0,
	page = 1,
	itemsPerPage = 20,
}) => {
	return (
		<div>
			<ReactPaginate
				pageCount={+pages}
				pageRangeDisplayed={itemsPerPage}
				previousLabel="Anterior"
				nextLabel="Siguiente"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				marginPagesDisplayed={2}
				onPageChange={handlePageChange}
				containerClassName="pagination"
				activeClassName="active"
				forcePage={page - 1}
			/>
		</div>
	)
}

export default Pagination
