import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
import Gitlogo from '../../assets/github-mark-white.svg';
import { Menu, X } from 'lucide-react';
import '../../App.css';

const Navigation = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-white rounded-b-xl sticky top-0 z-10'>
            <div className="lg:max-w-11/12 mx-auto flex justify-between items-center p-1">
                <div className="md:max-w-30 flex items-center gap-2 logo">
                    <button className="lg:hidden cursor-pointer transition-all duration-400 linear" onClick={() => setOpen(!open)}>
                        {
                            open ? <X className="text-black"></X> : <Menu className="text-black"></Menu>
                        }
                    </button>
                    <div className={`small-menu absolute h-25
                        ${open ? "w-22" : "w-1"}
                        rounded-r-xl 
                        top-13 
                        left-0 
                        bg-white 
                        overflow-hidden 
                        lg:hidden 
                        flex flex-col 
                        items-left 
                        transition-all 
                        duration-400 
                        linear
                        shadow-2xl outline-0`}>
                        <NavLink className={`text-black ml-2 p-1 hover:bg-purple-300 mt-1 font-semibold rounded  nav ${open ? "opacity-100": "opacity-0"}`} to={'/home'}>Home</NavLink>
                        <NavLink className={`text-black ml-2 p-1 hover:bg-purple-300 mt-1 font-semibold rounded  nav ${open ? "opacity-100": "opacity-0"}`} to={'/apps'}>Apps</NavLink>
                        <NavLink className={`text-black ml-2 p-1 hover:bg-purple-300 mt-1 font-semibold rounded  nav ${open ? "opacity-100": "opacity-0"}`} to={'/installation'}>Installation</NavLink>
                    </div>
                    <img src={Logo} alt="logo" className="w-10 h-10"/>
                    <h1 className="uppercase font-bold text-purple-500">hero.io</h1>
                </div>
                <div className="nav-menu hidden lg:block">
                    <NavLink className="text-black mr-10 font-bold p-2 text-xl rounded nav" to={'/home'}>Home</NavLink>
                    <NavLink className="text-black mr-10 font-bold p-2 text-xl rounded nav" to={'/apps'}>Apps</NavLink>
                    <NavLink className="text-black mr-10 font-bold p-2 text-xl rounded nav" to={'/installation'}>Installation</NavLink>
                </div>
                <div>
                    <button className="flex items-center cursor-pointer bg-linear-to-br from-purple-800 to-purple-400 rounded">
                        <a href="https://github.com/fahim-shareear" className="text-white font-bold text-[13px] flex items-center gap-2 p-2" target="_blank">
                        <span><img src={Gitlogo} alt="gitlogo" className="w-3.75 h-3.75"/></span>Contribute</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;