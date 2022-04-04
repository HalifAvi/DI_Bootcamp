import React from 'react'

class SearchBox extends React.Component{

    constructor(){

        super();
        this.state = {

            text : ''
        }
    }

    handleChange = (e) => {

        this.setState({text:e.target.value})
    }


    render(){

        return(
            <>
                <input placeholder="Search here..."   />
                <button onClick={()=>this.props.handleClick(this.state.text)}>SEARCH</button>
            </>
        )
    }
}

export default SearchBox;