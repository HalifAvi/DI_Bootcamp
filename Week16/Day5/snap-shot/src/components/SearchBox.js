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
        const baseURL = `https://api.pexels.com/v1/search?per_page=30&query=${query}`;

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
                    <Button style={{backgroundColor: "gray"}} variant="outline-secondary" id="button-addon2" onClick={this.handleClick}>
                        <svg height="32" width="32"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fill-rule="evenodd"></path></svg>
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

