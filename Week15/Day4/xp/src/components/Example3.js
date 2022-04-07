import data from '../SocialMedias.json';
import Experience from './Experience';
import './Style.css';

const Example3 = () => {

    return(
        <> 
            <h3 className='secondaryTitle'>Example3 Component</h3>
           
            <div className='divStyle'>
                {      
                    (data["Experiences"]).map((item, idx)=> {

                        return(

                            <Experience key ={idx} src ={item.logo} companyName={item.companyName} url={item.url} 
                            title={item.roles[0]["title"]} startDate={item.roles[0].startDate} location={item.roles[0].location}
                            description={item.roles[0].description}/>
                        )
                    })
                }     
            </div>
        </>
    )
}

export default Example3;