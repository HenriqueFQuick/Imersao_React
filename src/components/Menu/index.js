import React from 'react'
import { Link } from 'react-router-dom'

//import ButtonLink from './components/ButtonLink'

import Button from '../Button'

import './Menu.css'
import Logo from '../../assets/img/Logo.png'

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </Link>


            <Button as={Link}  to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;