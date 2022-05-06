import "./style.css";
import {useState} from 'react';
import {connect} from "react-redux";
import { fetchData } from "../action";

const SearchBox = () => {

    // HOOKS !!!
    const [text, setText] = useState('');
    const [books, setBooks] = useState([]);

    const handleClick = () => {

    }


    return(

        <div className="searchBox-section">
            <input onChange={(e)=> setText(e.target.value)} type={"text"}/>
            <button onClick={props.fetchData(text)}>Search</button>
        </div>
    )
}


const mapStateToProps = (state) => {

    return{


    }
}

const mapDispatchToProps = (dispatch) => {

    return{

        fetchData : (text)=> dispatch(fetchData(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);