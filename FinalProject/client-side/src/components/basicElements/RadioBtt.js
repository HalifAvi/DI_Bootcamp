
import '../BasicElementStyle/RadioBtt.css';
import Image from "./Image";
import Input from './Input';

const RadioBtt = ({optionsArray, onChangeEvent}) => { 

    return(
            <div className="form-radioBtt">
                {
                    optionsArray !== undefined ? 
                    
                    optionsArray.map((item, idx)=>{

                        return (<span className={'radioBtt-span'}>
                                    <Input key={idx} classN={"radioBtt-input"} onChange={onChangeEvent} checked={idx===0? "true":null} inputType={"radio"} name={item.name} inputValue={item.inputValue}/>
                                    <Image key={idx} classN={"form-img"} src={item.src}/>
                                </span>)
                    })

                    :

                    null
                }            
            </div>
    )
}

export default RadioBtt;


















