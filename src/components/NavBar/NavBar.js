import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';

const NavBar = (props) => {
  //console.log(props)
  return (
    <Box>
      <form 
        noValidate 
        autoComplete="off"
        onSubmit={(e)=>{
          e.preventDefault()
          console.log(`${props.originalAPIKey}${props.currentPage +1}&search=${props.searchText}`)
          props.setApiKey(`${props.originalAPIKey}${props.currentPage +1}&search=${props.searchText}`)
        }}
      >
        <TextField 
          onChange={(e)=>{
            props.setSearchText(e.target.value)
          }}
          id="filled-search" 
          label="Search" 
          type="search" 
          variant="filled" 
          value={props.searchText}
          fullWidth
        />
      </form>
      
    </Box>
  )
}

export default NavBar