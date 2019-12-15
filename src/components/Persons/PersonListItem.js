import React, {useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import MoviesList from '../Movies/MoviesList.js'


const PersonListItem = (props) => {
  //console.log(props.person.films.length)
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return(
    <>
      <ListItem button onClick={()=>clickHandler()}>
        <ListItemText primary={`${props.person.name}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <ListItemText primary={`gender: ${props.person.gender}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Height: ${props.person.height}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Mass: ${props.person.mass}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`BirthYear: ${props.person.birth_year}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Eye Color: ${props.person.eye_color}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Hair Color: ${props.person.hair_color}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Skin Color: ${props.person.skin_color}`}/>
          </ListItem>
          <MoviesList films={props.person.films} />
        </List>
      </Collapse>
      <Divider />
    </>
  )
}

export default PersonListItem