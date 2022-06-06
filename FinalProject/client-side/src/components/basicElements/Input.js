import '../BasicElementStyle/Input.css';

import { useEffect } from "react";




const Input = ({ inputType,
                inputPlaceholder, 
                inputValue, 
                onChangeEvent,
                minNum,
                maxNum,
                classN,
                name,
                checked
            }) => { 


    /////////////////////////////////////////////////////
useEffect (()=> {

    console.log("aviiiiiii", inputValue)
    
},[])



    return(

        <>
            <input required
                onChange={null || onChangeEvent}
                type={null || inputType}
                placeholder={null || inputPlaceholder} 
                value={null || inputValue}
                min={null || minNum}
                max={null || maxNum}
                className={null || classN}
                name={null || name}
                checked={null || checked}/>
        </>
    )
}

export default Input;