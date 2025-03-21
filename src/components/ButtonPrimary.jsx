import React from 'react'

const ButtonPrimary = (props) => {
    const {btnName} = props;
  return (
    <button className="rounded-2 fw-bold px-5 py-2 py-md-3 btn-shdaow-type-1 text-type-1">
        {btnName}
    </button>
  )
}

export default ButtonPrimary
