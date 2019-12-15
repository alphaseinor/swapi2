import React from 'react'
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader'
import MoviesListItem from './MoviesListItem';

const MoviesList = (props) => {
  console.log(props.films)
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Appears in {props.films.length} films
        </ListSubheader>
      }
    >
      {
        props.films.map(
          (filmData, i) => {
            return(
                <MoviesListItem
                  key={i} 
                  film={filmData} 
                />
            )
          }
        )
      }
    </List>
  )
}

export default MoviesList

// <ListItem>
//             <ListItemText primary={`Appears in ${props.person.films.length} films`}/>
//           </ListItem>