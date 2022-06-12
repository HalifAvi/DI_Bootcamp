import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";



const SliderCards = ({recepiesToDisplay}) => { 
        

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
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows : true
                        },
                        loop: true,
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
                    {
                        recepiesToDisplay.map(recepieObj=>{

                            return (

                                <div key={recepieObj.id} className={"swiper-slide"}>
                                    {recepieObj.calories}
                                    <Image src={recepieObj.image}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>            
        </section>
    )
}

export default SliderCards;
