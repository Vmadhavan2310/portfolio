import React from 'react'
import '../Styles/Header.css'
function Header() {
  let str=`I am  a web developer from Cape Breton, Nova Scotia and currently living in New York. I enjoy building everything
  from small business sites to rich interactive web apps.`;
  const typing_txt=React.useRef<HTMLElement>(null);
  function type_text(mode:string,duration:number){
    let i=0;
    let len=str.toString().length;
    let typing_fn=setInterval(() => {
    if(mode == 'writing'){
       if(typing_txt.current) typing_txt.current.innerHTML+=str.toString().charAt(i);
        i++;
        if(i==str.length+1){
          clearInterval(typing_fn);
          type_text('clear',20)
      }
    }else{
      let slice_elem=str.toString().slice(0,len)
      if(typing_txt.current) typing_txt.current.innerHTML=slice_elem;
      len--;
        if(typing_txt.current && typing_txt.current.innerHTML == ''){
          clearInterval(typing_fn);
          type_text('writing',50)
        }
    }
  }, duration);
  }
  type_text('writing',50)
  return (
    <section className='banner-wrapper'> 
        <section className="banner-bg-image">
        <header className='header-container'>
            <section className='header-title'><span><img src="https://ik.imagekit.io/hs4gfzmpd/vinoth-madhavan-high-resolution-logo-transparent.png?updatedAt=1703439377994" alt="" height={40} width={40}/></span>
            <span className="logo-wrapper">
            <span className="logo-title">Vinoth Madhavan</span><br/>
            <span className="logo-designation">Web Developer</span>
            </span>
            </section>
            <nav className='nav-wrapper'>
                <li className="nav-items">Home</li>
                <li className="nav-items">Contact</li>
                <li className="nav-items">Projects</li>
                <li className="nav-items">Contact US</li>
            </nav>
        </header>
        <main className="main-wrapper" data-aos='fade-up' data-aos-duration="2000">
          <h3 className="banner-header">Websites done right.</h3>
          <p className="banner-para">
          <span className="typing-txt" ref={typing_txt}></span>
          </p>
          <section className="banner-btns">
          <button className="hire-me">Hire Me</button>
          <button className="contact">Contact </button>
        </section>
        </main>
       
        </section>

    </section>
  )
}

export default Header;