import '../BasicElementStyle/Input.css';


const Input = ({ inputType,
                inputPlaceholder, 
                inputValue, 
                onChangeEvent,
                minNum,
                maxNum,
                classN,
                name,
                checked,
                id
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
                className={null || classN}
                name={null || name}
                checked={null || checked}
                id={null || id}/>
        </>
    )
}

export default Input;