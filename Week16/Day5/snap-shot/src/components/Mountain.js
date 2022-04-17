import React from "react";
import PhotosList from "./PhotosList";
import { connect } from "react-redux";
import { setCategoryName } from '../actions/index';
import './Category.css';


class Mountain extends React.Component{



    render(){

        this.props.setCategoryName("Mountain");

        return(

                <div>
                    <h3 style={{margin: "50px", textAlign: "center", fontWeight: "bold"}}>Mountain Pictures</h3>
                    <PhotosList />
                </div>
        )
    }
}


const mapDispathToProps = (dispatch) => {

    return{

        setCategoryName : (categoryName) => dispatch(setCategoryName(categoryName))
    }
}


export default connect(null, mapDispathToProps)(Mountain);