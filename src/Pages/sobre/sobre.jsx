import Html from "./sobre assets/html.png"
import Css from "./sobre assets/css.png"
import Java from "./sobre assets/java.png"
import Blue from "./sobre assets/react.png"
import Stiled from "./sobre assets/styled.png"
import Manu from "./sobre assets/manutencao.png"
import React, { useState } from 'react';

export default function sobre() {

  const [hoverIndex, setHoverIndex] = useState(null);

  const habilidades = [
    { src: Html, alt: "Html" },
    { src: Css, alt: "Css" },
    { src: Java, alt: "Java" },
    { src: Blue, alt: "React" },
    { src: Stiled, alt: "Styled components" },
    { src: Manu, alt: "Manutenção de Computadores" }
  ];

  return (
    <main className='mainsobre'>
      <h1 className='h1sobre'>Sobre mim</h1>
       <h2 className='h2sobre'>Meu nome é Bruno Silva de Oliveira, tenho 20 anos e sou Dev front end. Moro em Santa Teresa, Rio de Janeiro, cria do morro dos prazeres e desde o momento em que segurei um controle de vídeo game fiquei apaixonado por tecnologia. Calmo e cabeça fria sempre tento achar formar criativas de resolver problemas, e sou um ótimo improvisador me adapto a todo tipo de situação.</h2>

       <h1 className='habilidade'>Habilidades</h1>

       <div className="divsobre">
        {habilidades.map((habilidade, index) => (
          <div
            className="divsobre"
            key={habilidade.alt}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{ position: 'relative', }}
          >
            <img className="imgsobre" src={habilidade.src} alt={habilidade.alt} />
            {hoverIndex === index && (
              <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
                {habilidade.alt}
              </div>
            )}
          </div>
        ))}
      </div>

    </main>


  )
}
