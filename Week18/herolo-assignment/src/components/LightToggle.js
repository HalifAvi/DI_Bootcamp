import React from "react";
import { connect } from "react-redux";
import '../App.css';



class LightToggle extends React.Component{

    changePageLight = (e) => {
        
        e.target.checked ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white";
    }

    render(){

        return(
            <div>
                <label class="switch">
                    <input type="checkbox" onChange={this.changePageLight}/>
                    <span class="slider"></span>
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




export default connect(mapStateToProps, null)(LightToggle);
