import { connect } from 'react-redux';
import React from 'react';

class Cities extends React.Component{


    componentDidMount(){

        if(this.props.deletePrevious){

            clearSelectOptions();
        }
    }

    render(){

        return(
            <>
                <select id="cities">
                    {
                        (this.props.cities).map(item => {

                            return (
                            
                                <option key={item.country_id}>{item.city}</option>
                            )
                        })
                    }

                </select>
            </>
        )
    }
}


const clearSelectOptions = () => {

    const citiesSelectElement = document.querySelector('#cities');
    let selectLength = citiesSelectElement.options.length;
    let i;

    for (i = selectLength-1; i >= 0; i--) {
        citiesSelectElement.options[i] = null;
    }
}


const mapStateToProps = (state) => {

    return{

        cities : state.citiesReducer.cities,
        deletePrevious : state.citiesReducer.deletePrevious
    }
}


export default connect(mapStateToProps, null)(Cities);