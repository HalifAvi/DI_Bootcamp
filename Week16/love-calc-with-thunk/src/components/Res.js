import {connect} from 'react-redux'
const Res = (props) => {
  return(
    <>
      Results:
      <div>{props.results.fname} & {props.results.sname}</div>
      <div>percentage: {props.results.percentage}</div>
      <div>result: {props.results.result}</div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    results: state.resRed.results
  }
}
export default connect(mapStateToProps)(Res);
