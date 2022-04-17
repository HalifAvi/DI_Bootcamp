import React from 'react';
import { connect } from 'react-redux';
import { displayCustomizedCategory } from '../actions/index';
const API_KEY = '563492ad6f9170000100000152b3afd0806a4373b69250820bbeca57';




class Pagination extends React.Component{


    handleClick = (e) => {

        console.log(e.target.id)

        const query = this.props.catergoryName;
        const baseURL = `https://api.pexels.com/v1/search?per_page=${e.target.id}&query=${query}`;

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
            <div style={{position: "absolute", left: "35%", margin: "20px"}}>
            
                <button id='20' onClick={this.handleClick}>20 images</button>
                <button id='40' onClick={this.handleClick}>40 images</button>
                <button id='60' onClick={this.handleClick}>60 images</button>
                <button id='100' onClick={this.handleClick}>100 images</button>
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

        displayCustomizedCategory : (currentImageArr)=> dispatch(displayCustomizedCategory(currentImageArr))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

