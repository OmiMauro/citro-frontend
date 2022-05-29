import './styles.css'

const Tables = () => {
	return (
		<section>
			<div className='d-md-flex'>
				<div id='topnavbar'>
					<div className='topnav mb-3'>
						<div className='d-flex px-1'>
							<a href='#home' className='active'>
								merchants
							</a>{' '}
							<a href='#news'>users</a>{' '}
							<a href='#contact'>
								company<span className='px-1'>&</span>mid
							</a>{' '}
							<a href='#contact'>account</a>{' '}
						</div>
					</div>
					<div className='d-flex align-items-center mb-3 px-md-3 px-2'>
						<span className='text-uppercase fs13 fw-bolder pe-3'>
							search<span className='ps-1'>by</span>
						</span>
						<form className='example d-flex align-items-center'>
							<input
								type='text'
								placeholder='Type in Company Name Or Mid id'
								name='search'
							/>{' '}
							<button type='submit'>
								<i className='fa fa-search'></i>
							</button>{' '}
						</form>
					</div>
					<div className='table-responsive px-2'>
						<table className='table table-borderless'>
							<thead>
								<tr>
									<th scope='col'>
										COMPANY<span>ID</span>
									</th>
									<th scope='col'>COMPANY</th>
									<th scope='col'>MID</th>
									<th scope='col'>
										BANK<span className='ps-1'>NAME</span>
									</th>
									<th scope='col'>CUR</th>
									<th className='text-center' scope='col'>
										3DS
									</th>
									<th className='text-center' scope='col'>
										ACTIVE
									</th>
									<th className='text-center' scope='col'>
										ACTION
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className='bg-blight'>235</span>
									</td>
									<td>
										<span className='bg-bdark'>
											ABC<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1343</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Faster<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='bg-blight'>236</span>
									</td>
									<td>
										<span className='bg-bdark'>
											BCE<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1298</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Secure<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='bg-blight'>237</span>
									</td>
									<td>
										<span className='bg-bdark'>
											CDE<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1313</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Secure<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-times'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='bg-blight'>235</span>
									</td>
									<td>
										<span className='bg-bdark'>
											DEF<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1323</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Secure<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-times'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='bg-blight'>235</span>
									</td>
									<td>
										<span className='bg-bdark'>
											FEG<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1443</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Secure<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-times'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='bg-blight'>237</span>
									</td>
									<td>
										<span className='bg-bdark'>
											GFR<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1943</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Faster<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-times'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='bg-blight'>235</span>
									</td>
									<td>
										<span className='bg-bdark'>
											ABC<span className='ps-1'>LOANS</span>
										</span>
									</td>
									<td>
										<span className='bg-blight'>1343</span>
									</td>
									<td>
										<span className='bg-bdark'>
											Faster<span>Trading</span>
										</span>
									</td>
									<td>
										<span className='bg-bdark'>GBP</span>
									</td>
									<td className='text-center px-0'>
										<span className='fas fa-times'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-check'></span>
									</td>
									<td className='text-center'>
										<span className='fas fa-ellipsis-h'></span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Tables
