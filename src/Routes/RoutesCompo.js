import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Bollywood from '../Components/Bollywood'
import Hollywood from '../Components/Hollywood'
import Food from '../Components/Food'
import Technology from '../Components/Technology'
import Fitness from '../Components/Fitness'
import DynamicCompoHome from './DynamicCompoHome';
import DynamicCompoBolly from './DynamicCompoBolly';
import DynamicCompoHolly from './DynamicCompoHolly';
import DynamicCompoFitness from './DynamicCompoFitness';
import DynamicCompoTech from './DynamicCompoTech';
import DynamicCompoFood from './DynamicCompoFood';
import TocIcon from '@mui/icons-material/Toc';
import ClearIcon from '@mui/icons-material/Clear';
import "./Routes.css"
import { useState } from 'react';

function RoutesCompo() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
     setNavbarOpen(!navbarOpen);
  };
  return (
    <>
        <div className='compName'>
          <h1>
            <span className='verticalText'>The</span>
            <span>Siren</span>
          </h1>
          <button className="navbar-toggle" onClick={handleNavbar}>
            {navbarOpen ? <ClearIcon/> : <TocIcon/>}
          </button>
        </div>
        <BrowserRouter>
          <div className={`listBar ${navbarOpen ? 'show' : '' }`}>
            <ul className="navContainer">
              <li><NavLink className="anchorTag" to='/'>Home</NavLink></li>
              <li><NavLink className="anchorTag" to='/bollywood'>Bollywood</NavLink></li>
              <li><NavLink className="anchorTag" to='/hollywood'>Hollywood</NavLink></li>
              <li><NavLink className="anchorTag" to='/food'>Food</NavLink></li>
              <li><NavLink className="anchorTag" to='/technology'>Technology</NavLink></li>
              <li><NavLink className="anchorTag" to='/fitness'>Fitness</NavLink></li>
            </ul>
          </div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/bollywood' element={<Bollywood/>} />
                <Route path='/hollywood' element={<Hollywood/>} />
                <Route path='/food' element={<Food/>} />
                <Route path='/technology' element={<Technology/>} />
                <Route path='/fitness' element={<Fitness/>} />
                <Route path='/detailshome/:id' element={<DynamicCompoHome/>}/>
                <Route path='/detailsbollywood/:id' element={<DynamicCompoBolly/>}/>
                <Route path='/detailshollywood/:id' element={<DynamicCompoHolly/>}/>
                <Route path='/detailsfitness/:id' element={<DynamicCompoFitness/>}/>
                <Route path='/detailstech/:id' element={<DynamicCompoTech/>}/>
                <Route path='/detailsfood/:id' element={<DynamicCompoFood/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RoutesCompo;
