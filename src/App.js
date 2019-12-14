import React, {useState, useEffect} from 'react';
import axios from 'axios'
import PersonList from './components/PersonList.js'
import ReactPaginate from './components/react-paginate'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

function App() {
  const originalAPIKey = 'https://swapi.co/api/people/?page='
  const [data, setData] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [currentPage] = useState(0) //reserved for pagination
  const [apiKey, setApiKey] = useState(`${originalAPIKey}${currentPage +1}`)

  useEffect(()=>{
    axios.get(apiKey)
      .then(res=>{
        console.log(res.data)
        setData(res.data.results)
        setNumberOfPages(Math.ceil(res.data.count/10))
      })
      .catch(err=>{
        console.log(err)
      })

  },[apiKey])

  const clickHandler = (data) => {
    console.log(data)
    setApiKey(originalAPIKey + (data.selected +1))
    console.log(apiKey)
  }

  return (
    <Container maxWidth="sm">
      <Box>
        <ReactPaginate 
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={<span className="gap">...</span>}
          pageCount={numberOfPages}
          onPageChange={clickHandler}
          forcePage={currentPage}
        />
        {
          data.map((dataPerson, i) => {
            return(
              <PersonList
                key={i} 
                person={dataPerson} 
              />
            )
          })
        }
      </Box>
    </Container>
  );
}

export default App;
