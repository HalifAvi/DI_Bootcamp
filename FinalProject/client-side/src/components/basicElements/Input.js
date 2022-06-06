
const Input = ({inputType, inputPlaceholder, inputValue, onChangeEvent}) => { 

    return(

        <>
            <input onChange={null || onChangeEvent} type={null || inputType} placeholder={null || inputPlaceholder} value={null || inputValue}/>
        </>
    )
}

export default Input;