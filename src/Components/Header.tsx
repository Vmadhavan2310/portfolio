import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Header.css'
export type AOSProps={
  AOS_timing:number
}
function Header(props:AOSProps) {
  const [bgmode, setbgmode] = useState(false);
  const typing_txt = React.useRef<HTMLElement>(null); //Use ref for typing text Element access
  const header = React.useRef<HTMLElement | null>(null); //Use ref for Header Element access
  const logo_image_url = 'https://ik.imagekit.io/hs4gfzmpd/vm-high-resolution-logo-transparent%20(1).png?updatedAt=1703513209656';
  const sticky_logo_url = 'https://ik.imagekit.io/hs4gfzmpd/vm-high-resolution-logo-black-transparent.png?updatedAt=1703513209656';
  let str = `A Passionate Web Developer, turning ideas into real life Products. I thrive on the intricate dance between logic and creativity.`;

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
  document.addEventListener('scroll', () => {
    let imgSrc = header.current?.querySelector('img');
    if (window.scrollY) {
      header.current?.classList.add('sticky');
      if (imgSrc) imgSrc.src = sticky_logo_url;
      setTimeout(() => {
        header.current?.classList.add('visible');
        header.current?.parentElement?.querySelector('.down-arrow')?.classList.remove('visible');
      }, 200);
    } else {
      header.current?.classList.remove('sticky');
      if (imgSrc) imgSrc.src = logo_image_url;
      setTimeout(() => {
        header.current?.classList.remove('visible');
        header.current?.parentElement?.querySelector('.down-arrow')?.classList.add('visible');
      }, 200);
    }
  })

  //toggle menu bar
  const toggleMenu = (e: React.MouseEvent) => {
    const body = document.querySelector('body');
    body?.classList.toggle('open');
    body?.classList.toggle('no-scroll');
    header.current?.classList.contains('sticky') && body?.classList.contains('open')?body?.classList.add('menu-open'):body?.classList.remove('menu-open');
  }

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
              <div className='mblNav-toggle-btn' onClick={(e) => toggleMenu(e)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            {/* Mobile Navigation */}
            <nav className='mbl-nav-list'>
              <li className="nav-items">Home</li>
              <li className="nav-items">About</li>
              <li className="nav-items">Projects</li>
              <li className="nav-items">Contact</li>
            </nav>
          </header>
          <main className="main-wrapper">
            <section className="main-content-wrapper" data-aos='fade-up' data-aos-duration={props.AOS_timing}>
              <h3 className="banner-header">React JS Developer</h3>
              <p className="banner-para">
                {/* <span className="typing-txt" ref={typing_txt}>A Passionate Web Developer, turning ideas into real life Products. Oppurtunities don't happen until we create them!!</span> */}
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
          <div className="down-arrow bounce visible">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25" width="25"><path d="M12.5 18 2 7.707 2.707 7l9.793 9.586L22.293 7l.707.707L12.5 18z" stroke='#fff'></path></svg>
          </div>
        </section>
      </section>
      <div className="separator">
      </div>
    </section>
  )
}

export default Header;