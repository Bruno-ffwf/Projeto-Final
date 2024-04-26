import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Inicio from "./Pages/inicio/inicio"
import Projetos from "./Pages/projetos/projetos"
import Sobre from "./Pages/sobre/sobre"
import Header from './componets/Header'
import * as S from './componets/styled'


export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <BrowserRouter>
    <nav className='nav'>
      <Link className='link' to="/">Inicio</Link>
      <Link className='link' to="/Sobre">Sobre Mim</Link>
      <Link className='link' to="/Projeto">Projetos</Link>
  </nav>
    <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Projeto' element={<Projetos/>}/>
    <Route path='/Sobre' element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
