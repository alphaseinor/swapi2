import React from 'react'

const PersonList = (props) => {
  return(
    <div>
      {`Name: ${props.person.name} Height: ${props.person.height}`}
    </div>
  )
}

export default PersonList