import React, {useState, useEffect} from 'react'
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const MoviesListItem = (props) => {
  const [movie, setMovie] = useState({})
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  useEffect(()=>{
    axios.get(props.film)
      .then(result => {
        console.log(result.data)
        setMovie(result.data)
      })
  },[])

  return (
    <>
      <ListItem button onClick={()=>clickHandler()}>
        <ListItemText primary={`${movie.title}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </>
  )
}

export default MoviesListItem