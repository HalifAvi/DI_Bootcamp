import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import { connect } from 'react-redux';
import { displayCustomizedCategory } from '../actions/index';
import { setCategoryName } from '../actions/index';
const API_KEY = '563492ad6f9170000100000152b3afd0806a4373b69250820bbeca57';




class SearchBox extends React.Component{


    handleChange = (e) => {

        this.props.setCategoryName(e.target.value);

    }


    handleClick = () => {

        const query = this.props.catergoryName;
        const baseURL = `https://api.pexels.com/v1/search?per_page=40&query=${query}`;

        fetch(baseURL, {

            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {

            this.props.displayCustomizedCategory(data.photos);
        })
        .catch(err => console.error(err));
    }



    render(){

        return(
            <div style={{position: "absolute", left: "30%", margin: "20px"}}>
            
                <InputGroup style={{ width: "500px"}} className="mb-3">
                    <FormControl style={{ backgroundColor: "lightgray", border: "2px solid gray"}}
                        placeholder="Search..."
                        aria-describedby="basic-addon2"
                        onChange={this.handleChange}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={this.handleClick}>
                    <i class="fab fa-magnifying-glass fs-3 me-4"></i>
                    </Button>
                </InputGroup>  

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {

        catergoryName : state.catergoryName
    }
}


const mapDispatchToProps = (dispatch) => {

    return {

        setCategoryName : (value) => dispatch(setCategoryName(value)),
        displayCustomizedCategory : (currentImageArr)=> dispatch(displayCustomizedCategory(currentImageArr))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

// <i className='fab fa-instagram fs-3 me-4'/>