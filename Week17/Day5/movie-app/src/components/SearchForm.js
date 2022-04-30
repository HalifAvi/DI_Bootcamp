import React from "react";
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {searchMovie, fetchMovies} from '../redux/actions';

class SearchForm extends React.Component{


    handleChange = (e) => {

        this.props.searchMovie(e.target.value);
    }


    handleSubmit = (e) => {

        e.preventDefault();
        this.props.fetchMovies();
    }


    render(){

        return(
            <div style={{textAlign: "center", backgroundColor: "lightgray", padding: "60px", margin: "60px"}}>
                <Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <Form.Group className="mb-3">
                            <svg height="64" width="64"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="black" fill-rule="evenodd"></path></svg>
                            <Form.Label htmlFor="search" style={{fontSize: "50px"}}>Search for a movie, TV series...</Form.Label>
                            <Form.Control onChange={this.handleChange} id="search" placeholder="Search..." />
                        </Form.Group>
                        <Button type="submit">Search</Button>
                    </fieldset>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        text : state.fetchMoviesReducer.text
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        fetchMovies: ()=> dispatch(fetchMovies()), 
        searchMovie: (value)=> dispatch(searchMovie(value)), 

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);