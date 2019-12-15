import React from 'react'
import PersonListItem from './PersonListItem.js'
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

const PersonList = (props) => {
  //console.log(props.data)
  
  return(
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader 
          component="div"
          id="nested-list-subheader"
          disableSticky={true}
        >
          Star Wars Major Characters List
        </ListSubheader>
      }
    >
      {
        props.data.map(
          (dataPerson, i) => {
            
            return(
                <PersonListItem
                  key={i} 
                  person={dataPerson} 
                />
            )
          }
        )
      }
    </List>
  )
}

export default PersonList