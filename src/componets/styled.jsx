import styled, { createGlobalStyle } from 'styled-components' 


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #4169E1;
}

.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 20px;
}

@media (max-width: 480px) {
    .nav{
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
    }
}

.link{
    font-size: 35px;
    text-decoration: none;
    border: solid black;
    background-image: url(https://w0.peakpx.com/wallpaper/591/889/HD-wallpaper-white-aesthetic-lines-background-white-aesthetic-thumbnail.jpg);
    background-position: center;
    color: black;
    border-radius: 10px;
    width: 190px;
    text-align: center;
    transition: 0.5s;
}

.link:hover{
    transform: scale(1.1); 
}

header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #4A5051; 
}

@media (max-width: 480px) {
    header{
        flex-direction: column;
        align-items: center;
    }
}

.divheader{
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
    background: #4A5051;
}

.icone{
    height: 200px;
    border: solid 5px darkgray;
    border-radius: 10px;
}


.h1header{
    color: white;
    background: #4A5051;
}

.h2header{
    color: white;
    background: #4A5051;
}

.divlinks{
    padding-top: 110px;
    padding-right: 30px;
    background: #4A5051;
}

@media (max-width: 480px) {
    .divlinks{
        padding-top: 80px;
        padding-right: 15px;
    }
}


.linkheader{
    text-decoration: none;
    background: #4A5051;
}

.imgheader{
    width:  120px;
    height: 90px;
    padding-right: 30px;
    background: #4A5051;
    position: relative;
    animation: pulsar 1s ease-in-out infinite;
}

@media (max-width: 480px) {
    .imgheader{
        width: 80px;
        height: 60px;
        padding-right: 10px;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 10px;
        position: relative;
        animation: pulsar 1s ease-in-out infinite;
        top: 50%;
        transform: translateX(19%);
    }
}

.iniciomain{
    align-items: center;
    text-align: center;
    padding: 50px;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    50% { border-color: transparent; }
}

.h1inicio{
    padding-bottom: 30px;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(30) 1 forwards;
}

.h1inicio::after{
    animation: blink 1s infinite;
}

@media (max-width: 708px) {
    .h1inicio{
        font-size: 13px;
        width: 100%;
    }
}

.iconeinicio{
    border: solid 3px black;
    border-radius: 50%;
    width: 300px;
    height: 300px;
}

@keyframes pulsar {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1); /* Aumenta o tamanho em 10% */
    }
    100% {
        transform: scale(1);
    }
}

@media (max-width: 480px) {
    .iconeinicio{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-width: 1px;
    }
}

.mainprojetos{
    text-align: center;
    padding: 50px;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


.h1projetos{
    padding-bottom: 30px;
    animation: 1s ease-out 0s 1 slideInFromLeft;
}

.divprojetos{
    width: 286px;
    height: 320px;
    border-radius: 22px;
    background: darkgray;
    border: solid 3px black;
}

@media (max-width: 480px) {
    .divprojetos{
        width: 150px;
        height: 180px;
        border-radius: 12px;
        border-width: 1pxlevado ;
    }
}

.imgprojetos{
    width: 258px;
    height: 215px;
    padding: 10px;
    border-radius: 20px;
    background: darkgray;
}

@media (max-width: 480px) {
    .imgprojetos{
        width: 100px;
        height: 85px;
        padding: 5px;
        border-radius: 10px;
    }
}

.linkprojeotos{
    text-decoration: none;
    background: darkgray;
}

.figprojetos{
    padding-top: 20px;
    font-size: 20px;
    height: 20px;
    background: darkgray;
}

@media (max-width: 480px) {
    .figprojetos{
        font-size: 13px;
        width: 100%;
    }
}

.imgselfcare{
    width: 160px;
    height: 100px;
    padding-top: 30px;
    background: darkgray;
}

@media (max-width: 480px) {
    .imgselfcare{
        width: 100px;
        height: 70px;
        padding: 5px;     
    }
}

.mainsobre{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.h1sobre{
    font-size: 50px;
    padding-top: 30px;
}

.h2sobre{
    padding-top: 30px;
    font-size: 30px;
    width: 700px;
}

@media (max-width: 768px) {
    .h2sobre{
        font-size: 24px;
        width: 80%;
    }
}

.habilidade{
    font-size: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
}

.imgsobre{
    width: 103px;
    height: 100px;
    padding: 10px;
}

.divsobre{
    display: flex;
    flex-direction: row;
}

@media (max-width: 600px) {
  .divsobre {
    flex-direction: column;
  }
}

`