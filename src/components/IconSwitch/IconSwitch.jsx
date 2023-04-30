import React from "react";
import './IconSwitch.css'

function IconSwitch(props) {
   const onClickHandler = (e) => {
      props.onViewSwitch()
   }
   return (
      <button className="iconSwitch-btn material-icons" onClick={onClickHandler}>
         {props.view}
      </button>

   )
}

export default IconSwitch;