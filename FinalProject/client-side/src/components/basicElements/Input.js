import '../BasicElementStyle/Input.css';



const Input = ({ inputType,
                inputPlaceholder, 
                inputValue, 
                onChangeEvent,
                minNum,
                maxNum,
                classN
            }) => { 

    return(

        <>
            <input required
                onChange={null || onChangeEvent}
                type={null || inputType}
                placeholder={null || inputPlaceholder} 
                value={null || inputValue}
                min={null || minNum}
                max={null || maxNum}
                className={null || classN}/>
        </>
    )
}

export default Input;