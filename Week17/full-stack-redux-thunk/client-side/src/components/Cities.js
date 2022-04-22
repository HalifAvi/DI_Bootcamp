import { connect } from 'react-redux';
import React from 'react';

class Cities extends React.Component{


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


const mapStateToProps = (state) => {

    return{

        cities : state.citiesReducer.cities,
    }
}


export default connect(mapStateToProps, null)(Cities);