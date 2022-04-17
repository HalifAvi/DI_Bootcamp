import React from "react";
import { connect } from "react-redux";
import PhotosList from "./PhotosList";
import { setCategoryName } from '../actions/index';
import './Category.css';


class Beach extends React.Component{


    render(){

        this.props.setCategoryName("Beach");

        return(

                <div>
                    <h3 style={{margin: "50px", textAlign: "center", fontWeight: "bold"}}>Beach Pictures</h3>             
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


export default connect(null, mapDispathToProps)(Beach);