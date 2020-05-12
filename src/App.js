import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from './components/NavBar/NavBar.js'
import PersonList from './components/Persons/PersonList.js'
import ReactPaginate from './components/react-paginate'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

function App() {
  const originalAPIKey = 'https://swapi.dev/api/people/?page='
  const [data, setData] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [currentPage] = useState(0) //reserved for pagination
  const [searchText, setSearchText] = useState('')
  const [apiKey, setApiKey] = useState(`${originalAPIKey}${currentPage +1}&search=${searchText}`)

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
    setApiKey(`${originalAPIKey}${data.selected +1}&search=${searchText}`)
    console.log(apiKey)
  }

  return (
    <Container maxWidth="sm">
      <Box>
        <NavBar 
          searchText={searchText} 
          setSearchText={setSearchText} 
          originalAPIKey = {originalAPIKey}
          currentPage = {currentPage}
          setApiKey = {setApiKey}
        />
      </Box>
      <Box>
        <PersonList data={data} />
      </Box>
      <Box 
        display="flex"
        justifyContent="center"
        wrap="wrap"
      >
        <ReactPaginate 
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={<span className="gap">...</span>}
          pageCount={numberOfPages}
          onPageChange={clickHandler}
          forcePage={currentPage}
        />
      </Box>
    </Container>
  );
}

export default App;
