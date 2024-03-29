import React, { useEffect } from 'react'
import '../Styles/TopBrands.css';
import { AOSProps } from './Header';
function TopBrands(props:AOSProps) {
  return (
    <section className="top-brands-section-wrapper" data-aos='fade-up' data-aos-duration={props.AOS_timing}>
            <section className="top-brands-container">
                <h3 className='heading'><span className='accent-text'>Top Brands</span></h3>
                <span>Below are the Top brands worked</span>
                <section className="brands-logo-wrapper">          
                    <div className="brand-logo boat" >
                        <div className="brand-logo-img-wrapper">
                        <img src="https://ik.imagekit.io/hs4gfzmpd/boat_transparent.png?updatedAt=1704033308210" alt="" />
                        </div>
                        <div className='brand-logo-title'>Boat Life Style</div>
                    </div>
                          
                    <div className="brand-logo levis" >
                    <div className="brand-logo-img-wrapper">
                        <img src="https://ik.imagekit.io/hs4gfzmpd/Levis_transparent.avif?updatedAt=1704033308119" alt="" />
                        </div>
                        <div className='brand-logo-title'>Levis</div>
                    </div>
                
            
                    <div className="brand-logo qurez" >
                    <div className="brand-logo-img-wrapper">
                        <img src="https://ik.imagekit.io/hs4gfzmpd/Qurez.webp?updatedAt=1704034289067" alt="" width={185}/>
                        </div>
                        <div className='brand-logo-title'>Qurez</div>
                    </div>
                
                    <div className="brand-logo simple-skin" >
                    <div className="brand-logo-img-wrapper">
                        <img src="https://ik.imagekit.io/hs4gfzmpd/simple-skin-care.png?updatedAt=1704034288901" alt="" />
                        </div>
                        <div className='brand-logo-title'>Simple Skin care</div>
                    </div>
            
                    <div className="brand-logo saaki" >
                    <div className="brand-logo-img-wrapper">
                        <img src="https://ik.imagekit.io/hs4gfzmpd/saaki_1.png?updatedAt=1704033651684" alt="" />
                        </div>
                        <div className='brand-logo-title'>Saaki</div>
                    </div>
                </section>
            </section>
    </section>
  )
}

export default TopBrands