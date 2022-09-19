import React from "react";
import PaginationComponent from './Pagination';
import { Row} from "react-bootstrap";
import CardMovie from "./CardMovie";
const MoviesList = ({movies, getPage, pages}) => {
  return (
    <Row className="mt-3">
      
      {movies.length >= 1 ? (movies.map((mov)=>{
        return (<CardMovie key={mov.id} mov={mov}/>)
      })): <h2 className="text-center py-5">there is no films</h2> }
      {movies.length >= 1 ? (<PaginationComponent getPage={getPage} pages={pages}/>):null}
      
    </Row>
  );
};
// movies.length
export default MoviesList;