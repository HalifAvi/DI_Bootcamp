import { Link } from "react-router-dom";
import Title from "../basicElements/Title";
import Button from "../basicElements/Button";
import Image from "../basicElements/Image";

import '../pagesStyle/Home.css';

import { useEffect } from "react";

const Home = (props) => {

    useEffect(()=>{

        document.addEventListener("mousemove", moveAllIcons);
        
    }, []);


    const moveAllIcons = (e) => {

        document.querySelectorAll('.layer').forEach(layer => {

            const speed = layer.getAttribute('dataSpeed');

            const x = (window.innerWidth - e.pageX*speed)/300;
            const y = (window.innerHeight - e.pageY*speed)/300;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    
        })
    }

    return(

        <>
            <section className={"pattern-vertical-stripes-sm"}>
                <div id={"app-name-div"}>
                    <Image dataSpeed={-10} id={"logo-img"} src={"./images/logo.png"}/>
                    <Title dataSpeed={6} id={"home-title-p1"} classN={"layer"} titleName={process.env.REACT_APP_HOME_NAME_P1} />
                    <Title dataSpeed={6} id={"home-title-p2"} classN={"layer"} titleName={process.env.REACT_APP_HOME_NAME_P2} />
                </div>

                <Title dataSpeed={-6} id={"home-snd-title"} classN={"layer logo-img"} titleName={process.env.REACT_APP_HOME_SND_TITLE} />
{/* 
                <Image dataSpeed={-10} id={"layer-img"} classN={"layer"} src={"./images/layer-1.png"}/>
                <Image dataSpeed={5} id={"layer-img"} classN={"layer"} src={"./images/layer-2.png"} />
                <Image dataSpeed={2} id={"layer-img"} classN={"layer"} src={"./images/layer-3.png"} />
                <Image dataSpeed={6} id={"layer-img"} classN={"layer"} src={"./images/layer-4.png"} />
                <Image dataSpeed={8} id={"layer-img"} classN={"layer"} src={"./images/layer-5.png"} />
                <Image dataSpeed={-2} id={"layer-img"} classN={"layer"} src={"./images/layer-6.png"} />
                <Image dataSpeed={4} id={"layer-img"} classN={"layer"} src={"./images/layer-7.png"} />
                <Image dataSpeed={-9} id={"layer-img"} classN={"layer"} src={"./images/layer-8.png"} /> */}
            </section>
            <div id={"btt-section"}>
                <Link to={'/logIn'}>
                    <Button id={"login-btt"} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
                </Link>
                <Link to={'/signIn'}>
                    <Button id={"signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
                </Link>
            </div>
        </>     
    )
}

export default Home;


