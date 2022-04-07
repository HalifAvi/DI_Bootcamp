import data from '../SocialMedias.json'
import List from './List';
import './Style.css';

const Example1 = () => {

    return(
        <>
            <h3 className='secondaryTitle'>Example1 Component</h3>

            <div className='divStyle'>
                {                      
                    <List arr = {data.SocialMedias} property = {""}/>
                }     
            </div>
        </>
    )
}

export default Example1;