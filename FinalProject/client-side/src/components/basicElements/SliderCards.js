import { useEffect } from 'react';
import '../BasicElementStyle/SliderCards.css';



const SliderCards = (props) => { 

    useEffect(()=> {

        // var isS = (function() { return !this; })();
        // console.log(isS)

        var script = document.createElement("script");
        script.src = "https://unpkg.com/swiper@8/swiper-bundle.min.js";
        script.async = true;

        var script2 = document.createElement("script");
        script2.innerText = `var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        effect: 'coverflow',
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : true
                        },
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    });`;
        script2.async = true;

        document.body.appendChild(script);
        document.body.appendChild(script2);

        return () => {

            document.body.removeChild(script);
            document.body.removeChild(script2);
        }

    }, [])



    return(
        <section>
            <div className={"swiper-container"}>
                <div className={"swiper-wrapper"}>
                    <div className={"swiper-slide"}></div>
                    <div className={"swiper-slide"}></div>
                    <div className={"swiper-slide"}></div>
                </div>
            </div>            
        </section>
    )
}

export default SliderCards;


