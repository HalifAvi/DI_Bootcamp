import { Link } from "react-router-dom";
import Title from "../basicElements/Title";
import Button from "../basicElements/Button";

import '../pagesStyle/Home.css';


const Home = (props) => {

    return(

        <div>

            <video src={process.env.REACT_APP_BASE_VIDEO_HOME_URL} id={"video"} autoPlay muted loop />

            <section>
                <div id={"app-name-div"}>
                    <Title id={"home-title-p1"} titleName={process.env.REACT_APP_HOME_NAME_P1} pattern={"pattern-diagonal-lines-sm text-pattern"}/>
                    <Title id={"home-title-p2"} titleName={process.env.REACT_APP_HOME_NAME_P2} />
                    <hr className="deco-line-1"></hr>
                    <hr className="deco-line-2"></hr>
                </div>
                <div id={"app-snd-title-div"}>
                    <Title id={"home-snd-title"} titleName={process.env.REACT_APP_HOME_SND_TITLE} />
                </div>
            </section>
            <div id={"btt-section"}>
                <Link to={'/logIn'}>
                    <Button id={"login-btt"} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
                </Link>
                <Link to={'/signIn'}>
                    <Button id={"signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
                </Link>
            </div>





        </div>
    )
}

export default Home;






// <div>
// <section className={"pattern-vertical-stripes-sm"}>
//     <div id={"app-name-div"}>
//         <Title dataSpeed={6} id={"home-title-p1"} classN={"layer"} titleName={process.env.REACT_APP_HOME_NAME_P1} />
//         <Title dataSpeed={6} id={"home-title-p2"} classN={"layer"} titleName={process.env.REACT_APP_HOME_NAME_P2} />
//     </div>

//     <Title dataSpeed={-6} id={"home-snd-title"} classN={"layer logo-img"} titleName={process.env.REACT_APP_HOME_SND_TITLE} />
// </section>
// <div id={"btt-section"}>
//     <Link to={'/logIn'}>
//         <Button id={"login-btt"} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
//     </Link>
//     <Link to={'/signIn'}>
//         <Button id={"signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
//     </Link>
// </div>
// <div>
//     <video style={{width : "1000px", height : "1000px"}} src={"./videos/home-video.mp4"} autoPlay loop muted />
// </div>
// </div>      





