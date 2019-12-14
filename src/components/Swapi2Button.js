import React from 'react'

const Swapi2Button = (props) => {
  console.log(props)
  return(
    <button
      onClick={()=>props.clickHandler(props.type, props.content)}
    >
      {props.content}
    </button>
  )
}

export default Swapi2Button