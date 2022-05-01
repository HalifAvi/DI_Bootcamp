import React from 'react';

class SearchBox extends React.Component {

  render(){
    
    return(
      <>
        <input type="text" onChange={this.props.handleChange}/>

      </>
    )
  }

}
export default SearchBox;
