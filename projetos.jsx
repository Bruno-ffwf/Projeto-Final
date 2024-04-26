import React from 'react'
import Wiki from "./projeto assts/wiki.png"
import Selfcare from "./projeto assts/selfcare.png"
import Mc from "./projeto assts/mc.png"
import Carousel from 'react-elastic-carousel'

export default function projetos() {
  return (
<main className='mainprojetos'>
<h1 className='h1projetos'>Projetos</h1>

<Carousel>
<div className='divprojetos'>
  <a className='linkprojeotos' href="https://7hkjr2.csb.app/"><img className='imgprojetos' src={Wiki} alt="Wiki" /></a>
  <figure className='figprojetos'>Mini Wiki feita em HTML</figure>
</div>

<div className='divprojetos'>
  <a className='linkprojeotos' href="https://bruno-ffwf.github.io/Desafio-Final/"><img className='imgselfcare' src={Selfcare} alt="Selfcare" /></a>
  <figure className='figprojetos'>Site Selfcare feito em HTML e CSS.</figure>
</div>

<div className='divprojetos'>
  <a className='linkprojeotos' href="https://mac-rosy.vercel.app/"><img className='imgprojetos' src={Mc} alt="Site McDonald's" /></a>
  <figure className='figprojetos'>Site McDonald's feito em React.</figure>
</div>
</Carousel>

</main>
  )
}
