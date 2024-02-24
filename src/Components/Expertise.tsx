import React, { useEffect } from 'react'
import '../Styles/Expertise.css';
import { AOSProps } from './Header';
function Expertise(props:AOSProps) {
const expertiseContainer=React.useRef<HTMLElement>(null);

    useEffect(()=>{
        let options = {
            threshold: 0.5,
          };
            //Intersection Observer
            const interSecObser=new IntersectionObserver((entries)=>{
                entries.forEach(section=>{
                    if(section.isIntersecting && expertiseContainer?.current) {
                        expertiseContainer.current?.classList.add('load');
                    }else{
                        expertiseContainer.current?.classList.remove('load');
                    }
                })
            },options)
            if(expertiseContainer?.current) interSecObser.observe(expertiseContainer?.current);
    },[])
  return (
    <section className='expertise-wrapper' ref={expertiseContainer} id='Expertise'>
        <section className="expertise-container" data-aos='fade-up' data-aos-duration={props.AOS_timing}>
            <section className="expertise-content-wrapper">
                <h4 className='expertise-content-heading'>Expertise</h4>
                <p className='expertise-content-para'>Became an expert in web development having strong foundation in React, Javascript, and Typescript, as well as an understanding of software engineering principles and best
practices. Gained complete knowledge of the React ecosystem, including tools and libraries such as Redux, Material UI and React Router.</p>
            </section>
            <section className="expertise-skillset-wrapper">
                <h4 className='expertise-skillset-heading'>skillset</h4>
                <section className="skillset-container">
                    <section className="react-wrapper skillset-bar-wrapper">
                        <h3 className='skillset-bar-heading'>React</h3>
                        <div className='skillset-percentge' id='90%'></div>
                        <div className="skillset-progressBar"></div>
                    </section>
                    <section className="js-wrapper skillset-bar-wrapper">
                        <h3 className='skillset-bar-heading'>Java Script</h3>
                        <div className='skillset-percentge'  id='87%'></div>
                        <div className="skillset-progressBar"></div>
                    </section>
                    <section className="ts-wrapper skillset-bar-wrapper">
                        <h3 className='skillset-bar-heading'>Type Script</h3>
                        <div className='skillset-percentge'  id='80%'></div>
                        <div className="skillset-progressBar"></div>
                    </section>
                    <section className="redux-wrapper skillset-bar-wrapper">
                        <h3 className='skillset-bar-heading'>Redux State Management</h3>
                        <div className='skillset-percentge'  id='82%'></div>
                        <div className="skillset-progressBar"></div>
                    </section>
                    <section className="mui-wrapper skillset-bar-wrapper">
                        <h3 className='skillset-bar-heading'>Material UI</h3>
                        <div className='skillset-percentge'  id='75%'></div>
                        <div className="skillset-progressBar"></div>
                    </section>
                    <section className="shopify-wrapper skillset-bar-wrapper">
                        <h3 className='skillset-bar-heading'>Shopify</h3>
                        <div className='skillset-percentge'  id='78%'></div>
                        <div className="skillset-progressBar"></div>
                    </section>
                </section>
            </section>
        </section>
    </section>
  )
}

export default Expertise