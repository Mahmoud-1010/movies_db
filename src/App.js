import React from 'react';
import {useEffect,useState} from 'react';
import {Container} from 'react-bootstrap'
import NavBar from './component/NavBar'
import MoviesList from './component/MoviesList'
import MovieDetails from './component/MovieDetails';
import axios from 'axios';
import { BrowserRouter,Routes,Route  } from "react-router-dom";
function App() {

  const  [movies, setMovies] = React.useState([])
  const [pages, setPages] = useState(0)
  const getAllMovies = async()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eae9767ae9ff47584f83b1aa5e96a143&language=en-US&page=1")
     
    setMovies(res.data.results)
    
    setPages(res.data.total_pages)
  }
  //get current page
  const getPage = async(pageNumber)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eae9767ae9ff47584f83b1aa5e96a143&language=en-US&page=${pageNumber}`)
    
    setMovies(res.data.results)
  }
 
  const searchMovies = async(word)=>{
    if(word===""){
      getAllMovies()
    }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eae9767ae9ff47584f83b1aa5e96a143&query=${word}`)
    
    setMovies(res.data.results)
    setPages(res.data.total_pages)
    }
  }
  useEffect(() => {
    getAllMovies();
  }, [])
   

  return (
    <div className="font color-body">
     <NavBar searchMovies={searchMovies}/>
     <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList movies={movies} getPage={getPage} pages={pages}/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
      {/* <MoviesList movies={movies} getPage={getPage} pages={pages}/>
      <MovieDetails/> */}
     </Container>
    </div>
  );
}

export default App;
