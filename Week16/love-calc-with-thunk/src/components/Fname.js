import Sname from './Sname';
import {connect} from 'react-redux';
import {setNames} from '../redux/actions'

const Fname = (props) => {
  return(
    <>
      First Name: <input type='text' name='fname' onChange={props.handleChange}/>
      <Sname />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleChange: (e) => dispatch(setNames('SET_FNAME',e.target.value))
  }
}

export default connect(null,mapDispatchToProps)(Fname)
