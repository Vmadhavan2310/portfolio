import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Header.css'
function Header() {
  const [bgmode, setbgmode] = useState(false);
  const typing_txt = React.useRef<HTMLElement>(null); //Use ref for typing text Element access
  const header=React.useRef<HTMLElement | null>(null); //Use ref for Header Element access
  const logo_image_url='https://ik.imagekit.io/hs4gfzmpd/vm-high-resolution-logo-transparent%20(1).png?updatedAt=1703513209656';
  const sticky_logo_url='https://ik.imagekit.io/hs4gfzmpd/vm-high-resolution-logo-black-transparent.png?updatedAt=1703513209656';
  let str = `I am  a web developer from Cape Breton, Nova Scotia and currently living in New York. I enjoy building everything
  from small business sites to rich interactive web apps.`;

  function type_text(mode: string, duration: number) {
    let i = 0;
    let len = str.toString().length;
    let typing_fn = setInterval(() => {
      if (mode == 'writing') {
        if (typing_txt.current) typing_txt.current.innerHTML += str.toString().charAt(i);
        i++;
        if (i == str.length + 1) {
          clearInterval(typing_fn);
          type_text('clear', 20)
        }
      } else {
        let slice_elem = str.toString().slice(0, len)
        if (typing_txt.current) typing_txt.current.innerHTML = slice_elem;
        len--;
        if (typing_txt.current && typing_txt.current.innerHTML == '') {
          clearInterval(typing_fn);
          type_text('writing', 100)
        }
      }
    }, duration);
  }

  useEffect(() => {
    type_text('writing', 100)
  }, [])

  //toggle Mode
  const toggleBtn = React.useRef<HTMLLIElement>(null);
  const light = React.useRef<HTMLImageElement>(null);
  const banner_img = useRef<HTMLElement>(null);
  if (bgmode) {
    toggleBtn.current?.classList.add('active');
    light.current?.classList.add('active');
    setTimeout(() => {
      light.current?.classList.remove('active');
      setTimeout(() => {
        light.current?.classList.add('active');
      }, 300)
    }, 300);
    setTimeout(() => {
      light.current?.classList.remove('active');
      setTimeout(() => {
        light.current?.classList.add('active');
      }, 500)
    }, 800);
    banner_img.current?.classList.add('active');
  } else {
    toggleBtn.current?.classList.remove('active');
    light.current?.classList.remove('active');
    banner_img.current?.classList.remove('active');
  }

  //Sticky Header
  document.addEventListener('scroll',()=>{
    let imgSrc=header.current?.querySelector('img');
    if(window.scrollY){
      header.current?.classList.add('sticky');
      if(imgSrc) imgSrc.src=sticky_logo_url;
      setTimeout(() => {
        header.current?.classList.add('visible');
      }, 200);
    }else{
      header.current?.classList.remove('sticky');
      if(imgSrc) imgSrc.src=logo_image_url;
      setTimeout(() => {
        header.current?.classList.remove('visible');
      }, 200);
    }
  })
  return (
    <section className='banner-wrapper'>
      <section className="banner-bg-image" ref={banner_img}>
        <section className='banner-bg-tile'>
        <header className='header-container' ref={header}>
          <section className='header-title'><span><img src="https://ik.imagekit.io/hs4gfzmpd/vm-high-resolution-logo-transparent%20(1).png?updatedAt=1703513209656" alt="" height={40} width={60} /></span>
            <span className="logo-wrapper">
              <span className="logo-title">Vinoth Madhavan</span><br />
              <span className="logo-designation">Web Developer</span>
            </span>
          </section>
          <nav className='nav-wrapper'>
            <li className="nav-items">Home</li>
            <li className="nav-items">About</li>
            <li className="nav-items">Projects</li>
            <li className="nav-items">Contact</li>
            <li className="toggle-btn" onClick={() => setbgmode(mode => (!mode))} ref={toggleBtn}></li>
          </nav>
        </header>
        <main className="main-wrapper" data-aos='fade-up' data-aos-duration="2000">
          <section className="main-content-wrapper">
            <h3 className="banner-header">Websites done right.</h3>
            <p className="banner-para">
              <span className="typing-txt" ref={typing_txt}></span>
            </p>
            <section className="banner-btns">
              <button className="hire-me">Hire Me</button>
              <button className="contact">Contact </button>
            </section>
          </section>

          <section className="main-image-wrapper">
            <div className="main-image-container">
              <img src="https://ik.imagekit.io/hs4gfzmpd/lamp.png?updatedAt=1703504205795" alt="lamp" className='lamp' />
            </div>
            <div className="main-image-container">
              <img src="https://ik.imagekit.io/hs4gfzmpd/light.png?updatedAt=1703504205803" alt="light" className='light' ref={light} />
            </div>
          </section>
        </main>

      </section>
      </section>
    </section>
  )
}

export default Header;