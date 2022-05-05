import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageChange, total, pages }) => {
	return (
		<div>
			<ReactPaginate
				pageCount={+pages}
				previousLabel='Anterior'
				nextLabel='Siguiente'
				pageClassName='page-item'
				pageLinkClassName='page-link'
				previousClassName='page-item'
				previousLinkClassName='page-link'
				nextClassName='page-item'
				nextLinkClassName='page-link'
				breakLabel='...'
				breakClassName='page-item'
				breakLinkClassName='page-link'
				marginPagesDisplayed={2}
				pageRangeDisplayed={pages}
				onPageChange={handlePageChange}
				containerClassName='pagination'
				activeClassName='active'
			/>
		</div>
	)
}

export default Pagination
