import React from 'react'
/* import Lightbox from 'react-image-lightbox' */

const SigleImage = ({ images, index, setIndex }) => {
	return (
		<div>
			{/* <Lightbox
				enableZoom={false}
				clickOutsideToClose={false}
				mainSrc={images[index].url}
				nextSrc={images[(index + 1) % images.length].url}
				prevSrc={images[(index + images.length - 1) % images.length].url}
				imageTitle={index + 1 + '/' + images.length}
				onCloseRequest={() => setIndex(-1)}
				onMovePrevRequest={() =>
					setIndex((index + images.length - 1) % images.length)
				}
				onMoveNextRequest={() => setIndex((index + 1) % images.length)}
			/> */}
		</div>
	)
}

export default SigleImage
