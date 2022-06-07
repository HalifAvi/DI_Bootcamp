
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
                                    <Input id={item.inputValue}
                                            classN={"radioBtt-input"} 
                                            inputValue={item.inputValue} 
                                            onChangeEvent={onChangeEvent} 
                                            inputType={"radio"} 
                                            checked={idx===(optionsArray.length)-1 ? "checked" : null}
                                            name={item.name}/>

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


















