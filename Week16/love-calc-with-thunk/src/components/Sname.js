import Calc from './Calc'
import {connect} from 'react-redux';
import {setNames} from '../redux/actions'

const Sname = (props) => {
  return(
    <>
      Second Name: <input type='text' name='sname' onChange={props.handleChange}/>
      <Calc />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleChange: (e) => dispatch(setNames('SET_SNAME',e.target.value))
  }
}

export default connect(null,mapDispatchToProps)(Sname)
