import React from 'react'
import Placeholder from "./assets/placeholder.jpg"
import Linkedin from "./assets/linkedin.png"
import Github from "./assets/git.png"
import Facebook from "./assets/facebook.png"



export default function Header() {
  return ( 
<header>
  <div className='divheader'>
    <img className='icone' src={Placeholder} alt="" />
    <h1 className='h1header'>Bruno Silva de Oliveira</h1>
    <h2 className='h2header'>Front-end Developer</h2>
  </div>

<div className='divlinks'>
  <a className='linkheader' href="https://www.linkedin.com/in/bruno-silva-55a1a8304/"><img className='imgheader' src={Linkedin} alt="Linkedin" /></a>
  <a className='linkheader' href="https://github.com/Bruno-ffwf"><img className='imgheader' src={Github} alt="Github" /></a>
  <a className='linkheader' href="https://www.facebook.com/profile.php?id=61559015575589"><img className='imgheader' src={Facebook} alt="Facebook" /></a>
</div>


</header>
  )
}
