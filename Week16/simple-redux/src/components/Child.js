import {connect} from 'react-redux';
import {changePropTwo} from '../redux/actions';


const Child = (props) => {

    return ( // WITHOUT 'this' cause it's a function component !!!!!
        <>
            {props.one} <br/>
            {props.two}
            {props.three}

            <div>
                <input type="text" onChange={props.handleInput} />
            </div>
        </>
    )
}


const mapStateToProps = (state) => {

    return {
  
      one : state.propOne,
      two : state.propTwo,
      three : state.propThree
    }
  }


  const mapDispathchToProps = (dispatch) => {

    return {
  
      handleInput : (e) => dispatch (changePropTwo(e.target.value))
    }
  }


  
  export default connect( mapStateToProps, mapDispathchToProps)(Child);

