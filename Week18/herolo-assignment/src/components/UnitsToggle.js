import React from "react";
import { connect } from "react-redux";
import {changeUnits} from "../actions/index";
import '../App.css';



class UnitsToggle extends React.Component{

    render(){

        return(
            <div>
                <label class="switch">
                    <input type="checkbox" onChange={(e)=>this.props.changeUnits(e.target.checked, this.props.id)}/>
                    <span class="slider round"></span>
                </label>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        favoritesArray: state.favoritesReducer.favoritesArray
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        changeUnits : (boolValue, page) => dispatch(changeUnits(boolValue, page))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UnitsToggle);
