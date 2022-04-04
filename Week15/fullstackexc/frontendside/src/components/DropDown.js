import React from 'react';
import axios from 'axios';


class DropDown extends React.Component{

    constructor(props){

        super(props);
        this.state = {

            countries : [],
            cities : []
        }
    }


    handleChange = async (event) => {

        try{
            // HTTPS makes SSL problems
            let res = await axios.get(`http://localhost:5000/cities/${event.target.value}`)
            let data = res.data; // In axios we have the response in : res.data
    
            this.setState({cities : data});
        }catch (e){

            console.log(e)
        }
    }


    renderDropDown = (array, selectName) => {

        if(array.length === 0){

            return null;
        }
        else{

            return(

                <>
                    <select onChange={selectName == 'countries' ? this.handleChange : null} name={selectName}>
                        {
                            array.map((item,i) => {

                                return <option key = {i} value={item.country_id || item.city_id}>{item.country || item.city}</option>
                            })
                        }
                    </select>
                </>
            )
        }
    }


    async componentDidMount(){

        try{

            // HTTPS makes SSL problems
            let res = await axios.get('http://localhost:5000/countries')
            let data = res.data; // In axios we have the response in : res.data
    
            this.setState({countries : data});
        }catch (e){

            console.log(e)
        }
    }


    render(){

        const {countries, cities} = this.state;

        return(

            <>
                {
                    this.renderDropDown(countries, 'countries')
                }
                {
                    this.renderDropDown(cities, 'cities')
                }
            </>
        )
    }
}

export default DropDown