import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';

export const MainContext = createContext(null);

const Main = (props) => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState('');

    return(
        
        <>
            <h1>MAIN</h1>
            <button>Logout</button>
            <button onClick={()=>{navigate("/protected")}}>Protected</button>
        </>
    )
}

export default Main;