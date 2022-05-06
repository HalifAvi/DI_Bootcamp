import "./style.css";
import {useState} from 'react';
import {connect} from "react-redux";
import { fetchData } from "../action";

const SearchBox = (props) => {

    // HOOKS !!! 'text' it's a local variable in this component state
    const [text, setText] = useState('');


    return(

        <div className="searchBox-section">
            <input onChange={(e)=> setText(e.target.value)} type={"text"}/>
            <button onClick={()=>props.fetchData(text)}>Search</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        fetchData : (text)=> dispatch(fetchData(text))
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);