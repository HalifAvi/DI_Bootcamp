import { connect } from 'react-redux';
import React from 'react';
import {fetchCountries} from '../actions/index';
import {fetchCities} from '../actions/index';

class Countries extends React.Component{

    componentDidMount(){

        this.props.fetchCountries();
    }


    handleCountryChange = (e) => {

        this.props.fetchCities(e.target.value);
    }


    render(){

        return(
            <>
                <select onChange={this.handleCountryChange}>
                    {
                        (this.props.countries).map(item => {

                            return (
                            
                                <option key={item.country_id} value={item.country_id}>{item.country}</option>
                            )
                        })
                    }

                </select>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return{

        countries : state.countriesReducer.countries
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        fetchCountries : () => dispatch(fetchCountries()),
        fetchCities : (countryID) => dispatch(fetchCities(countryID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);