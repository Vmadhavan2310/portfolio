import React from 'react'
import '../Styles/Header.css'
function Header() {
  let str=`I am  a web developer from Cape Breton, Nova Scotia and currently living in New York. I enjoy building everything
  from small business sites to rich interactive web apps.`;
  const typing_txt=React.useRef<HTMLElement>(null);
  function type_text(){
    let i=0;
    let timing=setInterval(() => {
     if(typing_txt.current) typing_txt.current.innerHTML+=str.toString().charAt(i);
      i++;
      if(i==str.length+1){
          clearInterval(timing);
          let len=str.toString().length;
          let clear_text=setInterval(()=>{
            let slice_elem=str.toString().slice(0,len)
            if(typing_txt.current) typing_txt.current.innerHTML=slice_elem;
            len--;
              if(typing_txt.current && typing_txt.current.innerHTML == ''){
                type_text();
                clearInterval(clear_text)
              }
          },20)
      }
  }, 50);
  }
  type_text()
  return (
    <section className='banner-wrapper'> 
        <section className="banner-bg-image">
        <header className='header-container'>
            <section className='header-title'><span>Vinoth Madhavan</span></section>
            <nav className='nav-wrapper'>
                <li className="nav-items">Home</li>
                <li className="nav-items">Contact</li>
                <li className="nav-items">Projects</li>
                <li className="nav-items">Contact US</li>
            </nav>
        </header>
        <main className="main-wrapper">
          <h3 className="banner-header">Websites done right.</h3>
          <p className="banner-para">
          <span className="typing-txt" ref={typing_txt}></span>
          </p>
        </main>
        </section>
    </section>
  )
}

export default Header;