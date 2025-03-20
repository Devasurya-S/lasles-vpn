import React from 'react'

const ButtonPill = (props) => {

    const { styleType, btnName } = props;

    const setStyle = () => {
        if(styleType === "outline")
            return true;
        else return false;
    } 

  return (
    <button className={`btn-type-1 rounded-pill fw-medium color-3 py-1 px-5 ${setStyle() ? "btn-type-outline" : ""}`}>
        {btnName}
    </button>
  )
}

export default ButtonPill
