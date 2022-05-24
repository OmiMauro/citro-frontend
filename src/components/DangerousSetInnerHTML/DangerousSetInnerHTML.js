import React from 'react'

const DangerousSetInnerHTML = ({ content }) => {
	return <span dangerouslySetInnerHTML={{ __html: content }} />
}

export default DangerousSetInnerHTML
