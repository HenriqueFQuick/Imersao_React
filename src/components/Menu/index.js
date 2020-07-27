import React from 'react'

//import ButtonLink from './components/ButtonLink'

import Button from '../Button'

import './Menu.css'
import Logo from '../../assets/img/Logo.png'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </a>


            <Button as="a"  href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;