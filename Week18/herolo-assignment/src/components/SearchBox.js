import React from "react";
import { connect } from "react-redux";
import '../App.css';


class SearchBox extends React.Component{


    render(){
        return(

            <div className="searchSection">
                <input id={"searchInput"} type={"text"} placeholder="Search city..." />
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{


    }
}


const mapDispatchToProps = (dispatch) => {

    return{


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);