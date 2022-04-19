import React from 'react'
import Lightbox from 'react-image'

const SigleImage = ({ images, index, setIndex }) => {
	return (
		<div>
			<Lightbox
				key={index}
				images={images[index].url}
				nextSrc={images[(index + 1) % images.length].url}
				prevSrc={images[(index + images.length - 1) % images.length].url}
				onClose={() => setIndex(-1)}
				onClickPrev={() =>
					setIndex((index + images.length - 1) % images.length)
				}
				onClickNext={() => setIndex((index + 1) % images.length)}
			/>
		</div>
	)
}

export default SigleImage
