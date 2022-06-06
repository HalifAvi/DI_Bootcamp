
import '../BasicElementStyle/RadioBtt.css';
import Image from "./Image";
import Input from './Input';

const RadioBtt = ({optionsArray, onChangeEvent}) => { 

    return(
            <div className="form-radioBtt">
                {
                    optionsArray !== undefined ? 
                    
                    optionsArray.map((item, idx)=>{

                        // checked={idx===0? true:null}
                        return (<span className={'radioBtt-span'}> 
                                    <Input classN={"radioBtt-input"} value={item.inputValue} onChange={onChangeEvent} inputType={"radio"} name={item.name}/>
                                    <Image classN={"form-img"} src={item.src}/>
                                </span>)
                    })

                    :

                    null
                }            
            </div>
    )
}

export default RadioBtt;


















