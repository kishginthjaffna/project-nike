import React from 'react';
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo}
                     alt="logo"
                     width={100}
                     heigth={40}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link) => {
                    return <li key={link.label}><a href={link.href} className="text-base text-slate-gray font-medium">{link.label}</a></li>
                })}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger}
                     alt="hamburger"
                     width={25}
                     heigth={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
