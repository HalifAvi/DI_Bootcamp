import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';



const SliderCards = (props) => { 

    const [swiperVariable, setSwiperVariable] = useState(true);

    useEffect(()=> {

        // We put the Swiper CND script in index.js cause we'll come accross row 17 we'll need Swiper 
        var script = document.createElement("script");
        script.innerText = `var swiper = new Swiper('.swiper-container', {
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
        script.async = true;

        document.body.appendChild(script);

        return () => {

            document.body.removeChild(script);
        }

    }, [swiperVariable])



    return(
        <section className={"swiper-section"}>
            { swiperVariable ? setSwiperVariable(false) : null }
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
