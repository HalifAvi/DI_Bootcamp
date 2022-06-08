import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import { connect } from 'react-redux';

export const MainContext = createContext(null);

const Main = (props) => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState('');

    return(



        <>
            <h1>MAIN</h1>
            <button>Logout</button>
            <button onClick={()=>{navigate("/protected")}}>Protected</button>

            
                {props.userId}<br/>
                {props.email}<br/>
                {props.gender}<br/>
                {props.firstName}<br/>
                {props.lastName}<br/>
                {props.age}<br/>
                {props.height}<br/>
                {props.weight}<br/>
                {props.activityLevel}<br/>
                {props.fileName}<br/>
                <img style={{width: "100px", height: "100px"}} src={`http://localhost:5000/uploads/${props.fileName}`}/>

        </>
    )
}

const mapStateToProps = (state) => {

    return{

        userId : state.signInUpReducer.userId,
        email : state.signInUpReducer.email,
        gender : state.signInUpReducer.gender,
        firstName : state.signInUpReducer.firstName,
        lastName : state.signInUpReducer.lastName,
        age : state.signInUpReducer.age,
        height : state.signInUpReducer.height,
        weight : state.signInUpReducer.weight,
        activityLevel : state.signInUpReducer.activityLevel,
        fileName : state.signInUpReducer.fileName
    }
}

export default connect(mapStateToProps, null)(Main);