import data from '../SocialMedias.json';
import List from './List';
import './Style.css';

const Example2 = () => {

    return(
        <> 
            <h3 className='secondaryTitle'>Example2 Component</h3>
           
            <div className='divStyle'>
                {         
                
                    <>
                        <h5 className='smallTitle'>{data.Skills[0].Area}</h5>
                        <List arr={data.Skills[0].SkillSet} property={"Name"} id={1}/>

                        <h5 className='smallTitle'>{data.Skills[1].Area}</h5>
                        <List arr={data.Skills[1].SkillSet} property={"Name"} id={2}/>
                    </>
                }     
            </div>
        </>
    )
}

export default Example2;