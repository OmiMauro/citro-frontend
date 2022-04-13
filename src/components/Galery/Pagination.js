import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageChange, pageOffset }) => {
	return (
		<div>
			<ReactPaginate
				pageCount={5}
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
				pageRangeDisplayed={5}
				onPageChange={handlePageChange}
				containerClassName='pagination'
				activeClassName='active'
				forcePage={pageOffset}
			/>
		</div>
	)
}

export default Pagination
