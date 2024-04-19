import React, { useState } from 'react'
import Html from "./sobre assets/html.png"
import Css from "./sobre assets/css.png"
import Java from "./sobre assets/java.png"
import Blue from "./sobre assets/react.png"
import Stiled from "./sobre assets/styled.png"
import Manu from "./sobre assets/manutencao.png"

export default function sobre() {

  return (
    <main className='mainsobre'>
      <h1 className='h1sobre'>Sobre mim</h1>
       <h2 className='h2sobre'>Meu nome é Bruno Silva de Oliveira, tenho 20 anos e sou Dev front end. Moro em Santa Teresa, Rio de Janeiro, cria do morro dos prazeres e desde o momento em que segurei um controle de vídeo game fiquei apaixonado por tecnologia. Calmo e cabeça fria sempre tento achar formar criativas de resolver problemas, e sou um ótimo improvisador me adapto a todo tipo de situação.</h2>
    
    <div>
<h1 className='habilidade'>Habilidades</h1>
<img className='imgsobre' src={Html} alt="Html" />
<img className='imgsobre' src={Css} alt="Css" />
<img className='imgsobre' src={Java} alt="Java" />
<img className='imgsobre' src={Blue} alt="React" />
<img className='imgsobre' src={Stiled} alt="Styled components" />
<img className='imgsobre' src={Manu} alt="Manutenção de Computadores" />
    </div>

    </main>


  )
}
