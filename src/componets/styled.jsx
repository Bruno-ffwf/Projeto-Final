import styled, { createGlobalStyle } from 'styled-components' 


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //background-color:#839697;
    background-color: #4169E1;
}

.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 20px;
    background-color: #4169E1;
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
    align-items: center;
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


.linkheader{
    text-decoration: none;
    background: #4A5051;
}

.imgheader{
    width:  120px;
    height: 90px;
    padding-right: 30px;
    background: #4A5051;
}

.iniciomain{
    //ackground-color: #839697;
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

.iconeinicio{
    border: solid 3px black;
    border-radius: 400px;
    width: 300px;
    height: 300px;
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

.imgprojetos{
    width: 258px;
    height: 215px;
    padding: 10px;
    border-radius: 20px;
    background: darkgray;
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

.imgselfcare{
    width: 160px;
    height: 100px;
    padding-top: 30px;
    background: darkgray;
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

`