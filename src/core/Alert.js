import React from 'react'
const Alert = () => {
  return (
    <>
      <div class='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>Tu inscripción</strong> se registró con exito! Te esperamos!
        {/* <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button> */}
      </div>
    </>
  )
}
export { Alert }
