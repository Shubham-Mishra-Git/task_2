import React from 'react';
import home from '../home.png';
import light from '../brightness.png';
import dark from '../night.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {

  const navi= useNavigate();

  const list=()=>{
    navi("/");
  }
  return (
    <div  style={{backgroundColor : (props.mode==='light')?' #7B1FA2':'black'}}  className=' text-white flex  md:h-16 justify-between h-12 items-center font-bold lg:px-20 md:px-14 sm:px-10 px-4'>
      <div onClick={()=>list()} className=' cursor-pointer h-10 w-10'>
        <img src={home} alt="Home" title='Home' />
      </div>
      <div onClick={()=>props.togglemode()} className=' cursor-pointer h-10 w-10'>
        <img src={(props.mode==='light') ? light : dark } alt="" title='Change Mode' />
      </div>
    </div>
  );
}
