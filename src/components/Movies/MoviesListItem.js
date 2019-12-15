import React, {useState, useEffect} from 'react'
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box'

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
        <ListItemText 
          primary={`Episode ${movie.episode_id}: ${movie.title}`} 
        />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            <ListItem>
              <ListItemText>
                {movie.opening_crawl}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Box>
                  {`Directed by: ${movie.director}`}
                </Box>
                <Box>
                  {`Produced by: ${movie.producer}`}
                </Box>
                <Box>
                  {`Release Date: ${movie.release_date}`}
                </Box>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
    </>
  )
}

export default MoviesListItem