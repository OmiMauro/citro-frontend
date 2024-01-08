import React from 'react'

const DangerousSetInnerHTML = ({ content, className }) => {
	return (
		<span dangerouslySetInnerHTML={{ __html: content }} className={className} />
	)
}

export default DangerousSetInnerHTML
