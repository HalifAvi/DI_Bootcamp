import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../PagesStyle/LoadingPageNum2.css';

const LoadingPageNum2 = (props) => {

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=> {

        setTimeout(function(){

            navigate(`/${params.nextPage}`);

        }, params.time);  
    
    }, [])

    return(
        <div className={"loading-body"}>
            <section className={"loading-section"}>
                    <div className={"loading-container"}>
                        <h2>pwhscws4d5wfrfshsw48d5aav3hjk</h2>
                        <h2>rhx<span className="text4">P</span>sg46sacxcptrhxmsg<span className={"text3"}>WAIT</span>acxc</h2>
                        <h2>jas<span className="text4">L</span>sdvjas8sdv<span>L</span>dssdse3dssdse3</h2>
                        <h2>sda<span className="text4">E</span>84<span className={"text2"}>WAIT</span>NE4a<span>O</span>s5c21sws5c21sw</h2>
                        <h2>d8w<span className="text4">A</span>nvdd8wqnvd<span>A</span>s83s52ds83s52d</h2>
                        <h2>25e<span className="text4">S</span>vks25e2vk3<span>D</span>alvamklalvamkl</h2>
                        <h2>wpo<span className="text4">E</span>ndswpoznds<span>I</span>hvkxswrhvkxswr</h2>
                        <h2>95sac5895ssc58<span>N</span>rb<span className={"text2"}>EATFIT</span>alsswz</h2>
                        <h2>ukadzp4ukalzp4<span>G</span>e2xee41e2xee41</h2>
                        <h2>ptrhxmsptrhxms446sacxc46sacxc</h2>
                    </div>
            </section>
       </div>
    )
}

export default LoadingPageNum2;