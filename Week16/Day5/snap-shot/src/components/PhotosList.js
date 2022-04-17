import React from "react";
import { connect } from "react-redux";
import { displayCustomizedCategory } from '../actions/index';
import './Category.css';

const API_KEY = '563492ad6f9170000100000152b3afd0806a4373b69250820bbeca57';


class PhotoList extends React.Component{

    componentDidMount(){

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
            <div className="photosDiv">
                {
                    (this.props.currentImagesToDisplay).map(image => {

                        return <img style={{marginRight: "10px", marginBottom: "10px"}} src={image.src.tiny} /> 
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{

        currentImagesToDisplay : state.currentImageArr,
        catergoryName : state.catergoryName
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        displayCustomizedCategory : (currentImageArr)=> dispatch(displayCustomizedCategory(currentImageArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)