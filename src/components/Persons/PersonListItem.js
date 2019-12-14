import React, {useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';


const PersonListItem = (props) => {
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
          <ListItem button>
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
          <ListItem>
            <ListItemText primary={`Appears in ${props.person.films.length} films`}/>
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </>
  )
}

export default PersonListItem