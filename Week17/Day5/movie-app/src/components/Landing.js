import React from "react";
import {connect} from 'react-redux';
import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import Footer from "./Footer";
import Loading from "../components/Loading";
import {setLoading} from "../redux/actions";


class Landing extends React.Component{

    componentDidMount(){

        this.props.setLoading();
    }


    render(){

        return(

                <div>

                    <SearchForm />
                    {console.log('load',this.props.loading)}
                    {(this.props.loading) ? <div style={{textAlign : "center", margin: "50px"}}><Loading /></div> :  <MoviesContainer />}
                    <Footer />

                </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        loading: state.fetchMoviesReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        setLoading: () => dispatch(setLoading())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing);