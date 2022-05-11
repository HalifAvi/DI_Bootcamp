import React, { useContext } from "react";
import { SeachBoxContext } from "./SeachBox";



const SortDropDown = () => {

    const {dispatch} = useContext(SeachBoxContext);

    return(
        
        <div style={{textAlign: "center"}} onChange={(e)=> dispatch({type: `${e.target.value}Sort`})}>
            <select>
                <option value="Sort" selected disabled hidden>Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </div>
    )
}

export default SortDropDown;