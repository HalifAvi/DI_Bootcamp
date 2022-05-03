import React from "react";
import { connect } from "react-redux";
import '../App.css';
import { setSearchedLocationKey } from '../actions/index';



class SearchBox extends React.Component{

    handlePressEnter = (e) => {

        if (e.charCode == 13) {

            /////////// REMOVE THE COMMENTS - HERE JUST FOT TEST ! LIMIT TO 50 API REQUEST PER DAY
            this.props.setSearchedLocationKey(e.target.value);
        }
    }


    render(){
        return(

            <div className="searchSection">
                <input onKeyPress={this.handlePressEnter} type={"text"} id={"searchInput"} placeholder="Search city..." />
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        searchedLocationKey : state.searchedLocationReducer.key
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        setSearchedLocationKey : (valueToSearch) => dispatch(setSearchedLocationKey(valueToSearch)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);