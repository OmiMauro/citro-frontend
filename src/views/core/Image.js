import React from 'react'
const Image = ({ data }) => {
  console.log('from props', data)
  return <div>{data}</div>
}
export default Image
/*  <img src={url} className='img-thumbnail' key={url}>
      {' '}
    </img> */
